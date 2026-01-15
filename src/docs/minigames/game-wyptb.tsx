import { HelpCircle, Code2, Scale, BarChart3, Zap, Globe, Check, X, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsWillYouPressTheButton() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium mb-6">
					<Scale className="w-3 h-3" />
					Dilemma Game
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Will You Press The{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-orange-400">Button?</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A game of difficult choices. Users are presented with a tempting benefit and a harsh consequence. They must
					decide... is it worth it?
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
							code={`await client.wekyManager.createWillYouPressTheButton({
    context: interaction,
    embed: {
        title: "The Big Red Button",
        color: "#FF5733"
    },
    button: {
        yes: "Push it! 🔴",
        no: "No way! 🚫"
    },
    thinkMessage: "Generating a dilemma...",
    yesPress: "You pressed it! Let's hope it was worth it.",
    noPress: "You walked away safely."
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Zap} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Dilemma Card */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden flex flex-col items-center">
						<div className="w-full bg-[#2b2d31] rounded-lg p-5 border border-white/5 mb-6 shadow-xl relative">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0e] px-2 text-xs text-gray-500 font-bold uppercase tracking-wider border border-white/10 rounded-full">
								Scenario
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex items-start gap-3">
									<div className="mt-1 p-1 rounded bg-green-500/10 text-green-400">
										<Check className="w-4 h-4" />
									</div>
									<p className="text-sm text-gray-300">You become invisible at will.</p>
								</div>
								<div className="h-px bg-white/5 w-full" />
								<div className="flex items-start gap-3">
									<div className="mt-1 p-1 rounded bg-red-500/10 text-red-400">
										<X className="w-4 h-4" />
									</div>
									<p className="text-sm text-gray-300">But you must sneeze loudly every 5 minutes.</p>
								</div>
							</div>
						</div>

						<div className="flex gap-4 w-full max-w-sm">
							<div className="flex-1 h-10 rounded bg-[#57F287] flex items-center justify-center text-black text-sm font-bold shadow-lg cursor-default hover:brightness-110">
								Push it! (52%)
							</div>
							<div className="flex-1 h-10 rounded bg-[#ED4245] flex items-center justify-center text-white text-sm font-bold shadow-lg cursor-default hover:brightness-110">
								No way! (48%)
							</div>
						</div>
						<p className="mt-4 text-[10px] text-gray-500">*Percentages reveal after choice</p>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Globe className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Live Data</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Dilemmas are fetched from the Weky API database, ensuring a vast variety of scenarios.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
								<BarChart3 className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Global Stats</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									After choosing, the user sees what percentage of people globally agreed with them.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
								<HelpCircle className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Specific IDs</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									You can fetch a specific dilemma by ID using the <code>getWillYouPressTheButtonID()</code> method in
									NetworkManager.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
