import { Gamepad2, Puzzle, Zap, Code2, Calculator, Github } from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#09090b] text-white pt-32 px-6 flex flex-col items-center">
			{/* Background Glow Effects */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

			{/* Hero Section */}
			<div className="text-center max-w-4xl mx-auto mb-20 relative z-10 animate-in fade-in zoom-in duration-700">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
					</span>
					@m3rcena/weky v14.25.1
				</div>

				<h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
					The Ultimate
					<br />
					<span className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
						Discord Minigame
					</span>{" "}
					Package
				</h1>

				<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
					Boost your Discord bot's engagement with plug-and-play minigames. Snake, Calculator, Akinator, and Fight
					systems—setup in seconds.
				</p>

				<div className="flex justify-center gap-4">
					<a
						href="https://www.npmjs.com/package/@m3rcena/weky"
						target="_blank"
						className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-bold transition flex items-center gap-2"
					>
						<Code2 className="w-5 h-5" /> npm install @m3rcena/weky
					</a>
					<a
						href="https://github.com/M3rcena/m3rcena-weky"
						target="_blank"
						className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-3 rounded-xl font-bold transition flex items-center gap-2"
					>
						<Github className="w-5 h-5" /> View Github
					</a>
				</div>
			</div>

			{/* Feature Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 pb-20">
				{/* Card 1 */}
				<div className="group relative bg-[#121214] border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
					<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity rotate-12">
						<Gamepad2 className="w-32 h-32 text-purple-500" />
					</div>
					<div className="bg-purple-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
						<Gamepad2 className="w-7 h-7 text-purple-400" />
					</div>
					<h3 className="text-2xl font-bold mb-2 text-white">15+ Games</h3>
					<p className="text-gray-400 text-sm leading-relaxed">
						Includes classics like Snake, Guess The Number, 2048, and advanced systems like duels.
					</p>
				</div>

				{/* Card 2 */}
				<div className="group relative bg-[#121214] border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-pink-500/50 transition-all duration-300">
					<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity rotate-12">
						<Puzzle className="w-32 h-32 text-pink-500" />
					</div>
					<div className="bg-pink-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20 group-hover:scale-110 transition-transform">
						<Puzzle className="w-7 h-7 text-pink-400" />
					</div>
					<h3 className="text-2xl font-bold mb-2 text-white">Highly Customizable</h3>
					<p className="text-gray-400 text-sm leading-relaxed">
						Change buttons, messages, embed colors, and logic. Fully written in TypeScript for type safety.
					</p>
				</div>

				{/* Card 3 */}
				<div className="group relative bg-[#121214] border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
					<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity rotate-12">
						<Calculator className="w-32 h-32 text-blue-500" />
					</div>
					<div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
						<Zap className="w-7 h-7 text-blue-400" />
					</div>
					<h3 className="text-2xl font-bold mb-2 text-white">Easy Setup</h3>
					<p className="text-gray-400 text-sm leading-relaxed">
						No complex databases required. Just initialize the package class and request the game.
					</p>
				</div>
			</div>
		</div>
	);
}
