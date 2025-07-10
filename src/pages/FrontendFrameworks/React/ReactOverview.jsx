import { FaReact } from "react-icons/fa";
import {
  Code2,
  Lightbulb,
  Sparkles,
  Info,
  CheckCircle,
  Clock,
} from "lucide-react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const highlights = [
  {
    title: "Component-Based",
    description:
      "Design reusable components and manage complex UIs by breaking them down into isolated pieces.",
    icon: Code2,
  },
  {
    title: "Declarative UI",
    description:
      "Write UI logic in a readable and predictable way, letting React handle DOM updates.",
    icon: Lightbulb,
  },
  {
    title: "Thriving Ecosystem",
    description:
      "Take advantage of React's massive community, tools, libraries, and third-party integrations.",
    icon: Sparkles,
  },
];

export const ReactOverview = () => {
  return (
    <div className="px-4 md:px-6 py-10 max-w-8xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#d0f1ee] shadow-lg">
          <FaReact className="w-10 h-10 text-blue-400 animate-spin-slow" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent py-2">
          React JS
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
          React is a flexible JavaScript library for building rich, interactive
          user interfaces using components and declarative syntax.
        </p>
      </div>

      {/* What, Why, When */}
      <div className="grid gap-3 md:grid-cols-3">
        {/* What */}
        <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-md text-blue-400 dark:text-[#a2e3dd]">
              What is React?
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            React is a JavaScript library created by Meta for building dynamic
            and performant UIs. It enables developers to craft encapsulated
            components that manage their own state and render efficiently.
          </p>
        </div>

        {/* Why */}
        <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-md text-blue-400 dark:text-[#a2e3dd]">
              Why use React?
            </h3>
          </div>
          <ul className=" text-sm text-muted-foreground space-y-1">
            <li>Improves code modularity and reuse</li>
            <li>Highly performant with virtual DOM</li>
            <li>
              Large ecosystem with libraries like Redux, React Router, and
              Next.js
            </li>
            <li>Strong community and job market demand</li>
          </ul>
        </div>

        {/* When */}
        <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-md text-blue-400 dark:text-[#a2e3dd]">
              When to Use React?
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Use React when building SPAs, dashboards, or UIs that require high
            interactivity, scalability, and maintainability across teams and
            components.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 text-xl">
          <MdOutlineTipsAndUpdates />
          <h2 className="font-bold text-[#319795]">Key Highlights of React</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="relative border border-[#319795] rounded-2xl p-6 bg-white/80 dark:bg-black/30 shadow-xl backdrop-blur-sm hover:scale-[1.01] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-md font-semibold text-blue-400 dark:text-[#a2e3dd]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#c2f0eb] dark:bg-[#205d5b] rounded-full blur-2xl opacity-30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Callout */}
      <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
        React powers millions of web apps globally — from personal portfolios
        to enterprise-level software. Learn it once, and you can build for web,
        mobile, and even desktop.
      </div>
    </div>
  );
}
