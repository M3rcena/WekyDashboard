import {
	Keyboard,
	Zap,
	AlertTriangle,
	MessageSquare,
	Timer,
	Settings2,
	ShieldAlert,
	type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR CONFIG ROW ---
interface ConfigRowProps {
	property: string;
	type: string;
	desc: string;
	defaultVal?: string;
	icon?: LucideIcon;
}

// --- HELPER COMPONENT ---
const ConfigRow = ({ property, type, desc, defaultVal, icon: Icon }: ConfigRowProps) => (
	<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="sm:w-52 shrink-0">
			<div className="flex items-center gap-2 mb-1">
				{Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
				<span className="font-mono text-sm font-bold text-white">{property}</span>
			</div>
			<span className="text-[10px] font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
				{type}
			</span>
		</div>
		<div className="flex-1">
			<p className="text-sm text-gray-400 leading-relaxed mb-1">{desc}</p>
			{defaultVal && (
				<div className="text-[10px] text-gray-600 font-mono">
					Default: <span className="text-gray-500">{defaultVal}</span>
				</div>
			)}
		</div>
	</div>
);

export default function TypesFastType() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Keyboard className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Fast Type Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					Configuration for the Fast Type game. Players must type a sentence exactly as shown within the time limit.
					Includes built-in difficulty scaling and anti-cheat mechanisms.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface FastTypeTypes {
    context: Context;
    embed: Partial<Pick<Embeds, "title" | "color">>;

    // Game Logic
    sentence?: string;
    difficulty?: "easy" | "medium" | "hard";
    time?: number;

    // Result Messages (Chat)
    winMessage?: string;
    loseMessage?: string;
    timeoutMessage?: string;
    cheatMessage?: string;
    failedFetchError?: string;

    // Embed State Labels
    states?: {
        loading?: string;
        active?: string;
        won?: string;
        lost?: string;
        cheat?: string;
        timeout?: string;
        cancelled?: string;
        error?: {
            main?: string;
            details?: string;
        };
    };

    cancelButton?: string;
}`}
				/>
			</section>

			{/* --- SECTION 2: GAMEPLAY SETTINGS --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Settings2 className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Core Logic</h3>
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="sentence"
							type="string"
							desc="Custom text for the user to type. If provided, difficulty is ignored."
							icon={MessageSquare}
						/>
						<ConfigRow
							property="difficulty"
							type="'easy' | 'medium' | 'hard'"
							desc="Determines length/complexity of the fetched sentence if no custom sentence is provided."
							defaultVal="medium"
							icon={Zap}
						/>
						<ConfigRow
							property="time"
							type="number"
							desc="Time limit in milliseconds to complete the sentence."
							defaultVal="60000ms"
							icon={Timer}
						/>
					</div>
				</div>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<ShieldAlert className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Anti-Cheat System</h3>
					</div>
					<div className="p-6">
						<div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
							<div className="flex items-start gap-3">
								<AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
								<div>
									<h4 className="text-sm font-bold text-white mb-1">Copy-Paste Detection</h4>
									<p className="text-xs text-gray-400 leading-relaxed">
										Weky automatically calculates the minimum humanly possible time to type the sentence. If a user
										replies faster than this threshold, they are flagged as cheating.
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<div className="flex flex-col gap-1">
								<span className="font-mono text-xs font-bold text-white">cheatMessage</span>
								<span className="text-xs text-gray-500">The text sent to chat when cheating is detected.</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="font-mono text-xs font-bold text-white">states.cheat</span>
								<span className="text-xs text-gray-500">The description shown in the embed when cheating occurs.</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: MESSAGING SYSTEM --- */}
			<section>
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">State Messages</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<p className="text-sm text-gray-400 mb-6 max-w-2xl">
					Fast Type distinguishes between <strong>Chat Messages</strong> (sent as a new message) and
					<strong>Embed States</strong> (updates the original game embed).
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Chat Responses */}
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
							<MessageSquare className="w-3 h-3" /> Chat Responses
						</h4>
						<ul className="space-y-3">
							<li className="p-3 bg-white/5 rounded border border-white/5">
								<div className="font-mono text-xs text-white mb-1">winMessage</div>
								<div className="text-[10px] text-gray-500">Sent when user types correctly within time.</div>
							</li>
							<li className="p-3 bg-white/5 rounded border border-white/5">
								<div className="font-mono text-xs text-white mb-1">loseMessage</div>
								<div className="text-[10px] text-gray-500">Sent when user makes a typo.</div>
							</li>
							<li className="p-3 bg-white/5 rounded border border-white/5">
								<div className="font-mono text-xs text-white mb-1">timeoutMessage</div>
								<div className="text-[10px] text-gray-500">Sent when time runs out.</div>
							</li>
						</ul>
					</div>

					{/* Embed Updates */}
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
							<Settings2 className="w-3 h-3" /> Embed Descriptions
						</h4>
						<div className="grid grid-cols-1 gap-2">
							{[
								{ k: "states.loading", v: "Shown while fetching the sentence." },
								{ k: "states.active", v: "Shown while the game is running." },
								{ k: "states.won", v: "Embed update on victory." },
								{ k: "states.lost", v: "Embed update on defeat." },
								{ k: "states.timeout", v: "Embed update on timeout." },
								{ k: "states.cancelled", v: "Embed update on manual cancel." },
							].map((item, i) => (
								<div
									key={i}
									className="flex justify-between items-center text-xs py-1.5 border-b border-white/5 last:border-0"
								>
									<span className="font-mono text-gray-300">{item.k}</span>
									<span className="text-gray-600">{item.v}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
