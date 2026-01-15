import React from "react";
import { useParams, Navigate } from "react-router-dom";

import InstallationDocs from "../../docs/gettingStarted/installation";
import APIKeyDocs from "../../docs/gettingStarted/api-key";
import InitializationDocs from "../../docs/gettingStarted/initialization";
import WekyManagerDocs from "../../docs/coreClasses/weky-manager";
import NetworkManagerDocs from "../../docs/coreClasses/network-manager";
import LoggerManagerDocs from "../../docs/coreClasses/logger-manager";
import EventManagerDocs from "../../docs/coreClasses/event-manager";
import Docs2048 from "../../docs/minigames/game-2048";
import Types2048 from "../../docs/types/types-2048";
import DocsCalculator from "../../docs/minigames/game-calculator";
import TypesCalculator from "../../docs/types/types-calculator";
import DocsChaosWords from "../../docs/minigames/game-chaos-words";
import TypesChaosWords from "../../docs/types/types-chaos-words";
import DocsFastType from "../../docs/minigames/game-fast-type";
import TypesFastType from "../../docs/types/types-fast-type";
import DocsFight from "../../docs/minigames/game-fight";
import TypesFight from "../../docs/types/types-fight";
import DocsGuessTheNumber from "../../docs/minigames/game-guess-number";
import TypesGuessTheNumber from "../../docs/types/types-guess-number";
import DocsGuessThePokemon from "../../docs/minigames/game-guess-pokemon";
import TypesGuessThePokemon from "../../docs/types/types-guess-pokemon";
import DocsHangman from "../../docs/minigames/game-hangman";
import TypesHangman from "../../docs/types/types-hangman";
import DocsLieSwatter from "../../docs/minigames/game-lie-swatter";
import TypesLieSwatter from "../../docs/types/types-lie-swatter";
import DocsNeverHaveIEver from "../../docs/minigames/game-nhie";
import TypesNeverHaveIEver from "../../docs/types/types-nhie";
import DocsQuickClick from "../../docs/minigames/game-quick-click";
import TypesQuickClick from "../../docs/types/types-quick-click";
import DocsShuffleGuess from "../../docs/minigames/game-shuffle-guess";
import TypesShuffleGuess from "../../docs/types/types-shuffle-guess";
import DocsSnake from "../../docs/minigames/game-snake";
import TypesSnake from "../../docs/types/types-snake";
import DocsWillYouPressTheButton from "../../docs/minigames/game-wyptb";
import TypesWillYouPressTheButton from "../../docs/types/types-wyptb";
import DocsWouldYouRather from "../../docs/minigames/game-wyr";
import TypesWouldYouRather from "../../docs/types/types-wyr";

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

	// MINIGAMES
	"game-2048": Docs2048,
	"game-calculator": DocsCalculator,
	"game-chaos-words": DocsChaosWords,
	"game-fast-type": DocsFastType,
	"game-fight": DocsFight,
	"game-guess-number": DocsGuessTheNumber,
	"game-guess-pokemon": DocsGuessThePokemon,
	"game-hangman": DocsHangman,
	"game-lie-swatter": DocsLieSwatter,
	"game-nhie": DocsNeverHaveIEver,
	"game-quick-click": DocsQuickClick,
	"game-shuffle-guess": DocsShuffleGuess,
	"game-snake": DocsSnake,
	"game-wyptb": DocsWillYouPressTheButton,
	"game-wyr": DocsWouldYouRather,

	// CORE TYPES

	// TYPES
	"types-2048": Types2048,
	"types-calculator": TypesCalculator,
	"types-chaos-words": TypesChaosWords,
	"types-fast-type": TypesFastType,
	"types-fight": TypesFight,
	"types-guess-number": TypesGuessTheNumber,
	"types-guess-pokemon": TypesGuessThePokemon,
	"types-hangman": TypesHangman,
	"types-lie-swatter": TypesLieSwatter,
	"types-nhie": TypesNeverHaveIEver,
	"types-quick-click": TypesQuickClick,
	"types-shuffle-guess": TypesShuffleGuess,
	"types-snake": TypesSnake,
	"types-wyptb": TypesWillYouPressTheButton,
	"types-wyr": TypesWouldYouRather,
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
