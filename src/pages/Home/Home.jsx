import { BookOpen, TerminalSquare, Wrench, Library, Sparkles, Layers } from "lucide-react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

export const Home = () => {
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-4">
                {features.map((feature, idx) => (
                    <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-2">
                            <feature.icon className="w-6 h-6 text-primary text-[#319795]" />
                            <h3 className="font-semibold text-sm">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Why Toolbase */}
            <div className="space-y-2 mt-12 mb-12">
                <h2 className="text-xl font-bold text-[#076161] flex items-center gap-2"><MdOutlineTipsAndUpdates/> Why Toolbase?</h2>
                <p className=" text-muted-foreground max-w-3xl">
                    Developers waste time jumping between blog posts, docs, and GitHub
                    issues. Toolbase is here to centralize everything — install, configure,
                    and ship features without losing flow.
                </p>
            </div>

            {/* Tools Preview */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#076161] flex items-center gap-2"><GrTechnology /> Tools You'll Find</h2>
                <div className="rounded-xl border border-[#319795] dark:bg-black/30 p-6 shadow-md backdrop-blur-sm">
                    <p className="text-sm text-muted-foreground mb-4">
                        Toolbase includes hand-picked frontend tools organized by framework, UI
                        library, and state manager — curated to help you ship faster.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {[
                            "React",
                            "Vue",
                            "Next.js",
                            "Angular",
                            "Tailwind CSS",
                            "Shadcn UI",
                            "Material UI",
                            "Chakra UI",
                            "Ant Design",
                            "PrimeReact",
                            "Redux Toolkit",
                            "Zustand",
                            "TanStack Query",
                            "Pinia",
                            "NgRx",
                        ].map((tool, idx) => (
                            <span
                                key={idx}
                                className="text-sm px-3 py-1 rounded-full border border-[#319795] bg-muted hover:bg-[#d4f1f0] dark:hover:bg-[#164645] text-[#063e3e] dark:text-[#d1f1ef] transition-all cursor-default"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>


            {/* Coming Soon */}
            <div className="text-center bg-[#e0f8f6] dark:bg-[#0f272a] text-[#205d5b] dark:text-[#d1f1ef] text-sm p-5 rounded-xl border border-[#319795] shadow-md">
                🚀 More frameworks, UI libraries, and code generators are in the works.
                Toolbase is built by devs, for devs — and it's just getting started.
            </div>

            {/* GitHub CTA */}
            <div className="text-center space-y-1">
                <p className="text-sm text-muted-foreground">
                    Want to contribute or request a feature?
                </p>
                <a
                    href="https://github.com/Aamir825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#319795] underline text-sm font-medium"
                >
                    Submit an issue or suggestion on GitHub →
                </a>
            </div>
        </div>
    );
}

const features = [
    {
        title: "Centralized Installation",
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
    {
        title: "State Management Libraries",
        description: "Dive into Redux Toolkit, Zustand, TanStack Query, Pinia, and NgRx — each with examples and setup commands.",
        icon: BookOpen,
    },
];

