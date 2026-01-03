import { useState } from "react";
import { Server, Database, Globe, Activity, RefreshCw } from "lucide-react";

// Mock Data for the Status Page
const SYSTEM_STATUS = [
	{ id: 1, name: "API Endpoints", status: "operational", latency: "14ms", icon: Server },
	{ id: 2, name: "Database Clusters", status: "operational", latency: "Stable", icon: Database },
	{ id: 3, name: "Dashboard Website", status: "operational", latency: "24ms", icon: Globe },
	{ id: 4, name: "Game Logic Engine", status: "degraded", latency: "140ms", icon: Activity },
];

const INCIDENTS = [
	{
		id: 1,
		date: "Jan 02, 2026",
		title: "Game Logic High Latency",
		status: "Investigating",
		description: "We are currently investigating reports of higher than usual latency in the Snake game engine.",
		color: "text-yellow-400",
		borderColor: "border-yellow-500/20",
		bg: "bg-yellow-500/10",
	},
	{
		id: 2,
		date: "Jan 01, 2026",
		title: "Scheduled Maintenance",
		status: "Resolved",
		description: "Routine database upgrades completed successfully.",
		color: "text-green-400",
		borderColor: "border-green-500/20",
		bg: "bg-green-500/10",
	},
];

export default function Status() {
	const [isRefreshing, setIsRefreshing] = useState(false);

	const handleRefresh = () => {
		setIsRefreshing(true);
		setTimeout(() => setIsRefreshing(false), 1000);
	};

	return (
		<div className="min-h-screen bg-[#09090b] text-white pt-32 pb-20 px-6 flex justify-center">
			{/* Background Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-green-900/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="w-full max-w-4xl relative z-10">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
					<div>
						<h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-4">System Status</h1>
						<p className="text-gray-400 text-lg">Current status of @m3rcena/weky services.</p>
					</div>

					<div className="flex items-center gap-3 bg-[#121214] border border-white/10 px-5 py-2 rounded-full">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
						</span>
						<span className="font-bold text-green-400">All Systems Operational</span>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
					{SYSTEM_STATUS.map((service) => (
						<div
							key={service.id}
							className="bg-[#121214] border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-white/20 transition"
						>
							<div className="flex items-center gap-4">
								<div
									className={`p-3 rounded-xl ${
										service.status === "operational"
											? "bg-green-500/10 text-green-400"
											: "bg-yellow-500/10 text-yellow-400"
									}`}
								>
									<service.icon className="w-6 h-6" />
								</div>
								<div>
									<h3 className="font-bold text-lg">{service.name}</h3>
									<p className="text-xs text-gray-500 uppercase font-mono tracking-wider">{service.latency}</p>
								</div>
							</div>

							<div
								className={`px-3 py-1 rounded-full text-xs font-bold border ${
									service.status === "operational"
										? "bg-green-500/10 text-green-400 border-green-500/20"
										: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
								}`}
							>
								{service.status === "operational" ? "Operational" : "Degraded Performance"}
							</div>
						</div>
					))}
				</div>

				{/* Incident History */}
				<div className="mb-8 flex justify-between items-center">
					<h2 className="text-2xl font-bold">Incident History</h2>
					<button
						onClick={handleRefresh}
						className="text-gray-500 hover:text-white transition flex items-center gap-2 text-sm"
					>
						<RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} /> Refresh
					</button>
				</div>

				<div className="space-y-6 relative border-l border-white/10 ml-3 pl-8 pb-10">
					{INCIDENTS.map((incident) => (
						<div key={incident.id} className="relative">
							{/* Timeline Dot */}
							<div
								className={`absolute -left-9.75 top-1 h-5 w-5 rounded-full border-4 border-[#09090b] ${
									incident.status === "Resolved" ? "bg-green-500" : "bg-yellow-500"
								}`}
							></div>

							<div className={`p-6 rounded-2xl border ${incident.borderColor} ${incident.bg}`}>
								<div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
									<h3 className={`text-lg font-bold ${incident.color}`}>{incident.title}</h3>
									<span className="text-xs text-gray-400 font-mono">{incident.date}</span>
								</div>
								<div className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-black/20 text-white/80 mb-3 border border-white/5">
									{incident.status}
								</div>
								<p className="text-gray-300 text-sm leading-relaxed">{incident.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
