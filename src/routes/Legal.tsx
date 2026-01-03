import { Shield, Lock, Scale, Github, Database, Activity, XCircle, CheckCircle } from "lucide-react";

export default function Legal() {
	return (
		<div className="min-h-screen bg-[#09090b] text-white pt-32 pb-20 px-6 flex justify-center">
			{/* Background Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="w-full max-w-4xl relative z-10">
				{/* Header */}
				<div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
						<Scale className="w-8 h-8 text-purple-400" />
					</div>
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4">Legal & Privacy</h1>
					<p className="text-gray-400">Transparency about how @m3rcena/weky handles your data.</p>
					<p className="text-xs font-mono text-purple-500 mt-4 uppercase tracking-widest">Last Updated: 2 Jan 2026</p>
				</div>

				{/* Content Container */}
				<div className="space-y-8">
					{/* Section 1: MIT License */}
					<section className="bg-[#121214] border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition duration-300">
						<div className="flex items-center gap-3 mb-6">
							<Shield className="w-6 h-6 text-blue-400" />
							<h2 className="text-2xl font-bold">License</h2>
						</div>

						<p className="text-gray-400 leading-relaxed mb-6">
							The <strong>@m3rcena/weky</strong> package is licensed under the{" "}
							<a
								href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
								target="_blank"
								className="text-blue-400 hover:underline font-medium"
							>
								CC BY-NC-ND 4.0 International
							</a>{" "}
							license.
							<br />
							This is a strict license that protects the integrity of the code.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
								<div className="flex items-center gap-2 mb-2 text-green-400 font-bold">
									<CheckCircle className="w-5 h-5" /> Allowed
								</div>
								<ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
									<li>
										<b>Share:</b> Copy and redistribute the material in any medium or format.
									</li>
									<li>
										<b>Use:</b> Install and use the package in your Discord bots.
									</li>
								</ul>
							</div>

							<div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
								<div className="flex items-center gap-2 mb-2 text-red-400 font-bold">
									<XCircle className="w-5 h-5" /> Not Allowed
								</div>
								<ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
									<li>
										<b>Commercial Use:</b> You cannot use this material for commercial purposes (selling the code).
									</li>
									<li>
										<b>Derivatives:</b> If you remix, transform, or build upon the material, you **cannot** distribute
										the modified material.
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-6 bg-black/30 p-4 rounded-xl border border-white/5 text-sm text-gray-500 italic">
							* You must give appropriate credit, provide a link to the license, and indicate if changes were made.
						</div>
					</section>

					{/* Section 2: Data Collection & Storage (UPDATED) */}
					<section className="bg-[#121214] border border-white/10 p-8 rounded-3xl hover:border-pink-500/30 transition duration-300">
						<div className="flex items-center gap-3 mb-4">
							<Database className="w-6 h-6 text-pink-400" />
							<h2 className="text-2xl font-bold">Data Collection & Storage</h2>
						</div>
						<p className="text-gray-400 leading-relaxed mb-6">
							To ensure stability and provide analytics, we collect minimal data regarding the usage of the package.
							Here is exactly what we store:
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Usage Tracking */}
							<div className="bg-black/20 p-5 rounded-2xl border border-white/5">
								<div className="flex items-center gap-2 mb-2 text-pink-400 font-semibold">
									<Activity className="w-4 h-4" />
									<h3>API Usage Stats</h3>
								</div>
								<p className="text-sm text-gray-400">
									We track the number of API requests made <strong>per bot</strong> (identified by Client ID). This
									helps us monitor load and prevent abuse of the free endpoints.
								</p>
							</div>

							{/* Game State */}
							<div className="bg-black/20 p-5 rounded-2xl border border-white/5">
								<div className="flex items-center gap-2 mb-2 text-pink-400 font-semibold">
									<Lock className="w-4 h-4" />
									<h3>Temporary Game State</h3>
								</div>
								<p className="text-sm text-gray-400">
									Active game sessions are saved to our database to handle state management.{" "}
									<strong>This data is automatically deleted</strong> the moment the game ends.
								</p>
							</div>
						</div>
					</section>

					{/* Section 3: Discord ToS */}
					<section className="bg-[#121214] border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition duration-300">
						<div className="flex items-center gap-3 mb-4">
							<Shield className="w-6 h-6 text-purple-400" />
							<h2 className="text-2xl font-bold">Discord Compliance</h2>
						</div>
						<p className="text-gray-400 leading-relaxed">
							When using this package, you are responsible for ensuring your bot complies with the{" "}
							<a href="https://discord.com/terms" target="_blank" className="text-purple-400 hover:underline">
								Discord Terms of Service
							</a>{" "}
							and{" "}
							<a
								href="https://discord.com/developers/docs/policy"
								target="_blank"
								className="text-purple-400 hover:underline"
							>
								Developer Policy
							</a>
							. Do not use this package to spam API requests or abuse Discord's interaction limits.
						</p>
					</section>

					{/* Contact */}
					<div className="text-center pt-8">
						<p className="text-gray-500 mb-4">Questions about your data?</p>
						<a
							href="https://github.com/M3rcena/m3rcena-weky/issues"
							target="_blank"
							className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-sm font-medium transition"
						>
							<Github className="w-4 h-4" /> Contact Us
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
