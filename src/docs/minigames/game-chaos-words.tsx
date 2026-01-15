import { WholeWord, Code2, MessageSquare, Timer, Eye, Shuffle, AlertTriangle, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsChaosWords() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium mb-6">
					<WholeWord className="w-3 h-3" />
					Word Puzzle
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Chaos <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-orange-400">Words</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A fast-paced puzzle game where players must find hidden words inside a scrambled string of characters. Great
					for testing observation skills!
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
							code={`await client.wekyManager.createChaosWords({
    context: interaction,
    embed: {
        title: "Find the Words!",
        color: "#FF5733"
    },
    // Optional: Leave empty to fetch random words from API
    words: ["discord", "javascript", "bot"], 
    maxTries: 5,
    charGenerated: 20 // Length of random noise characters
});`}
						/>
					</div>
				</div>
			</section>

			{/* GAME MECHANICS */}
			<section className="mb-20">
				<SectionHeader icon={Eye} title="How it Works" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6">
						<div className="flex items-center gap-2 mb-4 text-gray-400 text-sm font-mono uppercase tracking-wider">
							<Shuffle className="w-4 h-4" /> The "Chaos String"
						</div>

						{/* String Visualization */}
						<div className="p-4 rounded bg-[#1e1e1e] border border-white/5 font-mono text-center text-lg tracking-widest break-all text-gray-500 mb-2">
							xkl<span className="text-white font-bold bg-white/10 rounded px-0.5">discord</span>pwq
							<span className="text-white font-bold bg-white/10 rounded px-0.5">bot</span>az
						</div>
						<p className="text-xs text-gray-500 text-center mb-6">Words are randomly inserted into a noise string.</p>

						{/* Chat Interaction */}
						<div className="space-y-3">
							<div className="flex gap-3">
								<div className="w-8 h-8 rounded-full bg-blue-500/20" />
								<div className="flex-1">
									<div className="h-2 w-16 bg-white/10 rounded mb-1" />
									<div className="p-2 rounded bg-[#2b2d31] text-gray-300 text-sm inline-block">discord</div>
								</div>
							</div>
							<div className="flex gap-3 justify-end">
								<div className="flex-1 text-right">
									<div className="h-2 w-24 bg-purple-500/20 rounded mb-1 ml-auto" />
									<div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs inline-block">
										✅ Correct! <strong>discord</strong> was found.
									</div>
								</div>
								<div className="w-8 h-8 rounded-full bg-purple-500/20" />
							</div>
						</div>
					</div>

					{/* Mechanics List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
								<MessageSquare className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Chat-Based Input</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Players type their guesses directly into the chat. The bot listens, verifies, and deletes the message
									to keep the channel clean.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-orange-500/10 text-orange-400">
								<AlertTriangle className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Mistake Limiter</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									You can set a <code>maxTries</code> limit. If the user guesses wrong too many times, the game ends
									automatically.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Timer className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Time Pressure</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Configurable <code>time</code> limit adds pressure. If they don't find all words before the timer runs
									out, they lose.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
