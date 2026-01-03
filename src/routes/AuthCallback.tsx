import { useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import type { UserData } from "../types";
import { apiService } from "../services/apiKeyService";

interface AuthCallbackProps {
	setUser: (user: UserData) => void;
}

export default function AuthCallback({ setUser }: AuthCallbackProps) {
	const navigate = useNavigate();
	const location = useLocation();

	const dataFetchedRef = useRef(false);

	const fetchDiscordUser = useCallback(
		async (code: string) => {
			try {
				const user = await apiService.handleDiscordLogin(code);

				localStorage.setItem("discord_user", JSON.stringify(user));

				if (!user) {
					return navigate("/");
				}

				setUser(user);
				navigate("/");
			} catch (error) {
				console.error("Login failed", error);
				navigate("/login");
			}
		},
		[setUser, navigate]
	);

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const code = searchParams.get("code");

		if (code) {
			if (dataFetchedRef.current) return;

			dataFetchedRef.current = true;

			fetchDiscordUser(code);
		} else {
			navigate("/login");
		}
	}, [location, fetchDiscordUser, navigate]);

	return (
		<div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-white">
			<Loader2 className="animate-spin w-10 h-10 text-blue-500 mb-4" />
			<h2 className="text-xl font-medium tracking-tight">Authenticating...</h2>
		</div>
	);
}
