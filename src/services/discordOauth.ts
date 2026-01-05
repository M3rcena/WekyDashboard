export const DISCORD_CLIENT_ID = "1456659383789293578";
export const REDIRECT_URI = "http://localhost:5173/WekyDashboard/auth/callback";

export const DISCORD_AUTH_URL = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
	REDIRECT_URI
)}&scope=identify+email`;

export interface DiscordUser {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	email?: string;
	verified?: boolean;
}

export interface DiscordAuthResponse {
	user: DiscordUser;
}
