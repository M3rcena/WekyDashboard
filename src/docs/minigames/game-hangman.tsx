import { Code2, Type, Image as ImageIcon, Skull, Timer, AlertTriangle, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsHangman() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium mb-6">
					<Skull className="w-3 h-3" />
					Word Game
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Hangman{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-orange-400">Minigame</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					The classic word-guessing game. Players suggest letters to reveal a hidden word before the stick figure
					drawing is complete.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-red-600 to-orange-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createHangman({
    context: interaction,
    embed: {
        title: "Hangman Challenge",
        color: "#E74C3C"
    },
    time: 180000, // 3 minutes to guess
    quitButton: "Give Up",
    states: {
        won: "🎉 You saved him! The word was **{{word}}**.",
        lost: "💀 He's gone... The word was **{{word}}**."
    }
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={ImageIcon} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Drawing */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden">
						<div className="absolute top-0 right-0 p-4 opacity-10">
							<Skull className="w-24 h-24 text-red-500" />
						</div>

						<div className="relative z-10 flex flex-col items-center">
							<h3 className="font-bold text-white mb-6">Dynamic Drawing</h3>

							{/* Stick Figure Stages */}
							<div className="grid grid-cols-4 gap-4 mb-6 w-full">
								<div className="aspect-square bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs text-gray-600">
									Stage 1
								</div>
								<div className="aspect-square bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs text-gray-600">
									Stage 3
								</div>
								<div className="aspect-square bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs text-gray-600">
									Stage 5
								</div>
								<div className="aspect-square bg-red-500/10 rounded border border-red-500/30 flex items-center justify-center text-xs text-red-400 font-bold">
									Dead
								</div>
							</div>

							<div className="w-full p-3 bg-[#2b2d31] rounded-lg border border-white/10 text-center">
								<div className="text-2xl font-mono tracking-widest text-white mb-2">D I S C _ R D</div>
								<div className="text-xs text-gray-500">
									Wrong: <span className="text-red-400">X, Z, Q</span>
								</div>
							</div>
						</div>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Type className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Single-Letter Input</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The game automatically filters chat messages. It only accepts single letters (A-Z) and ignores
									sentences or numbers.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-orange-500/10 text-orange-400">
								<AlertTriangle className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">State Tracking</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Tracks correct letters, incorrect guesses, and the "life" of the hangman. The API regenerates the
									image after every mistake.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<Timer className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Auto-Cleanup</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									To keep the chat clean, the bot automatically attempts to delete player guess messages after
									processing them.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
