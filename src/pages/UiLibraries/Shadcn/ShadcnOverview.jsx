import { SiShadcnui } from "react-icons/si";
import { highlights } from "@/pages/UiLibraries/Shadcn/ShadcnData";

export const ShadcnOverview = () => {
    return (
        <div className="space-y-8 p-4 md:p-8">
            {/* Heading */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-black to-[#e4e4e4] shadow-md">
                        <SiShadcnui className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-black to-primary bg-clip-text text-transparent py-2">
                        Shadcn UI Overview
                    </h1>
                </div>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                    <strong>shadcn/ui</strong> is a modern component collection built with Radix UI, Tailwind CSS, and TypeScript. Unlike traditional libraries, it provides accessible, customizable components that you **own and modify** in your codebase.
                </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-[#319795] rounded-xl bg-background p-5 shadow-sm hover:shadow-md transition group"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition" />
                            <h3 className="font-semibold text-md">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Official Links */}
            <div className="pt-6 border-t border-[#319795]">
                <p className="text-xl font-semibold text-[#319795] mb-2">🔗 Official Resources</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-primary">
                    <li>
                        <a href="https://ui.shadcn.com/docs/installation" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#319795]">
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#319795]">
                            GitHub Repository
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/shadcn" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#319795]">
                            @shadcn on Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}