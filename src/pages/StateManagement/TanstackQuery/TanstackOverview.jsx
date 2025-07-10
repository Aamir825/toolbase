import { FaTools } from "react-icons/fa";
import { Network, ShieldCheck, TimerReset } from "lucide-react";
import { SiReactquery } from "react-icons/si";

const features = [
    {
        title: "Powerful Caching",
        description: "Automatically caches and updates data efficiently, reducing redundant network requests.",
        icon: ShieldCheck,
    },
    {
        title: "Background Sync",
        description: "Keeps data fresh by refetching in the background when components remount or focus changes.",
        icon: TimerReset,
    },
    {
        title: "Declarative Fetching",
        description: "Manage server-state with hooks like `useQuery` and `useMutation`.",
        icon: Network,
    },
];

export const TanstackOverview = () => {
    return (
        <div className="max-w-8xl mx-auto px-4 md:px-6 py-10 space-y-16">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#e6fff6] shadow-lg">
                    <SiReactquery className="w-10 h-10 text-yellow-500" />
                </div>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-green-400 text-transparent bg-clip-text py-2">
                    TanStack Query (React Query)
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    TanStack Query is a data-fetching and state synchronization library for React apps. It simplifies asynchronous logic, caching, pagination, and background updates.
                </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-3">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="p-6 border border-[#319795] rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur shadow-md hover:scale-[1.01] transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <feature.icon className="w-6 h-6 text-yellow-600" />
                            <h3 className="text-md font-semibold text-yellow-600 dark:text-emerald-300">
                                {feature.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-16 border border-[#319795] rounded-xl bg-[#e8fdf3] dark:bg-[#0f2c25] p-6 shadow-md text-sm leading-relaxed text-emerald-800 dark:text-[#b2fbe1] text-center">
                TanStack Query is the go-to solution for managing asynchronous data, caching, and synchronization in React applications.
            </div>
        </div>
    );
};
