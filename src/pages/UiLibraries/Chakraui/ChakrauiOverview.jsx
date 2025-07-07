import { BadgeCheck, LayoutGrid, Moon, PlugZap } from "lucide-react";
import { SiChakraui } from "react-icons/si";

export const ChakrauiOverview = () => {
    return (
        <div className="space-y-8 p-4 md:p-8">
            {/* Header */}
            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#319795] to-[#2c7a7b] shadow-md">
                        <SiChakraui className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#319795] bg-clip-text text-transparent">
                        Chakra UI Overview
                    </h2>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                    Chakra UI is a modern component library for React that enables you to build accessible and responsive UIs with ease. It comes with a set of composable and themeable components out of the box.
                </p>
            </div>

            {/* Key Highlights */}
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
                        <a
                            href="https://chakra-ui.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-[#319795]"
                        >
                            Chakra UI Website
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://chakra-ui.com/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-[#319795]"
                        >
                            Chakra UI Docs
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const highlights = [
    {
        title: "Accessible Components",
        description: "All components follow WAI-ARIA guidelines and support keyboard navigation.",
        icon: BadgeCheck,
    },
    {
        title: "Responsive Design",
        description: "Easily build responsive layouts using Chakra’s responsive prop syntax.",
        icon: LayoutGrid,
    },
    {
        title: "Dark Mode Support",
        description: "Chakra comes with built-in dark mode support and theme toggling.",
        icon: Moon,
    },
    {
        title: "Theming System",
        description: "Customize themes and tokens using Chakra's powerful theming features.",
        icon: PlugZap,
    },
];
