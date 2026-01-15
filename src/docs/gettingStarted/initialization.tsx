import { Zap, Cpu, Shield, Play, Terminal, AlertTriangle, CheckCircle2 } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

export default function InitializationDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Zap className="w-3 h-3" />
					Setup Guide
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">Initialization</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Integrate the Weky Manager into your Discord Client. This setup handles game state management, licensing, and
					communication.
				</p>
			</header>

			{/* SECTION 1: REQUIRED INTENTS */}
			<section className="mb-12">
				<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
					<div className="p-2 rounded-lg bg-white/5 border border-white/10">
						<Shield className="w-5 h-5 text-purple-400" />
					</div>
					<h2 className="text-lg font-bold text-white tracking-wide">Required Gateway Intents</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{/* Standard Intents */}
					<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
						<div className="mt-1 p-1 rounded-full bg-green-500/10 text-green-400">
							<CheckCircle2 className="w-4 h-4" />
						</div>
						<div>
							<h3 className="text-sm font-bold text-white mb-1">Standard Intents</h3>
							<p className="text-xs text-gray-500 mb-2">Basic message handling.</p>
							<div className="flex flex-wrap gap-2">
								<code className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-purple-200 border border-white/5">
									Guilds
								</code>
								<code className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-purple-200 border border-white/5">
									GuildMessages
								</code>
								<code className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-purple-200 border border-white/5">
									MessageContent
								</code>
							</div>
						</div>
					</div>

					{/* Special Intents */}
					<div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-4 relative overflow-hidden">
						<div className="absolute top-0 right-0 p-2 opacity-10">
							<Cpu className="w-16 h-16 text-yellow-500" />
						</div>
						<div className="mt-1 p-1 rounded-full bg-yellow-500/10 text-yellow-400">
							<AlertTriangle className="w-4 h-4" />
						</div>
						<div className="relative z-10">
							<h3 className="text-sm font-bold text-white mb-1">Specific Requirement</h3>
							<p className="text-xs text-yellow-200/70 mb-2">
								Required specifically for the <strong>FastType</strong> minigame.
							</p>
							<div className="flex flex-wrap gap-2">
								<code className="text-[10px] bg-yellow-500/10 px-1.5 py-0.5 rounded text-yellow-200 border border-yellow-500/20">
									GuildMessageTyping
								</code>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 2: IMPLEMENTATION */}
			<section className="mb-12">
				<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
					<div className="p-2 rounded-lg bg-white/5 border border-white/10">
						<Terminal className="w-5 h-5 text-purple-400" />
					</div>
					<h2 className="text-lg font-bold text-white tracking-wide">Client Implementation</h2>
				</div>

				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-purple-600 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden shadow-2xl">
						<CodeBlock
							language="typescript"
							className="my-0!"
							code={`import { Client, GatewayIntentBits, Collection } from "discord.js";
import { WekyManager } from "@m3rcena/weky";

// 1. EXTEND CLIENT TYPE
export interface ExtendedClient extends Client {
    commands: Collection<string, any>;
    wekyManager: WekyManager;
}

// 2. SETUP CLIENT
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageTyping, // Important!
    ],
}) as ExtendedClient;

// 3. INITIALIZE ON READY
client.on("clientReady", async (cl) => {
    console.log(\`\${cl.user.username} is ready\`);

    // Initialize Manager with your API Key
    // arg3: logging enabled? (false recommended for production)
    client.wekyManager = new WekyManager(cl, process.env.WEKY_API_KEY, false);

    // CRITICAL STEP: Initialize the Network Manager
    client.wekyManager.NetworkManager.init();
});

client.login(process.env.DISCORD_TOKEN);`}
						/>
					</div>
				</div>
			</section>

			{/* SECTION 3: IMPORTANT NOTE */}
			<section>
				<div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
					<div className="p-3 rounded-full bg-red-500/10 text-red-400 shrink-0">
						<Play className="w-6 h-6" />
					</div>
					<div>
						<h3 className="text-white font-bold mb-1">Don't forget the init() call!</h3>
						<p className="text-sm text-gray-400 leading-relaxed">
							The line{" "}
							<code className="bg-red-500/10 px-1.5 py-0.5 rounded text-red-300 font-mono text-xs">
								client.wekyManager.NetworkManager.init()
							</code>{" "}
							is mandatory. It establishes the secure connection to the Weky API Server. Without this, minigames will
							fail to start.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
