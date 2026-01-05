import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { docsConfig } from "../config/docs";
import { Menu, X, ChevronRight, Book, ArrowRight, ArrowLeft } from "lucide-react";

// --- SUB-COMPONENT: NAVIGATION FOOTER ---
const DocNavigation = () => {
	const { pathname } = useLocation();
	const currentSlug = pathname.split("/").pop();

	const allItems = docsConfig.flatMap((category) => category.items);
	const currentIndex = allItems.findIndex((item) => item.slug === currentSlug);

	const nextItem = allItems[currentIndex + 1];
	const prevItem = allItems[currentIndex - 1];

	if (!nextItem && !prevItem) return null;

	return (
		<div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
			{prevItem ? (
				<Link
					to={`/docs/${prevItem.slug}`}
					className="flex-1 p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-all group"
				>
					<div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
						<ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous
					</div>
					<div className="text-white font-medium group-hover:text-purple-400 transition-colors">{prevItem.title}</div>
				</Link>
			) : (
				<div className="flex-1" />
			)}

			{nextItem ? (
				<Link
					to={`/docs/${nextItem.slug}`}
					className="flex-1 p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-all group text-right"
				>
					<div className="flex items-center justify-end gap-2 text-gray-500 text-xs mb-2">
						Next <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
					</div>
					<div className="text-white font-medium group-hover:text-purple-400 transition-colors">{nextItem.title}</div>
				</Link>
			) : (
				<div className="flex-1" />
			)}
		</div>
	);
};

export default function DocsLayout() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);
	const { pathname } = useLocation();

	const currentPathSlug = location.pathname.split("/").pop() || "";

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo(0, 0);
		}
	}, [pathname]);

	return (
		<div className="min-h-screen bg-[#09090b] text-gray-300 font-sans flex flex-col lg:flex-row bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-900/10 via-[#09090b] to-[#09090b]">
			{/* Mobile Header */}
			<div className="lg:hidden flex items-center justify-between p-4 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-50">
				<span className="font-bold text-white flex items-center gap-2">
					<Book className="w-5 h-5 text-purple-500" /> Weky Docs
				</span>
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="p-2 hover:bg-white/5 rounded-lg transition-colors"
				>
					{isMobileMenuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{/* SIDEBAR */}
			<aside
				className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-[#09090b] border-r border-white/5 
        transform transition-transform duration-300 ease-in-out 
        lg:translate-x-0 lg:static lg:h-screen lg:overflow-y-auto pt-16 lg:pt-0
        ${isMobileMenuOpen ? "translate-x-0 shadow-2xl shadow-purple-500/20" : "-translate-x-full"}
      `}
			>
				<div className="p-8">
					<div className="text-2xl font-bold text-white mb-10 hidden lg:flex items-center gap-3">
						<div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
							<Book className="w-5 h-5 text-white" />
						</div>
						Weky<span className="text-purple-500">Docs</span>
					</div>

					<nav className="space-y-8">
						{docsConfig.map((category, idx) => (
							<div key={idx}>
								<h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 px-3">
									{category.title}
								</h3>
								<ul className="space-y-1">
									{category.items.map((item) => (
										<li key={item.slug}>
											<NavLink
												to={`/docs/${item.slug}`}
												onClick={() => setIsMobileMenuOpen(false)}
												className={({ isActive }) => `
                          group flex items-center px-4 py-2.5 text-sm transition-all rounded-xl
                          ${
														isActive
															? "text-purple-400 bg-purple-500/10 font-semibold shadow-inner"
															: "text-gray-400 hover:text-white hover:bg-white/3"
													}
                        `}
											>
												{item.title}
											</NavLink>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
			</aside>

			{/* MAIN CONTENT AREA */}
			<main
				ref={scrollRef}
				className="flex-1 min-w-0 py-10 px-6 lg:px-16 lg:py-16 overflow-y-auto h-screen scroll-smooth"
			>
				<div className="max-w-3xl mx-auto">
					{/* Breadcrumbs */}
					<div className="flex items-center text-[10px] text-gray-500 mb-8 font-mono uppercase tracking-widest">
						Docs
						<ChevronRight className="w-3 h-3 mx-2 text-gray-700" />
						{currentPathSlug?.includes("-") ? currentPathSlug.split("-")[0] : "General"}
						<ChevronRight className="w-3 h-3 mx-2 text-gray-700" />
						<span className="text-purple-500">{currentPathSlug?.replace(/-/g, " ")}</span>
					</div>

					<div className="prose prose-invert prose-purple max-w-none prose-table:border-collapse prose-th:text-purple-400 prose-td:text-gray-400 prose-tr:border-white/5">
						<Outlet />
					</div>

					<DocNavigation />
				</div>
			</main>
		</div>
	);
}
