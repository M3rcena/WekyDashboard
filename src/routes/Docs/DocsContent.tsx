import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { CodeBlock } from "../../components/CodeBlock";
import { Box, Cpu, Info, ShieldCheck, Terminal, Zap } from "lucide-react";

const PropsTable = ({ data }: { data: { name: string; type: string; desc: string }[] }) => (
	<div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-white/2">
		<table className="w-full text-sm text-left">
			<thead className="bg-white/5 text-gray-300 uppercase text-[10px] tracking-widest font-bold">
				<tr>
					<th className="px-6 py-3">Property</th>
					<th className="px-6 py-3">Type</th>
					<th className="px-6 py-3">Description</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-white/5">
				{data.map((row, i) => (
					<tr key={i} className="hover:bg-white/2 transition-colors">
						<td className="px-6 py-4 font-mono text-purple-400">{row.name}</td>
						<td className="px-6 py-4 font-mono text-gray-400 text-xs">{row.type}</td>
						<td className="px-6 py-4 text-gray-400">{row.desc}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

const TypeDefinition = ({ title, code }: { title: string; code: string }) => (
	<div className="my-8 rounded-2xl border border-white/5 bg-[#0d0d0e] overflow-hidden">
		<div className="px-4 py-3 border-b border-white/5 bg-white/2 flex items-center justify-between">
			<span className="text-[10px] text-purple-400 font-mono uppercase tracking-[0.2em] font-bold">{title}</span>
			<div className="flex gap-1">
				<div className="w-2 h-2 rounded-full bg-white/10" />
				<div className="w-2 h-2 rounded-full bg-white/10" />
			</div>
		</div>
		<div className="[&>div]:bg-transparent! [&>div]:m-0! [&>pre]:p-6!">
			<CodeBlock code={code} language="typescript" />
		</div>
	</div>
);

const Installation = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Installation</h1>
			<p className="text-lg text-gray-400">
				Get started with Weky by installing the core package and setting up your environment variables.
			</p>
		</header>

		<section className="mb-12">
			<h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
				<span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-sm font-bold">
					1
				</span>
				Install Package
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				<div className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors group">
					<p className="text-xs font-medium text-gray-500 uppercase mb-2 group-hover:text-purple-400 transition-colors">
						Using NPM
					</p>
					<code className="text-purple-300 font-mono">npm install @m3rcena/weky</code>
				</div>
				<div className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors group">
					<p className="text-xs font-medium text-gray-500 uppercase mb-2 group-hover:text-purple-400 transition-colors">
						Using Yarn
					</p>
					<code className="text-purple-300 font-mono">yarn add @m3rcena/weky</code>
				</div>
			</div>
		</section>

		<section>
			<h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
				<span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-sm font-bold">
					2
				</span>
				Environment Configuration
			</h2>
			<p className="text-gray-400 mb-6">
				Store your sensitive API tokens in a <code>.env</code> file at the root of your project.
			</p>
			<div className="group relative rounded-2xl border border-white/10 bg-[#0d0d0e] shadow-2xl">
				{/* Window Header */}
				<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/2">
					<div className="flex gap-2">
						<div className="w-3 h-3 rounded-full bg-[#ff5f56]/20 border border-[#ff5f56]/40" />
						<div className="w-3 h-3 rounded-full bg-[#ffbd2e]/20 border border-[#ffbd2e]/40" />
						<div className="w-3 h-3 rounded-full bg-[#27c93f]/20 border border-[#27c93f]/40" />
					</div>
					<div className="flex items-center gap-2">
						<span className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">.env</span>
					</div>
				</div>

				{/* The Code Area */}
				<div className="[&>div]:bg-transparent! [&>div]:rounded-none! [&>div]:m-0! [&>pre]:p-6!">
					<CodeBlock code={`WEKY_API_KEY="wk_live_yourAPIKeyToken"`} language="env" />
				</div>
			</div>
		</section>
	</div>
);

const APIKey = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Getting an API Key</h1>
			<p className="text-lg text-gray-400">
				Follow the steps below to authenticate your application with the Weky Cloud.
			</p>
		</header>

		<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-purple-500/50 before:via-white/10 before:to-transparent">
			{[
				{
					title: "Visit the Dashboard",
					desc: "Go to the Weky Dashboard to begin.",
					link: "https://m3rcena.github.io/WekyDashboard/",
				},
				{ title: "Authenticate", desc: "Press login on the top right and authorize with your Discord account." },
				{ title: "Access Tokens", desc: "Click your profile icon in the top right and select 'Access Tokens'." },
				{
					title: "Generate & Assign",
					desc: "Press Generate Now. Input a name and your Discord Bot ID which will be using this token.",
				},
				{ title: "Ready to go", desc: "Copy your token. You can now use it freely on the bot you assigned it to!" },
			].map((step, i) => (
				<div key={i} className="relative flex items-start gap-6 group">
					<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#09090b] text-purple-400 font-bold shrink-0 z-10 group-hover:border-purple-500 transition-all duration-300">
						{i + 1}
					</div>
					<div>
						<h3 className="text-white font-semibold text-lg mb-1">{step.title}</h3>
						<p className="text-gray-400 leading-relaxed max-w-2xl">
							{step.desc}{" "}
							{step.link && (
								<a
									href={step.link}
									target="_blank"
									rel="noreferrer"
									className="text-purple-400 hover:text-purple-300 underline underline-offset-4 decoration-purple-500/30 transition-colors ml-1"
								>
									{step.link}
								</a>
							)}
						</p>
					</div>
				</div>
			))}
		</div>
	</div>
);

const Initialization = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Initialization</h1>
			<p className="text-lg text-gray-400">
				To ensure Weky connects to our cloud correctly, you must initialize it inside the Discord.js Ready event.
			</p>
		</header>

		<section className="space-y-6">
			<div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 flex gap-4">
				<Info className="w-6 h-6 text-blue-400 shrink-0" />
				<p className="text-sm text-blue-100/70">
					<strong>Critical:</strong> The <code>NetworkManager.init()</code> call is required to sync your bot data with
					the Weky Dashboard.
				</p>
			</div>

			<CodeBlock
				language="typescript"
				code={`import { WekyManager } from "@m3rcena/weky";
import { Client } from "discord.js";

const client = new Client({ intents: [...] });
const weky = new WekyManager(client, process.env.WEKY_API_KEY, true);

client.on("clientReady", async () => {
    // REQUIRED: Initialize the internal network connection
    await weky.NetworkManager.init();
    
    console.log(\`Logged in as \${client.user.tag} and Weky is ready!\`);
});

client.login(token);`}
			/>
		</section>
	</div>
);

const WekyManagerDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
					Core Class
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4">WekyManager</h1>
			<p className="text-gray-400">The primary interface for creating minigames and interacting with the Weky API.</p>
		</header>

		<h2 className="text-xl font-semibold text-white mb-4">Constructor</h2>
		<CodeBlock code={`const weky = new WekyManager(client, apiKey, notifyUpdates);`} language="typescript" />

		<PropsTable
			data={[
				{ name: "client", type: "Discord.Client", desc: "Your Discord.js client instance." },
				{ name: "apiKey", type: "string", desc: "Your wk_live_... token." },
				{ name: "notifyUpdates", type: "boolean", desc: "Logs a message when a new version is available." },
			]}
		/>

		<h2 className="text-xl font-semibold text-white mt-12 mb-4">Instance Methods</h2>
		<div className="space-y-4">
			<div className="p-4 rounded-xl border border-white/5 bg-white/1">
				<h4 className="text-purple-400 font-mono text-sm mb-2">.getUsage()</h4>
				<p className="text-gray-400 text-sm">
					Returns a promise with the bot's current usage statistics from the Weky Cloud.
				</p>
			</div>
		</div>
	</div>
);

const NetworkManagerDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight flex items-center gap-4">
				<div className="p-2 rounded-lg bg-blue-500/20">
					<Zap className="text-blue-400 w-8 h-8" />
				</div>
				NetworkManager
			</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				The internal engine that handles all REST communication with the Weky API. While primarily used internally,
				these methods are available for advanced implementations.
			</p>
		</header>

		<section className="mb-12">
			<h2 className="text-2xl font-bold text-white mb-6">Internal Logic</h2>
			<p className="text-gray-400 mb-6">
				All requests automatically include your <code>x-api-key</code> and <code>x-bot-id</code> in the headers to
				ensure secure data tracking.
			</p>
			<div className="p-6 rounded-2xl border border-white/5 bg-white/1">
				<h4 className="text-blue-400 font-mono font-bold mb-2 text-sm uppercase">Base URL</h4>
				<code className="text-sm bg-black/40 px-3 py-1 rounded border border-white/10 text-gray-300">
					http://localhost:8083/api/v1
				</code>
			</div>
		</section>

		{/* --- GENERAL METHODS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">General Methods</h2>
			<PropsTable
				data={[
					{
						name: "init()",
						type: "Promise<boolean>",
						desc: "Registers the bot with the API. Must be called in the clientReady event.",
					},
					{
						name: "getUsage()",
						type: "Promise<UsageData>",
						desc: "Fetches global usage statistics for the authenticated bot.",
					},
					{
						name: "getText(difficulty)",
						type: "Promise<string>",
						desc: "Fetches a random sentence for the FastType minigame.",
					},
				]}
			/>
		</section>

		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Response Types</h2>
			<p className="text-gray-400 mb-6">
				When calling <code>getUsage()</code>, the API returns a <code>BotDataTypes</code> object. This is useful for
				building your own statistics commands or dashboard displays.
			</p>

			<TypeDefinition
				title="interface BotDataTypes"
				code={`export interface BotDataTypes {
    botID: string;
    botName: string;
    secretKey: string;
    usage: {
        minigames: {
            mini2024: number;
            calculator: number;
            // ... all other minigame counts
        };
        inits: number;
        totalRequests: number;
    };
}`}
			/>

			<div className="mt-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
				<p className="text-xs text-gray-400 leading-relaxed">
					<span className="text-purple-400 font-bold uppercase mr-2 text-[10px]">Note:</span>
					The <code>usage</code> object tracks the lifetime totals for your bot across the Weky Network.
					<code>inits</code> counts how many times <code>NetworkManager.init()</code> has been called successfully.
				</p>
			</div>
		</section>

		{/* --- FIGHT GAME METHODS --- */}
		<section className="mb-16">
			<div className="flex items-center gap-3 mb-6">
				<h2 className="text-2xl font-bold text-white">Fight Game API</h2>
				<span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-tighter border border-red-500/20">
					Networking
				</span>
			</div>
			<p className="text-gray-400 mb-6">
				Methods used to manage state and generate dynamic images for the Fight minigame.
			</p>

			<PropsTable
				data={[
					{
						name: "createGame(...)",
						type: "Promise<string>",
						desc: "Posts player data to the API and returns a unique Game ID.",
					},
					{ name: "getTurn(gameID)", type: "Promise<TurnData>", desc: "Checks which player's turn it is currently." },
					{
						name: "changeTurn(gameID)",
						type: "Promise<boolean>",
						desc: "Toggles the turn between challenger and opponent.",
					},
					{
						name: "updatePlayers(...)",
						type: "Promise<boolean>",
						desc: "Syncs health, coins, and effects to the cloud.",
					},
					{
						name: "makeMainCard(...)",
						type: "Promise<Attachment>",
						desc: "Generates the primary fight visual with player avatars.",
					},
				]}
			/>
		</section>

		{/* --- 2048 METHODS --- */}
		<section className="mb-16">
			<div className="flex items-center gap-3 mb-6">
				<h2 className="text-2xl font-bold text-white">2048 Game API</h2>
				<span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-tighter border border-green-500/20">
					Networking
				</span>
			</div>

			<PropsTable
				data={[
					{ name: "create2048Game(...)", type: "Promise<string>", desc: "Initializes a 2048 session in the cloud." },
					{
						name: "move2048(id, dir)",
						type: "Promise<MoveResult>",
						desc: "Sends a move (UP, DOWN, LEFT, RIGHT) and receives the new board state.",
					},
					{
						name: "get2048BoardImage(...)",
						type: "Promise<Attachment>",
						desc: "Returns a rendered PNG of the current 4x4 grid.",
					},
				]}
			/>
		</section>

		<section className="p-8 rounded-2xl border border-white/5 bg-linear-to-br from-purple-500/5 to-transparent">
			<h3 className="text-white font-bold mb-2 flex items-center gap-2">
				<Info className="w-4 h-4 text-purple-400" /> Advanced Usage
			</h3>
			<p className="text-sm text-gray-400 leading-relaxed">
				If you are building your own custom UI or dashboard, you can access these methods via{" "}
				<code>weky.NetworkManager</code>. Note that calling these methods manually might interfere with the state of
				active minigames.
			</p>
		</section>
	</div>
);

const Game2048Doc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">2048</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				A fully interactive version of the classic 2048 puzzle game, featuring dynamic image generation and button-based
				controls.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.create2048({
    context: interaction, // or message
    embed: {
        title: "Weky 2048",
        description: "Current Score: {{score}}",
        color: "#5865F2"
    },
    time: 600000 // 10 minutes
});`}
			/>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (Types2048)</h2>
			<p className="text-gray-400 mb-6">Customize the behavior and appearance of the 2048 session.</p>

			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The Discord.js Message or Interaction triggering the game." },
					{ name: "embed", type: "Embeds", desc: "Configuration for the game's message embed (see below)." },
					{ name: "emojis", type: "object", desc: "Optional custom emojis for the directional buttons." },
					{ name: "othersMessage", type: "string", desc: "Message shown when someone else tries to use the buttons." },
					{
						name: "time",
						type: "number",
						desc: "How long the game collector lasts in milliseconds (default: 600,000).",
					},
				]}
			/>
		</section>

		{/* --- PLACEHOLDERS INFO --- */}
		<section className="mb-16 p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
			<h3 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
				<Info className="w-4 h-4" /> Dynamic Placeholders
			</h3>
			<p className="text-sm text-gray-300 mb-4">
				You can use these strings inside your <code>embed.description</code> to show real-time data:
			</p>
			<div className="grid grid-cols-2 gap-4">
				<div className="bg-black/20 p-3 rounded-lg border border-white/5">
					<code className="text-purple-300 text-xs">{"{{score}}"}</code>
					<p className="text-[10px] text-gray-500 mt-1 uppercase">Current Game Score</p>
				</div>
				<div className="bg-black/20 p-3 rounded-lg border border-white/5">
					<code className="text-purple-300 text-xs">{"{{id}}"}</code>
					<p className="text-[10px] text-gray-500 mt-1 uppercase">Player's Discord ID</p>
				</div>
			</div>
		</section>

		{/* --- NESTED INTERFACE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">The Embed Interface</h2>
			<p className="text-gray-400 mb-6">
				The <code>embed</code> property supports most standard Discord.js Embed fields.
			</p>

			<TypeDefinition
				title="interface Embeds"
				code={`export interface Embeds {
    color?: ColorResolvable;
    title?: string;
    description?: string;
    thumbnail?: string;
    timestamp?: Date;
    author?: { name: string; icon_url: string };
    footer?: { text: string; icon_url: string };
    // image is handled automatically by the package
}`}
			/>
		</section>

		{/* --- CUSTOM EMOJIS EXAMPLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Custom Emojis</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.create2048({
    context: ctx,
    embed: { title: 'Custom Emojis' },
    emojis: {
        up: '🔼',
        down: '🔽',
        left: '◀️',
        right: '▶️'
    }
});`}
			/>
		</section>
	</div>
);

const CalculatorDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Calculator</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				A high-performance scientific calculator built using Discord's <strong>Components V2</strong>. Supports
				everything from basic arithmetic to trigonometry and logarithms via Modals.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createCalculator({
    context: interaction,
    embed: {
        title: "Weky Scientific Calc",
        color: 0x5865F2,
        timestamp: true
    },
    invalidQuery: "That math doesn't add up!",
});`}
			/>
		</section>

		{/* --- VISUAL PREVIEW / FLOW --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">How it Works</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{[
					{
						title: "Standard Input",
						desc: "Use the 5x4 button grid for numbers and basic operators.",
						icon: <Box className="w-5 h-5 text-blue-400" />,
					},
					{
						title: "Modal Prompts",
						desc: "Complex functions like SIN, COS, and LOG trigger a Modal for precise input.",
						icon: <Zap className="w-5 h-5 text-purple-400" />,
					},
					{
						title: "Math.js Engine",
						desc: "Results are calculated using mathjs, ensuring high precision and error handling.",
						icon: <Cpu className="w-5 h-5 text-green-400" />,
					},
				].map((item, i) => (
					<div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/1">
						<div className="mb-3">{item.icon}</div>
						<h4 className="text-white font-bold mb-2 text-sm">{item.title}</h4>
						<p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
					</div>
				))}
			</div>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (CalcTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The Discord.js Message or Interaction triggering the game." },
					{ name: "embed", type: "Embeds", desc: "Standard Weky embed settings (title, color, etc.)." },
					{
						name: "invalidQuery",
						type: "string",
						desc: "Custom error message when mathjs fails to evaluate an expression.",
					},
					{ name: "disabledQuery", type: "string", desc: "Message shown if the calculator is used while disabled." },
				]}
			/>
		</section>

		{/* --- SPECIAL FUNCTIONS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Scientific Functions</h2>
			<p className="text-gray-400 mb-6">
				The following buttons trigger a <strong>Discord Modal</strong> for input:
			</p>

			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
				{["SIN / COS / TAN", "SQRT", "LG / LN", "x!", "1/x"].map((func) => (
					<div
						key={func}
						className="px-4 py-2 rounded-lg border border-white/10 bg-black/40 text-center font-mono text-xs text-purple-300"
					>
						{func}
					</div>
				))}
			</div>
		</section>

		{/* --- THE V2 WARNING --- */}
		<section className="mb-16 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
			<h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
				<Info className="w-4 h-4" /> Components V2 Support
			</h3>
			<p className="text-sm text-gray-300 leading-relaxed">
				This minigame requires the <code>MessageFlags.IsComponentsV2</code> flag. Ensure your Discord library and bot
				version support the new <strong>ContainerBuilder</strong> and <strong>TextDisplay</strong> components.
			</p>
		</section>
	</div>
);

const ChaosWordsDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Chaos Words</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				A word-search challenge where players must find hidden words within a string of generated chaos. Includes
				automatic word tracking and customizable difficulty.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createChaosWords({
    context: interaction,
    embed: {
        title: "Chaos Words",
        description: "Find the words in: {{time}}",
        color: "#FFA500"
    },
    words: ["apple", "banana", "cherry"],
    charGenerated: 20,
    maxTries: 5
});`}
			/>
		</section>

		{/* --- GAME MECHANICS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Game Mechanics</h2>
			<div className="bg-[#0d0d0e] border border-white/5 rounded-2xl p-6">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="flex-1 space-y-4">
						<div className="flex gap-3">
							<div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
								1
							</div>
							<p className="text-sm text-gray-400">
								<strong className="text-white">Chaos Generation:</strong> The package generates random characters and
								splices your words into them.
							</p>
						</div>
						<div className="flex gap-3">
							<div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
								2
							</div>
							<p className="text-sm text-gray-400">
								<strong className="text-white">Active Collection:</strong> A Message Collector listens for the correct
								words from the user.
							</p>
						</div>
						<div className="flex gap-3">
							<div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
								3
							</div>
							<p className="text-sm text-gray-400">
								<strong className="text-white">Session Locking:</strong> To prevent spam, Weky prevents a user from
								starting multiple sessions simultaneously.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (ChaosTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "Triggering interaction or message." },
					{ name: "words", type: "string[]", desc: "The target words. If omitted, random words are generated." },
					{ name: "charGenerated", type: "number", desc: "Total length of the chaos string (random noise + words)." },
					{ name: "maxTries", type: "number", desc: "Max incorrect guesses allowed (default: 10)." },
					{ name: "time", type: "number", desc: "Time limit in milliseconds (default: 60,000)." },
					{ name: "winMessage", type: "string", desc: "Message shown on victory. Supports {{time}}." },
					{
						name: "correctWord",
						type: "string",
						desc: "Shown per correct guess. Supports {{word}} and {{remaining}}.",
					},
				]}
			/>
		</section>

		{/* --- PLACEHOLDERS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Dynamic Strings</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="p-4 rounded-xl border border-white/5 bg-white/2">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-2">winMessage</h4>
					<code className="text-purple-300">{"{{time}}"}</code>
					<p className="text-[10px] text-gray-600 mt-1">Time taken to find all words.</p>
				</div>
				<div className="p-4 rounded-xl border border-white/5 bg-white/2">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-2">wrongWord</h4>
					<code className="text-purple-300">{"{{remaining_tries}}"}</code>
					<p className="text-[10px] text-gray-600 mt-1">Number of attempts left before failure.</p>
				</div>
			</div>
		</section>
	</div>
);

const FastTypeDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Fast Type</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				Test your typing speed! This game fetches random sentences from the Weky Network and calculates your Words Per
				Minute (WPM) accuracy.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createFastType({
    context: interaction,
    embed: {
        title: "Fast Type Challenge",
        color: "#5865F2",
    },
    difficulty: "hard", // easy, medium, hard
    winMessage: "Impressive! You finished in {{time}} with {{wpm}} WPM!",
});`}
			/>
		</section>

		{/* --- NETWORK INTEGRATION --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">How it Works</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="space-y-4">
					<p className="text-gray-400 text-sm leading-relaxed">
						The game initiates a request to the <code>NetworkManager</code> to fetch a sentence. If a custom sentence is
						provided in the options, the API call is skipped.
					</p>
					<ul className="space-y-2">
						<li className="flex items-center gap-2 text-xs text-gray-300">
							<div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
							<strong>Easy:</strong> Short, common sentences.
						</li>
						<li className="flex items-center gap-2 text-xs text-gray-300">
							<div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
							<strong>Medium:</strong> Standard paragraph excerpts.
						</li>
						<li className="flex items-center gap-2 text-xs text-gray-300">
							<div className="w-1.5 h-1.5 rounded-full bg-red-500" />
							<strong>Hard:</strong> Complex vocabulary and punctuation.
						</li>
					</ul>
				</div>
			</div>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (FastTypeTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "Triggering interaction or message." },
					{ name: "difficulty", type: "'easy' | 'medium' | 'hard'", desc: "Sets the sentence length from the API." },
					{ name: "sentence", type: "string", desc: "Optional. Provide your own custom text to type." },
					{ name: "winMessage", type: "string", desc: "Supports {{time}} and {{wpm}} placeholders." },
					{ name: "loseMessage", type: "string", desc: "The title of the embed when the user fails or times out." },
					{ name: "time", type: "number", desc: "Limit in ms (default: 60,000)." },
				]}
			/>
		</section>

		{/* --- DYNAMIC PLACEHOLDERS --- */}
		<section className="mb-16 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
			<h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
				<Zap className="w-4 h-4" /> Win Message Placeholders
			</h3>
			<div className="space-y-4">
				<div className="flex justify-between items-center border-b border-white/5 pb-2">
					<code className="text-purple-300 text-xs">{"{{time}}"}</code>
					<span className="text-xs text-gray-500">Formatted time taken (e.g., 5s)</span>
				</div>
				<div className="flex justify-between items-center border-b border-white/5 pb-2">
					<code className="text-purple-300 text-xs">{"{{wpm}}"}</code>
					<span className="text-xs text-gray-500">Calculated Words Per Minute</span>
				</div>
			</div>
		</section>
	</div>
);

const GameFightDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
					Premium Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Fight</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				An immersive 1v1 turn-based combat system. Players battle using hits, heals, and strategic power-ups, all
				visualized through real-time dynamic image generation.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`const opponent = interaction.options.getMember('user');

await weky.createFight({
    context: interaction,
    opponent: opponent,
    buttons: {
        hit: "Attack!",
        heal: "Rest",
        cancel: "Retreat"
    },
    time: 120000 // 2 minutes for initial accept
});`}
			/>
		</section>

		{/* --- GAMEPLAY LOOP --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Battle Mechanics</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
				<div className="p-5 rounded-2xl border border-white/5 bg-white/1">
					<h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
						<Zap className="w-4 h-4" /> Combat & Economy
					</h4>
					<p className="text-xs text-gray-500 leading-relaxed">
						Every successful <strong>Hit</strong> deals 10-30 DMG and awards the attacker <strong>10🪙 Coins</strong>.
						These coins are used to purchase Power-Ups during the player's turn.
					</p>
				</div>
				<div className="p-5 rounded-2xl border border-white/5 bg-white/1">
					<h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
						<ShieldCheck className="w-4 h-4" /> Strategic Healing
					</h4>
					<p className="text-xs text-gray-500 leading-relaxed">
						Players can heal when their HP is below <strong>80</strong>. Surrendering is only an option if the player
						still has more than <strong>50 HP</strong>, preventing "rage-quitting" at the last second.
					</p>
				</div>
			</div>
		</section>

		{/* --- POWERUPS SECTION --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Available Power-Ups</h2>
			<div className="overflow-hidden rounded-xl border border-white/10">
				<table className="w-full text-sm text-left">
					<thead className="bg-white/5 text-gray-300 uppercase text-[10px] tracking-widest font-bold">
						<tr>
							<th className="px-6 py-3">Power-Up</th>
							<th className="px-6 py-3">Cost</th>
							<th className="px-6 py-3">Effect</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-white/5">
						<tr className="hover:bg-white/2">
							<td className="px-6 py-4 text-red-400 font-bold">2x Damage</td>
							<td className="px-6 py-4 font-mono text-yellow-500">30🪙</td>
							<td className="px-6 py-4 text-gray-400">Double damage on the very next attack.</td>
						</tr>
						<tr className="hover:bg-white/2">
							<td className="px-6 py-4 text-blue-400 font-bold">Shield</td>
							<td className="px-6 py-4 font-mono text-yellow-500">25🪙</td>
							<td className="px-6 py-4 text-gray-400">Reduce incoming damage by 50% for the next hit.</td>
						</tr>
						<tr className="hover:bg-white/2">
							<td className="px-6 py-4 text-green-400 font-bold">Heal Boost</td>
							<td className="px-6 py-4 font-mono text-yellow-500">20🪙</td>
							<td className="px-6 py-4 text-gray-400">Instantly restores 30 HP.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		{/* --- CONFIGURATION --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (FightTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The interaction or message triggering the challenge." },
					{ name: "opponent", type: "GuildMember", desc: "The user being challenged to the fight." },
					{ name: "buttons", type: "object", desc: "Custom labels for Hit, Heal, Surrender, Accept, and Deny." },
					{ name: "time", type: "number", desc: "Duration for the challenge request to be accepted (default: 120s)." },
					{
						name: "opponentsTurnMessage",
						type: "string",
						desc: "Message shown when a user clicks during the other's turn.",
					},
				]}
			/>
		</section>

		{/* --- TECHNICAL NOTE --- */}
		<section className="mb-16 p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
			<h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
				<Terminal className="w-4 h-4" /> State Persistence
			</h3>
			<p className="text-sm text-gray-300 leading-relaxed">
				The Fight game's state is strictly managed by the <strong>Weky API</strong>. If your bot restarts during a
				fight, the active session is automatically cleaned up by the API's heartbeat monitor to prevent ghost sessions.
			</p>
		</section>
	</div>
);

const GuessTheNumberDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Guess The Number</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				A classic numerical logic game. Weky picks a secret number, and players must find it using "higher" or "lower"
				hints. Supports global server competitions.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createGuessTheNumber({
    context: interaction,
    embed: {
        title: "Guess The Number",
        description: "I am thinking of a number between 0 and 1000...",
        color: "#F1C40F"
    },
    publicGame: true, // Allow everyone in the server to guess
    time: 60000
});`}
			/>
		</section>

		{/* --- GAME MODES --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Game Modes</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-white font-bold mb-2 flex items-center gap-2">Private Mode</h4>
					<p className="text-xs text-gray-500 leading-relaxed">
						Only the user who executed the command can send messages to guess the number. Perfect for solo challenges.
					</p>
				</div>
				<div className="p-6 rounded-2xl border border-purple-500/10 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
					<h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">Public Mode</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						Everyone in the channel can participate. The first person to guess correctly wins. Weky tracks all
						participants and displays them in the final win message.
					</p>
				</div>
			</div>
		</section>

		{/* --- DYNAMIC FEEDBACK --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Visual Hints</h2>
			<p className="text-gray-400 mb-6">
				As players guess, Weky updates the embed with "Above" and "Below" fields to narrow down the range.
			</p>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (GuessTheNumberTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "Triggering interaction or message." },
					{ name: "publicGame", type: "boolean", desc: "If true, anyone in the channel can play." },
					{ name: "number", type: "number", desc: "Optional. Set a specific number to guess instead of a random one." },
					{ name: "winMessage", type: "object", desc: "Custom win messages for public and private modes." },
					{ name: "ongoingMessage", type: "string", desc: "Shown if a public game is already running in the server." },
					{ name: "time", type: "number", desc: "Time limit in ms (default: 60,000)." },
				]}
			/>
		</section>

		{/* --- PLACEHOLDERS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Placeholders</h2>
			<div className="space-y-4">
				<div className="bg-[#0d0d0e] p-4 rounded-xl border border-white/5">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Public Win Message</h4>
					<div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
						<div className="text-purple-400">
							{"{{number}}"} <span className="text-gray-600">- The winning number</span>
						</div>
						<div className="text-purple-400">
							{"{{winner}}"} <span className="text-gray-600">- ID of the winner</span>
						</div>
						<div className="text-purple-400">
							{"{{time}}"} <span className="text-gray-600">- Time elapsed</span>
						</div>
						<div className="text-purple-400">
							{"{{participants}}"} <span className="text-gray-600">- List of players</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

const GuessThePokemonDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Guess The Pokémon</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				An interactive trivia game using the PokeAPI. Players are given hints about a Pokémon's traits and must type the
				correct name to win and reveal the artwork.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createGuessThePokemon({
    context: interaction,
    embed: {
        title: "Who's That Pokémon?",
        color: "#FF0000",
    },
    time: 60000, // 1 minute
    thinkMessage: "Consulting the Pokedex",
});`}
			/>
		</section>

		{/* --- DATA FETCHING --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">How it Works</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="space-y-4">
					<p className="text-gray-400 text-sm leading-relaxed">
						The game fetches data for a random Pokémon (Gen 1 to Gen 7) from <code>pokeapi.co</code>. It extracts the{" "}
						<strong>Types</strong> and <strong>Abilities</strong> to present as hints.
					</p>
					<div className="p-4 rounded-xl border border-white/5 bg-white/2">
						<h4 className="text-white font-bold mb-2 text-xs flex items-center gap-2">
							<Zap className="w-3 h-3 text-yellow-400" /> Reveal Mechanic
						</h4>
						<p className="text-xs text-gray-500">
							Upon a correct guess or game failure, the Pokémon's official <strong>Home artwork</strong> is revealed via
							an image attachment in the embed.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (GuessThePokemonTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The interaction or message triggering the game." },
					{ name: "thinkMessage", type: "string", desc: "Text shown while fetching data from the PokeAPI." },
					{ name: "winMessage", type: "string", desc: "Supports {{answer}} and {{time}} placeholders." },
					{ name: "loseMessage", type: "string", desc: "Supports {{answer}} placeholder." },
					{ name: "incorrectMessage", type: "string", desc: "Supports {{answer}} (the user's guess)." },
					{ name: "time", type: "number", desc: "Game duration in ms (default: 60,000)." },
				]}
			/>
		</section>

		{/* --- PLACEHOLDERS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Dynamic Placeholders</h2>
			<div className="space-y-4">
				<div className="p-4 rounded-xl border border-white/5 bg-white/2">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Embed Description</h4>
					<div className="flex flex-wrap gap-2">
						<code className="text-purple-300">{"{{type}}"}</code>
						<code className="text-purple-300">{"{{abilities}}"}</code>
						<code className="text-purple-300">{"{{time}}"}</code>
					</div>
				</div>
				<div className="p-4 rounded-xl border border-white/5 bg-white/2">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Win/Lose Messages</h4>
					<div className="flex flex-wrap gap-2">
						<code className="text-purple-300">{"{{answer}}"}</code>
						<code className="text-purple-300">{"{{time}}"}</code>
					</div>
				</div>
			</div>
		</section>
	</div>
);

const HangmanDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Hangman</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				The classic word-guessing game reimagined with dynamic visual feedback. Weky generates a real-time image of the
				board as players guess letters, handling validation and win/loss states automatically.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createHangman({
    context: interaction,
    time: 60000 // Optional: defaults to 3 minutes
});`}
			/>
		</section>

		{/* --- GAME MECHANICS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">Visual Board Generation</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						Unlike text-based versions, this game generates a unique <strong>PNG attachment</strong> for every turn. It
						combines the user's avatar, the current hangman state, and the word progress into a single image.
					</p>
				</div>

				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-white font-bold mb-2 flex items-center gap-2">Strict Input Validation</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						The collector automatically validates guesses. It rejects symbols, numbers, or multiple letters, warning the
						user with a temporary message like <em>"Please provide a single letter!"</em>.
					</p>
				</div>
			</div>
		</section>

		{/* --- NETWORK LOGIC --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Logic Flow</h2>
			<div className="space-y-4">
				<div className="bg-[#0d0d0e] p-5 rounded-xl border border-white/5">
					<ul className="space-y-3 text-sm text-gray-400">
						<li className="flex gap-3">
							<span className="text-cyan-500 font-mono">01.</span>
							<span>
								Game initializes via <code>createGame</code> API, linking the session to the context User ID.
							</span>
						</li>
						<li className="flex gap-3">
							<span className="text-cyan-500 font-mono">02.</span>
							<span>
								Initial <strong>Board Image</strong> is fetched and sent as a message attachment.
							</span>
						</li>
						<li className="flex gap-3">
							<span className="text-cyan-500 font-mono">03.</span>
							<span>
								User inputs a letter. Logic validates input matches <code>/[a-z]/i</code>.
							</span>
						</li>
						<li className="flex gap-3">
							<span className="text-cyan-500 font-mono">04.</span>
							<span>
								Input is sent to API. API calculates lives, correct guesses, and generates a{" "}
								<strong>new board buffer</strong>.
							</span>
						</li>
						<li className="flex gap-3">
							<span className="text-cyan-500 font-mono">05.</span>
							<span>
								The original bot message is <strong>edited</strong> with the new image attachment.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		{/* --- OPTIONS TABLE --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (HangmanTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The interaction or message triggering the game." },
					{ name: "time", type: "number", desc: "Time limit for the entire game in ms (default: 180,000 / 3 mins)." },
				]}
			/>
		</section>

		{/* --- NOTES --- */}
		<section className="mb-16">
			<div className="p-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5">
				<h4 className="text-xs font-bold text-yellow-500 uppercase mb-2">Requirement Note</h4>
				<p className="text-xs text-gray-400">
					This minigame relies on a healthy connection to the <strong>NetworkManager</strong> API endpoints (
					<code>/Hangman/createGame</code>, <code>/Hangman/getBoardImage</code>). If the API is offline, the game will
					fail to start or generate images.
				</p>
			</div>
		</section>
	</div>
);

const LieSwatterDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Lie Swatter</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				A fast-paced trivia challenge powered by the <strong>Open Trivia DB</strong>. Players are presented with a
				random fact and must determine if it is the
				<strong>Truth</strong> or a <strong>Lie</strong> before time runs out.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createLieSwatter({
    context: interaction,
    embed: {
        title: "Fact or Fiction?",
        color: "#2ECC71", // Green
        footer: "Powered by OpenTDB"
    },
    buttons: {
        true: "Truth",
        lie: "Lie"
    },
    time: 30000 // 30 seconds
});`}
			/>
		</section>

		{/* --- MECHANICS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">Live Data Fetching</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						The game fetches a live boolean question from <code>opentdb.com</code> at the start of every game. It
						automatically decodes HTML entities (like <code>&quot;</code>) so the question is readable.
					</p>
				</div>

				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-white font-bold mb-2 flex items-center gap-2">Button Interaction</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						The game uses Discord Buttons for input. Once a selection is made, the buttons are disabled and colored{" "}
						<strong>Green</strong> (Correct) or <strong>Red</strong> (Incorrect) to reveal the answer.
					</p>
				</div>
			</div>
		</section>

		{/* --- CONFIGURATION --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (LieSwatterTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The interaction or message triggering the game." },
					{ name: "embed", type: "Embeds", desc: "Base embed configuration (title, color, etc)." },
					{ name: "buttons", type: "{ true: string, lie: string }", desc: "Custom labels for the buttons." },
					{ name: "winMessage", type: "string", desc: "Message shown when the user guesses correctly." },
					{ name: "loseMessage", type: "string", desc: "Message shown when the user is wrong." },
					{ name: "thinkMessage", type: "string", desc: "Temporary text shown while fetching the question." },
					{ name: "time", type: "number", desc: "Time limit in ms (default: 60,000)." },
				]}
			/>
		</section>

		{/* --- PLACEHOLDERS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">String Placeholders</h2>
			<div className="space-y-4">
				<div className="bg-[#0d0d0e] p-4 rounded-xl border border-white/5">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Win/Lose Messages</h4>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[10px] font-mono">
						<div className="text-green-400">
							{"{{answer}}"}
							<span className="block text-gray-600 mt-1">The correct button label (e.g., "Truth")</span>
						</div>
						<div className="text-green-400">
							{"{{time}}"}
							<span className="block text-gray-600 mt-1">How long it took to answer</span>
						</div>
						<div className="text-green-400">
							{"{{author}}"}
							<span className="block text-gray-600 mt-1">The ID of the user playing</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

const NeverHaveIEverDoc = () => (
	<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
		<header className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest">
					Minigame
				</span>
			</div>
			<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Never Have I Ever</h1>
			<p className="text-lg text-gray-400 leading-relaxed">
				A digital twist on the classic party game. Weky fetches a random "harmless" statement from an external API, and
				the user must admit if they have done it or not using interactive buttons.
			</p>
		</header>

		{/* --- QUICK START --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
			<CodeBlock
				language="typescript"
				code={`await weky.createNeverHaveIEver({
    context: interaction,
    embed: {
        title: "Never Have I Ever...",
        color: "#E91E63", // Pink
        footer: "Be honest!"
    },
    buttons: {
        optionA: "I Have",
        optionB: "I Have Not"
    }
});`}
			/>
		</section>

		{/* --- MECHANICS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">External API Integration</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						The game fetches questions from <code>api.nhie.io</code>. It specifically requests the
						<strong>"harmless"</strong> category to ensure all questions are safe for public Discord servers and conform
						to ToS.
					</p>
				</div>

				<div className="p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-colors">
					<h4 className="text-white font-bold mb-2 flex items-center gap-2">Interaction Flow</h4>
					<p className="text-xs text-gray-400 leading-relaxed">
						Only the user who started the command can answer. Once they click "Yes" or "No", the buttons update to show
						their choice (e.g., "Yes (Yes)") and become disabled to prevent changing answers.
					</p>
				</div>
			</div>
		</section>

		{/* --- CONFIGURATION --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-4">Configuration (NeverHaveIEverTypes)</h2>
			<PropsTable
				data={[
					{ name: "context", type: "Context", desc: "The interaction or message triggering the game." },
					{ name: "embed", type: "Embeds", desc: "Base embed configuration (title, color, etc)." },
					{ name: "buttons", type: "object", desc: "Custom labels for options. Defaults to 'Yes' and 'No'." },
					{
						name: "thinkMessage",
						type: "string",
						desc: "Message shown while fetching the API (Default: 'I am thinking').",
					},
					{ name: "othersMessage", type: "string", desc: "Warning shown if other users try to click buttons." },
					{ name: "time", type: "number", desc: "Time limit in ms (default: 60,000)." },
				]}
			/>
		</section>

		{/* --- PLACEHOLDERS --- */}
		<section className="mb-16">
			<h2 className="text-2xl font-bold text-white mb-6">Placeholders</h2>
			<div className="space-y-4">
				<div className="bg-[#0d0d0e] p-4 rounded-xl border border-white/5">
					<h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Others Message</h4>
					<div className="grid grid-cols-1 gap-2 text-[10px] font-mono">
						<div className="text-pink-400">
							{"{{author}}"}
							<span className="text-gray-600 ml-2">- The ID of the user allowed to play</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

const contentMap: Record<string, React.FC> = {
	installation: Installation,
	"api-key": APIKey,
	initialization: Initialization,
	"weky-manager": WekyManagerDoc,
	"network-manager": NetworkManagerDoc,
	"game-2048": Game2048Doc,
	"game-calculator": CalculatorDoc,
	"game-chaos-words": ChaosWordsDoc,
	"game-fast-type": FastTypeDoc,
	"game-fight": GameFightDoc,
	"game-number": GuessTheNumberDoc,
	"game-pokemon": GuessThePokemonDoc,
	"game-hangman": HangmanDoc,
	"game-lie-swatter": LieSwatterDoc,
	"game-nhie": NeverHaveIEverDoc,
};

export default function DocsContent() {
	const { slug } = useParams();

	if (!slug) return <Navigate to="/docs/installation" replace />;

	const Component = contentMap[slug];

	if (!Component) {
		return (
			<div className="py-20 text-center">
				<h1 className="text-6xl font-bold text-white mb-4">404</h1>
				<p className="text-gray-400">
					The documentation page <code className="text-purple-400">{slug}</code> does not exist.
				</p>
			</div>
		);
	}

	return <Component />;
}
