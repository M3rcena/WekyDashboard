import { Bug, Code2, Check, Globe, Zap, Timer, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsLieSwatter() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Bug className="w-3 h-3" />
					Trivia
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Lie{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Swatter</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A rapid-fire True or False game. The bot fetches random boolean trivia questions from the Open Trivia Database
					(OpenTDB), and players must swat the lies!
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
							code={`await client.wekyManager.createLieSwatter({
    context: interaction,
    embed: {
        title: "Truth or Lie?",
        color: "#9B59B6"
    },
    buttons: { 
        true: "Truth", 
        lie: "Lie" 
    },
    winMessage: "Nice! It was a **{{answer}}**.",
    loseMessage: "Wrong! It was actually a **{{answer}}**.",
    time: 60000
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Zap} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The UI Card */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden flex flex-col items-center justify-center">
						<div className="w-full max-w-sm bg-[#2b2d31] rounded-lg p-4 border border-white/5 mb-4 shadow-xl">
							<div className="flex items-center gap-2 mb-2 text-purple-400 font-bold text-sm">
								<Bug className="w-4 h-4" /> Truth or Lie?
							</div>
							<p className="text-white text-sm font-medium leading-relaxed">"The capital of Australia is Sydney."</p>
							<div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
								Is this statement <strong>True</strong> or a <strong>Lie</strong>?
							</div>
						</div>

						<div className="flex gap-3 w-full max-w-sm">
							<div className="flex-1 h-10 rounded bg-[#5865F2] flex items-center justify-center text-white text-sm font-bold shadow-lg hover:brightness-110 cursor-default">
								Truth
							</div>
							<div className="flex-1 h-10 rounded bg-[#5865F2] flex items-center justify-center text-white text-sm font-bold shadow-lg hover:brightness-110 cursor-default">
								Lie
							</div>
						</div>

						{/* Result Overlay Simulator */}
						<div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
							<div className="bg-[#0d0d0e] border border-green-500/30 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
								<div className="p-2 bg-green-500/20 rounded-full text-green-400">
									<Check className="w-6 h-6" />
								</div>
								<div>
									<div className="text-green-400 font-bold text-sm">Correct!</div>
									<div className="text-xs text-gray-400">It was a Lie.</div>
								</div>
							</div>
						</div>
						<div className="absolute bottom-2 text-[10px] text-gray-600">Hover to see win state</div>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Globe className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">OpenTDB Integration</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Questions are fetched in real-time from the Open Trivia Database. The bot automatically handles HTML
									decoding for clean text.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<Check className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Instant Feedback</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									The moment a button is clicked, the game ends. The correct button turns <strong>Green</strong>, and
									the wrong one turns <strong>Grey</strong>.
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
									Players have a set time (default 60s) to decide. If they hesitate too long, the game ends
									automatically.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
