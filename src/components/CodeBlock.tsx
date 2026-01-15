import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// You can choose other themes like 'dracula', 'vs', etc.
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
	code: string;
	language?: "typescript" | "bash" | "javascript" | "json" | "env";
	className?: string;
}

export const CodeBlock = ({ code, className = "", language = "typescript" }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const highlighterLanguage = language === "env" ? "bash" : language;

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div
			className={`relative group my-6 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e] ${className}`}
		>
			<div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
				<span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
					{language === "env" ? ".ENV" : language}
				</span>
				<button
					onClick={handleCopy}
					className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition"
				>
					{copied ? (
						<>
							<Check className="w-3.5 h-3.5 text-green-400" />
							<span className="text-green-400">Copied!</span>
						</>
					) : (
						<>
							<Copy className="w-3.5 h-3.5" />
							<span>Copy</span>
						</>
					)}
				</button>
			</div>

			<SyntaxHighlighter
				language={highlighterLanguage}
				style={vscDarkPlus}
				customStyle={{
					margin: 0,
					padding: "1.5rem",
					background: "transparent",
					fontSize: "0.875rem",
				}}
				wrapLongLines={true}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};
