import {
	HelpCircle,
	Code2,
	MessageSquare,
	Users,
	Globe,
	ThumbsUp,
	ThumbsDown,
	Timer,
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

export default function DocsNeverHaveIEver() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Users className="w-3 h-3" />
					Party Game
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Never Have I{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Ever</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A classic party starter. The bot fetches random "Never Have I Ever" statements, and players vote on whether
					they have done the deed or not.
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
							code={`await client.wekyManager.createNeverHaveIEver({
    context: interaction,
    embed: {
        title: "Never Have I Ever...",
        color: "#9B59B6"
    },
    buttons: {
        optionA: "I Have 😈",
        optionB: "I Have Not 😇"
    },
    thinkMessage: "Fetching a juicy question...",
    time: 60000
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={MessageSquare} title="Game Mechanics" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* Visualizer: The UI Card */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden flex flex-col items-center justify-center">
						<div className="w-full max-w-sm bg-[#2b2d31] rounded-lg p-6 border border-white/5 mb-6 shadow-xl text-center">
							<div className="flex justify-center mb-4 text-purple-400">
								<HelpCircle className="w-8 h-8" />
							</div>
							<p className="text-white text-lg font-medium leading-relaxed mb-2">
								"Never have I ever ghosted someone."
							</p>
						</div>

						<div className="flex gap-4 w-full max-w-sm">
							<div className="flex-1 h-12 rounded bg-[#5865F2] flex items-center justify-center text-white text-sm font-bold shadow-lg hover:brightness-110 cursor-default gap-2">
								<ThumbsUp className="w-4 h-4" /> I Have
							</div>
							<div className="flex-1 h-12 rounded bg-[#ED4245] flex items-center justify-center text-white text-sm font-bold shadow-lg hover:brightness-110 cursor-default gap-2">
								<ThumbsDown className="w-4 h-4" /> Never
							</div>
						</div>
					</div>

					{/* Features List */}
					<div className="space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
								<Globe className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">nhie.io API</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Questions are fetched dynamically from the <strong>nhie.io</strong> API (Category: Harmless). You get
									a fresh question every time.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
								<Users className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Interaction</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Only the person who started the command can click the buttons to reveal their truth. Other users can
									see the question but cannot interfere.
								</p>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-green-500/10 text-green-400">
								<Timer className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">Confession Time</h3>
								<p className="text-xs text-gray-400 leading-relaxed">
									Once a choice is made, the embed updates to show the player's confession: <br />
									<span className="text-green-400">✅ I have done this</span> or{" "}
									<span className="text-red-400">❌ I have never done this</span>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
