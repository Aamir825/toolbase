import { BadgeCheck, LayoutGrid, Moon, PlugZap } from "lucide-react";
import { SiChakraui } from "react-icons/si";

export const ChakrauiOverview = () => {
    return (
        <div className="space-y-8 p-4 md:p-8">
            {/* Header */}
            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-[#ecfffc] shadow-md">
                        <SiChakraui className="w-8 h-8 text-[#3ecfcd]" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#3ecfcd] to-primary bg-clip-text text-transparent py-2">
                        Chakra UI Overview
                    </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Chakra UI is a modern component library for React that enables you to build accessible and responsive UIs with ease. It comes with a set of composable and themeable components out of the box.
                </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-[#319795] rounded-xl bg-background p-5 shadow-sm hover:shadow-md transition group"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <item.icon className="w-6 h-6 text-[#3ecfcd] group-hover:scale-110 transition" />
                            <h3 className="font-semibold text-lg">{item.title}</h3>
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
