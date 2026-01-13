import { Swords, Shield, Heart, Skull, UserPlus, MousePointer2, Zap, User, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- STRICT TYPES FOR CONFIG ROW ---
interface ConfigRowProps {
	property: string;
	type: string;
	desc: string;
	defaultVal?: string;
	icon?: LucideIcon;
}

// --- HELPER COMPONENT ---
const ConfigRow = ({ property, type, desc, defaultVal, icon: Icon }: ConfigRowProps) => (
	<div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="sm:w-60 shrink-0">
			<div className="flex items-center gap-2 mb-1">
				{Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
				<span className="font-mono text-sm font-bold text-white">{property}</span>
			</div>
			<span className="text-[10px] font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
				{type}
			</span>
		</div>
		<div className="flex-1">
			<p className="text-sm text-gray-400 leading-relaxed mb-1">{desc}</p>
			{defaultVal && (
				<div className="text-[10px] text-gray-600 font-mono">
					Default: <span className="text-gray-500">{defaultVal}</span>
				</div>
			)}
		</div>
	</div>
);

export default function TypesFight() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Swords className="w-3 h-3" />
					Minigame Configuration
				</div>
				<h1 className="text-4xl font-bold text-white tracking-tight mb-4">Fight Options</h1>
				<p className="text-lg text-gray-400 leading-relaxed">
					A turn-based PvP battle system. Players can attack, heal, and purchase power-ups using in-game coins generated
					during the fight. Requires an opponent to start.
				</p>
			</header>

			{/* --- SECTION 1: INTERFACE DEFINITION --- */}
			<section className="mb-16">
				<CodeBlock
					language="typescript"
					code={`export interface FightTypes {
    context: Context;
    opponent: GuildMember;
    embed?: Partial<Pick<Embeds, "color">>;
    time?: number;

    // Custom Button Labels
    buttons?: {
        hit?: string;
        heal?: string;
        cancel?: string;
        accept?: string;
        deny?: string;
    };

    // Built-in Powerups Config
    powerups?: {
        doubleDamage?: { label?: string; effectMessage?: string; replyMessage?: string; };
        shield?: { label?: string; effectMessage?: string; replyMessage?: string; };
        healBoost?: { label?: string; replyMessage?: string; };
    };

    // Messages
    opponentsTurnMessage?: string;
    highHealthMessage?: string;
    lowHealthMessage?: string;
    notEnoughtCoins?: string;
    
    // Embed States
    states?: {
        request?: string;
        active?: string;
        won?: string;
        surrender?: string;
        deny?: string;
        timeout?: string;
    };
}`}
				/>
			</section>

			{/* --- SECTION 2: CORE BATTLE SETTINGS --- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<UserPlus className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Setup & Players</h3>
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="opponent"
							type="GuildMember"
							desc="The user being challenged. Must be a valid member of the guild."
							icon={Swords}
						/>
						<ConfigRow
							property="buttons"
							type="Object"
							desc="Labels for the Hit, Heal, Accept, Deny, and Cancel buttons."
							icon={MousePointer2}
						/>
						<ConfigRow property="time" type="number" desc="Time limit per turn (in ms)." defaultVal="60000ms" />
					</div>
				</div>

				<div className="rounded-2xl border border-white/5 bg-white/1 overflow-hidden h-full">
					<div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center gap-2">
						<Skull className="w-4 h-4 text-purple-400" />
						<h3 className="text-sm font-bold text-white">Battle Logic Validation</h3>
					</div>
					<div className="p-4 text-xs text-gray-500 border-b border-white/5 bg-[#0d0d0e]">
						These messages prevent illegal moves during the game.
					</div>
					<div className="divide-y divide-white/5">
						<ConfigRow
							property="opponentsTurnMessage"
							type="string"
							desc="Shown when a player tries to act out of turn."
						/>
						<ConfigRow
							property="highHealthMessage"
							type="string"
							desc="Shown when trying to heal while HP is too high."
						/>
						<ConfigRow
							property="lowHealthMessage"
							type="string"
							desc="Shown when trying to heal without enough HP (if applicable)."
						/>
						<ConfigRow property="wrongUserFight" type="string" desc="Shown if a spectator tries to click buttons." />
					</div>
				</div>
			</section>

			{/* --- SECTION 3: POWER UP SYSTEM --- */}
			<section className="mb-16">
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white flex items-center gap-2">
						<Zap className="w-5 h-5 text-yellow-400" />
						Power-Up System
					</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<p className="text-sm text-gray-400 mb-6">
					The Fight game includes an economy system. Players earn coins by hitting/healing and can spend them on special
					items. You can customize the default items via <code className="text-purple-300">powerups</code> config.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
					<div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
						<div className="flex items-center gap-2 mb-2 font-bold text-red-300 text-sm">
							<Swords className="w-4 h-4" /> Double Damage
						</div>
						<p className="text-xs text-gray-400">Next hit deals 2x damage.</p>
					</div>
					<div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
						<div className="flex items-center gap-2 mb-2 font-bold text-blue-300 text-sm">
							<Shield className="w-4 h-4" /> Shield
						</div>
						<p className="text-xs text-gray-400">Blocks the next incoming attack completely.</p>
					</div>
					<div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
						<div className="flex items-center gap-2 mb-2 font-bold text-green-300 text-sm">
							<Heart className="w-4 h-4" /> Heal Boost
						</div>
						<p className="text-xs text-gray-400">Restores a large amount of HP instantly.</p>
					</div>
				</div>

				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6">
					<h3 className="text-sm font-bold text-white mb-4">Advanced: Custom Power-Up Logic</h3>
					<p className="text-xs text-gray-500 mb-4">
						If you want to create your own items, you will need to understand the{" "}
						<code className="text-purple-300">PlayerData</code> structure passed to your effect function.
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* PowerUp Interface */}
						<div>
							<div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-2">
								<Zap className="w-3 h-3" /> PowerUp Interface
							</div>
							<CodeBlock
								language="typescript"
								code={`interface PowerUp {
    id: string;
    label: string;
    style: ButtonStyle;
    cost: number;
    effect: (player: PlayerData, username: string) => string;
}`}
							/>
						</div>

						{/* PlayerData Interface */}
						<div>
							<div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-2">
								<User className="w-3 h-3" /> PlayerData Interface
							</div>
							<CodeBlock
								language="typescript"
								code={`interface PlayerData {
    memberId: string;
    username: string;
    health: number;
    lastAttack: string;
    coins: number;
    skipNextTurn: boolean;
    activeEffects: string[];
    specialButtons: string[];
}`}
							/>
							<div className="mt-2 text-xs text-gray-500">
								<span className="text-yellow-400 font-bold">Tip:</span> Use <code>activeEffects</code> to tag players
								with states (e.g. "poisoned") that your game loop checks.
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SECTION 4: GAME STATES --- */}
			<section>
				<div className="flex items-center gap-3 mb-6">
					<h2 className="text-xl font-semibold text-white">Embed States</h2>
					<div className="h-px flex-1 bg-white/5" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-4 rounded-xl bg-white/5 border border-white/5">
						<div className="font-mono text-sm text-white mb-1">states.request</div>
						<div className="text-xs text-gray-500">The initial embed showing the "Accept/Deny" buttons.</div>
					</div>
					<div className="p-4 rounded-xl bg-white/5 border border-white/5">
						<div className="font-mono text-sm text-white mb-1">states.active</div>
						<div className="text-xs text-gray-500">The main battle interface showing HP bars and logs.</div>
					</div>
					<div className="p-4 rounded-xl bg-white/5 border border-white/5">
						<div className="font-mono text-sm text-white mb-1">states.won</div>
						<div className="text-xs text-gray-500">Shown when HP drops to 0.</div>
					</div>
					<div className="p-4 rounded-xl bg-white/5 border border-white/5">
						<div className="font-mono text-sm text-white mb-1">states.surrender</div>
						<div className="text-xs text-gray-500">Shown when a player clicks Cancel.</div>
					</div>
				</div>
			</section>
		</div>
	);
}
