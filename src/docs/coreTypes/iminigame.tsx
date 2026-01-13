import { Cpu, Fingerprint, MessageSquare, MousePointer2, Keyboard, Zap, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR METHOD ROW ---
interface MethodRowProps {
	name: string;
	signature: string;
	desc: string;
	icon: LucideIcon;
}

// --- HELPER COMPONENT ---
const MethodRow = ({ name, signature, desc, icon: Icon }: MethodRowProps) => (
	<div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-white/5 bg-[#0d0d0e] hover:border-purple-500/30 transition-all group">
		<div className="shrink-0">
			<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
				<Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
			</div>
		</div>
		<div className="flex-1 min-w-0">
			<div className="flex items-center gap-2 mb-2 flex-wrap">
				<span className="font-mono font-bold text-white text-sm">{name}</span>
				<span className="text-[10px] font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
					Optional
				</span>
			</div>
			<div className="font-mono text-xs text-purple-300 mb-2 truncate">{signature}</div>
			<p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
		</div>
	</div>
);

export default function TypesIMinigame() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Cpu className="w-3 h-3" />
					Core Architecture
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">IMinigame Interface</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					The fundamental contract that every Minigame class must implement. This interface ensures that the{" "}
					<code className="text-purple-300">EventManager</code> can correctly route Discord events (messages,
					interactions, typing) to the specific active game instance.
				</p>
			</header>

			{/* --- SECTION 1: DEFINITION --- */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
					<span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400">
						<Cpu className="w-5 h-5" />
					</span>
					Interface Definition
				</h2>

				<CodeBlock
					language="typescript"
					code={`export interface IMinigame {
    id: string;
    onTypingStart?(typing: Typing): void;
    onMessage?(message: Message): void;
    onInteraction?(interaction: Interaction): void;
}`}
				/>
			</section>

			{/* --- SECTION 2: REQUIRED PROPERTIES --- */}
			<section className="mb-16">
				<h2 className="text-xl font-semibold text-white mb-6">Required Properties</h2>
				<div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
					<div className="absolute top-0 right-0 p-4 opacity-10">
						<Fingerprint className="w-24 h-24" />
					</div>
					<div className="flex items-start gap-4 relative z-10">
						<div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
							<Fingerprint className="w-6 h-6" />
						</div>
						<div>
							<h3 className="text-lg font-bold text-white mb-1">id</h3>
							<div className="font-mono text-xs text-purple-300 mb-3">string</div>
							<p className="text-gray-300 text-sm leading-relaxed max-w-lg">
								A unique identifier for the game instance (e.g.,{" "}
								<code className="bg-black/30 px-1 py-0.5 rounded">user_id-channel_id</code>). The EventManager uses this
								ID to track which user is playing which game in which channel, preventing multiple games from running
								simultaneously.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: EVENT HANDLERS --- */}
			<section>
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-xl font-semibold text-white">Event Hooks</h2>
					<div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/5">
						<Zap className="w-3 h-3 text-yellow-400" />
						Triggered by EventManager
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4">
					<MethodRow
						name="onMessage"
						signature="(message: Message) => void"
						desc="Called whenever a user sends a text message in the channel where the game is active. Essential for games like Chaos Words or Guess the Number."
						icon={MessageSquare}
					/>

					<MethodRow
						name="onInteraction"
						signature="(interaction: Interaction) => void"
						desc="Called when a user interacts with a UI element (Buttons, Select Menus, Modals) associated with this game's ID."
						icon={MousePointer2}
					/>

					<MethodRow
						name="onTypingStart"
						signature="(typing: Typing) => void"
						desc="Called when a user begins typing in the channel. Useful for competitive typing games or detecting activity."
						icon={Keyboard}
					/>
				</div>
			</section>
		</div>
	);
}
