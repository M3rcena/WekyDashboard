import React from "react";
import { useParams, Navigate } from "react-router-dom";

import TypesChaosWords from "../../docs/types/types-chaos-words";
import TypesCalculator from "../../docs/types/types-calculator";
import Types2048 from "../../docs/types/types-2048";
import TypesIMinigame from "../../docs/coreTypes/iminigame";
import TypesDiscordExtensions from "../../docs/coreTypes/discord-extensions";
import TypesEmbeds from "../../docs/coreTypes/common-embeds";
import TypesCustomOptions from "../../docs/coreTypes/custom-options";
import TypesFastType from "../../docs/types/types-fast-type";
import TypesFight from "../../docs/types/types-fight";
import TypesGuessTheNumber from "../../docs/types/types-guess-number";
import TypesGuessPokemon from "../../docs/types/types-guess-pokemon";
import InstallationDocs from "../../docs/gettingStarted/installation";
import APIKeyDocs from "../../docs/gettingStarted/api-key";
import InitializationDocs from "../../docs/gettingStarted/initialization";

const contentMap: Record<string, React.FC> = {
	// GETTING STARTED
	installation: InstallationDocs,
	"api-key": APIKeyDocs,
	initialization: InitializationDocs,

	// CORE TYPES
	"types-extend-discordjs": TypesDiscordExtensions,
	"types-embeds": TypesEmbeds,
	"types-custom-options": TypesCustomOptions,
	"types-iminigame": TypesIMinigame,

	// MINIGAME TYPES
	"types-2048": Types2048,
	"types-calculator": TypesCalculator,
	"types-chaos-words": TypesChaosWords,
	"types-fast-type": TypesFastType,
	"types-fight": TypesFight,
	"types-guess-number": TypesGuessTheNumber,
	"types-guess-pokemon": TypesGuessPokemon,
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
