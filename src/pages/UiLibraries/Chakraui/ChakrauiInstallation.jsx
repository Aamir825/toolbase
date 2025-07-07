import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { SiChakraui } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const installSteps = [
    {
        title: "1. Install Chakra UI",
        command: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
        description: "Install Chakra UI along with Emotion and Framer Motion (required peer dependencies).",
    },
    {
        title: "2. Set up ChakraProvider",
        command: `// main.jsx or index.js
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);`,
        description: "Wrap your app with ChakraProvider to enable theming and styles.",
        isCodeBlock: true,
    },
];

export const ChakrauiInstallation = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (text, idx) => {
        await navigator.clipboard.writeText(text);
        setCopied(idx);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="space-y-8 p-4 md:p-8">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#319795] to-[#2c7a7b] shadow-md">
                        <SiChakraui className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#319795] bg-clip-text text-transparent">
                        Chakra UI Installation Guide
                    </h2>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Install Chakra UI and its required peer dependencies to start building your application.
                </p>
            </div>

            <div className="space-y-6">
                {installSteps.map((step, idx) => (
                    <div key={idx} className="rounded-xl border bg-background p-5 shadow-sm">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                                    <TerminalSquare className="w-5 h-5 text-primary" />
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => handleCopy(step.command, idx)}
                                    className="text-muted-foreground hover:text-primary transition"
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

                        <div className="bg-muted/50 border rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                            {step.command}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
