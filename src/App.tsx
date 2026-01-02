import { useState, useEffect } from "react";
import { Key, Copy, Check, RefreshCw, Trash2, ShieldAlert, Terminal, LogOut, Loader2 } from "lucide-react";

// --- CONFIGURATION ---
const CLIENT_ID = "1456659383789293578";
const REDIRECT_URI = "https://m3rcena.github.io/WekyDashboard/";

// Construct the OAuth URL
const DISCORD_AUTH_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
	REDIRECT_URI
)}&scope=identify+guilds+email`;

interface User {
	id: string;
	username: string;
	avatar: string;
}

interface ApiKeyData {
	key: string;
	lastUsed: string | null;
	createdAt: string;
}

function App() {
	const [user, setUser] = useState<User | null>(null);
	const [apiKey, setApiKey] = useState<ApiKeyData | null>(null);
	const [loading, setLoading] = useState(false);
	const [authLoading, setAuthLoading] = useState(false); // Added checking state
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");

			if (code) {
				setAuthLoading(true); // Show loading spinner

				// 1. LOG THE CODE (As requested)
				console.log("SUCCESS! Discord returned this code:", code);

				// 2. SIMULATE API CALL (Fixes the error)
				// We wait 1 second to fake talking to a backend.
				// This makes the setState 'asynchronous' so React is happy.
				setTimeout(() => {
					setUser({
						id: "123456789",
						username: "TestUser",
						avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
					});

					// Clean the URL
					window.history.replaceState({}, document.title, window.location.pathname);
					setAuthLoading(false);
				}, 1000);
			}
		};

		checkAuth();
	}, []);

	const handleLogin = () => {
		window.location.href = DISCORD_AUTH_URL;
	};

	const handleLogout = () => {
		setUser(null);
		setApiKey(null);
	};

	const generateKey = async () => {
		setLoading(true);
		setTimeout(() => {
			setApiKey({
				key: "sk_live_" + Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
				createdAt: new Date().toLocaleDateString(),
				lastUsed: "Never",
			});
			setLoading(false);
		}, 1000);
	};

	const revokeKey = async () => {
		if (!confirm("Are you sure? This will break your bot.")) return;
		setApiKey(null);
	};

	const copyToClipboard = () => {
		if (apiKey) {
			navigator.clipboard.writeText(apiKey.key);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}
	};

	// --- LOADING SCREEN ---
	if (authLoading) {
		return (
			<div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400">
				<Loader2 className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
				<p>Verifying Discord Code...</p>
			</div>
		);
	}

	// --- LOGIN SCREEN ---
	if (!user) {
		return (
			<div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
				<div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
					<div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
						<Key className="w-8 h-8 text-indigo-400" />
					</div>
					<h1 className="text-2xl font-bold text-white mb-2">Bot Dashboard</h1>
					<p className="text-slate-400 mb-8">Manage your API keys securely.</p>
					<button
						onClick={handleLogin}
						className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
					>
						<span>Login with Discord</span>
					</button>
				</div>
			</div>
		);
	}

	// --- DASHBOARD ---
	return (
		<div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
			<nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
				<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Terminal className="w-6 h-6 text-indigo-400" />
						<span className="font-bold text-white tracking-tight">BotManager</span>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-3 bg-slate-800/50 pl-3 pr-1 py-1 rounded-full border border-slate-700/50">
							<span className="text-sm font-medium text-slate-300">{user.username}</span>
							<img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full bg-slate-700" />
						</div>
						<button onClick={handleLogout} className="text-slate-400 hover:text-white transition-colors" title="Logout">
							<LogOut className="w-5 h-5" />
						</button>
					</div>
				</div>
			</nav>

			<main className="max-w-3xl mx-auto px-6 py-12">
				<header className="mb-10">
					<h2 className="text-3xl font-bold text-white mb-2">API Configuration</h2>
					<p className="text-slate-400">Manage the access keys for your bot instance.</p>
				</header>

				{!apiKey ? (
					<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center shadow-lg">
						<div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-slate-900">
							<Key className="w-8 h-8 text-slate-500" />
						</div>
						<h3 className="text-xl font-semibold text-white mb-2">No Active Key</h3>
						<p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
							You need an API key to connect your bot to the network. Generate one below to get started.
						</p>
						<button
							onClick={generateKey}
							disabled={loading}
							className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
						>
							{loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Key className="w-4 h-4" />}
							Generate Secret Key
						</button>
					</div>
				) : (
					<div className="space-y-6">
						<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
							<div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
								<div>
									<h3 className="text-lg font-medium text-white flex items-center gap-2">
										<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
										Active Key
									</h3>
									<p className="text-xs text-slate-500 mt-1">Created on {apiKey.createdAt}</p>
								</div>
								<button
									onClick={revokeKey}
									className="text-red-400 hover:text-red-300 hover:bg-red-950/30 px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5"
								>
									<Trash2 className="w-4 h-4" /> Revoke
								</button>
							</div>

							<div className="p-6 bg-slate-950">
								<label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
									Your Access Token
								</label>
								<div className="flex items-center gap-2">
									<div className="relative flex-1 group">
										<code className="block w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 font-mono text-indigo-400 text-sm break-all">
											{apiKey.key}
										</code>
										<div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
									</div>
									<button
										onClick={copyToClipboard}
										className="bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-300 p-3 rounded-lg transition-colors border border-slate-700 shadow-sm"
										title="Copy to clipboard"
									>
										{copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
									</button>
								</div>

								<div className="mt-6 flex gap-3 p-4 bg-amber-500/5 border border-amber-500/10 rounded-lg">
									<ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
									<div className="text-sm text-amber-200/70 leading-relaxed">
										<strong className="text-amber-500 block mb-1">Security Warning</strong>
										This key grants full access to your bot configuration. Never share it publicly. If you suspect a
										leak, revoke it immediately.
									</div>
								</div>
							</div>
						</div>

						<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
							<h3 className="text-lg font-medium text-white mb-4">Integration Guide</h3>
							<p className="text-slate-400 text-sm mb-4">
								Paste this line into your bot's{" "}
								<code className="text-indigo-300 bg-indigo-950/30 px-1 py-0.5 rounded">.env</code> file:
							</p>
							<div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 border border-slate-800 flex items-center justify-between group">
								<span>MY_PACKAGE_API_KEY={apiKey.key}</span>
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
