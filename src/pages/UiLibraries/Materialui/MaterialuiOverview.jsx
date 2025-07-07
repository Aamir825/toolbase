import { BadgeCheck, Info, Sparkles } from "lucide-react";
import { SiMui } from "react-icons/si";

export const MaterialuiOverview = () => {
  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Heading */}
      <div className="space-y-2">
         <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#007FFF] to-[#0059B2] shadow-md">
            <SiMui className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#0f766e] bg-clip-text text-transparent">
            Material UI Overview
          </h2>
        </div>
        <p className="text-muted-foreground text-base">
          Material UI (MUI) is a popular React component library that implements Google's Material Design system. It provides a robust set of customizable, accessible, and themable UI components to build modern interfaces quickly.
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
              href="https://mui.com/material-ui/getting-started/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#0066cc]"
            >
              MUI Documentation
            </a>
          </li>
          <li>
            <a
              href="https://mui.com/material-ui/all-components/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#0066cc]"
            >
              Component Gallery
            </a>
          </li>
          <li>
            <a
              href="https://mui.com/material-ui/customization/theming/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#0066cc]"
            >
              Theming Guide
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const highlights = [
  {
    title: "Material Design System",
    description: "Components built on Google’s Material Design system with modern styling.",
    icon: Sparkles,
  },
  {
    title: "Theme Customization",
    description: "Supports light/dark mode, custom colors, fonts, and breakpoints.",
    icon: Info,
  },
  {
    title: "Rich Component Set",
    description: "Offers inputs, dialogs, data grids, navigation, charts, and more.",
    icon: BadgeCheck,
  },
  {
    title: "Accessibility First",
    description: "Every component follows WAI-ARIA and accessibility standards.",
    icon: BadgeCheck,
  },
];
