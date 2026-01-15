import { Download, ShieldCheck, FileText, Terminal, AlertTriangle, Check } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

export default function InstallationDocs() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto p-4 sm:p-6">
			{/* HEADER */}
			<header className="mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
					<Download className="w-3 h-3" />
					Getting Started
				</div>
				<h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">Installation</h1>
				<p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
					Get up and running with <strong>Weky</strong> in seconds. Follow these steps to install the package and secure
					your API credentials.
				</p>
			</header>

			{/* STEP 1: NPM INSTALL */}
			<section className="mb-16">
				<div className="flex items-center gap-3 mb-6">
					<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold font-mono text-sm">
						1
					</div>
					<h2 className="text-xl font-bold text-white">Install the Package</h2>
				</div>

				<div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-1 overflow-hidden shadow-2xl">
					<div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/2">
						<Terminal className="w-4 h-4 text-gray-500" />
						<span className="text-xs font-mono text-gray-500">Terminal</span>
					</div>
					<div className="p-4">
						<CodeBlock language="bash" code={`npm install @m3rcena/weky`} />
					</div>
				</div>
			</section>

			{/* STEP 2: ENV SETUP */}
			<section className="mb-12">
				<div className="flex items-center gap-3 mb-6">
					<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold font-mono text-sm">
						2
					</div>
					<h2 className="text-xl font-bold text-white">Configure Credentials</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
					{/* Left: Explanation */}
					<div className="lg:col-span-3 space-y-6">
						<div className="prose prose-invert">
							<p className="text-gray-400 leading-relaxed">
								Weky requires an API token to function. You must set this token in your environment variables to
								authenticate your requests.
							</p>
						</div>

						{/* File Visualizer */}
						<div className="rounded-xl border border-white/10 bg-[#0d0d0e] overflow-hidden">
							<div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/2">
								<FileText className="w-4 h-4 text-blue-400" />
								<span className="text-xs font-mono text-gray-300">.env</span>
							</div>
							<div className="p-4">
								<CodeBlock language="bash" code={`WEKY_API_TOKEN="wk_live_theirtoken"`} />
							</div>
						</div>
					</div>

					{/* Right: Security Warning Card */}
					<div className="lg:col-span-2">
						<div className="h-full rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 flex flex-col relative overflow-hidden">
							<div className="absolute top-0 right-0 p-4 opacity-10">
								<ShieldCheck className="w-24 h-24 text-yellow-500" />
							</div>

							<div className="relative z-10">
								<div className="inline-flex items-center gap-2 text-yellow-400 font-bold text-sm uppercase tracking-wide mb-3">
									<AlertTriangle className="w-4 h-4" />
									Security Notice
								</div>
								<h3 className="text-white font-semibold mb-2">Never hardcode your token!</h3>
								<p className="text-sm text-gray-400 leading-relaxed mb-6">
									Your API token grants access to your account. <strong>Never</strong> paste it directly into your
									JavaScript/TypeScript files.
								</p>

								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<div className="mt-0.5 p-1 rounded-full bg-green-500/20 text-green-400">
											<Check className="w-3 h-3" />
										</div>
										<div className="text-xs text-gray-300">
											<span className="text-white font-semibold">DO:</span> Use a{" "}
											<code className="bg-white/10 px-1 rounded text-gray-200">.env</code> file.
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="mt-0.5 p-1 rounded-full bg-green-500/20 text-green-400">
											<Check className="w-3 h-3" />
										</div>
										<div className="text-xs text-gray-300">
											<span className="text-white font-semibold">DO:</span> Add{" "}
											<code className="bg-white/10 px-1 rounded text-gray-200">.env</code> to your{" "}
											<code className="bg-white/10 px-1 rounded text-gray-200">.gitignore</code>.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
