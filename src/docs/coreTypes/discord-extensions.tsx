import { Code2, Box, Puzzle, ArrowRightLeft, User, MessageSquare, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR PROPERTY ROW ---
interface PropertyRowProps {
	name: string;
	type: string;
	desc: string;
	icon?: LucideIcon;
}

// --- HELPER COMPONENT ---
const PropertyRow = ({ name, type, desc, icon: Icon }: PropertyRowProps) => (
	<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="sm:w-56 shrink-0">
			<div className="flex items-center gap-2 mb-1">
				{Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
				<span className="font-mono text-sm font-bold text-white">{name}</span>
			</div>
			<div className="flex items-center gap-2">
				<span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
					{type}
				</span>
			</div>
		</div>
		<p className="text-sm text-gray-400 leading-relaxed pt-0.5">{desc}</p>
	</div>
);

export default function TypesDiscordExtensions() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Code2 className="w-3 h-3" />
					Module Augmentation
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Discord.js Extensions</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					Weky extends the native `discord.js` types to create a unified <strong>Context</strong>. This allows minigames
					to be agnostic of their source, functioning identically whether triggered via a Slash Command (Interaction) or
					a Prefix Command (Message).
				</p>
			</header>

			{/* --- SECTION 1: THE CONTEXT INTERFACE --- */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
					<span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400">
						<ArrowRightLeft className="w-5 h-5" />
					</span>
					The Unified Context
				</h2>
				<p className="text-gray-400 mb-6">
					The `Context` interface is the most critical type in Weky. It acts as a bridge, ensuring that essential
					properties (like the user, channel, and member) are accessible at the same path regardless of how the command
					was invoked.
				</p>

				<CodeBlock
					language="typescript"
					code={`interface Context extends ExtendedChatInputCommandInteraction, ExtendedMessage {
    channel: TextBasedChannel;
}`}
				/>
			</section>

			{/* --- SECTION 2: EXTENDED INTERACTION --- */}
			<section className="mb-16">
				<h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
					<Box className="w-5 h-5 text-purple-400" />
					ExtendedChatInputCommandInteraction
				</h2>
				<p className="text-sm text-gray-400 mb-4 border-l-2 border-purple-500/30 pl-4">
					Extends <code className="text-purple-300">ChatInputCommandInteraction&lt;"cached"&gt;</code>. Weky maps
					properties often found on Messages (like `author` and `mentions`) onto the Interaction object.
				</p>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden">
					<div className="divide-y divide-white/5">
						<PropertyRow
							name="author"
							type="User"
							desc="Alias for interaction.user. Standardizes access to the command invoker."
							icon={User}
						/>
						<PropertyRow
							name="attachments"
							type="Collection<string, Attachment>"
							desc="A collection of attachments uploaded with the slash command."
							icon={Box}
						/>
						<PropertyRow
							name="mentions"
							type="MessageMentions"
							desc="Standardized mentions object, mimicking the Message class structure."
							icon={User}
						/>
						<PropertyRow
							name="args"
							type="string[]"
							desc="An array of parsed string arguments provided to the command."
							icon={Code2}
						/>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: EXTENDED MESSAGE --- */}
			<section className="mb-16">
				<h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
					<MessageSquare className="w-5 h-5 text-purple-400" />
					ExtendedMessage
				</h2>
				<p className="text-sm text-gray-400 mb-4 border-l-2 border-purple-500/30 pl-4">
					Extends <code className="text-purple-300">Message&lt;true&gt;</code>. Ensures that messages processed by Weky
					are treated as guild-only and maps Interaction properties onto them.
				</p>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden">
					<div className="divide-y divide-white/5">
						<PropertyRow
							name="user"
							type="User"
							desc="Alias for message.author. Standardizes access to matching interaction.user."
							icon={User}
						/>
						<PropertyRow
							name="member"
							type="GuildMember"
							desc="The strict GuildMember object. Weky guarantees the command is run in a guild."
							icon={User}
						/>
					</div>
				</div>
			</section>

			{/* --- SECTION 4: UTILITY OVERRIDES --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 rounded-2xl border border-white/5 bg-white/1">
					<h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
						<Puzzle className="w-4 h-4 text-purple-400" />
						MessagePayload
					</h3>
					<p className="text-xs text-gray-400 mb-4">Injects the `ephemeral` property into standard MessagePayloads.</p>
					<div className="bg-[#0d0d0e] p-3 rounded-lg border border-white/5 font-mono text-xs">
						<span className="text-purple-400">ephemeral</span>?: <span className="text-yellow-300">boolean</span>
					</div>
				</div>

				<div className="p-6 rounded-2xl border border-white/5 bg-white/1">
					<h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
						<Puzzle className="w-4 h-4 text-purple-400" />
						MessageReplyOptions
					</h3>
					<p className="text-xs text-gray-400 mb-4">
						Allows passing `ephemeral: true` even when replying to standard messages (handled internally).
					</p>
					<div className="bg-[#0d0d0e] p-3 rounded-lg border border-white/5 font-mono text-xs">
						<span className="text-purple-400">ephemeral</span>?: <span className="text-yellow-300">boolean</span>
					</div>
				</div>
			</section>
		</div>
	);
}
