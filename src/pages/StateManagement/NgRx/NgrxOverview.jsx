import { FaCodeBranch } from "react-icons/fa";
import { ClipboardList, ShieldCheck, Repeat } from "lucide-react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { SiNgrx } from "react-icons/si";

const highlights = [
  {
    title: "Redux Inspired",
    description: "Built with NgRx Store, Effects & Entity following Redux principles in Angular.",
    icon: ClipboardList,
  },
  {
    title: "Side‑Effect Management",
    description: "Easily handle async tasks using `@ngrx/effects` for clean service-based logic.",
    icon: ShieldCheck,
  },
  {
    title: "Entity Cache",
    description: "Manage collections with built‑in CRUD helpers via `@ngrx/entity`.",
    icon: Repeat,
  },
];

export const NgrxOverview = () => (
  <div className="max-w-8xl mx-auto px-4 md:px-6 py-10 space-y-16">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center p-4 rounded-full bg-red-100 shadow-lg">
        <SiNgrx className="w-10 h-10 text-red-600" />
      </div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-[#319795] text-transparent bg-clip-text py-2">
        NgRx (Angular Redux)
      </h1>
      <p className="text-gray-600 text-muted-foreground max-w-2xl mx-auto">
        NgRx provides a reactive state management framework for Angular. Leverage Redux patterns with powerful tools like Effects, Entity, and Store DevTools to build scalable apps.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-3">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="p-6 border border-[#319795] rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur shadow-md hover:scale-[1.01] transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <item.icon className="w-6 h-6 text-red-600" />
            <h3 className="text-md font-semibold text-red-900 dark:text-red-300">
              {item.title}
            </h3>
          </div>
          <p className="text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
      NgRx brings predictable state management to Angular with robust tools for side effects, state normalization, and debugging.
    </div>
  </div>
);
