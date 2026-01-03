import { Link } from "react-router-dom";
import { Gamepad2, ArrowLeft } from "lucide-react";
import { DISCORD_AUTH_URL } from "../services/discordOauth";

export default function Login() {
	return (
		<div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center p-6 relative overflow-hidden">
			{/* Background Noise Pattern */}
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

			{/* Central Purple Glow Blob */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/30 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

			{/* Login Card */}
			<div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-500">
				<div className="bg-[#121214]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl text-center hover:border-purple-500/20 transition-all duration-300 group">
					{/* Brand Icon */}
					<div className="mx-auto bg-purple-500/10 border border-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/10 group-hover:scale-105 transition-transform duration-300">
						<Gamepad2 className="w-10 h-10 text-purple-400" />
					</div>

					{/* Titles */}
					<h2 className="text-3xl font-extrabold mb-3 tracking-tight">Welcome Back</h2>
					<p className="text-gray-400 text-lg mb-8 leading-relaxed">
						Sign in to manage your <br />
						<span className="font-bold bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
							WekyDash
						</span>{" "}
						integration.
					</p>

					{/* Discord Button */}
					<a
						href={DISCORD_AUTH_URL}
						className="group/btn flex items-center justify-center gap-3 w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-[#5865f2]/20 hover:shadow-[#5865f2]/40 mb-8"
					>
						<svg
							className="w-7 h-7 group-hover/btn:rotate-15 transition-transform duration-300"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.2 2.65.03.01.06 0 .07-.03.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.66-.25-1.3-.56-1.91-.91-.03-.02-.04-.07-.01-.1.13-.1.25-.2.37-.31.02-.02.05-.02.07-.01 3.84 1.76 8.03 1.76 11.81 0 .02-.01.05 0 .07.01.12.11.24.21.37.31.03.03.02.08-.01.1-.61.36-1.25.66-1.91.91-.04.01-.06.05-.04.09.31.61.67 1.19 1.07 1.74.01.03.04.04.07.03 1.67-.53 3.4-1.33 5.2-2.65.02-.01.03-.03.03-.05.44-4.53-.6-9.22-3.1-11.95-.01-.01-.02-.02-.03-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
						</svg>
						Continue with Discord
					</a>

					{/* Return Home Link */}
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition group/link"
					>
						<ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
						Return to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
