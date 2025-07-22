import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { handleCopy } from "@/components/shared/CopyToClipboard"
import { packageManagers, steps, resources} from "@/pages/StateManagement/ReduxToolkit/ReduxData"

export const ReduxSetup = () => {
    const [copied, setCopied] = useState(null);
    const [selectedTabs, setSelectedTabs] = useState({});

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-[#fffcfb] shadow-md">
                        <SiRedux className="w-8 h-8 text-purple-500" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2">
                        Installing Redux Toolkit
                    </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Set up Redux Toolkit in your React project with just a few steps.
                </p>
            </div>
            <div className="space-y-8">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-sm font-semibold flex items-center gap-2">
                                    <TerminalSquare className="w-5 h-5 text-purple-600" />
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => handleCopy(
                                        typeof step.command === "string"
                                            ? step.command
                                            : step.command[selectedTabs[idx] || "npm"], // pick per-step tab
                                        setCopied,
                                        idx
                                    )}
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
                        {/* <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                            {step.command}
                        </pre> */}
                        {step.all ? (
                            <pre className="bg-muted/50 border border-gray-300 rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                                {step.command}
                            </pre>
                        ) : (
                            <Tabs value={selectedTabs[idx] || "npm"} onValueChange={(value) => setSelectedTabs((prev) => ({ ...prev, [idx]: value }))} className="w-full">
                                <TabsList className="">
                                    {packageManagers.map((pm) => (
                                        <TabsTrigger key={pm.key} value={pm.key}>
                                            <span className="flex items-center gap-1 text-xs cursor-pointer">
                                                {pm.icon}
                                                {pm.label}
                                            </span>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {packageManagers.map((pm) => (
                                    <TabsContent key={pm.key} value={pm.key}>
                                        <pre className="bg-muted/50 border border-gray-300 rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                                            {step.command[pm.key]}
                                        </pre>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        )}
                    </div>
                ))}
            </div>
            {/* Useful Packages */}
            <div className="pt-6 space-y-3 border-t border-[#319795] border-muted">
                <h4 className="text-xl font-semibold text-[#319795]">🔗 Useful Redux Toolkit Links</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {resources.map((pkg, idx) => (
                        <li key={idx}>
                            <a
                                href={pkg.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#319795] font-medium transition"
                            >
                                {pkg.name}
                            </a>{" "}
                            — <span className="text-muted-foreground">{pkg.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
