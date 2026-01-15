import React from "react";
import { useParams, Navigate } from "react-router-dom";

import InstallationDocs from "../../docs/gettingStarted/installation";
import APIKeyDocs from "../../docs/gettingStarted/api-key";
import InitializationDocs from "../../docs/gettingStarted/initialization";
import WekyManagerDocs from "../../docs/coreClasses/weky-manager";
import NetworkManagerDocs from "../../docs/coreClasses/network-manager";
import LoggerManagerDocs from "../../docs/coreClasses/logger-manager";
import EventManagerDocs from "../../docs/coreClasses/event-manager";

const contentMap: Record<string, React.FC> = {
	// GETTING STARTED
	installation: InstallationDocs,
	"api-key": APIKeyDocs,
	initialization: InitializationDocs,

	// CORE CLASSES
	"weky-manager": WekyManagerDocs,
	"network-manager": NetworkManagerDocs,
	"logger-manager": LoggerManagerDocs,
	"event-manager": EventManagerDocs,
};

export default function DocsContent() {
	const { slug } = useParams();

	if (!slug) return <Navigate to="/docs/installation" replace />;

	const Component = contentMap[slug];

	if (!Component) {
		return (
			<div className="py-20 text-center">
				<h1 className="text-6xl font-bold text-white mb-4">404</h1>
				<p className="text-gray-400">
					The documentation page <code className="text-purple-400">{slug}</code> does not exist.
				</p>
			</div>
		);
	}

	return <Component />;
}
