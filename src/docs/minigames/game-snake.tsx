import {
	Grid3x3,
	Code2,
	Gamepad2,
	ArrowUp,
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	Ban,
	Image as ImageIcon,
	Skull,
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

export default function DocsSnake() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium mb-6">
					<Grid3x3 className="w-3 h-3" />
					Arcade Game
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Snake{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">Minigame</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					The legendary Nokia classic. Control a snake on a dynamic grid, eat food, and grow longer without hitting
					walls or yourself.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-green-600 to-emerald-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createSnake({
    context: interaction,
    embed: {
        title: "Snek 🐍",
        color: "#2ECC71"
    },
    emojis: {
        up: "⬆️",
        down: "⬇️",
        left: "⬅️",
        right: "➡️"
    },
    time: 300000, // 5 minutes session limit
    othersMessage: "Start your own game!"
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Gamepad2} title="Game Interface" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Controller */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 flex flex-col items-center">
						<div className="flex items-center gap-2 mb-6 text-gray-400 text-sm font-mono uppercase tracking-wider">
							<Gamepad2 className="w-4 h-4" /> D-Pad Controls
						</div>

						{/* Simulated D-Pad */}
						<div className="space-y-3">
							<div className="flex gap-2">
								<div className="w-12 h-10 rounded bg-[#2b2d31] border border-[#1e1f22] opacity-50 flex items-center justify-center text-gray-600">
									<Ban className="w-4 h-4" />
								</div>
								<div className="w-12 h-10 rounded bg-[#5865F2] border border-white/10 flex items-center justify-center text-white shadow-lg hover:brightness-110 cursor-default">
									<ArrowUp className="w-5 h-5" />
								</div>
								<div className="w-12 h-10 rounded bg-[#2b2d31] border border-[#1e1f22] opacity-50 flex items-center justify-center text-gray-600">
									<Ban className="w-4 h-4" />
								</div>
								<div className="w-12 h-10 rounded bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xs uppercase cursor-default">
									Quit
								</div>
							</div>
							<div className="flex gap-2">
								<div className="w-12 h-10 rounded bg-[#5865F2] border border-white/10 flex items-center justify-center text-white shadow-lg hover:brightness-110 cursor-default">
									<ArrowLeft className="w-5 h-5" />
								</div>
								<div className="w-12 h-10 rounded bg-[#5865F2] border border-white/10 flex items-center justify-center text-white shadow-lg hover:brightness-110 cursor-default">
									<ArrowDown className="w-5 h-5" />
								</div>
								<div className="w-12 h-10 rounded bg-[#5865F2] border border-white/10 flex items-center justify-center text-white shadow-lg hover:brightness-110 cursor-default">
									<ArrowRight className="w-5 h-5" />
								</div>
							</div>
						</div>

						<p className="mt-6 text-xs text-gray-500 text-center max-w-xs">
							The game uses disabled buttons as spacers to create a perfect directional pad layout.
						</p>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<ImageIcon className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Dynamic Rendering</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Every move generates a new image frame on the server. This allows for smooth, cheat-proof gameplay
									that works on all devices.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
								<Skull className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Collision Detection</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The backend tracks the snake's body coordinates. Hitting a wall or biting your own tail instantly
									triggers a Game Over.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Gamepad2 className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Persistent Session</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The game state is stored via <code>NetworkManager</code>, preventing data loss if multiple games are
									running simultaneously.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
