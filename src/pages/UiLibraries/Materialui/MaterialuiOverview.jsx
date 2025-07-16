import { SiMui } from "react-icons/si";
import { highlights } from "@/pages/UiLibraries/Materialui/MaterialuiData";

export const MaterialuiOverview = () => {
  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Heading */}
      <div className="space-y-2">
         <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#ecf0ff] shadow-md">
            <SiMui className="w-8 h-8 text-[#007FFF]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#007FFF] to-primary bg-clip-text text-transparent py-2">
            Material UI Overview
          </h2>
        </div>
        <p className="text-gray-600">
          Material UI (MUI) is a popular React component library that implements Google's Material Design system. It provides a robust set of customizable, accessible, and themable UI components to build modern interfaces quickly.
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
              <item.icon className="w-6 h-6 text-[#007FFF] group-hover:scale-110 transition" />
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
              href="https://mui.com/material-ui/getting-started/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              MUI Documentation
            </a>
          </li>
          <li>
            <a
              href="https://mui.com/material-ui/all-components/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              Component Gallery
            </a>
          </li>
          <li>
            <a
              href="https://mui.com/material-ui/customization/theming/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#319795]"
            >
              Theming Guide
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}