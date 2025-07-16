import { RiTailwindCssFill } from "react-icons/ri";
import { highlights } from "@/pages/UiLibraries/Tailwind/TailwindData";

export default function TailwindOverview() {
  return (
    <div className="space-y-8 p-4 md:p-8 ">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] shadow-md">
            <RiTailwindCssFill className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-blue-400 to-primary bg-clip-text text-transparent py-2">
            Tailwind CSS Overview
          </h1>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Tailwind CSS is a modern utility-first CSS framework designed to help developers build fast, responsive, and fully customizable UIs without writing custom styles. It promotes speed, flexibility, and maintainability in every project.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid sm:grid-cols-2 gap-4 pt-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm transition-transform hover:shadow-md hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <item.icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
              <h3 className="text-md font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Resources */}
      <div className="pt-8 border-t border-[#319795]">
        <p className="text-xl font-semibold text-[#319795] mb-2">🔗 Official Resources</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-primary">
          <li>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              Tailwind CSS Documentation
            </a>
          </li>
          <li>
            <a
              href="https://play.tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              Tailwind Playground
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}