import { Palette, Layout, Image, Type, Clock, User, PanelBottom, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

interface PropRowProps {
	name: string;
	type: string;
	desc: string;
	icon?: LucideIcon;
}

const PropRow = ({ name, type, desc, icon: Icon }: PropRowProps) => (
	<div className="group flex flex-col md:flex-row md:items-start gap-4 p-5 border-b border-white/5 last:border-0 hover:bg-white/2 transition-all duration-300">
		<div className="md:w-48 shrink-0">
			<div className="flex items-center gap-2 mb-1.5">
				{Icon && <Icon className="w-4 h-4 text-pink-400" />}
				<span className="font-mono text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
					{name}
				</span>
			</div>
			<div className="flex items-center gap-2">
				<span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 break-all">
					{type}
				</span>
			</div>
		</div>
		<div className="flex-1">
			<p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
		</div>
	</div>
);

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-pink-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

// --- MAIN COMPONENT ---

export default function TypesEmbeds() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-medium mb-6">
					<Palette className="w-3 h-3" />
					Shared Interface
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Embeds{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400">Config</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A simplified interface for configuring Discord Embeds. This structure is used across all minigames to define
					the visual appearance of the game board.
				</p>
			</header>

			{/* INTERFACE CODE */}
			<section className="mb-20">
				<SectionHeader icon={Layout} title="Interface Definition" />
				<div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl">
					<CodeBlock
						className="my-0!"
						language="typescript"
						code={`export interface Embeds {
    color?: ColorResolvable;
    title?: string;
    url?: string;
    author?: { name: string; icon_url?: string; url?: string };
    description?: string;
    thumbnail?: string;
    fields?: { name: string; value: string; inline?: boolean }[];
    image?: string;
    footer?: { text: string; iconURL?: string };
    timestamp?: Date | boolean;
}`}
					/>
				</div>
			</section>

			{/* VISUALIZER & PROPS */}
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
				{/* Visualizer */}
				<div className="lg:col-span-1">
					<div className="sticky top-6">
						<div className="bg-[#313338] rounded-l border-l-4 border-pink-500 p-4 max-w-sm shadow-xl font-sans">
							{/* Author */}
							<div className="flex items-center gap-2 mb-2">
								<div className="w-6 h-6 rounded-full bg-white/10" />
								<span className="text-xs font-bold text-white">Author Name</span>
							</div>
							{/* Title */}
							<div className="text-[#00A8FC] font-bold text-sm mb-2 hover:underline cursor-pointer">Embed Title</div>
							{/* Description */}
							<div className="text-gray-300 text-xs leading-relaxed mb-3">
								This is the <code>description</code> field. It supports markdown and is the main body of the embed.
							</div>
							{/* Fields */}
							<div className="grid grid-cols-2 gap-2 mb-3">
								<div>
									<div className="text-xs font-bold text-white mb-0.5">Field 1</div>
									<div className="text-xs text-gray-300">Value 1</div>
								</div>
								<div>
									<div className="text-xs font-bold text-white mb-0.5">Field 2</div>
									<div className="text-xs text-gray-300">Value 2</div>
								</div>
							</div>
							{/* Image */}
							<div className="w-full h-32 bg-pink-500/20 rounded mb-2 border border-white/5 flex items-center justify-center text-xs text-pink-400">
								Main Image
							</div>
							{/* Footer */}
							<div className="flex items-center gap-2 pt-2 border-t border-white/5">
								<div className="w-4 h-4 rounded-full bg-white/10" />
								<span className="text-[10px] text-gray-400">Footer Text • Today at 12:00 PM</span>
							</div>
						</div>
						<p className="text-center text-xs text-gray-500 mt-4">Visual representation of the properties</p>
					</div>
				</div>

				{/* Props List */}
				<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Palette className="w-4 h-4 text-pink-400" />
							<h3 className="text-sm font-bold text-white">Properties</h3>
						</div>
					</div>
					<div className="divide-y divide-white/5">
						<PropRow name="title" type="string" desc="The main header text of the embed." icon={Type} />
						<PropRow
							name="description"
							type="string"
							desc="The main body content. Supports Discord Markdown."
							icon={Type}
						/>
						<PropRow
							name="color"
							type="ColorResolvable"
							desc="The accent color of the side border (e.g., #FF0000, 'Red')."
							icon={Palette}
						/>
						<PropRow name="image" type="string (URL)" desc="The large image displayed at the bottom." icon={Image} />
						<PropRow
							name="thumbnail"
							type="string (URL)"
							desc="Small image displayed in the top-right corner."
							icon={Image}
						/>
						<PropRow
							name="author"
							type="Author Object"
							desc="Small text and icon displayed above the title."
							icon={User}
						/>
						<PropRow
							name="footer"
							type="EmbedFooterData"
							desc="Small text and icon displayed at the very bottom."
							icon={PanelBottom}
						/>
						<PropRow
							name="timestamp"
							type="Date | boolean"
							desc="If true/Date provided, displays a formatted timestamp in the footer."
							icon={Clock}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
