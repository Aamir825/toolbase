import { Code } from "lucide-react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { SiRedux } from "react-icons/si";
import { handleCopy } from "@/components/shared/CopyToClipboard"
import { examples } from "@/pages/StateManagement/ReduxToolkit/ReduxData"

export const ReduxExample = () => {
    const [copied, setCopied] = useState(null);

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-[#fffcfb] shadow-md">
                        <SiRedux className="w-8 h-8 text-purple-500" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2">
                        Redux Toolkit Examples
                    </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Explore essential Redux Toolkit snippets to help you get started fast with clean, predictable state management.
                </p>
            </div>

            {examples.map((item, idx) => (
                <div
                    key={idx}
                    className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition"
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
                            <Code className="w-4 h-4 text-purple-600" />
                            {item.title}
                        </h3>
                        <div className="relative">
                            <button
                                onClick={() => handleCopy(item.code, setCopied, idx)}
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
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {item.code}
                    </pre>
                </div>
            ))}
        </div>
    );
}
