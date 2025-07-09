import { BookOpen, TerminalSquare, Wrench, Library, Sparkles, Layers } from "lucide-react";

export  const Home = () => {
    return (
        <div className="p-4 md:p-4 space-y-6">
            <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3 text-gradient bg-gradient-to-r from-[#076161] to-primary bg-clip-text text-transparent animate-fade-in py-2">
                    <BookOpen className="w-8 h-8 text-primary text-[#afafaf] animate-pulse" />
                    <span>Welcome to <span className="underline decoration-wavy decoration-primary">Toolbase</span></span>
                </h1>
                <p className="text-muted-foreground max-w-3xl leading-relaxed text-sm sm:text-base">
                    <span className="font-semibold text-[#063e3e]">Toolbase</span> is crafted for frontend developers who are tired of bouncing between documentation sites.
                    Whether it’s <span className="font-medium text-[#063e3e]">Tailwind</span>, <span className="font-medium text-[#063e3e]">Vite</span>,
                    <span className="font-medium text-[#063e3e]">Shadcn</span>, <span className="font-medium text-[#063e3e]">MUI</span>, or other modern tools —
                    <span className="font-semibold text-[#063e3e]">Toolbase</span> brings all installation commands, setup steps, and quick-start guides
                    into one clean, centralized, developer-friendly hub.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {features.map((feature, idx) => (
                    <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-2">
                            <feature.icon className="w-6 h-6 text-primary text-[#319795]" />
                            <h3 className="font-semibold text-md">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const features = [
    {
        title: "Centralized Installation Guides",
        description: "Stop switching tabs. Get install commands for Tailwind, Shadcn, MUI, Vite, and more—all in one place.",
        icon: TerminalSquare,
    },
    {
        title: "Step-by-Step Tool Setup",
        description: "From creating a Vite app to configuring Shadcn UI components—follow clean, actionable steps.",
        icon: Wrench,
    },
    {
        title: "Framework Support",
        description: "Covers popular stacks including React, Next.js, Vite, and integrates with major UI libraries.",
        icon: Layers,
    },
    {
        title: "Code Examples & Snippets",
        description: "Each tool page includes copyable commands, code blocks, and starter templates.",
        icon: Sparkles,
    },
    {
        title: "Minimalist Design",
        description: "Focused, clutter-free design to help you get what you need, fast.",
        icon: Library,
    },
];
