import { 
    HelpCircle, 
    Code2, 
    Hash, 
    Users, 
    Lock, 
    ArrowUp,
    ArrowDown,
    Search,
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

export default function DocsGuessTheNumber() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto p-4 sm:p-6">
            
            {/* HEADER */}
            <header className="mb-16 relative">
                <div className="absolute -left-10 -top-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium mb-6">
                    <Hash className="w-3 h-3" />
                    Logic Puzzle
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                    Guess The <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">Number</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                    The classic high/low guessing game. Players guess a number in chat, and the bot responds with hints until the correct number is found.
                </p>
            </header>

            {/* USAGE EXAMPLE */}
            <section className="mb-20">
                <SectionHeader icon={Code2} title="Implementation" />
                <div className="relative group">
                     <div className="absolute -inset-px bg-linear-to-r from-green-600 to-emerald-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500" />
                     <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <CodeBlock
                            className="my-0!"
                            language="typescript"
                            code={`await client.wekyManager.createGuessTheNumber({
    context: interaction,
    embed: {
        title: "Guessing Game",
        color: "#2ECC71"
    },
    publicGame: true, // Allow anyone in the channel to play
    number: 420, // Optional: Force a specific number
    time: 60000
});`}
                        />
                    </div>
                </div>
            </section>

            {/* MECHANICS GRID */}
            <section className="mb-20">
                <SectionHeader icon={Search} title="Game Mechanics" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Visualizer: Range Narrowing */}
                    <div className="rounded-xl border border-white/10 bg-[#0d0d0e] p-6">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Dynamic Range</span>
                            <span className="text-xs font-mono text-purple-300">Target: 42</span>
                        </div>

                        <div className="space-y-4">
                            {/* Step 1 */}
                            <div className="flex items-center gap-3 opacity-50">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-bold text-gray-500">1</div>
                                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-white/20" />
                                </div>
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-bold text-gray-500">100</div>
                            </div>

                            {/* Step 2: Guess 20 (Higher) */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">20</div>
                                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden relative">
                                    <div className="absolute left-[20%] right-0 h-full bg-orange-500/50" />
                                </div>
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-bold text-gray-500">100</div>
                            </div>
                            <div className="text-[10px] text-center text-orange-400 flex items-center justify-center gap-1">
                                <ArrowUp className="w-3 h-3" /> Higher than 20
                            </div>

                            {/* Step 3: Guess 50 (Lower) */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">20</div>
                                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden relative">
                                    <div className="absolute left-[20%] right-[50%] h-full bg-green-500" />
                                </div>
                                <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">50</div>
                            </div>
                             <div className="text-[10px] text-center text-orange-400 flex items-center justify-center gap-1">
                                <ArrowDown className="w-3 h-3" /> Lower than 50
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                         <div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm mb-1">Public Mode</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Set <code>publicGame: true</code> to allow anyone in the channel to guess. The game tracks stats like "Total Participants" in the win message.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm mb-1">Private Mode</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    By default (<code>false</code>), only the command author can guess. The bot ignores input from other users.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/10 bg-[#0d0d0e] flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm mb-1">Smart Feedback</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    The embed updates in real-time, showing the current <strong>Valid Range</strong> (e.g., 20 - 50) based on previous guesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}