export interface UserData {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	email?: string;
	verified?: boolean;
}
