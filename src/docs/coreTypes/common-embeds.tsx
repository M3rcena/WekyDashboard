import { FileJson, Hash, Image, User, Calendar, Type, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR PROPERTY ROW ---
interface PropertyRowProps {
	name: string;
	type: string;
	required?: boolean;
	desc: string;
	icon?: LucideIcon;
}

// --- HELPER COMPONENT ---
const PropertyRow = ({ name, type, required = false, desc, icon: Icon }: PropertyRowProps) => (
	<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="sm:w-48 shrink-0">
			<div className="flex items-center gap-2 mb-1">
				{Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
				<span className="font-mono text-sm font-bold text-white">{name}</span>
			</div>
			<div className="flex items-center gap-2 flex-wrap">
				<span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
					{type}
				</span>
				{!required && <span className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">Optional</span>}
			</div>
		</div>
		<p className="text-sm text-gray-400 leading-relaxed pt-0.5">{desc}</p>
	</div>
);

// --- MAIN PAGE COMPONENT ---
export default function TypesEmbeds() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<FileJson className="w-3 h-3" />
					Core Interfaces
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Embed Configurations</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					These shared interfaces control the visual structure of Discord embeds across all Weky minigames.
					Standardizing these types ensures a consistent theme for your bot.
				</p>
			</header>

			{/* --- SECTION 1: EMBEDS --- */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
					<span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400">
						<FileJson className="w-5 h-5" />
					</span>
					Embeds Interface
				</h2>

				<CodeBlock
					language="typescript"
					code={`export interface Embeds {
    color: ColorResolvable;
    title: string;
    url?: string;
    author?: Author;
    footer?: EmbedFooterData;
    description?: string;
    fields?: Fields[];
    image?: string;
    timestamp?: Date | boolean;
    thumbnail?: string;
}`}
				/>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden mt-6">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2">
						<h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Properties</h3>
					</div>
					<div className="divide-y divide-white/5">
						<PropertyRow
							name="color"
							type="ColorResolvable"
							required={true}
							desc="The accent color strip on the left side of the embed. Accepts hex strings, RGB tuples, or Discord constants."
							icon={Hash}
						/>
						<PropertyRow
							name="title"
							type="string"
							required={true}
							desc="The main header text of the embed window."
							icon={Type}
						/>
						<PropertyRow
							name="description"
							type="string"
							desc="The main body text content. Supports standard Discord markdown."
							icon={Type}
						/>
						<PropertyRow
							name="image"
							type="string"
							desc="URL to a large image displayed at the bottom of the embed."
							icon={Image}
						/>
						<PropertyRow
							name="thumbnail"
							type="string"
							desc="URL to a small image displayed in the top-right corner."
							icon={Image}
						/>
						<PropertyRow
							name="timestamp"
							type="Date | boolean"
							desc="If set to true or provided a Date object, displays the time in the footer."
							icon={Calendar}
						/>
						<PropertyRow
							name="fields"
							type="Fields[]"
							desc="An array of field objects to create columns or lists within the embed."
							icon={Hash}
						/>
					</div>
				</div>
			</section>

			{/* --- SECTION 2: SUB-TYPES --- */}
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Author Interface */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
						<User className="w-4 h-4 text-purple-400" />
						Author Type
					</h3>
					<CodeBlock
						language="typescript"
						code={`interface Author {
    name: string;
    icon_url?: string;
    url?: string;
}`}
					/>
					<div className="mt-4 space-y-3">
						<div className="pl-4 border-l-2 border-purple-500/30">
							<div className="text-sm font-bold text-white mb-1">name</div>
							<p className="text-xs text-gray-400">The text displayed at the very top of the embed.</p>
						</div>
						<div className="pl-4 border-l-2 border-white/5">
							<div className="text-sm font-bold text-white mb-1">icon_url</div>
							<p className="text-xs text-gray-400">Small circular avatar displayed next to the author name.</p>
						</div>
						<div className="pl-4 border-l-2 border-white/5">
							<div className="text-sm font-bold text-white mb-1">url</div>
							<p className="text-xs text-gray-400">Makes the author name a clickable hyperlink.</p>
						</div>
					</div>
				</div>

				{/* Fields Interface */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
						<Hash className="w-4 h-4 text-purple-400" />
						Fields Type
					</h3>
					<CodeBlock
						language="typescript"
						code={`interface Fields {
    name: string;
    value: string;
    inline?: boolean;
}`}
					/>
					<div className="mt-4 space-y-3">
						<div className="pl-4 border-l-2 border-purple-500/30">
							<div className="text-sm font-bold text-white mb-1">name</div>
							<p className="text-xs text-gray-400">The bold title of the field.</p>
						</div>
						<div className="pl-4 border-l-2 border-purple-500/30">
							<div className="text-sm font-bold text-white mb-1">value</div>
							<p className="text-xs text-gray-400">The content text of the field.</p>
						</div>
						<div className="pl-4 border-l-2 border-white/5">
							<div className="text-sm font-bold text-white mb-1">inline</div>
							<p className="text-xs text-gray-400">If true, fields will stack horizontally instead of vertically.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
