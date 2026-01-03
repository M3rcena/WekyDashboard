import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gamepad2, LogOut, Key } from "lucide-react";
import type { DiscordUser } from "../services/discordOauth";

interface NavbarProps {
	user: DiscordUser | null;
	onLogout: () => void;
}

export default function Navbar({ user, onLogout }: NavbarProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/10 text-white rounded-full px-6 py-3 shadow-2xl flex items-center justify-between transition-all duration-300">
			<Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
				<div className="bg-purple-600/20 p-2 rounded-lg group-hover:bg-purple-600/30 transition border border-purple-500/20">
					<Gamepad2 className="w-5 h-5 text-purple-500" />
				</div>
				<br />
				<span>
					Weky<span className="text-purple-500">Dash</span>
				</span>
			</Link>

			<div>
				{user ? (
					<div className="relative">
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="flex items-center gap-3 hover:bg-white/5 pl-2 pr-1 py-1 rounded-full transition border border-transparent hover:border-white/10"
						>
							<span className="text-sm font-medium text-gray-300 hidden sm:block">{user.username}</span>
							<img
								src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
								alt="Profile"
								onError={(e) => {
									(e.target as HTMLImageElement).src = "https://cdn.discordapp.com/embed/avatars/0.png";
								}}
								className="w-9 h-9 rounded-full border-2 border-[#1a1a1c]"
							/>
						</button>

						{isDropdownOpen && (
							<div className="absolute right-0 mt-4 w-56 bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
								<div className="px-4 py-3 border-b border-white/5 mb-1">
									<p className="text-xs text-gray-500 uppercase font-bold">Signed in as</p>
									<p className="text-sm text-white truncate">{user.username}</p>
								</div>
								<Link
									to="/accessToken"
									onClick={() => setIsDropdownOpen(false)}
									className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-blue-600/10 hover:text-blue-400 transition"
								>
									<Key className="w-4 h-4" /> Access Tokens
								</Link>
								<button
									onClick={() => {
										onLogout();
										setIsDropdownOpen(false);
									}}
									className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition text-left"
								>
									<LogOut className="w-4 h-4" /> Logout
								</button>
							</div>
						)}
					</div>
				) : (
					location.pathname !== "/login" && (
						<Link
							to="/login"
							className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-white/5"
						>
							Login
						</Link>
					)
				)}
			</div>
		</nav>
	);
}
