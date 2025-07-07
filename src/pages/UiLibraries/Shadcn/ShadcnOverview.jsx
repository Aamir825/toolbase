import { Layers, Sparkles, Palette, Settings2 } from "lucide-react";
import { SiShadcnui, SiTailwindcss } from "react-icons/si";

export const ShadcnOverview = () => {
    return (
        <div className="space-y-8 p-4 md:p-8">
            {/* Heading */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#040e13] to-[#0ea5e9] shadow-md">
                        <SiShadcnui className="w-9 h-9 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#0f766e] bg-clip-text text-transparent">
                        Shadcn/UI Overview
                    </h1>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
                    <strong>shadcn/ui</strong> is a modern component collection built with Radix UI, Tailwind CSS, and TypeScript. Unlike traditional libraries, it provides accessible, customizable components that you **own and modify** in your codebase.
                </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className="border rounded-xl bg-background p-5 shadow-sm hover:shadow-md transition group"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition" />
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Official Links */}
            <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-2">Official Resources:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-primary">
                    <li>
                        <a href="https://ui.shadcn.com/docs/installation" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-700">
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-700">
                            GitHub Repository
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/shadcn" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-700">
                            @shadcn on Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const highlights = [
    {
        title: "Built with Tailwind & Radix",
        description: "Leverages Tailwind CSS for styling and Radix UI for accessibility and behavior.",
        icon: SiTailwindcss,
    },
    {
        title: "Copy and Own the Code",
        description: "All components are local to your project. Fully customizable and framework-agnostic.",
        icon: Layers,
    },
    {
        title: "Accessible by Design",
        description: "Follows WAI-ARIA standards with keyboard navigation and screen reader support.",
        icon: Settings2,
    },
    {
        title: "Dark Mode & Themes",
        description: "Easily toggle between light and dark themes with Tailwind's class-based system.",
        icon: Palette,
    },
    {
        title: "Modern Developer Experience",
        description: "Written in TypeScript and designed for Next.js, Vite, and modern toolchains.",
        icon: Sparkles,
    },
];
