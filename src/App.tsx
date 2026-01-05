import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./routes/Home";
import Login from "./routes/Login";
import AuthCallback from "./routes/AuthCallback";
import AccessTokens from "./routes/AccessTokens";
import Legal from "./routes/Legal";
import Status from "./routes/Status";
import type { DiscordUser } from "./services/discordOauth";
import DocsLayout from "./components/DocsLayout";
import DocsContent from "./routes/Docs/DocsContent";

function AppContent() {
	const location = useLocation();
	const [user, setUser] = useState<DiscordUser | null>(() => {
		const storedUser = localStorage.getItem("discord_user");
		if (storedUser) {
			try {
				return JSON.parse(storedUser);
			} catch {
				localStorage.removeItem("discord_user");
			}
		}
		return null;
	});

	const handleLogout = () => {
		setUser(null);
		localStorage.removeItem("discord_user");
		window.location.href = "/";
	};

	const isDocsPage = location.pathname.startsWith("/docs");

	return (
		<div className="bg-[#09090b] min-h-screen font-sans selection:bg-blue-500/30">
			<ScrollToTop />

			{/* Navbar stays on all pages except Docs */}
			{!isDocsPage && <Navbar user={user} onLogout={() => handleLogout()} />}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/auth/callback" element={<AuthCallback setUser={setUser} />} />

				{/* Protected Route Logic */}
				<Route path="/accessToken" element={user ? <AccessTokens /> : <Login />} />

				<Route path="/legal" element={<Legal />} />
				<Route path="/status" element={<Status />} />

				{/* --- DOCS ROUTES --- */}
				<Route path="/docs" element={<DocsLayout />}>
					<Route index element={<Navigate to="installation" replace />} />
					<Route path=":slug" element={<DocsContent />} />
				</Route>
			</Routes>

			<Footer />
		</div>
	);
}

function App() {
	return (
		<Router basename={import.meta.env.BASE_URL}>
			<AppContent />
		</Router>
	);
}

export default App;
