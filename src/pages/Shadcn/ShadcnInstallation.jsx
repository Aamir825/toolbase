import { TerminalSquare, CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { SiShadcnui } from "react-icons/si";

const shadcnSteps = [
    {
        title: "1. Initialize shadcn/ui",
        command: "npx shadcn-ui@latest init",
        description: "Starts the setup wizard for shadcn/ui. It will ask for your framework, Tailwind config path, and other preferences.",
    },
    {
        title: "2. Configure components.json",
        command: `{
  "style": "default",
  "rsc": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true
  }
}`,
        description: "Defines where your components, styles, and Tailwind setup live. You can customize the style and color scheme.",
        isCodeBlock: true,
    },
    {
        title: "3. Add a component",
        command: "npx shadcn-ui@latest add button",
        description: "This command copies the `Button` component source code directly into your project for full customization.",
    },
    {
        title: "4. Use the component",
        command: `import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}`,
        description: "Once added, you can use your component anywhere. You own the code and can customize freely.",
        isCodeBlock: true,
    },
];

export const ShadcnInstallation = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (text, idx) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <div className="space-y-8 p-4 md:p-8">
            {/* Heading */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#040e13] to-[#0ea5e9] shadow-md">
                        <SiShadcnui className="w-9 h-9 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#0f766e] bg-clip-text text-transparent">
                        Shadcn/UI Installation Guide
                    </h2>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Follow these steps to install and start using shadcn/ui in your frontend project. It’s modular, accessible, and completely developer-owned.
                </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
                {shadcnSteps.map((step, idx) => (
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
                                    aria-label={`Copy example for ${step.title}`}
                                    title={`Copy example for ${step.title}`}
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
