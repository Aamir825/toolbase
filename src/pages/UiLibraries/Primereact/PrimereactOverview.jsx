import { BadgeCheck, PlugZap, Wrench, LayoutGrid } from "lucide-react";
import { SiPrimereact } from "react-icons/si";

export const PrimereactOverview = () => {
  return (
    <div className="space-y-8 p-4 md:p-8 ">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#ecfdff] shadow-md">
            <SiPrimereact className="w-8 h-8 text-[#3bdaf6]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#3bdaf6] to-primary bg-clip-text text-transparent py-2">
            PrimeReact Overview
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          PrimeReact is a rich UI component library for React, offering a comprehensive set of customizable components, themes, and templates to help developers build modern applications quickly.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#319795] rounded-xl bg-background p-5 shadow-sm hover:shadow-md transition group"
          >
            <div className="flex items-center gap-3 mb-2">
              <item.icon className="w-6 h-6 text-[#3bdaf6] group-hover:scale-110 transition" />
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
            <a
              href="https://primereact.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              PrimeReact Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/primefaces/primereact"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              PrimeReact GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const highlights = [
  {
    title: "80+ Rich Components",
    description: "Includes data tables, charts, calendars, dropdowns, dialogs, and more out of the box.",
    icon: LayoutGrid,
  },
  {
    title: "Built-in Theming",
    description: "Customize your UI with built-in light/dark themes and style configuration.",
    icon: Wrench,
  },
  {
    title: "Accessibility & RTL",
    description: "Follows WCAG guidelines and supports right-to-left layouts for multilingual apps.",
    icon: BadgeCheck,
  },
  {
    title: "Enterprise Ready",
    description: "Used in enterprise apps worldwide with commercial support and premium templates.",
    icon: PlugZap,
  },
];
