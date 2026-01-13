import {
	Grid3x3,
	Palette,
	Gamepad2,
	Clock,
	MessageSquare,
	AlertCircle,
	CheckCircle2,
	XCircle,
	ArrowUp,
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR OPTION ROW ---
interface OptionRowProps {
	name: string;
	type: string;
	desc: string;
	defaultVal?: string;
	icon?: LucideIcon;
}

// --- HELPER COMPONENT ---
const OptionRow = ({ name, type, desc, defaultVal, icon: Icon }: OptionRowProps) => (
	<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="sm:w-48 shrink-0">
			<div className="flex items-center gap-2 mb-1">
				{Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
				<span className="font-mono text-sm font-bold text-white">{name}</span>
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

export default function Types2048() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Grid3x3 className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">2048 Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					Configuration interface for the classic sliding tile puzzle game. Customize the appearance, controls, and game
					state messages to fit your server's theme.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface Types2048 {
    context: Context;
    embed?: Partial<Pick<Embeds, "title" | "color">>;
    emojis?: {
        up: string;
        down: string;
        left: string;
        right: string;
    };
    loadingMessage?: string;
    activeMessage?: string;
    wonMessage?: string;
    gameoverMessage?: string;
    quitMessage?: string;
    timeoutMessage?: string;
    errorMessage?: string;
    othersMessage?: string;
    time?: number;
}`}
				/>
			</section>

			{/* --- SECTION 2: VISUAL & CORE SETTINGS --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{/* Visuals */}
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Palette className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Visuals</h3>
					</div>
					<div className="divide-y divide-white/5">
						<OptionRow
							name="context"
							type="Context"
							desc="The game context. Pass the interaction or message object here."
							icon={Grid3x3}
						/>
						<OptionRow
							name="embed"
							type="Partial<Embeds>"
							desc="Customize the title and accent color of the game board."
							defaultVal='{ title: "2048", color: "#5865F2" }'
							icon={Palette}
						/>
						<OptionRow
							name="time"
							type="number"
							desc="Time in milliseconds before the game expires due to inactivity."
							defaultVal="60000ms (1 min)"
							icon={Clock}
						/>
					</div>
				</div>

				{/* Controls */}
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden flex flex-col">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Gamepad2 className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Controls (Emojis)</h3>
					</div>
					<div className="p-6 flex-1 flex flex-col items-center justify-center">
						<p className="text-xs text-gray-400 mb-6 text-center">
							Defines the emoji buttons used for movement. <br />
							Defaults to standard arrow symbols.
						</p>

						{/* Visual D-Pad */}
						<div className="grid grid-cols-3 gap-2 max-w-50">
							<div />
							<div className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-purple-400">
								<ArrowUp className="w-6 h-6" />
							</div>
							<div />

							<div className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-purple-400">
								<ArrowLeft className="w-6 h-6" />
							</div>
							<div className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-purple-400">
								<ArrowDown className="w-6 h-6" />
							</div>
							<div className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-purple-400">
								<ArrowRight className="w-6 h-6" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: MESSAGE RESPONSES --- */}
			<section>
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">Game Messages</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-4 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<div className="flex items-center gap-2 mb-2 text-blue-400">
							<MessageSquare className="w-4 h-4" />
							<span className="font-mono text-xs font-bold uppercase">Status</span>
						</div>
						<ul className="space-y-4">
							<li>
								<div className="font-mono text-sm text-white mb-1">loadingMessage</div>
								<div className="text-xs text-gray-500">Displayed while initializing the board.</div>
							</li>
							<li>
								<div className="font-mono text-sm text-white mb-1">activeMessage</div>
								<div className="text-xs text-gray-500">Subtitle displayed while the game is running.</div>
							</li>
						</ul>
					</div>

					<div className="p-4 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<div className="flex items-center gap-2 mb-2 text-green-400">
							<CheckCircle2 className="w-4 h-4" />
							<span className="font-mono text-xs font-bold uppercase">End Game</span>
						</div>
						<ul className="space-y-4">
							<li>
								<div className="font-mono text-sm text-white mb-1">wonMessage</div>
								<div className="text-xs text-gray-500">Shown when the player reaches 2048.</div>
							</li>
							<li>
								<div className="font-mono text-sm text-white mb-1">gameoverMessage</div>
								<div className="text-xs text-gray-500">Shown when no moves are left.</div>
							</li>
						</ul>
					</div>

					<div className="p-4 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<div className="flex items-center gap-2 mb-2 text-red-400">
							<AlertCircle className="w-4 h-4" />
							<span className="font-mono text-xs font-bold uppercase">Errors / Stops</span>
						</div>
						<ul className="space-y-4">
							<li>
								<div className="font-mono text-sm text-white mb-1">quitMessage</div>
								<div className="text-xs text-gray-500">Shown when the player stops the game manually.</div>
							</li>
							<li>
								<div className="font-mono text-sm text-white mb-1">timeoutMessage</div>
								<div className="text-xs text-gray-500">Shown when time runs out.</div>
							</li>
						</ul>
					</div>

					<div className="p-4 rounded-xl border border-white/5 bg-[#0d0d0e]">
						<div className="flex items-center gap-2 mb-2 text-yellow-400">
							<XCircle className="w-4 h-4" />
							<span className="font-mono text-xs font-bold uppercase">Validation</span>
						</div>
						<ul className="space-y-4">
							<li>
								<div className="font-mono text-sm text-white mb-1">othersMessage</div>
								<div className="text-xs text-gray-500">Reply to other users trying to click the buttons.</div>
							</li>
							<li>
								<div className="font-mono text-sm text-white mb-1">errorMessage</div>
								<div className="text-xs text-gray-500">Generic error fallback.</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
