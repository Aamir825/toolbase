import { Database, Zap } from "lucide-react";
import { GiPineapple } from "react-icons/gi";
import { MdDraw } from "react-icons/md";

const highlights = [
  {
    title: "Vue-Native Store",
    description: "Built specifically for Vue 3, well integrated with Composition API and reactivity.",
    icon: Zap,
  },
  {
    title: "Lightweight",
    description: "Define multiple stores each focused on a specific domain of your application.",
    icon: MdDraw,
  },
  {
    title: "TypeScript Support",
    description: "Full TS support out of the box—type safety for every getter, action, and state field.",
    icon: Database,
  },
];

export const PiniaOverview = () => (
  <div className="max-w-8xl mx-auto px-4 md:px-6 py-10 space-y-16">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-100 shadow-lg">
        <GiPineapple className="w-10 h-10 text-yellow-500" />
      </div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-[#319795] text-transparent bg-clip-text py-2">
        Pinia (Vue Store)
      </h1>
      <p className="text-gray-600 text-muted-foreground max-w-2xl mx-auto">
        Pinia is the next‑generation state management library for Vue 3, offering intuitive APIs, modular store definitions, and first‑class TypeScript support.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-3">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="p-6 border border-[#319795] rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur shadow-md hover:scale-[1.01] transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <item.icon className="w-6 h-6 text-yellow-600" />
            <h3 className="text-md font-semibold text-yellow-600 dark:text-green-300">
              {item.title}
            </h3>
          </div>
          <p className="text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 border border-[#319795] rounded-xl bg-[#e6faf4] dark:bg-[#102726] p-6 shadow-md text-sm leading-relaxed text-[#1f5f55] dark:text-[#b0e3d9] text-center">
      Pinia gives you a lightweight yet powerful store system for Vue 3 apps—design your stores your way.
    </div>
  </div>
);
