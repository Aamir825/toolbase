import { SiAngular } from "react-icons/si";
import { Code2, Layers, Zap, Info, CheckCircle, Clock } from "lucide-react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const highlights = [
    {
        title: "Component Architecture",
        description: "Break your application into cohesive components, each with its own logic and template.",
        icon: Layers,
    },
    {
        title: "Powerful CLI",
        description: "Angular CLI provides commands to scaffold components, services, routes, and more.",
        icon: Zap,
    },
    {
        title: "Two-Way Binding",
        description: "Sync UI with model effortlessly using Angular’s built-in binding syntax.",
        icon: Code2,
    },
];

export const AngularOverview = () => {
    return (
        <div className="px-4 md:px-6 py-10 max-w-8xl mx-auto space-y-20">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-red-100 shadow-lg">
                    <SiAngular className="w-10 h-10 text-red-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-red-500 to-[#319795] bg-clip-text text-transparent py-2">
                    Angular Framework
                </h1>
                <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
                    Angular is a robust TypeScript-based framework maintained by Google for building scalable, enterprise-level applications with clean architecture.
                </p>
            </div>

            {/* What, Why, When */}
            <div className="grid gap-3 md:grid-cols-3">
                <InfoBox
                    icon={Info}
                    title="What is Angular?"
                    description="Angular is a full-fledged frontend framework built with TypeScript. It supports modular development, routing, form handling, HTTP services, and testing out-of-the-box."
                />
                <InfoBox
                    icon={CheckCircle}
                    title="Why Use Angular?"
                    description="Angular provides opinionated patterns and structure. Great for teams, large-scale apps, and apps needing strong typing, form control, and performance."
                />
                <InfoBox
                    icon={Clock}
                    title="When to Use Angular?"
                    description="Use Angular when building complex enterprise apps, admin dashboards, CRMs, and when you need built-in features like routing, forms, and dependency injection."
                />
            </div>

            {/* Highlights */}
            <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 text-xl">
                    <MdOutlineTipsAndUpdates />
                    <h2 className=" font-bold text-[#319795]">Key Highlights of Angular</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative border border-[#319795] rounded-2xl p-6 bg-white/80 dark:bg-black/30 shadow-xl backdrop-blur-sm hover:scale-[1.01] transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <item.icon className="w-6 h-6 text-red-600" />
                                <h3 className="text-md font-semibold text-red-900 dark:text-red-300">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Callout */}
            <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
                Angular is trusted by enterprises around the world — powering complex apps from CRMs to internal tools. With strong typing, built-in routing, and scalable architecture, Angular is ideal for large teams and long-term projects.
            </div>
        </div>
    );
}

function InfoBox({ icon: Icon, title, description }) {
    return (
        <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-md text-red-900 dark:text-red-300">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
