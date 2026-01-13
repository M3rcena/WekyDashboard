import { Code2, Server, MessageSquare, Plus, Layers, ArrowRight } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

export default function TypesCustomOptions() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Code2 className="w-3 h-3" />
					Core Generics
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">CustomOptions Wrapper</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					A flexible generic type that wraps every Minigame's specific options. It acts as a safety layer, guaranteeing
					that the game is initialized with a valid <strong>Guild</strong> and <strong>Text Channel</strong>.
				</p>
			</header>

			{/* --- SECTION 1: THE TYPE DEFINITION --- */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
					<span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400">
						<Layers className="w-5 h-5" />
					</span>
					Type Definition
				</h2>

				<CodeBlock
					language="typescript"
					code={`export type CustomOptions<T> = T & {
    context: {
        channel: GuildTextBasedChannel;
        guild: NonNullable<Context["guild"]>;
    };
};`}
				/>
			</section>

			{/* --- SECTION 2: VISUAL BREAKDOWN --- */}
			<section className="mb-16">
				<h2 className="text-xl font-semibold text-white mb-8">How it Works</h2>

				<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
					{/* Part 1: Generic T */}
					<div className="p-6 rounded-2xl border border-white/5 bg-white/1 text-center group hover:bg-white/3 transition-colors">
						<div className="w-10 h-10 mx-auto rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
							<span className="font-mono font-bold text-lg">T</span>
						</div>
						<h3 className="text-sm font-bold text-white mb-1">Game Options</h3>
						<p className="text-xs text-gray-500">
							Specific settings for the minigame (e.g., snake length, difficulty).
						</p>
					</div>

					{/* Plus Icon */}
					<div className="flex justify-center text-gray-600">
						<Plus className="w-6 h-6" />
					</div>

					{/* Part 2: Context */}
					<div className="p-6 rounded-2xl border border-white/5 bg-white/1 text-center group hover:bg-white/3 transition-colors">
						<div className="w-10 h-10 mx-auto rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
							<Server className="w-5 h-5" />
						</div>
						<h3 className="text-sm font-bold text-white mb-1">Strict Context</h3>
						<p className="text-xs text-gray-500">Enforced Guild and Channel environment.</p>
					</div>

					{/* Arrow Icon */}
					<div className="flex justify-center text-gray-600">
						<ArrowRight className="w-6 h-6" />
					</div>

					{/* Part 3: Result */}
					<div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 text-center group">
						<div className="w-10 h-10 mx-auto rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
							<Layers className="w-5 h-5" />
						</div>
						<h3 className="text-sm font-bold text-white mb-1">CustomOptions</h3>
						<p className="text-xs text-gray-500">The final object required to start any game.</p>
					</div>
				</div>
			</section>

			{/* --- SECTION 3: STRICT PROPERTIES --- */}
			<section>
				<h2 className="text-xl font-semibold text-white mb-6">Enforced Context Properties</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Channel Card */}
					<div className="p-6 rounded-2xl border border-white/5 bg-[#0d0d0e] hover:border-purple-500/30 transition-colors">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 rounded bg-white/5">
								<MessageSquare className="w-4 h-4 text-purple-400" />
							</div>
							<span className="font-mono text-sm font-bold text-white">channel</span>
						</div>
						<div className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded inline-block mb-3 border border-purple-500/20">
							GuildTextBasedChannel
						</div>
						<p className="text-sm text-gray-400 leading-relaxed">
							Ensures the game is running in a text-based channel within a server.
							<span className="text-red-400 block mt-2 font-medium text-xs items-center gap-1">
								<span className="w-1 h-1 rounded-full bg-red-400" />
								Excludes DMs (Direct Messages)
							</span>
						</p>
					</div>

					{/* Guild Card */}
					<div className="p-6 rounded-2xl border border-white/5 bg-[#0d0d0e] hover:border-purple-500/30 transition-colors">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 rounded bg-white/5">
								<Server className="w-4 h-4 text-purple-400" />
							</div>
							<span className="font-mono text-sm font-bold text-white">guild</span>
						</div>
						<div className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded inline-block mb-3 border border-purple-500/20">
							NonNullable&lt;Context["guild"]&gt;
						</div>
						<p className="text-sm text-gray-400 leading-relaxed">
							Guarantees that the <code>guild</code> property is never null or undefined. Minigames rely on this to
							access server settings, roles, and member lists safely.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
