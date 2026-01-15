export type DocPage = {
	title: string;
	slug: string;
	description?: string;
};

export type DocCategory = {
	title: string;
	items: DocPage[];
};

export const docsConfig: DocCategory[] = [
	{
		title: "Getting Started",
		items: [
			{ title: "Installation", slug: "installation", description: "Install and setup env vars." },
			{ title: "API Key", slug: "api-key", description: "Get your access token." },
			{ title: "Initialization", slug: "initialization", description: "Connecting Weky to Discord." },
		],
	},
	{
		title: "Core Classes",
		items: [
			{ title: "WekyManager", slug: "weky-manager", description: "The main entry point." },
			{ title: "NetworkManager", slug: "network-manager", description: "Internal API handling." },
			{ title: "LoggerManager", slug: "logger-manager", description: "Internal Logger handling." },
			{ title: "EventManager", slug: "event-manager", description: "Internal Discord Events handling." },
		],
	},
	{
		title: "Minigames",
		items: [
			{ title: "2048", slug: "game-2048" },
			{ title: "Calculator", slug: "game-calculator" },
			{ title: "Chaos Words", slug: "game-chaos-words" },
			{ title: "Fast Type", slug: "game-fast-type" },
			{ title: "Fight", slug: "game-fight" },
			{ title: "Guess The Number", slug: "game-number" },
			{ title: "Guess The Pokemon", slug: "game-pokemon" },
			{ title: "Hangman", slug: "game-hangman" },
			{ title: "Lie Swatter", slug: "game-lie-swatter" },
			{ title: "Never Have I Ever", slug: "game-nhie" },
			{ title: "Quick Click", slug: "game-click" },
			{ title: "Shuffle Guess", slug: "game-shuffle-guess" },
			{ title: "Snake", slug: "game-snake" },
			{ title: "Will You Press The Button", slug: "game-wyptb" },
			{ title: "Would You Rather", slug: "game-wyr" },
		],
	},
	{
		title: "Core Types",
		items: [
			{ title: "Discord JS Extend", slug: "types-extend-discordjs", description: "Extended Discord JS types" },
			{ title: "Embeds", slug: "types-embeds", description: "Package Embed Options" },
			{ title: "Custom Options", slug: "types-custom-options", description: "The checked options of a minigame" },
			{
				title: "Minigames Base",
				slug: "types-iminigame",
				description: "The base interface used in all minigame classes",
			},
		],
	},
	{
		title: "Types",
		items: [
			{ title: "2048", slug: "types-2048" },
			{ title: "Calculator", slug: "types-calculator" },
			{ title: "Chaos Words", slug: "types-chaos-words" },
			{ title: "Fast Type", slug: "types-fast-type" },
			{ title: "Fight", slug: "types-fight" },
			{ title: "Guess The Number", slug: "types-guess-number" },
			{ title: "Guess The Pokemon", slug: "types-guess-pokemon" },
			{ title: "Hangman", slug: "types-hangman" },
			{ title: "Lie Swatter", slug: "types-lie-swatter" },
			{ title: "Never Have I Ever", slug: "types-nhie" },
			{ title: "Quick Click", slug: "types-click" },
			{ title: "Shuffle Guess", slug: "types-shuffle-guess" },
			{ title: "Snake", slug: "types-snake" },
			{ title: "Will You Press The Button", slug: "types-wyptb" },
			{ title: "Would You Rather", slug: "types-wyr" },
		],
	},
];
