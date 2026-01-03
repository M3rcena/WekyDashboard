import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="w-full py-10 bg-[#09090b] border-t border-white/5 text-center text-gray-600 text-sm">
			<div className="flex justify-center gap-6 mb-4">
				<Link to="/legal" className="hover:text-white transition">
					Terms
				</Link>
				<Link to="/legal" className="hover:text-white transition">
					Privacy
				</Link>
				<Link to="/status" className="hover:text-white transition">
					Status
				</Link>
			</div>
			<p>&copy; {new Date().getFullYear()} M3rcena Developement. All rights reserved.</p>
		</footer>
	);
}
