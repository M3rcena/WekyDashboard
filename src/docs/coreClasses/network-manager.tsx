import { Globe, Server, ShieldCheck, Wifi, Database, Skull, Gamepad2, type LucideIcon } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

// --- REUSABLE COMPONENTS ---

interface EndpointRowProps {
	method: string;
	desc: string;
	verb?: "GET" | "POST";
	returns: string;
}

// CHANGED: From "Card" to "Row" for better space management
const EndpointRow = ({ method, desc, verb = "POST", returns }: EndpointRowProps) => (
	<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
		<div className="flex-1 min-w-0">
			<div className="flex items-center gap-3 mb-1.5 flex-wrap">
				<code className="text-sm font-bold text-purple-300 font-mono">{method}</code>
				<span
					className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
						verb === "GET"
							? "text-blue-400 bg-blue-500/10 border-blue-500/20"
							: "text-green-400 bg-green-500/10 border-green-500/20"
					}`}
				>
					{verb}
				</span>
			</div>
			<p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
		</div>
		<div className="md:text-right shrink-0">
			<span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider block mb-1">Returns</span>
			<code className="text-xs text-white bg-white/5 px-2 py-1 rounded border border-white/5 inline-block break-all md:break-normal">
				{returns}
			</code>
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

// --- MAIN COMPONENT ---

export default function NetworkManagerDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-16 relative">
				<div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
					<Globe className="w-3 h-3" />
					API Bridge
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
					Network
					<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Manager</span>
				</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Handles authentication, error logging, and data fetching. It serves as the secure bridge between your Discord
					Bot and the Weky API logic.
				</p>
			</header>

			{/* CORE CONNECTION */}
			<section className="mb-20">
				<SectionHeader icon={Wifi} title="Connection & Auth" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					<div className="space-y-4">
						<div className="p-5 rounded-xl border border-white/10 bg-[#0d0d0e]">
							<h3 className="text-white font-bold mb-2 flex items-center gap-2">
								<ShieldCheck className="w-4 h-4 text-green-400" />
								Authentication
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Every request is automatically signed with your <code>x-api-key</code> and <code>x-bot-id</code>{" "}
								headers. The manager handles header injection and error parsing automatically.
							</p>
						</div>
						<div className="p-5 rounded-xl border border-white/10 bg-[#0d0d0e]">
							<h3 className="text-white font-bold mb-2 flex items-center gap-2">
								<Server className="w-4 h-4 text-blue-400" />
								Base URL
							</h3>
							<code className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
								https://weky.mivator.com/api/v1
							</code>
						</div>
					</div>

					<div className="relative group">
						<div className="absolute -inset-px bg-linear-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
						<div className="relative rounded-xl overflow-hidden shadow-2xl">
							<CodeBlock
								className="my-0!"
								language="typescript"
								code={`// Initialize Connection
const isConnected = await client
    .wekyManager.NetworkManager.init();

if (isConnected) {
    console.log("API Connected!");
}`}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* FIGHT API */}
			<section className="mb-16">
				<SectionHeader icon={Skull} title="Fight API" />
				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
					<EndpointRow
						method=".createGame(...)"
						desc="Initializes a new fight session in the database."
						returns="Promise<string>"
					/>
					<EndpointRow
						method=".getPlayer(gameID, isOpponent)"
						desc="Fetches full stats (HP, Coins) for a specific player."
						returns="Promise<PlayerData>"
					/>
					<EndpointRow
						method=".updatePlayers(gameID, p1, p2)"
						desc="Commits changes (damage, heals) to the database."
						returns="Promise<boolean>"
					/>
					<EndpointRow
						method=".makeMainCard(gameID...)"
						desc="Generates the battle UI image with current HP bars."
						returns="Promise<AttachmentBuilder>"
					/>
				</div>
			</section>

			{/* ARCADE API (List View) */}
			<section className="mb-16">
				<SectionHeader icon={Gamepad2} title="Arcade API" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Snake */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
						<div className="px-4 py-3 border-b border-white/5 bg-white/2">
							<span className="text-xs font-bold text-green-400 uppercase tracking-wider">Snake</span>
						</div>
						<EndpointRow method=".moveSnake(...)" desc="Calculates next tick logic." returns="Promise<State>" />
						<EndpointRow
							method=".getSnakeBoardImage(...)"
							desc="Renders the grid."
							returns="Promise<AttachmentBuilder>"
						/>
						<EndpointRow method=".endSnakeGame(id)" desc="Cleans up session." returns="Promise<boolean>" />
					</div>

					{/* 2048 */}
					<div className="rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
						<div className="px-4 py-3 border-b border-white/5 bg-white/2">
							<span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">2048</span>
						</div>
						<EndpointRow method=".move2048(...)" desc="Processes tile sliding logic." returns="Promise<State>" />
						<EndpointRow
							method=".get2048BoardImage(...)"
							desc="Renders the tile board."
							returns="Promise<AttachmentBuilder>"
						/>
						<EndpointRow method=".end2048Game(id)" desc="Cleans up session." returns="Promise<boolean>" />
					</div>

					{/* Hangman - Full Width */}
					<div className="lg:col-span-2 rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
						<div className="px-4 py-3 border-b border-white/5 bg-white/2">
							<span className="text-xs font-bold text-red-400 uppercase tracking-wider">Hangman</span>
						</div>
						<EndpointRow
							method=".guessHangman(id, letter)"
							desc="Processes a single letter guess."
							returns="Promise<State>"
						/>
						<EndpointRow
							method=".getHangmanBoardImage(...)"
							desc="Renders the hangman drawing."
							returns="Promise<AttachmentBuilder>"
						/>
					</div>
				</div>
			</section>

			{/* UTILITIES */}
			<section className="mb-20">
				<SectionHeader icon={Database} title="Data Utilities" />
				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
					<EndpointRow
						method=".getUsage()"
						desc="Returns global bot statistics."
						verb="GET"
						returns="Promise<UsageData>"
					/>
					<EndpointRow
						method=".getRandomSentence(len)"
						desc="Fetches random words for ChaosWords."
						verb="GET"
						returns="Promise<string[]>"
					/>
					<EndpointRow
						method=".getText(difficulty)"
						desc="Fetches a sentence for FastType."
						verb="GET"
						returns="Promise<string>"
					/>
					<EndpointRow
						method=".getWillYouPressTheButton()"
						desc="Fetches a random dilemma."
						verb="GET"
						returns="Promise<DilemmaData>"
					/>
				</div>
			</section>
		</div>
	);
}
