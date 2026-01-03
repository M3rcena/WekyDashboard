import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RefreshCw } from "lucide-react";

const API_URL = "http://localhost:3000";

export default function LoginCallback() {
	const navigate = useNavigate();
	const called = useRef(false);

	useEffect(() => {
		// Prevent double-firing in React Strict Mode
		if (called.current) return;
		called.current = true;

		const verifyLogin = async () => {
			try {
				// We ask the backend: "Did the Discord redirect work?"
				// The backend should have set a cookie by now.
				const { data } = await axios.get(`${API_URL}/auth/status`, { withCredentials: true });

				if (data.user) {
					// Success! Go to dashboard
					navigate("/");
				} else {
					// Failed, go back to login
					navigate("/?error=login_failed");
				}
			} catch (error) {
				console.error("Login verification failed", error);
				navigate("/?error=server_error");
			}
		};

		// Small delay to ensure cookies are set/readable
		setTimeout(verifyLogin, 1000);
	}, [navigate]);

	return (
		<div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
			<div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col items-center">
				<RefreshCw className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
				<h2 className="text-xl font-bold text-white">Authenticating...</h2>
				<p className="text-slate-400 mt-2">Please wait while we connect to Discord.</p>
			</div>
		</div>
	);
}
