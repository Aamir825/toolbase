import { BadgeCheck, Palette, LayoutGrid, PlugZap } from "lucide-react";
import { SiAntdesign } from "react-icons/si";

export const AntdesignOverview = () => {
  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="space-y-2">
         <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-bl from-[#0074e0] to-[#f72b10] shadow-md">
            <SiAntdesign className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#319795] bg-clip-text text-transparent">
            Ant Design Overview
          </h2>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          Ant Design is a comprehensive React UI framework built for enterprise applications. It offers a large set of high-quality components, design consistency, and powerful customization for building modern web apps.
        </p>
      </div>

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

      <div className="pt-6 border-t">
        <p className="text-sm text-muted-foreground mb-2">Official Resources:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-primary">
          <li>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#1677ff]"
            >
              Ant Design Website
            </a>
          </li>
          <li>
            <a
              href="https://ant.design/docs/react/introduce"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#1677ff]"
            >
              Ant Design Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const highlights = [
  {
    title: "Rich Component Library",
    description: "AntD provides 60+ carefully crafted components optimized for enterprise apps.",
    icon: LayoutGrid,
  },
  {
    title: "Consistent Design System",
    description: "Built around the Ant Design specification for consistent user interfaces.",
    icon: Palette,
  },
  {
    title: "Internationalization (i18n)",
    description: "Supports multiple languages with built-in i18n utilities.",
    icon: BadgeCheck,
  },
  {
    title: "Theme Customization",
    description: "Easily override styles using Less variables or CSS-in-JS solutions.",
    icon: PlugZap,
  },
];
