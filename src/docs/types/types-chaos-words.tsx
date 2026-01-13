import {
	Shuffle,
	Clock,
	Type,
	List,
	CheckCircle,
	XCircle,
	AlertCircle,
	MessageSquare,
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
		<div className="sm:w-60 shrink-0">
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

export default function TypesChaosWords() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Shuffle className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Chaos Words Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					Configuration for the Chaos Words game. In this game, users must find words hidden inside a scrambled string
					of characters within a time limit.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface ChaosTypes {
    context: Context;
    embed: Partial<Pick<Embeds, "title" | "color">>;
    
    // Core Settings
    charGenerated?: number;
    words?: string[];
    maxTries?: number;
    time?: number;

    // Messages & Labels
    failedFetchMessage?: string;
    cancelButton?: string;
    wordAlreadyFound?: string;
    correctWord?: string;
    wrongWord?: string;

    // Detailed State Messages
    states?: {
        active?: string;
        correct?: string;
        wrong?: string;
        repeat?: string;
        timeout?: string;
        cancelled?: string;
        
        won?: { winMessage?: string; winContent?: string; };
        lost?: { loseMessage?: string; loseContent?: string; };

        // UI Labels
        chaosString?: string;
        missingWords?: string;
        tries?: string;
        timeRemaining?: string;
        wordsFound?: { main?: string; noneYet?: string; };
    };
}`}
				/>
			</section>

			{/* --- SECTION 2: GAME LOGIC --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Shuffle className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Logic Configuration</h3>
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="words"
							type="string[]"
							desc="An array of words to be hidden in the chaos string. If empty, words are fetched automatically."
							icon={List}
						/>
						<ConfigRow
							property="charGenerated"
							type="number"
							desc="The length of the random character string generated if no custom words are provided."
							defaultVal="20"
							icon={Type}
						/>
						<ConfigRow
							property="maxTries"
							type="number"
							desc="The maximum number of incorrect guesses allowed."
							defaultVal="10"
							icon={AlertCircle}
						/>
						<ConfigRow
							property="time"
							type="number"
							desc="Time limit in milliseconds."
							defaultVal="60000ms"
							icon={Clock}
						/>
					</div>
				</div>

				{/* Feedback Configuration */}
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<MessageSquare className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Immediate Feedback</h3>
					</div>
					<div className="p-4 text-xs text-gray-500 border-b border-white/5 bg-[#0d0d0e]">
						These messages appear immediately after a user types a word.
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="correctWord"
							type="string"
							desc="Message shown when a word is found."
							icon={CheckCircle}
						/>
						<ConfigRow
							property="wrongWord"
							type="string"
							desc="Message shown when the word is incorrect."
							icon={XCircle}
						/>
						<ConfigRow
							property="wordAlreadyFound"
							type="string"
							desc="Message shown when the word has already been found."
							icon={AlertCircle}
						/>
						<ConfigRow
							property="failedFetchMessage"
							type="string"
							desc="Error shown if the internal word API fails."
							icon={AlertCircle}
						/>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: EMBED STATES --- */}
			<section className="mb-16">
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">Embed Status Labels</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<p className="text-sm text-gray-400 mb-6">
					These strings control the <strong>field titles</strong> and labels displayed inside the main game embed. They
					are nested under the <code className="text-purple-300">states</code> object.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* UI Labels */}
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">UI Field Titles</h4>
						<ul className="space-y-4">
							<li className="flex justify-between items-center text-sm">
								<span className="font-mono text-white">chaosString</span>
								<span className="text-gray-500 text-xs">Title for the random characters</span>
							</li>
							<li className="flex justify-between items-center text-sm">
								<span className="font-mono text-white">timeRemaining</span>
								<span className="text-gray-500 text-xs">Label for the timer</span>
							</li>
							<li className="flex justify-between items-center text-sm">
								<span className="font-mono text-white">tries</span>
								<span className="text-gray-500 text-xs">Label for attempts left</span>
							</li>
							<li className="flex justify-between items-center text-sm">
								<span className="font-mono text-white">missingWords</span>
								<span className="text-gray-500 text-xs">Title for the hidden words list</span>
							</li>
						</ul>
					</div>

					{/* Word Discovery Status */}
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Words Found Status</h4>
						<div className="space-y-4">
							<div>
								<div className="font-mono text-sm text-white mb-1">wordsFound.main</div>
								<div className="text-xs text-gray-500">Title for the list of found words.</div>
							</div>
							<div>
								<div className="font-mono text-sm text-white mb-1">wordsFound.noneYet</div>
								<div className="text-xs text-gray-500">
									Placeholder text displayed when no words have been found yet.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 4: GAME OVER STATES --- */}
			<section>
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">Game Over Events</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Victory */}
					<div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
						<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
							<CheckCircle className="w-5 h-5 text-green-400" />
							Victory
						</h3>
						<div className="space-y-3">
							<div className="bg-[#0d0d0e]/50 p-3 rounded border border-green-500/10">
								<div className="font-mono text-xs text-green-300">states.won.winMessage</div>
								<div className="text-[10px] text-gray-500">Embed description</div>
							</div>
							<div className="bg-[#0d0d0e]/50 p-3 rounded border border-green-500/10">
								<div className="font-mono text-xs text-green-300">states.won.winContent</div>
								<div className="text-[10px] text-gray-500">Message content (outside embed)</div>
							</div>
						</div>
					</div>

					{/* Defeat */}
					<div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
						<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
							<XCircle className="w-5 h-5 text-red-400" />
							Defeat
						</h3>
						<div className="space-y-3">
							<div className="bg-[#0d0d0e]/50 p-3 rounded border border-red-500/10">
								<div className="font-mono text-xs text-red-300">states.lost.loseMessage</div>
								<div className="text-[10px] text-gray-500">Embed description</div>
							</div>
							<div className="bg-[#0d0d0e]/50 p-3 rounded border border-red-500/10">
								<div className="font-mono text-xs text-red-300">states.lost.loseContent</div>
								<div className="text-[10px] text-gray-500">Message content (outside embed)</div>
							</div>
						</div>
					</div>

					{/* Generic Stops */}
					<div className="p-6 rounded-2xl border border-white/5 bg-[#0d0d0e]">
						<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
							<Clock className="w-5 h-5 text-gray-400" />
							Stops
						</h3>
						<div className="space-y-2 text-sm">
							<div className="flex justify-between py-2 border-b border-white/5">
								<span className="font-mono text-white">states.timeout</span>
								<span className="text-gray-500 text-xs">Time run out</span>
							</div>
							<div className="flex justify-between py-2 border-b border-white/5">
								<span className="font-mono text-white">states.cancelled</span>
								<span className="text-gray-500 text-xs">User clicked cancel</span>
							</div>
							<div className="flex justify-between py-2">
								<span className="font-mono text-white">cancelButton</span>
								<span className="text-gray-500 text-xs">Label for stop button</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
