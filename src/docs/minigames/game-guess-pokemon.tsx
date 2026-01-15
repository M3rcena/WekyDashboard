import {
	HelpCircle,
	Code2,
	Ghost,
	Sparkles,
	Image as ImageIcon,
	Timer,
	Lightbulb,
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

export default function DocsGuessThePokemon() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Ghost className="w-3 h-3" />
					Trivia
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Guess The{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Pokémon</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					"Who's that Pokémon?" - A trivia game powered by the official <b>PokéAPI</b>. Players must identify the Pokémon
					based on its Type and Abilities.
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
							code={`await client.wekyManager.createGuessThePokemon({
    context: interaction,
    embed: {
        title: "Who's that Pokémon?",
        color: "#E74C3C"
    },
    time: 60000,
    winMessage: "You caught it! It was **{{answer}}**.",
    loseMessage: "The wild Pokémon fled! It was **{{answer}}**.",
    incorrectMessage: "Nope! Try again."
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Sparkles} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Clue Card */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden group">
						<div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent" />

						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-lg bg-[#2b2d31] flex items-center justify-center border border-white/10">
									<HelpCircle className="w-6 h-6 text-gray-500" />
								</div>
								<div>
									<h3 className="font-bold text-white">Wild Pokémon appeared!</h3>
									<p className="text-xs text-gray-400">Guess based on stats...</p>
								</div>
							</div>

							<div className="space-y-3 mb-6">
								<div className="p-3 rounded bg-white/5 border border-white/5">
									<div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Types</div>
									<div className="flex gap-2">
										<span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/30">
											fire
										</span>
										<span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
											flying
										</span>
									</div>
								</div>
								<div className="p-3 rounded bg-white/5 border border-white/5">
									<div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Abilities</div>
									<div className="text-sm text-white font-mono">blaze, solar-power</div>
								</div>
							</div>

							<div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-4">
								<span className="flex items-center gap-1">
									<Timer className="w-3 h-3" /> 60s Remaining
								</span>
								<span className="text-purple-400 font-bold">Type name in chat!</span>
							</div>
						</div>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
								<Ghost className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">PokéAPI Integration</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Fetches data dynamically for over 890+ Pokémon (Gen 1-8). Every game is different!
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<ImageIcon className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Image Reveal</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									When the game ends (Win or Lose), the bot automatically displays the high-res official artwork of the
									Pokémon.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
								<Lightbulb className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Smart Clues</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Uses <strong>Types</strong> and <strong>Abilities</strong> as hints. It hides the name and image until
									the end to prevent easy cheating.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
