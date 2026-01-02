import { useState, useEffect } from "react";
import { Terminal, Key, ShieldCheck, Copy, Check, LogOut, Cpu, Zap, Loader2 } from "lucide-react";

// --- CONFIGURATION ---
const CLIENT_ID = "1456659383789293578";
const REDIRECT_URI = "https://m3rcena.github.io/WekyDashboard/";

// --- TYPES ---
interface UserData {
	id: string;
	username: string;
	email: string;
	avatar: string;
}

export default function App() {
	const [user, setUser] = useState<UserData | null>(null);
	const [apiKey, setApiKey] = useState<string | null>(null);
	const [copied, setCopied] = useState(false);
	const [isPopup, setIsPopup] = useState(false);

	useEffect(() => {
		// ---------------------------------------------------------
		// 1. POPUP LOGIC (Handle the Redirect)
		// ---------------------------------------------------------
		// implicit grant returns data in the HASH (#), not query (?)
		const fragment = new URLSearchParams(window.location.hash.slice(1));
		const accessToken = fragment.get("access_token");
		const tokenType = fragment.get("token_type");

		if (accessToken) {
			if (window.opener) {
				setIsPopup(true);
				// Send the real token back to the main window
				window.opener.postMessage(
					{ type: "DISCORD_AUTH_SUCCESS", token: accessToken, tokenType },
					window.location.origin
				);
				setTimeout(() => window.close(), 100);
				return;
			}
		}

		// ---------------------------------------------------------
		// 2. MAIN WINDOW LOGIC (Listen for the Token)
		// ---------------------------------------------------------
		const handleMessage = (event: MessageEvent) => {
			if (event.origin !== window.location.origin) return;

			if (event.data?.type === "DISCORD_AUTH_SUCCESS") {
				const { token, tokenType } = event.data;
				fetchDiscordUser(token, tokenType);
			}
		};

		window.addEventListener("message", handleMessage);
		return () => window.removeEventListener("message", handleMessage);
	}, []);

	// --- API INTERACTION ---

	const openDiscordLogin = () => {
		// NOTICE: response_type=token (Implicit Grant)
		const discordUrl = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
			REDIRECT_URI
		)}&scope=identify+email`;

		const width = 500;
		const height = 700;
		const left = (window.screen.width - width) / 2;
		const top = (window.screen.height - height) / 2;

		window.open(discordUrl, "DiscordAuth", `width=${width},height=${height},top=${top},left=${left}`);
	};

	const fetchDiscordUser = async (token: string, tokenType: string) => {
		try {
			console.log("Fetching real user data from Discord...");

			const response = await fetch("https://discord.com/api/users/@me", {
				headers: {
					authorization: `${tokenType} ${token}`,
				},
			});

			if (!response.ok) throw new Error("Failed to fetch user");

			const data = await response.json();
			console.log("Real Data Received:", data);

			// Construct the Avatar URL
			// If avatar is null, use default discord avatar based on discriminator or ID
			const avatarUrl = data.avatar
				? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
				: `https://cdn.discordapp.com/embed/avatars/${parseInt(data.discriminator || data.id) % 5}.png`;

			const realUser: UserData = {
				id: data.id,
				username: data.global_name || data.username, // prefer global_name
				email: data.email,
				avatar: avatarUrl,
			};

			setUser(realUser);
			generateApiKey(realUser);
		} catch (error) {
			console.error(error);
			alert("Failed to fetch Discord data.");
		}
	};

	const generateApiKey = (userData: UserData) => {
		// In a real app, you would POST to your backend here to save this key
		const prefix = "wk_live_";
		const randomPart = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		const key = prefix + randomPart;

		console.log("API Key Generated for " + userData.username);
		setTimeout(() => setApiKey(key), 600);
	};

	const copyKey = () => {
		if (apiKey) {
			navigator.clipboard.writeText(apiKey);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}
	};

	// --- RENDER ---

	if (isPopup)
		return (
			<div className="bg-[#0A0A0B] min-h-screen flex items-center justify-center text-white">
				<Loader2 className="animate-spin" />
			</div>
		);

	return (
		<div className="min-h-screen bg-[#0A0A0B] text-slate-300 font-sans selection:bg-indigo-500/30">
			{/* Background Gradients */}
			<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
				<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]"></div>
			</div>

			{/* Navbar */}
			<nav className="relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-md">
				<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-2 rounded-lg">
							<Terminal className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-bold text-white tracking-tight">
							weky<span className="text-indigo-500">.js</span>
						</span>
					</div>
					{user && (
						<button
							onClick={() => setUser(null)}
							className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
						>
							<LogOut className="w-4 h-4" /> Sign Out
						</button>
					)}
				</div>
			</nav>

			<main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
				{!user ? (
					// --- LOGIN STATE ---
					<div className="text-center max-w-lg mx-auto mt-10">
						<div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 shadow-2xl shadow-indigo-500/10">
							<Cpu className="w-10 h-10 text-indigo-400" />
						</div>
						<h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
							Build better bots with{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Weky</span>
						</h1>
						<p className="text-lg text-slate-400 mb-10 leading-relaxed">
							Authenticate to generate your production API key. <br />
							Secure, fast, and ready for your next big project.
						</p>

						<div className="relative group inline-block">
							<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

							<button
								onClick={openDiscordLogin}
								className="relative bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
							>
								<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
									<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.46 13.46 0 0 0-3.333 6.83 13.46 13.46 0 0 0-3.333-6.83.074.074 0 0 0-.079-.037 19.791 19.791 0 0 0-4.885 1.515.074.074 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.074.074 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.42-2.157 2.42z" />
								</svg>
								Continue with Discord
							</button>
						</div>
					</div>
				) : (
					// --- DASHBOARD STATE ---
					<div className="grid lg:grid-cols-2 gap-12 items-start animate-[fadeIn_0.5s_ease-out]">
						{/* Left: User Profile */}
						<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
							<h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6 flex items-center gap-2">
								<ShieldCheck className="w-4 h-4" /> Authenticated User
							</h3>

							<div className="flex items-center gap-6 mb-8">
								<div className="relative">
									<img
										src={user.avatar}
										alt="Avatar"
										className="w-20 h-20 rounded-full border-4 border-[#0A0A0B] shadow-xl"
									/>
									<div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-4 border-[#0A0A0B] rounded-full"></div>
								</div>
								<div>
									<h2 className="text-2xl font-bold text-white">{user.username}</h2>
									<p className="text-slate-400 font-mono text-sm mt-1">{user.email}</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className="bg-black/40 rounded-lg p-4 flex justify-between items-center border border-white/5">
									<span className="text-slate-500 text-sm">User ID</span>
									<span className="text-slate-300 font-mono text-sm">{user.id}</span>
								</div>
								<div className="bg-black/40 rounded-lg p-4 flex justify-between items-center border border-white/5">
									<span className="text-slate-500 text-sm">Status</span>
									<span className="text-green-400 text-sm font-medium flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Active
									</span>
								</div>
							</div>
						</div>

						{/* Right: API Key Generation */}
						<div className="space-y-6">
							<div className="bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border border-indigo-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
								<div className="absolute top-0 right-0 p-4 opacity-20">
									<Zap className="w-24 h-24 text-indigo-500" />
								</div>

								<h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
									<Key className="w-4 h-4" /> Production Key
								</h3>
								<p className="text-slate-400 text-sm mb-6">Use this key in your bot's configuration file.</p>

								{!apiKey ? (
									<div className="h-14 bg-indigo-500/10 rounded-lg animate-pulse border border-indigo-500/10 flex items-center px-4">
										<span className="text-indigo-400/50 text-sm">Generating secure key...</span>
									</div>
								) : (
									<div className="group relative">
										<div className="bg-[#0A0A0B] border border-indigo-500/30 rounded-lg p-4 flex items-center gap-3 shadow-lg shadow-indigo-500/5 transition-all group-hover:border-indigo-500/50">
											<code className="flex-1 font-mono text-indigo-300 text-sm truncate">{apiKey}</code>
											<button
												onClick={copyKey}
												className="p-2 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-white"
											>
												{copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
											</button>
										</div>
									</div>
								)}
							</div>

							<div className="bg-white/5 border border-white/10 rounded-xl p-6">
								<h4 className="text-white font-medium mb-3">Next Steps</h4>
								<ol className="text-sm text-slate-400 space-y-3 list-decimal list-inside">
									<li>
										Create a <code className="text-indigo-300">.env</code> file in your bot folder.
									</li>
									<li>
										Paste the key: <code className="text-slate-300">WEKY_API_KEY=wk_live_...</code>
									</li>
									<li>Restart your bot to apply changes.</li>
								</ol>
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
