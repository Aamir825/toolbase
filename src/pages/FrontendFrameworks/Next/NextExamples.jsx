import { Code } from "lucide-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { handleCopy } from "@/components/shared/CopyToClipboard"
import { examples} from "@/pages/FrontendFrameworks/Vue/Vuedata"

export const NextExamples = () => {
    const [copied, setCopied] = useState(null);

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#e6f6f6] shadow-md">
                    <RiNextjsFill className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#319795] to-black text-transparent bg-clip-text py-2">
                    Next.js Core Examples
                </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl">
                Below are practical examples of building pages, layouts, APIs, and dynamic routes in Next.js using both App Router and Pages Router.
            </p>

            {/* Examples */}
            <div className="space-y-8">
                {examples.map((ex, idx) => (
                    <div
                        key={idx}
                        className="relative border border-[#319795] bg-white/80 dark:bg-black/30 rounded-xl p-5 shadow-md backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
                                <Code className="w-4 h-4 text-[#319795]" />
                                {ex.title}
                            </h3>
                            <div className="relative">
                                <button
                                    onClick={() => handleCopy(ex.code, setCopied, idx)}
                                    className="text-muted-foreground hover:text-[#319795] transition"
                                    title="Copy to clipboard"
                                >
                                    {copied === idx ? (
                                        <HiCheckCircle className="w-6 h-6 text-green-600" />
                                    ) : (
                                        <IoCopyOutline className="w-6 h-6" />
                                    )}
                                </button>
                                {copied === idx && (
                                    <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded shadow-sm animate-fade-in">
                                        Copied!
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{ex.description}</p>
                        <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-1 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                            {ex.code}
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}
