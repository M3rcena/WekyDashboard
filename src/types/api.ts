export interface APIKeyEntry {
	botID: string;
	apiKey: string;
	apiKeyName: string;
}

export interface ApiResponse<T = void> {
	success: boolean;
	message?: string;
	error?: string;
	data?: T;
}

export interface CreateKeyParams {
	ownerID: string;
	botID: string;
	apiKey: string;
	apiName: string;
}

export interface UpdateKeyParams {
	ownerID: string;
	botID: string;
	newApiKey?: string;
	newApiName?: string;
}
