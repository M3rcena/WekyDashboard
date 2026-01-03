import React, { useEffect, useState } from "react";
import { Plus, Trash2, Copy, Check, Key, Bot, Edit2, Save, X, RefreshCw } from "lucide-react";
import { apiService } from "../services/apiKeyService";

import type { APIKeyEntry } from "../types/api";

interface UiToken extends APIKeyEntry {
	usage?: number; // Optional until backend supports it
	isLoading?: boolean; // For individual row loading states
}

export default function AccessTokens() {
	const [tokens, setTokens] = useState<UiToken[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [copiedId, setCopiedId] = useState<string | null>(null);

	const OWNER_ID = "682983233851228161";

	// --- MODAL STATE ---
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newBotId, setNewBotId] = useState("");
	const [newName, setNewName] = useState("");
	const [isCreating, setIsCreating] = useState(false);

	// --- EDITING STATE ---
	const [editingBotId, setEditingBotId] = useState<string | null>(null);
	const [editNameValue, setEditNameValue] = useState("");

	// --- ACTIONS ---

	useEffect(() => {
		loadKeys();
	}, []);

	const loadKeys = async () => {
		try {
			setIsLoading(true);
			const data = await apiService.getAllKeys(OWNER_ID);

			// Transform API data to UI data (adding mock usage since API doesn't have it yet)

			console.log(data);
			const uiData = data.map((k) => ({ ...k }));

			console.log(uiData);
			setTokens(uiData);
		} catch (error) {
			console.error("Failed to load tokens", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleCreateToken = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!newBotId || !newName) return;

		try {
			setIsCreating(true);

			const randomKey =
				"wk_live_" +
				Array.from(crypto.getRandomValues(new Uint8Array(20)))
					.map((b) => b.toString(16).padStart(2, "0"))
					.join("");

			await apiService.createKey({
				ownerID: OWNER_ID,
				botID: newBotId,
				apiName: newName,
				apiKey: randomKey,
			});

			await loadKeys();
			setIsModalOpen(false);
			setNewBotId("");
			setNewName("");
		} catch {
			alert("Failed to create token: ");
		} finally {
			setIsCreating(false);
		}
	};

	const handleDelete = async (botID: string) => {
		if (!confirm("Are you sure you want to revoke this token? This cannot be undone.")) return;

		try {
			setTokens((prev) => prev.filter((t) => t.botID !== botID));
			await apiService.deleteKey(OWNER_ID, botID);
		} catch {
			alert("Failed to delete token.");
			loadKeys();
		}
	};

	const startEditing = (token: UiToken) => {
		setEditingBotId(token.botID);
		setEditNameValue(token.apiKeyName);
	};

	const saveEdit = async (botID: string) => {
		try {
			setTokens((prev) => prev.map((t) => (t.botID === botID ? { ...t, apiKeyName: editNameValue } : t)));
			setEditingBotId(null);

			await apiService.updateKey({
				ownerID: OWNER_ID,
				botID: botID,
				newApiName: editNameValue,
			});
		} catch (err) {
			console.error(err);
			loadKeys();
		}
	};

	const handleRefreshToken = async (botID: string) => {
		if (!confirm("Are you sure? The old key will stop working immediately.")) return;

		try {
			const newKey =
				"wk_live_" +
				Array.from(crypto.getRandomValues(new Uint8Array(20)))
					.map((b) => b.toString(16).padStart(2, "0"))
					.join("");

			setTokens((prev) => prev.map((t) => (t.botID === botID ? { ...t, apiKey: newKey, isLoading: true } : t)));

			await apiService.updateKey({
				ownerID: OWNER_ID,
				botID: botID,
				newApiKey: newKey,
			});
		} catch {
			alert("Failed to refresh token.");
		} finally {
			// Remove loading state
			setTokens((prev) => prev.map((t) => (t.botID === botID ? { ...t, isLoading: false } : t)));
		}
	};

	const copyToClipboard = (text: string, id: string) => {
		navigator.clipboard.writeText(text);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 2000);
	};

	return (
		<div className="min-h-screen bg-[#09090b] text-white pt-32 px-6 flex flex-col items-center">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="w-full max-w-5xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
					<div>
						<h1 className="text-3xl md:text-4xl font-extrabold mb-2">Access Tokens</h1>
						<p className="text-gray-400">Manage your API keys and link them to your Discord Bots.</p>
					</div>
					<button
						onClick={() => setIsModalOpen(true)}
						className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-xl font-bold transition shadow-lg shadow-white/5"
					>
						<Plus className="w-4 h-4" /> Generate New
					</button>
				</div>

				{/* Tokens Table */}
				<div className="bg-[#121214] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
					<table className="w-full text-left border-collapse">
						<thead className="bg-black/20 text-gray-400 text-xs uppercase tracking-wider border-b border-white/5">
							<tr>
								<th className="px-6 py-5 font-semibold w-1/3">Bot & Name</th>
								<th className="px-6 py-5 font-semibold">Token Key</th>
								<th className="px-6 py-5 font-semibold">Usage</th>
								<th className="px-6 py-5 text-right font-semibold">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/5">
							{isLoading ? (
								<tr>
									<td colSpan={4} className="p-12 text-center text-gray-500 animate-pulse">
										Loading tokens...
									</td>
								</tr>
							) : tokens.length === 0 ? (
								<tr>
									<td colSpan={4} className="p-12 text-center text-gray-500">
										<Key className="w-12 h-12 mx-auto mb-3 opacity-20" />
										No access tokens found. Generate one to get started.
									</td>
								</tr>
							) : (
								tokens.map((token) => (
									<tr key={token.botID} className="hover:bg-white/5 transition group">
										{/* Name & Bot ID Column */}
										<td className="px-6 py-5">
											<div className="flex flex-col gap-1">
												{editingBotId === token.botID ? (
													<div className="flex items-center gap-2">
														<input
															type="text"
															value={editNameValue}
															onChange={(e) => setEditNameValue(e.target.value)}
															className="bg-black/50 border border-white/20 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-purple-500"
															autoFocus
														/>
														<button
															onClick={() => saveEdit(token.botID)}
															className="text-green-400 hover:text-green-300"
														>
															<Save className="w-4 h-4" />
														</button>
														<button onClick={() => setEditingBotId(null)} className="text-red-400 hover:text-red-300">
															<X className="w-4 h-4" />
														</button>
													</div>
												) : (
													<div className="flex items-center gap-2 group/edit">
														<span className="font-medium text-white">{token.apiKeyName}</span>
														<button
															onClick={() => startEditing(token)}
															className="text-gray-600 hover:text-white opacity-0 group-hover/edit:opacity-100 transition"
														>
															<Edit2 className="w-3 h-3" />
														</button>
													</div>
												)}

												<div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono bg-white/5 w-fit px-1.5 py-0.5 rounded">
													<Bot className="w-3 h-3" />
													ID: {token.botID}
												</div>
											</div>
										</td>

										{/* Token Key Column */}
										<td className="px-6 py-5 font-mono text-gray-400 text-sm">
											<div className="flex items-center gap-3">
												<span
													className={`bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg truncate max-w-48 transition-colors ${
														token.isLoading ? "text-yellow-500" : ""
													}`}
												>
													{token.isLoading ? "Regenerating..." : token.apiKey}
												</span>

												{/* Copy Button */}
												<button
													onClick={() => copyToClipboard(token.apiKey, token.botID)}
													className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
													title="Copy to clipboard"
												>
													{copiedId === token.botID ? (
														<Check className="w-4 h-4 text-green-400" />
													) : (
														<Copy className="w-4 h-4" />
													)}
												</button>

												{/* Refresh Token Button */}
												<button
													onClick={() => handleRefreshToken(token.botID)}
													disabled={!!token.isLoading}
													className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-yellow-400 transition disabled:opacity-50"
													title="Rotate Key (Invalidates old key)"
												>
													<RefreshCw className={`w-4 h-4 ${token.isLoading ? "animate-spin" : ""}`} />
												</button>
											</div>
										</td>

										{/* Usage Column */}
										<td className="px-6 py-5">
											<div className="flex items-center gap-2">
												<div
													className={`w-2 h-2 rounded-full ${
														token.usage && token.usage > 0 ? "bg-green-500 animate-pulse" : "bg-gray-600"
													}`}
												></div>
												<span className="text-gray-300 text-sm font-medium">
													{(token.usage || 0).toLocaleString()} reqs
												</span>
											</div>
										</td>

										{/* Actions Column */}
										<td className="px-6 py-5 text-right">
											<button
												onClick={() => handleDelete(token.botID)}
												className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
												title="Revoke Token"
											>
												<Trash2 className="w-4 h-4" />
											</button>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>

			{/* CREATE TOKEN MODAL */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
					<div className="bg-[#18181b] border border-white/10 w-full max-w-md p-6 rounded-2xl shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
						<h2 className="text-xl font-bold mb-4 flex items-center gap-2">
							<Key className="w-5 h-5 text-purple-500" /> Generate New Token
						</h2>

						<form onSubmit={handleCreateToken} className="space-y-4">
							<div>
								<label className="block text-sm text-gray-400 mb-1">Token Name</label>
								<input
									type="text"
									required
									placeholder="e.g. Production Bot"
									value={newName}
									onChange={(e) => setNewName(e.target.value)}
									className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition"
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-400 mb-1">Discord Bot ID</label>
								<input
									type="text"
									required
									placeholder="e.g. 98409238402..."
									value={newBotId}
									onChange={(e) => setNewBotId(e.target.value)}
									className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-purple-500 transition"
								/>
								<p className="text-xs text-gray-500 mt-1">The Discord Client ID this token will be linked to.</p>
							</div>

							<div className="flex gap-3 mt-6">
								<button
									type="button"
									onClick={() => setIsModalOpen(false)}
									disabled={isCreating}
									className="flex-1 bg-white/5 hover:bg-white/10 text-white font-medium py-2 rounded-xl transition disabled:opacity-50"
								>
									Cancel
								</button>
								<button
									type="submit"
									disabled={isCreating}
									className="flex-1 bg-white text-black hover:bg-gray-200 font-bold py-2 rounded-xl transition disabled:opacity-50 flex justify-center items-center gap-2"
								>
									{isCreating ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Create Token"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
