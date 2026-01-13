// routes/NotFound.tsx
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-[#09090b] text-white pt-32 px-6 flex flex-col items-center relative overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

			<div className="text-center max-w-4xl mx-auto relative z-10 animate-in fade-in zoom-in duration-700">
				<div className="mx-auto bg-purple-500/10 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 border border-purple-500/20 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
					<AlertTriangle className="w-10 h-10 text-purple-400" />
				</div>

				<h1 className="text-8xl md:text-9xl font-extrabold mb-2 tracking-tight">
					<span className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
						404
					</span>
				</h1>

				<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Page Not Found</h2>

				<p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed mb-10">
					The page you're looking for seems to have been eaten by a Grue. Check the URL or head back to safety.
				</p>

				{/* Action Button (Matched to your 'npm install' button style) */}
				<div className="flex justify-center">
					<Link
						to="/"
						className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-purple-500/10"
					>
						<Home className="w-5 h-5" /> Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}
