import { MousePointer2, Code2, Grid3x3, Zap, Clock, Users, PlayCircle, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsQuickClick() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
					<MousePointer2 className="w-3 h-3" />
					Reaction Game
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Quick <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Click</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Test your reaction speed! A random button in a 5x5 grid activates, and the first person to click it wins.
					Fully customized with Discord buttons.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createQuickClick({
    context: interaction,
    embed: {
        title: "Fastest Finger First",
        color: "#3498DB"
    },
    emoji: "🔥", // The target button emoji
    time: 10000, // Time to react
    waitMessage: "Wait for it...",
    startMessage: "CLICK THE 🔥 NOW!"
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={PlayCircle} title="How it Works" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Grid */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative flex flex-col items-center">
						<div className="flex items-center gap-2 mb-6 text-gray-400 text-sm font-mono uppercase tracking-wider">
							<Grid3x3 className="w-4 h-4" /> 5x5 Grid Layout
						</div>

						{/* Button Grid Simulation */}
						<div className="grid grid-cols-5 gap-2 mb-6">
							{/* Row 1 - Disabled */}
							{[...Array(5)].map((_, i) => (
								<div key={`r1-${i}`} className="w-10 h-8 rounded bg-[#2b2d31] border border-white/5 opacity-50" />
							))}
							{/* Row 2 - Active Button at index 2 */}
							<div className="w-10 h-8 rounded bg-[#2b2d31] border border-white/5 opacity-50" />
							<div className="w-10 h-8 rounded bg-[#2b2d31] border border-white/5 opacity-50" />
							<div className="w-10 h-8 rounded bg-[#5865F2] border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(88,101,242,0.5)] animate-pulse cursor-pointer hover:scale-110 transition-transform">
								<span className="text-lg">🔥</span>
							</div>
							<div className="w-10 h-8 rounded bg-[#2b2d31] border border-white/5 opacity-50" />
							<div className="w-10 h-8 rounded bg-[#2b2d31] border border-white/5 opacity-50" />
							{/* Remaining Rows */}
							{[...Array(15)].map((_, i) => (
								<div key={`rem-${i}`} className="w-10 h-8 rounded bg-[#2b2d31] border border-white/5 opacity-50" />
							))}
						</div>

						<p className="text-xs text-center text-gray-500 max-w-xs">
							24 buttons remain disabled. 1 button activates randomly.
						</p>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
								<Zap className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Randomized Delay</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The game doesn't start immediately. There is a random "Wait" period (1-5 seconds) to prevent
									pre-clicking and build tension.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<Clock className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Reaction Stats</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Upon winning, the bot calculates and displays exactly how long it took the user to react (e.g.,
									"0.45s").
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
								<Users className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Anti-Spam</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The manager enforces strict concurrency limits. Only one game per channel and one game per user can be
									active at a time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
