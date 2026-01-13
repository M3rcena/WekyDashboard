import {
	Calculator,
	FunctionSquare,
	AlertTriangle,
	AppWindow,
	Palette,
	MessageSquare,
	Terminal,
	type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR CONFIG ROW ---
interface ConfigRowProps {
	property: string;
	type: string;
	desc: string;
	icon?: LucideIcon;
}

// --- HELPER COMPONENT ---
const ConfigRow = ({ property, type, desc, icon: Icon }: ConfigRowProps) => (
	<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="sm:w-56 shrink-0">
			<div className="flex items-center gap-2 mb-1">
				{Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
				<span className="font-mono text-sm font-bold text-white">{property}</span>
			</div>
			<span className="text-[10px] font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
				{type}
			</span>
		</div>
		<div className="flex-1">
			<p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
		</div>
	</div>
);

export default function TypesCalculator() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Calculator className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Calculator Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					Configuration interface for the Calculator utility. This interactive tool supports basic arithmetic as well as
					advanced scientific functions via Discord buttons and modals.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface CalcTypes {
    context: Context;
    embed: Partial<Pick<Embeds, "color">>;

    operationTitles?: {
        logarithm?: string;
        squareRoot?: string;
        round?: string;
        sine?: string;
        cosine?: string;
        tangent?: string;
        naturalLogarithm?: string;
        reciprocal?: string;
        factorial?: string;
    };

    oporationLabels?: {
        logarithm?: string;
        squareRoot?: string;
        round?: string;
        sine?: string;
        cosine?: string;
        tangent?: string;
        naturalLogarithm?: string;
        reciprocal?: string;
        factorial?: string;
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
			</section>

			{/* --- SECTION 2: GENERAL & UI --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{/* General Settings */}
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Terminal className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Core Settings</h3>
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow property="context" type="Context" desc="The strict game context (Interaction or Message)." />
						<ConfigRow
							property="embed"
							type="Partial<Embeds>"
							desc="Customize the side-strip color of the calculator display."
							icon={Palette}
						/>
						<ConfigRow
							property="sessionEndMessage"
							type="string"
							desc="Message shown when the calculator session expires."
							icon={MessageSquare}
						/>
						<ConfigRow
							property="othersMessage"
							type="string"
							desc="Warning shown when other users try to click the buttons."
							icon={MessageSquare}
						/>
					</div>
				</div>

				{/* Modal Configuration */}
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<AppWindow className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Modal Configuration</h3>
					</div>
					<div className="p-4 text-xs text-gray-500 border-b border-white/5 bg-[#0d0d0e]">
						Configures the popup window used for manual input.
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow property="modals.display" type="string" desc="Title of the modal window." />
						<ConfigRow property="modals.labels" type="string" desc="Label text for the text input field." />
						<ConfigRow property="modals.noPromptYet" type="string" desc="Placeholder text if the history is empty." />
					</div>
				</div>
			</section>

			{/* --- SECTION 3: SCIENTIFIC FUNCTIONS --- */}
			<section className="mb-16">
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white flex items-center gap-2">
						<FunctionSquare className="w-5 h-5 text-purple-400" />
						Scientific Operations
					</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<p className="text-sm text-gray-400 mb-6 max-w-2xl">
					Customize the text for advanced math functions.
					<br />
					<code className="text-purple-300">operationTitles</code> controls the text in dropdown menus.
					<br />
					<code className="text-purple-300">oporationLabels</code> controls the text on specific buttons.
				</p>

				<div className="overflow-hidden rounded-xl border border-white/5 bg-[#0d0d0e]">
					<div className="grid grid-cols-3 bg-white/5 border-b border-white/5 text-xs font-bold text-gray-400 uppercase tracking-wider">
						<div className="p-4">Key</div>
						<div className="p-4 border-l border-white/5">Default Title</div>
						<div className="p-4 border-l border-white/5">Default Label</div>
					</div>

					{/* Table Rows */}
					{[
						{ key: "logarithm", t: "Logarithm", l: "Log" },
						{ key: "squareRoot", t: "Square Root", l: "√" },
						{ key: "sine / cosine / tangent", t: "Sin / Cos / Tan", l: "Sin / Cos / Tan" },
						{ key: "naturalLogarithm", t: "Natural Log", l: "ln" },
						{ key: "factorial", t: "Factorial", l: "!" },
						{ key: "reciprocal", t: "Reciprocal", l: "1/x" },
						{ key: "round", t: "Round", l: "Rnd" },
					].map((row, i) => (
						<div
							key={i}
							className="grid grid-cols-3 text-sm border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors"
						>
							<div className="p-4 font-mono text-purple-300">{row.key}</div>
							<div className="p-4 border-l border-white/5 text-gray-400">{row.t}</div>
							<div className="p-4 border-l border-white/5 text-gray-400">{row.l}</div>
						</div>
					))}
				</div>
			</section>

			{/* --- SECTION 4: ERROR HANDLING --- */}
			<section>
				<div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
					<div className="flex items-center gap-3 mb-4">
						<div className="p-2 rounded-lg bg-red-500/20 text-red-400">
							<AlertTriangle className="w-5 h-5" />
						</div>
						<h3 className="text-lg font-bold text-white">Error Messages</h3>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="bg-[#0d0d0e]/50 p-4 rounded-lg border border-red-500/10">
							<div className="font-mono text-xs text-red-300 mb-1">invalidCalculation</div>
							<p className="text-xs text-gray-500">Triggered by syntax errors.</p>
						</div>
						<div className="bg-[#0d0d0e]/50 p-4 rounded-lg border border-red-500/10">
							<div className="font-mono text-xs text-red-300 mb-1">infiniteResult</div>
							<p className="text-xs text-gray-500">Triggered by division by zero.</p>
						</div>
						<div className="bg-[#0d0d0e]/50 p-4 rounded-lg border border-red-500/10">
							<div className="font-mono text-xs text-red-300 mb-1">largeResult</div>
							<p className="text-xs text-gray-500">Triggered when number exceeds limits.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
