import {
	Calculator,
	Palette,
	Terminal,
	MessageSquare,
	AlertCircle,
	AppWindow,
	Sigma,
	Type,
	type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

interface PropRowProps {
	name: string;
	type: string;
	desc: string;
	defaultVal?: string;
	required?: boolean;
	icon?: LucideIcon;
}

const PropRow = ({ name, type, desc, defaultVal, required, icon: Icon }: PropRowProps) => (
	<div className="group flex flex-col md:flex-row md:items-start gap-4 p-5 border-b border-white/5 last:border-0 hover:bg-white/2 transition-all duration-300">
		<div className="md:w-52 shrink-0">
			<div className="flex items-center gap-2 mb-1.5">
				{Icon ? (
					<Icon className="w-4 h-4 text-purple-400" />
				) : (
					<div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30" />
				)}
				<span className="font-mono text-sm font-bold text-white group-hover:text-purple-200 transition-colors">
					{name}
				</span>
				{required && (
					<span className="text-[10px] text-red-400 font-bold px-1.5 py-0.5 bg-red-500/10 rounded">REQ</span>
				)}
			</div>
			<div className="flex items-center gap-2">
				<span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 break-all">
					{type}
				</span>
			</div>
		</div>
		<div className="flex-1">
			<p className="text-sm text-gray-400 leading-relaxed mb-2">{desc}</p>
			{defaultVal && (
				<div className="inline-flex items-center gap-2 text-[11px] text-gray-500 font-mono bg-black/20 px-2 py-1 rounded">
					<span>Default:</span>
					<span className="text-gray-300">{defaultVal}</span>
				</div>
			)}
		</div>
	</div>
);

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

const StatusCard = ({
	icon: Icon,
	color,
	title,
	items,
}: {
	icon: LucideIcon;
	color: string;
	title: string;
	items: { key: string; desc: string }[];
}) => {
	const colorClasses: Record<string, string> = {
		blue: "text-blue-400 border-blue-500/20 bg-blue-500/5",
		red: "text-red-400 border-red-500/20 bg-red-500/5",
		yellow: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
		purple: "text-purple-400 border-purple-500/20 bg-purple-500/5",
	};
	const activeColor = colorClasses[color];

	return (
		<div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121214] hover:border-white/20 transition-colors group h-full">
			<div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
				<Icon className="w-16 h-16" />
			</div>
			<div className="p-5 relative z-10">
				<div
					className={`inline-flex items-center gap-2 mb-4 px-2 py-1 rounded-md border text-xs font-bold uppercase tracking-wider ${activeColor}`}
				>
					<Icon className="w-3.5 h-3.5" />
					{title}
				</div>
				<ul className="space-y-4">
					{items.map((item, idx) => (
						<li key={idx} className="group/item">
							<div className="font-mono text-sm text-white mb-1 group-hover/item:text-purple-300 transition-colors wrap-break-word">
								{item.key}
							</div>
							<div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// --- MAIN COMPONENT ---

export default function TypesCalculator() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Calculator className="w-3 h-3" />
					Types Reference
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Types
					<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Calculator</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Configuration interface for the Scientific Calculator. Customize labels, modals, and error messages.
				</p>
			</header>

			{/* INTERFACE CODE */}
			<section className="mb-20">
				<SectionHeader icon={Terminal} title="Interface Definition" />
				<div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl">
					<CodeBlock
						className="my-0!"
						language="typescript"
						code={`export interface CalcTypes {
    context: Context;
    embed: Partial<Pick<Embeds, "color">>;
    operationTitles?: {
        logarithm?: string;
        sine?: string;
        // ...and more
    };
    oporationLabels?: {
        logarithm?: string;
        sine?: string;
        // ...and more
    };
    errorMessages?: {
        invalidCalculation?: string;
        infiniteResult?: string;
        largeResult?: string;
    };
    modals?: {
        display?: string;
        labels?: string;
        noPromptYet?: string;
    };
    sessionEndMessage?: string;
    othersMessage?: string;
}`}
					/>
				</div>
			</section>

			{/* PROPERTIES GRID */}
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
				{/* Visuals & Core */}
				<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Palette className="w-4 h-4 text-purple-400" />
							<h3 className="text-sm font-bold text-white">Core Settings</h3>
						</div>
					</div>
					<div className="divide-y divide-white/5">
						<PropRow
							name="context"
							type="Context"
							desc="The interaction or message context."
							required={true}
							icon={Terminal}
						/>
						<PropRow
							name="embed"
							type="Partial<Embeds>"
							desc="Configuration for the calculator display embed (Color only)."
							required={true}
							defaultVal="{ color: 0x5865F2 }"
							icon={Palette}
						/>
						<PropRow
							name="operationTitles"
							type="Object"
							desc="Overrides for the internal names of operations (e.g. 'sine', 'tangent')."
							icon={Sigma}
						/>
						<PropRow
							name="oporationLabels"
							type="Object"
							desc="Overrides for the text displayed on buttons (e.g. 'sin', 'tan', '√')."
							icon={Type}
						/>
					</div>
				</div>

				{/* Modals Config */}
				<div className="rounded-2xl border border-white/10 bg-[#0d0d0e] overflow-hidden flex flex-col h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<AppWindow className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Modal Configuration</h3>
					</div>
					<div className="p-6 flex-1">
						<p className="text-sm text-gray-400 mb-6">
							Customize the pop-up modal text when users input custom numbers.
						</p>
						<div className="space-y-4">
							<div className="p-3 rounded bg-white/5 border border-white/10">
								<div className="text-xs font-mono text-purple-300 mb-1">modals.display</div>
								<div className="text-xs text-gray-400">Title of the input modal.</div>
							</div>
							<div className="p-3 rounded bg-white/5 border border-white/10">
								<div className="text-xs font-mono text-purple-300 mb-1">modals.labels</div>
								<div className="text-xs text-gray-400">Label for the text input field.</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* MESSAGES & ERRORS GRID */}
			<section>
				<SectionHeader icon={MessageSquare} title="System Responses" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{/* General Messages */}
					<StatusCard
						icon={MessageSquare}
						color="blue"
						title="General"
						items={[
							{ key: "sessionEndMessage", desc: "Shown when the calculator session expires." },
							{ key: "othersMessage", desc: "Reply to unauthorized users attempting to click." },
							{ key: "modals.noPromptYet", desc: "Shown if a modal is requested too early." },
						]}
					/>

					{/* Math Errors */}
					<StatusCard
						icon={AlertCircle}
						color="yellow"
						title="Math Errors"
						items={[
							{ key: "errorMessages.infiniteResult", desc: "Triggered by division by zero or Infinity." },
							{ key: "errorMessages.largeResult", desc: "Triggered when result exceeds Javascript number limits." },
						]}
					/>

					{/* Critical Errors */}
					<StatusCard
						icon={AlertCircle}
						color="red"
						title="System Errors"
						items={[{ key: "errorMessages.invalidCalculation", desc: "Fallback for malformed equations." }]}
					/>
				</div>
			</section>
		</div>
	);
}
