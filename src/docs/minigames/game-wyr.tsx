import { Split, Code2, BarChart2, Globe, Users, HelpCircle, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsWouldYouRather() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
					<Split className="w-3 h-3" />
					Social Choice
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Would You{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Rather?</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Present players with two difficult options and let them decide. Includes real-time global statistics to see if
					they belong to the majority or minority.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createWouldYouRather({
    context: interaction,
    embed: {
        title: "Tough Choice",
        color: "#5865F2"
    },
    buttons: {
        optionA: "Option 1",
        optionB: "Option 2"
    },
    thinkMessage: "Fetching a dilemma...",
    time: 60000
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Users} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The Choice Card */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden flex flex-col items-center">
						<div className="w-full bg-[#2b2d31] rounded-lg p-5 border border-white/5 mb-6 shadow-xl relative text-center">
							<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5865F2] px-3 py-1 text-[10px] text-white font-bold uppercase tracking-wider rounded-full shadow-lg">
								Scenario
							</div>
							<div className="mt-2 text-sm text-gray-300">
								<span className="text-white font-bold block mb-2">Option A</span>
								Always have to say everything on your mind
							</div>
							<div className="my-3 flex items-center justify-center gap-2 opacity-50">
								<div className="h-px bg-white/20 w-12" />
								<span className="text-[10px] uppercase font-bold text-gray-500">OR</span>
								<div className="h-px bg-white/20 w-12" />
							</div>
							<div className="text-sm text-gray-300">
								<span className="text-white font-bold block mb-2">Option B</span>
								Never be able to speak again
							</div>
						</div>

						<div className="flex gap-4 w-full max-w-sm">
							<div className="flex-1 h-10 rounded bg-[#5865F2] flex items-center justify-center text-white text-sm font-bold shadow-lg cursor-default hover:brightness-110 relative overflow-hidden group">
								<div className="absolute left-0 top-0 bottom-0 bg-black/20 w-[35%]" />
								<span className="relative z-10 flex justify-between w-full px-3">
									<span>Opt A</span>
									<span className="opacity-0 group-hover:opacity-100 transition-opacity">35%</span>
								</span>
							</div>
							<div className="flex-1 h-10 rounded bg-[#5865F2] flex items-center justify-center text-white text-sm font-bold shadow-lg cursor-default hover:brightness-110 relative overflow-hidden group">
								<div className="absolute left-0 top-0 bottom-0 bg-black/20 w-[65%]" />
								<span className="relative z-10 flex justify-between w-full px-3">
									<span>Opt B</span>
									<span className="opacity-0 group-hover:opacity-100 transition-opacity">65%</span>
								</span>
							</div>
						</div>
						<p className="mt-4 text-[10px] text-gray-500">*Hover buttons to simulate "Result" state</p>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Globe className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Live WYR API</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Questions are pulled dynamically from the <code>io.wyr.app</code> API, ensuring thousands of unique
									scenarios.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
								<BarChart2 className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Global Comparison</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									After choosing, the user is shown the percentage split of global votes. Did they make the popular
									choice?
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<HelpCircle className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Randomized Selection</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Uses a random page offset logic to minimize repeat questions and keep the game fresh.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
