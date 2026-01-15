import { GitMerge, Code2, FileJson, MessageSquare, Terminal, Check, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

interface PropRowProps {
	name: string;
	type: string;
	desc: string;
	source: "Interaction" | "Message" | "Unified";
}

const PropRow = ({ name, type, desc, source }: PropRowProps) => {
	const badgeColor = {
		Interaction: "bg-blue-500/10 text-blue-400 border-blue-500/20",
		Message: "bg-green-500/10 text-green-400 border-green-500/20",
		Unified: "bg-purple-500/10 text-purple-400 border-purple-500/20",
	}[source];

	return (
		<div className="flex flex-col md:flex-row md:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-all">
			<div className="md:w-48 shrink-0">
				<div className="font-mono text-sm font-bold text-white mb-1.5">{name}</div>
				<span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${badgeColor}`}>
					{source}
				</span>
			</div>
			<div className="flex-1">
				<div className="flex items-center gap-2 mb-1">
					<span className="text-xs font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">{type}</span>
				</div>
				<p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
			</div>
		</div>
	);
};

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

// --- MAIN COMPONENT ---

export default function TypesContext() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
					<GitMerge className="w-3 h-3" />
					Type Definitions
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Global{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">Context</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A unified interface that bridges the gap between <strong>Slash Commands</strong> (Interactions) and{" "}
					<strong>Legacy Commands</strong> (Messages). This allows minigames to support both input methods seamlessly.
				</p>
			</header>

			{/* VISUALIZER: THE MERGE */}
			<section className="mb-20">
				<SectionHeader icon={GitMerge} title="Normalization Logic" />

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
					{/* Source A: Message */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e] flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-opacity">
						<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
							<MessageSquare className="w-6 h-6" />
						</div>
						<h3 className="text-white font-bold mb-1">Message</h3>
						<p className="text-xs text-gray-500 mb-4">Legacy Prefix (!play)</p>
						<div className="space-y-2 w-full">
							<div className="bg-white/5 rounded px-2 py-1 text-xs font-mono text-gray-400">msg.author</div>
							<div className="bg-white/5 rounded px-2 py-1 text-xs font-mono text-gray-400">msg.channel</div>
						</div>
					</div>

					{/* The Merge Arrow */}
					<div className="flex flex-col items-center justify-center gap-2 text-gray-600">
						<div className="flex items-center gap-4 w-full justify-center">
							<div className="h-px w-8 bg-linear-to-r from-green-500/50 to-purple-500/50" />
							<GitMerge className="w-6 h-6 text-purple-400 rotate-90 lg:rotate-0" />
							<div className="h-px w-8 bg-linear-to-r from-blue-500/50 to-purple-500/50" />
						</div>
						<div className="text-[10px] uppercase font-bold tracking-widest text-purple-400">Normalizes To</div>
					</div>

					{/* Source B: Interaction */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e] flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-opacity">
						<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
							<Terminal className="w-6 h-6" />
						</div>
						<h3 className="text-white font-bold mb-1">Interaction</h3>
						<p className="text-xs text-gray-500 mb-4">Slash Command (/play)</p>
						<div className="space-y-2 w-full">
							<div className="bg-white/5 rounded px-2 py-1 text-xs font-mono text-gray-400">int.user</div>
							<div className="bg-white/5 rounded px-2 py-1 text-xs font-mono text-gray-400">int.channel</div>
						</div>
					</div>
				</div>

				{/* Result: Context */}
				<div className="mt-6 p-6 rounded-xl border border-purple-500/30 bg-purple-500/5 flex flex-col items-center text-center max-w-md mx-auto relative overflow-hidden">
					<div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-green-400 via-purple-400 to-blue-400" />
					<h3 className="text-white font-bold text-lg mb-2">Unified Context</h3>
					<p className="text-xs text-gray-300 mb-4 leading-relaxed">
						A single object that guarantees access to the user, channel, and member regardless of how the command was
						triggered.
					</p>
					<div className="grid grid-cols-2 gap-2 w-full">
						<div className="bg-black/20 rounded px-3 py-2 text-xs font-mono text-purple-300 border border-white/5">
							ctx.user
						</div>
						<div className="bg-black/20 rounded px-3 py-2 text-xs font-mono text-purple-300 border border-white/5">
							ctx.author
						</div>
						<div className="col-span-2 bg-black/20 rounded px-3 py-2 text-xs font-mono text-purple-300 border border-white/5">
							ctx.channel (TextBased)
						</div>
					</div>
				</div>
			</section>

			{/* INTERFACE CODE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Declaration File" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`declare module "discord.js" {
    // 1. Add ephemeral support to legacy messages
    export interface MessagePayload {
        ephemeral?: boolean;
    }
    export interface MessageReplyOptions {
        ephemeral?: boolean;
    }

    // 2. Normalize properties across types
    interface ExtendedChatInputCommandInteraction extends ChatInputCommandInteraction<"cached"> {
        author: User; // Aliased from .user
        attachments: Collection<string, Attachment>;
        mentions: MessageMentions;
        args: string[];
    }

    interface ExtendedMessage extends Message<true> {
        user: User; // Aliased from .author
        member: GuildMember;
    }

    // 3. The Union Type
    interface Context extends ExtendedChatInputCommandInteraction, ExtendedMessage {
        channel: TextBasedChannel;
    }
}`}
						/>
					</div>
				</div>
			</section>

			{/* PROPERTIES GRID */}
			<section className="mb-20">
				<SectionHeader icon={FileJson} title="Extended Properties" />
				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
					<PropRow
						name="author"
						type="User"
						desc="Added to Interaction. References the user who triggered the slash command (alias for .user)."
						source="Interaction"
					/>
					<PropRow
						name="user"
						type="User"
						desc="Added to Message. References the message author (alias for .author)."
						source="Message"
					/>
					<PropRow
						name="ephemeral"
						type="boolean?"
						desc="Added to MessageReplyOptions. Allows passing 'ephemeral: true' to message.reply(), even though discord.js types typically block it for messages (it's ignored but prevents type errors)."
						source="Unified"
					/>
					<PropRow
						name="member"
						type="GuildMember"
						desc="Guaranteed to be present (NonNullable) due to the <'cached'> and <true> generic constraints."
						source="Unified"
					/>
					<PropRow
						name="channel"
						type="TextBasedChannel"
						desc="Normalized channel type ensuring text-sending capabilities."
						source="Unified"
					/>
				</div>
			</section>

			{/* INFO CARD */}
			<section>
				<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
					<div className="mt-1 p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
						<Check className="w-5 h-5" />
					</div>
					<div>
						<h3 className="font-bold text-white text-sm mb-1">Why `declare module`?</h3>
						<p className="text-xs text-gray-400 leading-relaxed">
							TypeScript Module Augmentation allows us to inject these properties into the official `discord.js` types.
							This means you get IntelliSense for <code>interaction.author</code> or <code>message.user</code> without
							casting variables as <code>any</code>.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
