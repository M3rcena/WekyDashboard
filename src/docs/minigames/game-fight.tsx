import { Swords, Code2, Shield, Heart, UserPlus, Skull, Store, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
	<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
		<div className="p-2 rounded-lg bg-white/5 border border-white/10">
			<Icon className="w-5 h-5 text-purple-400" />
		</div>
		<h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
	</div>
);

export default function DocsFight() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium mb-6">
					<Swords className="w-3 h-3" />
					RPG Battle
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Fight <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-orange-400">Arena</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					A turn-based combat system. Players challenge opponents, buy power-ups, and battle to the death. Features
					real-time image generation for HP bars.
				</p>
			</header>

			{/* USAGE EXAMPLE */}
			<section className="mb-20">
				<SectionHeader icon={Code2} title="Implementation" />
				<div className="relative group">
					<div className="absolute -inset-px bg-linear-to-r from-red-600 to-orange-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
					<div className="relative rounded-xl overflow-hidden shadow-2xl">
						<CodeBlock
							className="my-0!"
							language="typescript"
							code={`await client.wekyManager.createFight({
    context: interaction,
    opponent: targetUser, // GuildMember object
    embed: {
        title: "Duel Arena",
        color: "#ED4245"
    },
    buttons: {
        hit: "Attack",
        heal: "Potion",
        cancel: "Flee",
        accept: "Accept Duel",
        deny: "Decline"
    }
});`}
						/>
					</div>
				</div>
			</section>

			{/* GAME FLOW */}
			<section className="mb-20">
				<SectionHeader icon={UserPlus} title="Game Logic" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Phase 1: Request */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden">
						<div className="absolute top-0 right-0 p-4 opacity-10">
							<UserPlus className="w-24 h-24 text-yellow-500" />
						</div>
						<div className="relative z-10">
							<span className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2 block">Phase 1</span>
							<h3 className="text-white font-bold text-lg mb-4">The Challenge</h3>
							<p className="text-sm text-gray-400 leading-relaxed mb-6">
								The game starts by sending a request card to the opponent. They must click <strong>Accept</strong> to
								begin the fight. If they deny or time out, the game ends safely.
							</p>
							<div className="flex gap-2">
								<div className="px-3 py-1.5 rounded bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
									Accept
								</div>
								<div className="px-3 py-1.5 rounded bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">
									Deny
								</div>
							</div>
						</div>
					</div>

					{/* Phase 2: Combat */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 relative overflow-hidden">
						<div className="absolute top-0 right-0 p-4 opacity-10">
							<Skull className="w-24 h-24 text-red-500" />
						</div>
						<div className="relative z-10">
							<span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 block">Phase 2</span>
							<h3 className="text-white font-bold text-lg mb-4">Combat Loop</h3>
							<p className="text-sm text-gray-400 leading-relaxed mb-6">
								Players take turns. Each successful hit grants <strong>Coins</strong>. The API tracks HP and generates a
								new image card after every move.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SHOP SYSTEM */}
			<section className="mb-20">
				<SectionHeader icon={Store} title="Power-Ups Shop" />
				<p className="text-sm text-gray-400 mb-6">
					Players can spend earned coins on 3 types of power-ups during their turn.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Double Damage */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-red-500/30 transition-all">
						<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4">
							<Swords className="w-5 h-5" />
						</div>
						<h4 className="text-white font-bold text-sm">Damage Boost</h4>
						<div className="text-[10px] text-gray-500 font-mono mt-1 mb-3">Cost: 30 Coins</div>
						<p className="text-xs text-gray-400">
							Next attack deals <strong>2x Damage</strong>.
						</p>
					</div>

					{/* Shield */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-blue-500/30 transition-all">
						<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
							<Shield className="w-5 h-5" />
						</div>
						<h4 className="text-white font-bold text-sm">Shield</h4>
						<div className="text-[10px] text-gray-500 font-mono mt-1 mb-3">Cost: 25 Coins</div>
						<p className="text-xs text-gray-400">
							Reduces incoming damage by <strong>50%</strong> for one turn.
						</p>
					</div>

					{/* Heal */}
					<div className="p-6 rounded-xl border border-white/10 bg-[#0d0d0e] hover:border-green-500/30 transition-all">
						<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
							<Heart className="w-5 h-5" />
						</div>
						<h4 className="text-white font-bold text-sm">Health Potion</h4>
						<div className="text-[10px] text-gray-500 font-mono mt-1 mb-3">Cost: 20 Coins</div>
						<p className="text-xs text-gray-400">
							Instantly restores <strong>30 HP</strong> (Max 100).
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
