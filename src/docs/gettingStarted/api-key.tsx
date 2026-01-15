import { Key, LogIn, User, Plus, Copy, ShieldAlert, LayoutDashboard, MousePointerClick } from "lucide-react";

export default function APIKeyDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Key className="w-3 h-3" />
					Authentication
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">Get Your API Key</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Follow this guide to generate a secure access token for your bot. Manage your keys effortlessly via the Weky
					Dashboard.
				</p>
			</header>

			{/* STEP 1: DASHBOARD LOGIN */}
			<section className="mb-12 relative">
				<div className="absolute left-4 top-0 bottom-0 w-px bg-white/5 md:hidden" />

				<div className="flex gap-6 relative">
					{/* Step Number */}
					<div className="hidden md:flex flex-col items-center">
						<div className="w-10 h-10 rounded-full bg-[#1e1e20] border border-white/10 flex items-center justify-center text-white font-bold shadow-lg z-10">
							1
						</div>
						<div className="flex-1 w-px bg-white/10 my-2" />
					</div>

					<div className="flex-1 pb-12">
						<h3 className="text-xl font-bold text-white mb-4">Login to Dashboard</h3>
						<p className="text-gray-400 mb-6">
							Navigate to the official dashboard and sign in using your Discord account.
						</p>

						<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-white/20 transition-all">
							<div className="flex items-center gap-4">
								<div className="p-3 rounded-lg bg-[#5865F2]/10 text-[#5865F2]">
									<LayoutDashboard className="w-6 h-6" />
								</div>
								<div className="text-sm">
									<div className="text-white font-medium">Weky Dashboard</div>
									<div className="text-gray-500">m3rcena.github.io/WekyDashboard</div>
								</div>
							</div>

							<a
								href="https://m3rcena.github.io/WekyDashboard/"
								target="_blank"
								rel="noreferrer"
								className="px-5 py-2.5 bg-[#5865F2] hover:bg-[#4752c4] text-white text-sm font-bold rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
							>
								<LogIn className="w-4 h-4" />
								Login via Discord
							</a>
						</div>
					</div>
				</div>

				{/* STEP 2: NAVIGATION */}
				<div className="flex gap-6 relative">
					<div className="hidden md:flex flex-col items-center">
						<div className="w-10 h-10 rounded-full bg-[#1e1e20] border border-white/10 flex items-center justify-center text-white font-bold shadow-lg z-10">
							2
						</div>
						<div className="flex-1 w-px bg-white/10 my-2" />
					</div>

					<div className="flex-1 pb-12">
						<h3 className="text-xl font-bold text-white mb-4">Navigate to Tokens</h3>
						<p className="text-gray-400 mb-6">
							Once logged in, click your profile picture in the top-right corner to open the menu.
						</p>

						{/* Visual Mockup of Dropdown */}
						<div className="max-w-xs mx-auto sm:mx-0 rounded-xl border border-white/10 bg-[#18181b] p-2 shadow-2xl">
							<div className="flex items-center gap-3 p-3 mb-2 border-b border-white/5">
								<div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500" />
								<div className="space-y-1">
									<div className="h-2 w-20 bg-white/20 rounded" />
									<div className="h-1.5 w-12 bg-white/10 rounded" />
								</div>
							</div>
							<div className="space-y-1">
								<div className="px-3 py-2 rounded text-sm text-gray-500 flex items-center gap-3">
									<User className="w-4 h-4" /> Profile
								</div>
								<div className="px-3 py-2 rounded bg-purple-500/20 text-purple-300 text-sm font-bold flex items-center gap-3 border border-purple-500/20 relative overflow-hidden">
									<Key className="w-4 h-4" />
									Access Tokens
									<MousePointerClick className="w-4 h-4 absolute right-2 text-white animate-bounce" />
								</div>
								<div className="px-3 py-2 rounded text-sm text-gray-500 flex items-center gap-3">
									<LogIn className="w-4 h-4 rotate-180" /> Logout
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* STEP 3: GENERATION */}
				<div className="flex gap-6 relative">
					<div className="hidden md:flex flex-col items-center">
						<div className="w-10 h-10 rounded-full bg-[#1e1e20] border border-white/10 flex items-center justify-center text-white font-bold shadow-lg z-10">
							3
						</div>
					</div>

					<div className="flex-1">
						<h3 className="text-xl font-bold text-white mb-4">Generate & Bind</h3>
						<p className="text-gray-400 mb-6">
							Click <strong className="text-white">Generate New</strong> and fill in the required details.
						</p>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
							<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 space-y-4">
								<div className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-2">
									<Plus className="w-4 h-4 text-green-400" />
									Required Fields
								</div>

								<div className="space-y-3">
									<div>
										<label className="text-xs text-gray-500 font-mono uppercase">Token Name</label>
										<div className="h-10 mt-1 rounded bg-white/5 border border-white/10 flex items-center px-3 text-sm text-gray-400">
											My Awesome Bot
										</div>
									</div>
									<div>
										<label className="text-xs text-gray-500 font-mono uppercase">Bot ID (Binding)</label>
										<div className="h-10 mt-1 rounded bg-white/5 border border-white/10 flex items-center px-3 text-sm text-gray-400">
											123456789012345678
										</div>
										<p className="text-[10px] text-gray-500 mt-1.5">
											* The Discord Application ID of the bot that will use this key.
										</p>
									</div>
								</div>
							</div>

							{/* Important Note Card */}
							<div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6 flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-4 text-purple-400">
									<ShieldAlert className="w-8 h-8" />
									<h4 className="font-bold">One Bot, One Key</h4>
								</div>
								<p className="text-sm text-gray-300 leading-relaxed mb-4">
									For security reasons, API keys are <strong>bound to specific Bot IDs</strong>.
								</p>
								<p className="text-sm text-gray-400 leading-relaxed">
									You cannot reuse the same key for multiple bots. Please generate a unique key for each application.
								</p>
							</div>
						</div>

						{/* Final Copy Step */}
						<div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 flex items-center gap-4">
							<div className="p-2 rounded-full bg-green-500/20 text-green-400">
								<Copy className="w-5 h-5" />
							</div>
							<div>
								<h4 className="text-green-400 font-bold text-sm">Token Created!</h4>
								<p className="text-xs text-green-300/70">
									Copy your new token immediately and add it to your <code className="text-white">.env</code> file.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
