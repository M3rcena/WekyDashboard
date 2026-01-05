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
];
