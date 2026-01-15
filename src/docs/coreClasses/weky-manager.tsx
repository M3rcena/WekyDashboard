import { Cpu, Gamepad2, Wrench, BarChart3, Terminal, Zap, Shuffle, Clock, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

interface MethodCardProps {
	name: string;
	desc: string;
	special?: string;
}

const MethodCard = ({ name, desc, special }: MethodCardProps) => (
	<div className="group relative p-4 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300">
		<div className="flex items-center justify-between mb-2 gap-2">
			<code className="text-sm font-bold text-purple-300 font-mono truncate">.{name}()</code>
			{special && (
				<span className="shrink-0 whitespace-nowrap text-[10px] uppercase font-bold text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
					{special}
				</span>
			)}
		</div>
		<p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{desc}</p>
	</div>
);

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

// --- MAIN COMPONENT ---

export default function WekyManagerDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Cpu className="w-3 h-3" />
					Core Class
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Weky<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Manager</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					The central hub of the package. This class handles game initialization, options validation, and communication
					with the Weky License Server.
				</p>
			</header>

			{/* CONSTRUCTOR */}
			<section className="mb-20">
				<SectionHeader icon={Terminal} title="Constructor" />

				{/* Added 'items-start' to prevent codeblock from stretching vertically */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Code */}
					<div className="relative group">
						<div className="absolute -inset-px bg-linear-to-r from-purple-600 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
						<div className="relative rounded-xl overflow-hidden shadow-2xl">
							<CodeBlock
								className="my-0!"
								language="typescript"
								code={`const manager = new WekyManager(
    client, 
    process.env.WEKY_API_KEY, 
    true
);`}
							/>
						</div>
					</div>

					{/* Params */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e]">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-sm font-mono font-bold text-white">client</span>
								<span className="text-xs text-purple-400 bg-purple-500/10 px-1.5 rounded">Discord.Client</span>
							</div>
							<p className="text-xs text-gray-400">Your active Discord.js client instance.</p>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e]">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-sm font-mono font-bold text-white">apiKey</span>
								<span className="text-xs text-purple-400 bg-purple-500/10 px-1.5 rounded">string</span>
							</div>
							<p className="text-xs text-gray-400">The API Key generated from the Weky Dashboard.</p>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e]">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-sm font-mono font-bold text-white">notifyUpdates</span>
								<span className="text-xs text-purple-400 bg-purple-500/10 px-1.5 rounded">boolean</span>
							</div>
							<p className="text-xs text-gray-400">
								If true, logs a console message when a new npm version is available.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* GAME REGISTRY */}
			<section className="mb-20">
				<SectionHeader icon={Gamepad2} title="Game Methods" />
				<p className="text-sm text-gray-400 mb-6">
					Call these methods on your <code className="text-purple-300">client.wekyManager</code> instance to start a
					game. Each method accepts its specific options object.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<MethodCard name="create2048" desc="Classic sliding tile puzzle." />
					<MethodCard name="createCalculator" desc="Fully functional GUI calculator." />
					<MethodCard name="createChaosWords" desc="Unscramble the word." />
					<MethodCard name="createFastType" desc="Type the sentence fastest." special="INTENT" />
					<MethodCard name="createFight" desc="Turn-based RPG battle." />
					<MethodCard name="createGuessTheNumber" desc="High/Low number guessing." />
					<MethodCard name="createGuessThePokemon" desc="Identify the silhouette." />
					<MethodCard name="createHangman" desc="Guess the word before the stickman falls." />
					<MethodCard name="createLieSwatter" desc="True or False trivia." />
					<MethodCard name="createNeverHaveIEver" desc="Social voting game." />
					<MethodCard name="createQuickClick" desc="Reaction time test." />
					<MethodCard name="createShuffleGuess" desc="Guess word from shuffled letters." />
					<MethodCard name="createSnake" desc="Classic snake arcade game." />
					<MethodCard name="createWillYouPressTheButton" desc="Dilemma decision game." />
					<MethodCard name="createWouldYouRather" desc="Difficult choice voting." />
				</div>
			</section>

			{/* UTILITIES & TOOLS */}
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
				{/* Stats */}
				<div>
					<SectionHeader icon={BarChart3} title="Statistics" />
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 h-full">
						<div className="flex items-center justify-between mb-4">
							<code className="text-lg font-bold text-white">.getUsage()</code>
							<span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
								Async
							</span>
						</div>
						<p className="text-sm text-gray-400 mb-6 leading-relaxed">
							Fetches the bot's usage statistics from the API, including total games played and requests made.
						</p>
						<CodeBlock
							className="my-0!"
							language="typescript"
							// Manually broke the line to fit 2-col layout
							code={`// Get stats from API
const stats = await client
    .wekyManager.getUsage();`}
						/>
					</div>
				</div>

				{/* Developer Toolkit */}
				<div>
					<SectionHeader icon={Wrench} title="Developer Toolkit" />
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] divide-y divide-white/5">
						<div className="p-4 flex gap-4">
							<div className="mt-1 text-purple-400">
								<Clock className="w-5 h-5" />
							</div>
							<div>
								<code className="text-sm text-white font-bold block mb-1">.convertTime(ms)</code>
								<p className="text-xs text-gray-500">Converts milliseconds to human readable string.</p>
								<div className="text-[10px] text-gray-600 font-mono mt-1">Ex: "1 day, 2 hours"</div>
							</div>
						</div>

						<div className="p-4 flex gap-4">
							<div className="mt-1 text-purple-400">
								<Shuffle className="w-5 h-5" />
							</div>
							<div>
								<code className="text-sm text-white font-bold block mb-1">.shuffleString(str)</code>
								<p className="text-xs text-gray-500">Randomizes the characters in a string.</p>
							</div>
						</div>

						<div className="p-4 flex gap-4">
							<div className="mt-1 text-purple-400">
								<Zap className="w-5 h-5" />
							</div>
							<div>
								<code className="text-sm text-white font-bold block mb-1">.getRandomString(len)</code>
								<p className="text-xs text-gray-500">Generates a random ID string prefixed with "weky_".</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
