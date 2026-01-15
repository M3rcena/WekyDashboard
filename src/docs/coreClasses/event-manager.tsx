import { Radio, Zap, ShieldCheck, Activity, Cpu, Network, Share2, type LucideIcon } from "lucide-react";

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

export default function EventManagerDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium mb-6">
					<Radio className="w-3 h-3" />
					Event System
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Event
					<span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">Manager</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A centralized Event Multiplexer. It efficiently routes Discord events to active minigames without clogging
					your client with hundreds of listeners.
				</p>
			</header>

			{/* PROBLEM vs SOLUTION */}
			<section className="mb-20">
				<SectionHeader icon={Zap} title="Why this exists?" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* The Problem */}
					<div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
						<h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
							<Activity className="w-4 h-4" />
							The Risk
						</h3>
						<p className="text-sm text-gray-300 mb-4 leading-relaxed">
							Attaching a new <code className="text-red-300 bg-red-500/10 px-1 rounded">client.on('message')</code>{" "}
							listener for every single active game causes Node.js to throw a{" "}
							<strong>MaxListenersExceededWarning</strong> and leads to memory leaks.
						</p>
					</div>

					{/* The Solution */}
					<div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
						<h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
							<ShieldCheck className="w-4 h-4" />
							The Solution
						</h3>
						<p className="text-sm text-gray-300 mb-4 leading-relaxed">
							The EventManager attaches <strong>one single listener</strong> per event type globally. When an event
							fires, it loops through the registry and dispatches the data to relevant games only.
						</p>
					</div>
				</div>
			</section>

			{/* ARCHITECTURE VISUALIZATION */}
			<section className="mb-20">
				<SectionHeader icon={Network} title="Routing Architecture" />

				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-8 flex flex-col items-center">
					{/* Visual representation of the flow */}
					<div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4 text-center">
						{/* Source */}
						<div className="flex flex-col items-center gap-3">
							<div className="w-16 h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
								<Zap className="w-8 h-8" />
							</div>
							<span className="text-sm font-bold text-white">Discord Gateway</span>
						</div>

						{/* Arrow */}
						<div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent w-full md:w-auto relative">
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0e] px-2 text-[10px] text-gray-500 uppercase font-mono">
								Emits Event
							</div>
						</div>

						{/* The Manager */}
						<div className="flex flex-col items-center gap-3">
							<div className="w-20 h-20 rounded-full border-2 border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 relative">
								<Share2 className="w-8 h-8" />
								<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 text-black text-xs font-bold flex items-center justify-center">
									1
								</div>
							</div>
							<span className="text-sm font-bold text-white">Event Manager</span>
							<span className="text-xs text-gray-500">Single Listener</span>
						</div>

						{/* Arrow */}
						<div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent w-full md:w-auto relative">
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0e] px-2 text-[10px] text-gray-500 uppercase font-mono">
								Distributes
							</div>
						</div>

						{/* Targets */}
						<div className="flex flex-col gap-2">
							<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-400">
								Game A (Fight)
							</div>
							<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-400">
								Game B (Snake)
							</div>
							<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-400">
								Game C (2048)
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* API METHODS */}
			<section className="mb-20">
				<SectionHeader icon={Cpu} title="Methods" />

				<div className="space-y-4">
					{/* .register() */}
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-green-500/30 transition-all">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<code className="text-lg font-bold text-white font-mono">.register(game)</code>
								<span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20 uppercase font-bold">
									Core
								</span>
							</div>
							<p className="text-sm text-gray-400">
								Adds a minigame instance to the active registry. The manager will now forward events to this game's{" "}
								<code className="text-gray-300">onMessage</code> or <code className="text-gray-300">onInteraction</code>{" "}
								methods.
							</p>
						</div>
					</div>

					{/* .unregister() */}
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-red-500/30 transition-all">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<code className="text-lg font-bold text-white font-mono">.unregister(gameId)</code>
								<span className="text-[10px] bg-gray-500/10 text-gray-400 px-2 py-0.5 rounded border border-gray-500/20 uppercase font-bold">
									Cleanup
								</span>
							</div>
							<p className="text-sm text-gray-400">
								Removes a minigame from the registry. Call this immediately when a game ends to stop processing events
								for it.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* LISTENED EVENTS */}
			<section>
				<SectionHeader icon={Radio} title="Monitored Events" />
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] text-center">
						<div className="text-sm font-bold text-white mb-1">typingStart</div>
						<div className="text-xs text-gray-500">Used for "Fast Type"</div>
					</div>
					<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] text-center">
						<div className="text-sm font-bold text-white mb-1">messageCreate</div>
						<div className="text-xs text-gray-500">Chat-based inputs</div>
					</div>
					<div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] text-center">
						<div className="text-sm font-bold text-white mb-1">interactionCreate</div>
						<div className="text-xs text-gray-500">Button/Modal handling</div>
					</div>
				</div>
			</section>
		</div>
	);
}
