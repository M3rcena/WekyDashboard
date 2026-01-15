import { Keyboard, Code2, Zap, ShieldCheck, Clock, AlertTriangle, CheckCircle2, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsFastType() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-6">
					<Keyboard className="w-3 h-3" />
					Typing Test
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Fast <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">Type</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A competitive speed-typing game. Players must accurately type a sentence before time runs out. Calculates WPM
					(Words Per Minute) and includes anti-cheat protection.
				</p>
			</header>

			{/* CRITICAL WARNING - INTENTS */}
			<section className="mb-12">
				<div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 flex items-start gap-4">
					<div className="p-3 rounded-full bg-yellow-500/10 text-yellow-400 shrink-0">
						<AlertTriangle className="w-6 h-6" />
					</div>
					<div>
						<h3 className="text-white font-bold mb-2">Required Gateway Intent</h3>
						<p className="text-sm text-gray-400 leading-relaxed mb-4">
							This game relies on the <code className="text-yellow-300 bg-yellow-500/10 px-1 rounded">typingStart</code>{" "}
							event to detect cheating. You <strong>must</strong> enable the <code>GuildMessageTyping</code> intent in
							your client constructor.
						</p>
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageTyping // REQUIRED!
    ]
});`}
						/>
					</div>
				</div>
			</section>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-cyan-600 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createFastType({
    context: interaction,
    embed: {
        title: "Speed Test",
        color: "#3498DB"
    },
    sentence: "The quick brown fox jumps over the lazy dog.", // Optional
    difficulty: "hard", // Used if no sentence is provided
    time: 60000,
    winMessage: "GG! You typed at **{{wpm}} WPM**!"
});`}
						/>
					</div>
				</div>
			</section>

			{/* MECHANICS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Zap} title="Game Mechanics" />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* WPM Calc */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e]">
						<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
							<Clock className="w-6 h-6" />
						</div>
						<h3 className="font-bold text-white mb-2">WPM Calculation</h3>
						<p className="text-xs text-gray-400 leading-relaxed">
							Calculates Words Per Minute using the standard formula: <code>(Characters / 5) / Minutes</code>. Results
							are accurate to 2 decimal places.
						</p>
					</div>

					{/* Anti-Cheat */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e]">
						<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4">
							<ShieldCheck className="w-6 h-6" />
						</div>
						<h3 className="font-bold text-white mb-2">Anti-Cheat System</h3>
						<p className="text-xs text-gray-400 leading-relaxed">
							Prevents copy-pasting by verifying that the user triggered a{" "}
							<code className="text-gray-300">typingStart</code> event before sending their message.
						</p>
					</div>

					{/* Auto-Fetch */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e]">
						<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
							<CheckCircle2 className="w-6 h-6" />
						</div>
						<h3 className="font-bold text-white mb-2">Auto-Generated Text</h3>
						<p className="text-xs text-gray-400 leading-relaxed">
							If you don't provide a <code className="text-gray-300">sentence</code>, the game fetches a random text
							from the API based on the selected <code>difficulty</code>.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
