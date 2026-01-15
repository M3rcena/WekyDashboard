import { ShieldCheck, BoxSelect, Terminal, CheckCircle2, Server, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-green-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function TypesCustomOptions() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium mb-6">
					<ShieldCheck className="w-3 h-3" />
					Type Safety
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Custom
					<span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">Options</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A utility type that ensures minigames are only initialized within a valid Guild environment. It enforces
					stricter types on the `context` property.
				</p>
			</header>

			{/* CODE BLOCK */}
			<section className="mb-20">
				<SectionHeader icon={Terminal} title="Type Definition" />
				<div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl">
					<CodeBlock
						className="my-0!"
						language="typescript"
						code={`export type CustomOptions<T> = T & {
    context: {
        channel: GuildTextBasedChannel;
        guild: NonNullable<Context["guild"]>;
    };
};`}
					/>
				</div>
			</section>

			{/* VISUAL EXPLANATION */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
				<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e]">
					<div className="flex items-center gap-3 mb-4 text-blue-400">
						<BoxSelect className="w-6 h-6" />
						<h3 className="font-bold text-white">Generic Input (T)</h3>
					</div>
					<p className="text-sm text-gray-400 leading-relaxed mb-4">
						Takes any minigame options interface (e.g., <code>SnakeTypes</code>, <code>FightTypes</code>) which
						typically has a loose `Context` type.
					</p>
					<div className="text-xs font-mono bg-white/5 p-3 rounded border border-white/5 text-gray-500">
						Input: SnakeTypes (context: Context)
					</div>
				</div>

				<div className="flex items-center justify-center md:hidden">
					<div className="h-8 w-0.5 bg-white/10" />
				</div>

				<div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
					<div className="flex items-center gap-3 mb-4 text-green-400">
						<Server className="w-6 h-6" />
						<h3 className="font-bold text-white">Enforced Output</h3>
					</div>
					<p className="text-sm text-gray-300 leading-relaxed mb-4">
						Returns a new type where <code>guild</code> is guaranteed to exist and <code>channel</code> is guaranteed to
						be text-based.
					</p>
					<div className="text-xs font-mono bg-black/20 p-3 rounded border border-green-500/20 text-green-300">
						Output: SnakeTypes & GuildContext
					</div>
				</div>
			</section>

			{/* WHY IT MATTERS */}
			<section>
				<SectionHeader icon={CheckCircle2} title="Why use this?" />
				<div className="grid grid-cols-1 gap-4">
					<div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-[#0d0d0e]">
						<div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
						<div>
							<h4 className="text-sm font-bold text-white mb-1">Prevents Runtime Errors</h4>
							<p className="text-xs text-gray-400">
								Ensures you don't accidentally try to fetch `guild.members` in a DM channel, which would crash the bot.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-[#0d0d0e]">
						<div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
						<div>
							<h4 className="text-sm font-bold text-white mb-1">Better IntelliSense</h4>
							<p className="text-xs text-gray-400">
								When writing game logic, TypeScript will know that `context.guild` is not null, so you don't need to
								optional chain (`?.`) everything.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
