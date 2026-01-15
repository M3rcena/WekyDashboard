import { Terminal, AlertTriangle, ShieldAlert, Bug, MessageSquare, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

// --- MAIN COMPONENT ---

export default function LoggerManagerDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium mb-6">
					<ShieldAlert className="w-3 h-3" />
					System Utilities
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Logger<span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-orange-400">Manager</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Standardizes error reporting across the package. It ensures all minigames output consistent, color-coded
					messages to the console for easier debugging.
				</p>
			</header>

			{/* VISUAL PREVIEW */}
			<section className="mb-20">
				<SectionHeader icon={Terminal} title="Output Preview" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					{/* Explanation */}
					<div>
						<p className="text-sm text-gray-400 leading-relaxed mb-6">
							The manager uses <strong>Chalk</strong> to format messages. Errors are automatically prefixed with the
							package name and game context in <span className="text-red-400 font-bold">Red</span>.
						</p>
						<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e]">
							<h3 className="text-white font-bold mb-2 text-sm">Why use this?</h3>
							<ul className="space-y-2 text-xs text-gray-500">
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
									Consistent log format across all 15+ minigames.
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
									Returns <code className="text-purple-300">true</code> for cleaner "early return" patterns.
								</li>
							</ul>
						</div>
					</div>

					{/* Terminal Simulator */}
					<div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl font-mono text-xs">
						<div className="flex items-center gap-1.5 px-4 py-3 bg-[#252526] border-b border-white/5">
							<div className="w-3 h-3 rounded-full bg-red-500/80" />
							<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
							<div className="w-3 h-3 rounded-full bg-green-500/80" />
							<span className="ml-2 text-gray-500">node output</span>
						</div>
						<div className="p-6 space-y-4">
							<div>
								<div className="text-gray-500 mb-1">// General Error</div>
								<div>
									<span className="text-red-500 font-bold">[@m3rcena/weky] Snake Error:</span>
									<span className="text-gray-300"> Failed to initialize game board.</span>
								</div>
							</div>
							<div>
								<div className="text-gray-500 mb-1">// TypeError</div>
								<div>
									<span className="text-red-500 font-bold">[@m3rcena/weky] FastType TypeError:</span>
									<span className="text-gray-300"> Time option must be a number.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* METHODS */}
			<section className="mb-20">
				<SectionHeader icon={MessageSquare} title="Methods" />

				<div className="space-y-6">
					{/* createError */}
					<div className="group rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden hover:border-red-500/30 transition-colors">
						<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center justify-between">
							<div className="flex items-center gap-3">
								<AlertTriangle className="w-5 h-5 text-red-400" />
								<code className="text-lg font-bold text-white font-mono">.createError()</code>
							</div>
							<span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
								Returns: boolean (true)
							</span>
						</div>
						<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div>
								<p className="text-sm text-gray-400 mb-4">
									Logs a standard runtime error. Use this for API failures, logic issues, or missing assets.
								</p>
								<div className="space-y-2">
									<div className="flex justify-between text-xs border-b border-white/5 pb-1">
										<span className="text-gray-500 font-mono">gameName</span>
										<span className="text-white">string</span>
									</div>
									<div className="flex justify-between text-xs border-b border-white/5 pb-1">
										<span className="text-gray-500 font-mono">message</span>
										<span className="text-white">string</span>
									</div>
								</div>
							</div>
							<div>
								<CodeBlock
									className="my-0!"
									language="typescript"
									code={`if (!config) {
    // Returns true, allowing one-line return
    return logger.createError("Snake", "Missing config!");
}`}
								/>
							</div>
						</div>
					</div>

					{/* createTypeError */}
					<div className="group rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden hover:border-orange-500/30 transition-colors">
						<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center justify-between">
							<div className="flex items-center gap-3">
								<Bug className="w-5 h-5 text-orange-400" />
								<code className="text-lg font-bold text-white font-mono">.createTypeError()</code>
							</div>
							<span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
								Returns: boolean (true)
							</span>
						</div>
						<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div>
								<p className="text-sm text-gray-400 mb-4">
									Logs a validation error. Use this when checking user inputs, option types, or constructor arguments.
								</p>
								<div className="space-y-2">
									<div className="flex justify-between text-xs border-b border-white/5 pb-1">
										<span className="text-gray-500 font-mono">gameName</span>
										<span className="text-white">string</span>
									</div>
									<div className="flex justify-between text-xs border-b border-white/5 pb-1">
										<span className="text-gray-500 font-mono">message</span>
										<span className="text-white">string</span>
									</div>
								</div>
							</div>
							<div>
								<CodeBlock
									className="my-0!"
									language="typescript"
									code={`if (typeof time !== 'number') {
    return logger.createTypeError(
        "FastType", 
        "Time must be a number."
    );
}`}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
