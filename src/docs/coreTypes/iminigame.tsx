import {
	Cpu,
	Terminal,
	MessageSquare,
	MousePointer2,
	Keyboard,
	Fingerprint,
	Share2,
	type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-cyan-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

const MethodRow = ({
	name,
	type,
	icon: Icon,
	desc,
}: {
	name: string;
	type: string;
	icon: LucideIcon;
	desc: string;
}) => (
	<div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-cyan-500/30 transition-all">
		<div className="md:w-64 shrink-0 flex items-start gap-3">
			<div className="p-2 bg-white/5 rounded-lg border border-white/5 text-cyan-400">
				<Icon className="w-4 h-4" />
			</div>
			<div>
				<div className="font-mono font-bold text-white text-sm">{name}</div>
				<div className="text-[10px] font-mono text-gray-500 mt-1">{type}</div>
			</div>
		</div>
		<div className="flex-1 text-sm text-gray-400 leading-relaxed flex items-center">{desc}</div>
	</div>
);

// --- MAIN COMPONENT ---

export default function TypesIMinigame() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-6">
					<Cpu className="w-3 h-3" />
					Core Interface
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					IMinigame{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">Contract</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					The blueprint that all minigames must follow. This interface ensures the <code>EventManager</code> can
					correctly route Discord events to the active game instance.
				</p>
			</header>

			{/* INTERFACE CODE */}
			<section className="mb-20">
				<SectionHeader icon={Terminal} title="Interface Definition" />
				<div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl">
					<CodeBlock
						className="my-0!"
						language="typescript"
						code={`export interface IMinigame {
    id: string; // The Player ID
    onTypingStart?(typing: Typing): void;
    onMessage?(message: Message): void;
    onInteraction?(message: Interaction): void;
}`}
					/>
				</div>
			</section>

			{/* METHODS GRID */}
			<section className="mb-20">
				<SectionHeader icon={Share2} title="Properties & Methods" />
				<div className="space-y-4">
					<MethodRow
						name="id"
						type="string"
						icon={Fingerprint}
						desc="Unique Identifier. Usually the Discord ID of the player who started the game. Used for tracking active sessions."
					/>
					<MethodRow
						name="onMessage?"
						type="(message: Message) => void"
						icon={MessageSquare}
						desc="Optional. Called by EventManager when a new message is sent in the channel. Used for chat-based input (e.g. ChaosWords)."
					/>
					<MethodRow
						name="onInteraction?"
						type="(interaction: Interaction) => void"
						icon={MousePointer2}
						desc="Optional. Called when a button or modal is used. Used for handling UI events (e.g. 2048, Snake)."
					/>
					<MethodRow
						name="onTypingStart?"
						type="(typing: Typing) => void"
						icon={Keyboard}
						desc="Optional. Called when a user starts typing. Primarily used for anti-cheat in FastType."
					/>
				</div>
			</section>
		</div>
	);
}
