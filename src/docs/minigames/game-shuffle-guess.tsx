import { Shuffle, Code2, Type, RotateCw, Timer, XCircle, CheckCircle2, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsShuffleGuess() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Shuffle className="w-3 h-3" />
					Word Puzzle
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Shuffle{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Guess</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Unscramble the letters to find the hidden word! Features a "Reshuffle" button to randomize the letter order
					and help you visualize the answer.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createShuffleGuess({
    context: interaction,
    embed: {
        title: "Word Scramble",
        color: "#9B59B6"
    },
    word: "javascript", // Optional: Custom word
    time: 60000,
    startMessage: "Unscramble this: **{{word}}**",
    incorrectMessage: "Nope! Try again."
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={RotateCw} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Scramble */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative flex flex-col items-center">
						<div className="text-center mb-6">
							<h3 className="text-white font-bold mb-1">Target: "DISCORD"</h3>
							<p className="text-xs text-gray-500">How the player sees it:</p>
						</div>

						{/* Animated Scramble */}
						<div className="flex gap-2 mb-6">
							{["R", "O", "D", "S", "I", "C", "D"].map((char, i) => (
								<div
									key={i}
									className="w-8 h-10 rounded bg-[#2b2d31] border border-white/10 flex items-center justify-center text-white font-mono font-bold shadow-lg"
								>
									{char}
								</div>
							))}
						</div>

						<div className="flex gap-4 w-full max-w-xs">
							<div className="flex-1 h-9 rounded bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold gap-2 shadow-lg cursor-default hover:brightness-110">
								<RotateCw className="w-3 h-3" /> Reshuffle
							</div>
							<div className="flex-1 h-9 rounded bg-[#ED4245] flex items-center justify-center text-white text-xs font-bold gap-2 shadow-lg cursor-default hover:brightness-110">
								<XCircle className="w-3 h-3" /> Cancel
							</div>
						</div>

						<div className="mt-6 p-3 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2 w-full">
							<CheckCircle2 className="w-4 h-4" />
							<span>
								Type <strong>discord</strong> in chat to win!
							</span>
						</div>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<RotateCw className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Reshuffle Mechanic</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Stuck? Clicking <strong>Reshuffle</strong> randomly re-orders the scrambled letters without restarting
									the game, giving a fresh perspective.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<Type className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Random Words</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									If you don't provide a <code className="text-gray-300">word</code>, the game fetches a random one from
									the Weky API automatically.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
								<Timer className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Time Limit</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The game ends automatically if the time runs out. The correct word is revealed in the "Game Over"
									message.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
