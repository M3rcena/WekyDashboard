import type { APIKeyEntry, ApiResponse, CreateKeyParams, UpdateKeyParams } from "../types/api";
import type { DiscordAuthResponse, DiscordUser } from "./discordOauth";

// Change this to your actual backend URL
const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const WebBypass = import.meta.env.VITE_SECURITY_WEB_CODE ?? "";

class ApiKeyService {
	/**
	 * Generic helper to handle requests and error parsing
	 */
	private async request<T>(endpoint: string, method: "POST" | "GET", body?: unknown): Promise<T> {
		try {
			const response = await fetch(`${BASE_URL}${endpoint}`, {
				method,
				headers: {
					"Content-Type": "application/json",
					"x-web-bypass": WebBypass.toString(),
				},
				body: body ? JSON.stringify(body) : undefined,
			});

			const text = await response.text();

			let data: ApiResponse<T> | null = null;
			try {
				data = text ? JSON.parse(text) : null;
			} catch {
				throw new Error(`Server returned non-JSON response: ${text.substring(0, 50)}...`);
			}

			if (!response.ok) {
				const errorMessage = data?.error || `Request failed with status ${response.status}`;
				throw new Error(errorMessage);
			}

			if (data && typeof data.success !== "undefined" && !data.success) {
				throw new Error(data.error || "Unknown API error");
			}

			return (data?.data ?? data) as T;
		} catch (error) {
			console.error(`API Error [${endpoint}]:`, error);
			throw error;
		}
	}

	// --- Public Methods ---

	/**
	 * Fetch all keys for a specific owner
	 */
	async getAllKeys(ownerID: string): Promise<APIKeyEntry[]> {
		return this.request<APIKeyEntry[]>("/getAllAPIKeys", "POST", { ownerID });
	}

	/**
	 * Create a new API Key
	 */
	async createKey(params: CreateKeyParams): Promise<void> {
		return this.request<void>("/createAPIKey", "POST", params);
	}

	/**
	 * Update an existing Key (Rename or Rotate)
	 */
	async updateKey(params: UpdateKeyParams): Promise<void> {
		return this.request<void>("/updateAPIKey", "POST", params);
	}

	/**
	 * Delete a Key
	 */
	async deleteKey(ownerID: string, botID: string): Promise<void> {
		return this.request<void>("/removeAPIKey", "POST", { ownerID, botID });
	}

	/**
	 * Discord Login
	 */
	async handleDiscordLogin(code: string): Promise<DiscordUser> {
		try {
			const response = await fetch(`${BASE_URL}/discord-auth`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-web-bypass": WebBypass.toString(),
				},
				body: JSON.stringify({ code }),
			});

			if (!response.ok) {
				const text = await response.text();
				throw new Error(text || `Login failed: ${response.status}`);
			}

			const rawData = (await response.json()) as DiscordAuthResponse;

			return rawData.user;
		} catch (error) {
			console.error("Discord Login Error:", error);
			throw error;
		}
	}
}

export const apiService = new ApiKeyService();
