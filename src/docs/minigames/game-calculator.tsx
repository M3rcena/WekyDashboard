import { 
    Calculator, 
    Code2, 
    AppWindow, 
    Sigma,
    Grid2x2,
    Delete,
    type LucideIcon 
} from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

const SectionHeader = ({ icon: Icon, title }: { icon: LucideIcon, title: string }) => (
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <Icon className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
    </div>
);

export default function DocsCalculator() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
            
            {/* HEADER */}
            <header className="mb-16 relative">
                <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
                    <Calculator className="w-3 h-3" />
                    Utility
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                    Scientific <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Calculator</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                    A fully functional scientific calculator powered by <strong>Math.js</strong>. Features a dual-message interface, modal inputs for complex functions (Sin, Cos, Log), and error handling.
                </p>
            </header>

            {/* USAGE EXAMPLE */}
            <section className="mb-20">
                <SectionHeader icon={Code2} title="Implementation" />
                <div className="relative group">
                     <div className="absolute -inset-px bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
                     <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <CodeBlock
                            className="my-0!"
                            language="typescript"
                            code={`await client.wekyManager.createCalculator({
    context: interaction,
    embed: {
        color: "#5865F2"
    },
    // Optional: Customize text for your language
    errorMessages: {
        invalidCalculation: "⚠️ Syntax Error",
        infiniteResult: "♾️ Infinity reached"
    },
    sessionEndMessage: "Calculator session finished."
});`}
                        />
                    </div>
                </div>
            </section>

            {/* UI ARCHITECTURE */}
            <section className="mb-20">
                <SectionHeader icon={Grid2x2} title="Interface Architecture" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Visualizer */}
                    <div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6 flex flex-col items-center">
                         <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm font-mono uppercase tracking-wider">
                            <AppWindow className="w-4 h-4" /> Dual-Message System
                        </div>

                        {/* Message 1 Simulator */}
                        <div className="w-full max-w-xs space-y-2 mb-4">
                            <div className="text-[10px] text-gray-500 font-mono">Message 1: Functions & Operations</div>
                            <div className="grid grid-cols-5 gap-1.5">
                                {["DC", "RND", "SIN", "COS", "TAN"].map(k => (
                                    <div key={k} className="aspect-square rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">{k}</div>
                                ))}
                                {["^", "LG", "LN", "(", ")"].map(k => (
                                    <div key={k} className="aspect-square rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">{k}</div>
                                ))}
                                {/* ... more rows */}
                            </div>
                        </div>

                        {/* Message 2 Simulator */}
                        <div className="w-full max-w-xs space-y-2">
                             <div className="text-[10px] text-gray-500 font-mono">Message 2: Numpad</div>
                            <div className="grid grid-cols-5 gap-1.5">
                                 {["1/x", "4", "5", "6", "-"].map(k => (
                                    <div key={k} className="aspect-square rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">{k}</div>
                                ))}
                                 {["π", "1", "2", "3", "+"].map(k => (
                                    <div key={k} className="aspect-square rounded bg-[#4e5058] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">{k}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                         <div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <AppWindow className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm mb-1">Modal Input</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Complex functions like <code>SIN</code>, <code>COS</code>, and <code>LOG</code> trigger a Pop-up Modal, allowing users to input specific numbers easily.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <Sigma className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm mb-1">Math.js Engine</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Powered by a robust math library, supporting constants like <code>π</code> (pi) and <code>e</code> (Euler's number), plus safety checks for infinity.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
                                <Delete className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm mb-1">Smart Deletion</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    The <code>⌫</code> (Backspace) and <code>AC</code> (All Clear) buttons handle spacing automatically to prevent syntax errors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}