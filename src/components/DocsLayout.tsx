import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { docsConfig } from "../config/docs";
import { Menu, X, ChevronRight, Book, ArrowRight, ArrowLeft, Home } from "lucide-react";

import type { DocCategory } from "../config/docs";

const SidebarCategory = ({
	category,
	currentSlug,
	onLinkClick,
}: {
	category: DocCategory;
	currentSlug: string;
	onLinkClick: () => void;
}) => {
	const isActiveCategory = category.items.some((item) => item.slug === currentSlug);

	const [isOpen, setIsOpen] = useState(isActiveCategory);

	const [lastSlug, setLastSlug] = useState(currentSlug);

	if (currentSlug !== lastSlug) {
		setLastSlug(currentSlug);
		if (isActiveCategory) {
			setIsOpen(true);
		}
	}

	return (
		<div className="mb-4">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] hover:text-gray-300 transition-colors group"
			>
				{category.title}{" "}
				<ChevronRight
					className={`w-3 h-3 text-gray-600 group-hover:text-purple-400 transition-transform duration-200 ${
						isOpen ? "rotate-90" : ""
					}`}
				/>
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-250 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<ul className="space-y-0.5 mt-1 border-l border-white/5 ml-3 pl-2">
					{category.items.map((item) => (
						<li key={item.slug}>
							<NavLink
								to={`/docs/${item.slug}`}
								onClick={onLinkClick}
								className={({ isActive }) =>
									`group flex items-center px-4 py-2 text-sm transition-all rounded-r-lg border-l-2 ${
										isActive
											? "border-purple-500 text-purple-400 bg-purple-500/5 font-medium"
											: "border-transparent text-gray-400 hover:text-white hover:bg-white/3"
									}`
								}
							>
								{item.title}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

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

	const currentPathSlug = pathname.split("/").pop() || "";

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
                    lg:translate-x-0 lg:static lg:h-screen flex flex-col
                    ${isMobileMenuOpen ? "translate-x-0 shadow-2xl shadow-purple-500/20" : "-translate-x-full"}
                `}
			>
				{/* Sidebar Header */}
				<div className="p-6 pb-4 hidden lg:flex items-center gap-3">
					<div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
						<Book className="w-5 h-5 text-white" />
					</div>
					<div className="text-xl font-bold text-white">
						Weky<span className="text-purple-500">Docs</span>
					</div>
				</div>

				{/* Scrollable Navigation Area */}
				<div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
					<nav className="space-y-2">
						<Link
							to="/"
							onClick={() => setIsMobileMenuOpen(false)}
							className="flex items-center gap-3 px-3 py-3 mb-6 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all group"
						>
							<div className="p-1 rounded bg-white/5 group-hover:bg-purple-500/20 transition-colors">
								<Home className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
							</div>
							Back to Home
						</Link>
						{docsConfig.map((category, idx) => (
							<SidebarCategory
								key={idx}
								category={category}
								currentSlug={currentPathSlug}
								onLinkClick={() => setIsMobileMenuOpen(false)}
							/>
						))}
					</nav>
				</div>

				{/* Optional: Sidebar Footer / Version info could go here */}
				<div className="p-4 border-t border-white/5 text-xs text-gray-600 text-center">v12.25.1 • Stable</div>
			</aside>

			{/* MAIN CONTENT AREA */}
			<main
				ref={scrollRef}
				className="flex-1 min-w-0 py-10 px-6 lg:px-16 lg:py-16 overflow-y-auto h-[calc(100vh-64px)] lg:h-screen scroll-smooth"
			>
				<div className="max-w-3xl mx-auto">
					{/* Breadcrumbs */}
					<div className="flex items-center text-[10px] text-gray-500 mb-8 font-mono uppercase tracking-widest">
						Docs
						<ChevronRight className="w-3 h-3 mx-2 text-gray-700" />
						{currentPathSlug?.includes("-") ? currentPathSlug.split("-")[0] : "General"}
						<ChevronRight className="w-3 h-3 mx-2 text-gray-700" />
						<span className="text-purple-500 font-bold">{currentPathSlug?.replace(/-/g, " ")}</span>
					</div>

					<div className="prose prose-invert prose-purple max-w-none prose-headings:font-bold prose-p:text-gray-400 prose-li:text-gray-400">
						<Outlet />
					</div>

					<DocNavigation />
				</div>
			</main>
		</div>
	);
}
