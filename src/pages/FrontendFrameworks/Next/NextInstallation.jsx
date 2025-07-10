import { TerminalSquare } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const steps = [
    {
        title: "Create Next App",
        command: "npx create-next-app@latest my-next-app",
        description: "Use the official CLI to quickly scaffold a new Next.js project.",
    },
    {
        title: "Navigate & Install",
        command: "cd my-next-app && npm install",
        description: "Move into your project directory and install packages.",
    },
    {
        title: "Start Development Server",
        command: "npm run dev",
        description: "Start your local dev server at http://localhost:3000.",
    },
];

const links = [
    {
        name: "Next.js Docs",
        href: "https://nextjs.org/docs",
        description: "Official guide for features like routing, data fetching, and deployment",
    },
    {
        name: "App Router (New)",
        href: "https://nextjs.org/docs/app",
        description: "The new routing system based on server components",
    },
    {
        name: "Next.js GitHub Repo",
        href: "https://github.com/vercel/next.js",
        description: "Open-source repo with discussions, issues, and source code",
    },
    {
        name: "Learn Next.js Course",
        href: "https://nextjs.org/learn",
        description: "Official interactive Next.js tutorial",
    },
    {
        name: "Vercel Hosting",
        href: "https://vercel.com",
        description: "Deploy your Next.js site in seconds with first-party hosting",
    },
];

export const NextInstallation = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (text, idx) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-[#e6f6f6] shadow-md">
                        <RiNextjsFill className="w-8 h-8 text-black" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#319795] to-black text-transparent bg-clip-text py-2">
                        Getting Started with Next.js
                    </h2>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                    Next.js offers a best-in-class development experience for building React apps. Setup takes seconds.
                </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm hover:shadow-lg transition-all"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                                    <TerminalSquare className="w-5 h-5 text-[#319795]" />
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => handleCopy(step.command, idx)}
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
                        <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                            {step.command}
                        </pre>
                    </div>
                ))}
            </div>

            {/* Useful Links */}
            <div className="space-y-4 pt-6 border-t border-[#319795]">
                <h3 className="text-xl font-semibold text-[#319795] flex items-center gap-2">🔗 Useful Next.js Links</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#319795] font-medium transition"
                            >
                                {link.name}
                            </a>{" "}
                            — <span className="text-muted-foreground">{link.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
