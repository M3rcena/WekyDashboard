import {
	Grid3x3,
	Code2,
	LayoutTemplate,
	BoxSelect,
	Gamepad2,
	ArrowUp,
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	Ban,
	type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function Docs2048() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-medium mb-6">
					<Grid3x3 className="w-3 h-3" />
					Puzzle Game
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					2048{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">Minigame</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					The classic sliding tile puzzle, fully integrated into Discord. Features real-time image generation of the
					board state and customizable emoji controls.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-yellow-600 to-orange-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`// In your command file
await client.wekyManager.create2048({
    context: interaction,
    embed: {
        title: "2048 Challenge",
        color: "#F1C40F"
    },
    emojis: {
        up: "🔼",
        down: "🔽",
        left: "◀️",
        right: "▶️"
    },
    time: 60000 // 1 minute timeout
});`}
						/>
					</div>
				</div>
			</section>

			{/* VISUALIZER GRID */}
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
				{/* Control Scheme Visualizer */}
				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 flex flex-col items-center">
					<div className="flex items-center gap-2 mb-6 text-gray-400 text-sm font-mono uppercase tracking-wider">
						<Gamepad2 className="w-4 h-4" /> Control Layout
					</div>

					{/* Simulated Discord Button Rows */}
					<div className="space-y-3">
						{/* Row 1 */}
						<div className="flex gap-2">
							<div className="w-12 h-10 rounded bg-[#2b2d31] border border-[#1e1f22] opacity-50 flex items-center justify-center text-gray-600">
								<Ban className="w-4 h-4" />
							</div>
							<div className="w-12 h-10 rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-white shadow-lg hover:bg-[#6d6f78] transition-colors">
								<ArrowUp className="w-5 h-5" />
							</div>
							<div className="w-12 h-10 rounded bg-[#2b2d31] border border-[#1e1f22] opacity-50 flex items-center justify-center text-gray-600">
								<Ban className="w-4 h-4" />
							</div>
							<div className="w-16 h-10 rounded bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xs uppercase hover:bg-red-500/30 transition-colors">
								Quit
							</div>
						</div>
						{/* Row 2 */}
						<div className="flex gap-2">
							<div className="w-12 h-10 rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-white shadow-lg hover:bg-[#6d6f78] transition-colors">
								<ArrowLeft className="w-5 h-5" />
							</div>
							<div className="w-12 h-10 rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-white shadow-lg hover:bg-[#6d6f78] transition-colors">
								<ArrowDown className="w-5 h-5" />
							</div>
							<div className="w-12 h-10 rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-white shadow-lg hover:bg-[#6d6f78] transition-colors">
								<ArrowRight className="w-5 h-5" />
							</div>
						</div>
					</div>

					<p className="mt-6 text-xs text-gray-500 text-center max-w-xs">
						The manager automatically constructs this button grid. You can customize the emojis, but the layout is fixed
						for optimal usability.
					</p>
				</div>

				{/* Features List */}
				<div className="grid grid-cols-1 gap-4">
					<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
						<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
							<LayoutTemplate className="w-5 h-5" />
						</div>
						<div>
							<h3 className="font-bold text-white text-sm mb-1">Image Generation</h3>
							<p className="text-xs text-gray-400 leading-relaxed">
								The board isn't text—it's a dynamically generated image generated by the Weky API, ensuring it looks
								great on both Desktop and Mobile.
							</p>
						</div>
					</div>

					<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
						<div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
							<BoxSelect className="w-5 h-5" />
						</div>
						<div>
							<h3 className="font-bold text-white text-sm mb-1">Score Tracking</h3>
							<p className="text-xs text-gray-400 leading-relaxed">
								Score updates in real-time in the message content. The game automatically detects "Game Over" and
								"Victory" states.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
