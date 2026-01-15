import { Hash, Users, Lock, ArrowUp, ArrowDown, HelpCircle, Trophy, XCircle, type LucideIcon } from "lucide-react";
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

export default function TypesGuessTheNumber() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Hash className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Guess The Number Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					A classic number guessing game. It can be configured as a solo challenge or a server-wide event where the
					first person to guess correctly wins.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface GuessTheNumberTypes {
    context: Context;
    embed: Partial<Pick<Embeds, "title" | "color">>;

    // Core Logic
    publicGame?: boolean;
    number?: number;
    time?: number;

    // Hint & Status States
    states?: {
        active?: string;
        higher?: string;
        lower?: string;
        won?: string;
        lost?: string;
    };

    // Chat Responses
    winMessage?: {
        publicGame?: string;
        privateGame?: string;
    };
    loseMessage?: string;
    ongoingMessage?: string;
    otherMessage?: string;

    giveUpButton?: string;
}`}
				/>
			</section>

			{/* --- SECTION 2: GAME MODES --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Users className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Game Logic</h3>
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="publicGame"
							type="boolean"
							desc="If true, anyone in the channel can guess. If false, only the command author can play."
							defaultVal="false"
							icon={Lock}
						/>
						<ConfigRow
							property="number"
							type="number"
							desc="The number to guess. If omitted, a random number between 1-1000 is generated."
							defaultVal="Random (1-1000)"
							icon={Hash}
						/>
						<ConfigRow property="time" type="number" desc="Time limit in milliseconds." defaultVal="60000ms" />
					</div>
				</div>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full flex flex-col">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<HelpCircle className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Hint System</h3>
					</div>
					<div className="p-6 flex-1 flex flex-col gap-4 justify-center">
						<p className="text-xs text-gray-400 mb-2">
							The game automatically updates the embed description to guide the player based on their input.
						</p>

						<div className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
							<div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
								<ArrowUp className="w-5 h-5" />
							</div>
							<div>
								<div className="font-mono text-xs text-blue-300 font-bold mb-1">states.higher</div>
								<p className="text-xs text-gray-400">
									Shown when the secret number is <strong>higher</strong> than the guess.
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4 p-4 rounded-xl border border-orange-500/20 bg-orange-500/5">
							<div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
								<ArrowDown className="w-5 h-5" />
							</div>
							<div>
								<div className="font-mono text-xs text-orange-300 font-bold mb-1">states.lower</div>
								<p className="text-xs text-gray-400">
									Shown when the secret number is <strong>lower</strong> than the guess.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: WIN/LOSE CONDITIONS --- */}
			<section className="mb-16">
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">Victory & Defeat</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Winner Config */}
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4 flex items-center gap-2">
							<Trophy className="w-3 h-3" /> Victory Messages
						</h4>
						<p className="text-xs text-gray-500 mb-4">
							You can set different win messages depending on whether the game was public or private.
						</p>
						<div className="space-y-3">
							<div className="p-3 bg-white/5 rounded border border-white/5">
								<div className="font-mono text-xs text-white mb-1">winMessage.publicGame</div>
								<div className="text-[10px] text-gray-500">e.g. "User {`{player}`} guessed it first!"</div>
							</div>
							<div className="p-3 bg-white/5 rounded border border-white/5">
								<div className="font-mono text-xs text-white mb-1">winMessage.privateGame</div>
								<div className="text-[10px] text-gray-500">e.g. "Great job, you found it!"</div>
							</div>
							<div className="p-3 bg-white/5 rounded border border-white/5">
								<div className="font-mono text-xs text-white mb-1">states.won</div>
								<div className="text-[10px] text-gray-500">The embed description update upon winning.</div>
							</div>
						</div>
					</div>

					{/* Loser Config */}
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
							<XCircle className="w-3 h-3" /> Defeat & Errors
						</h4>
						<div className="space-y-3">
							<div className="flex justify-between items-center py-2 border-b border-white/5">
								<span className="font-mono text-xs text-white">loseMessage</span>
								<span className="text-[10px] text-gray-500">Time ran out message</span>
							</div>
							<div className="flex justify-between items-center py-2 border-b border-white/5">
								<span className="font-mono text-xs text-white">states.lost</span>
								<span className="text-[10px] text-gray-500">Time ran out embed text</span>
							</div>
							<div className="flex justify-between items-center py-2 border-b border-white/5">
								<span className="font-mono text-xs text-white">ongoingMessage</span>
								<span className="text-[10px] text-gray-500">"Game already running" error</span>
							</div>
							<div className="flex justify-between items-center py-2">
								<span className="font-mono text-xs text-white">otherMessage</span>
								<span className="text-[10px] text-gray-500">"Not your game" (Private mode only)</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
