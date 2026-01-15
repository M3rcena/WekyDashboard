import { Gamepad2, Image, Clock, MessageSquare, HelpCircle, AlertCircle, type LucideIcon } from "lucide-react";
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

export default function TypesGuessPokemon() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Gamepad2 className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Guess The Pokemon Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					A "Who's that Pokémon?" style quiz. The bot displays a silhouette or image of a random Pokémon, and the user
					must type the correct name to win.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface GuessThePokemonTypes {
    context: Context;
    embed: Partial<Pick<Embeds, "title" | "color">>;
    time?: number;

    // Embed Status Labels
    states?: {
        loading?: string;
        active?: string;
        wrong?: string;
        won?: string;
        lost?: string;
        error?: string;
    };

    // Chat Responses
    thinkMessage?: string;
    winMessage?: string;
    loseMessage?: string;
    incorrectMessage?: string;

    giveUpButton?: string;
}`}
				/>
			</section>

			{/* --- SECTION 2: GENERAL SETTINGS --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Clock className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Game Settings</h3>
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="time"
							type="number"
							desc="Time limit in milliseconds to guess the name."
							defaultVal="60000ms"
						/>
						<ConfigRow
							property="giveUpButton"
							type="string"
							desc="Label for the surrender button."
							defaultVal="Give Up"
						/>
						<ConfigRow
							property="states.error"
							type="string"
							desc="Displayed if the Pokémon API fails to return an image."
							icon={AlertCircle}
						/>
					</div>
				</div>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full flex flex-col">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Image className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Visual Lifecycle</h3>
					</div>
					<div className="p-6 flex-1 flex flex-col justify-center gap-4">
						<div className="flex items-center gap-4">
							<div className="w-2 h-2 rounded-full bg-yellow-400" />
							<div>
								<div className="font-mono text-xs text-white">states.loading</div>
								<div className="text-[10px] text-gray-500">Shown while fetching the image.</div>
							</div>
						</div>
						<div className="h-4 border-l border-white/10 ml-1" />
						<div className="flex items-center gap-4">
							<div className="w-2 h-2 rounded-full bg-blue-400" />
							<div>
								<div className="font-mono text-xs text-white">states.active</div>
								<div className="text-[10px] text-gray-500">Shown when the silhouette appears.</div>
							</div>
						</div>
						<div className="h-4 border-l border-white/10 ml-1" />
						<div className="flex items-center gap-4">
							<div className="w-2 h-2 rounded-full bg-green-400" />
							<div>
								<div className="font-mono text-xs text-white">states.won</div>
								<div className="text-[10px] text-gray-500">Shown when guessed correctly (reveals image).</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: MESSAGES --- */}
			<section>
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">Chat Responses</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<div className="flex items-center gap-2 mb-3 text-gray-400">
							<HelpCircle className="w-4 h-4" />
							<span className="text-xs font-bold uppercase tracking-wider">In Progress</span>
						</div>
						<div className="space-y-3">
							<div>
								<div className="font-mono text-sm text-white mb-1">thinkMessage</div>
								<p className="text-xs text-gray-500">"Thinking" message while the bot verifies the guess.</p>
							</div>
							<div>
								<div className="font-mono text-sm text-white mb-1">incorrectMessage</div>
								<p className="text-xs text-gray-500">Sent when the user guesses incorrectly.</p>
							</div>
							<div>
								<div className="font-mono text-sm text-white mb-1">states.wrong</div>
								<p className="text-xs text-gray-500">Embed description update on a wrong guess.</p>
							</div>
						</div>
					</div>

					<div className="p-5 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<div className="flex items-center gap-2 mb-3 text-gray-400">
							<MessageSquare className="w-4 h-4" />
							<span className="text-xs font-bold uppercase tracking-wider">Game Over</span>
						</div>
						<div className="space-y-3">
							<div>
								<div className="font-mono text-sm text-white mb-1">winMessage</div>
								<p className="text-xs text-gray-500">Victory message sent to chat.</p>
							</div>
							<div>
								<div className="font-mono text-sm text-white mb-1">loseMessage</div>
								<p className="text-xs text-gray-500">Time up / Give up message sent to chat.</p>
							</div>
							<div>
								<div className="font-mono text-sm text-white mb-1">states.lost</div>
								<p className="text-xs text-gray-500">Embed description update on loss.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
