import { Layers, Sparkles, Palette, Settings2 } from "lucide-react";
import { SiBun, SiNpm, SiPnpm, SiTailwindcss } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
    {
        title: "Built with Tailwind & Radix",
        description: "Leverages Tailwind CSS for styling and Radix UI for accessibility and behavior.",
        icon: SiTailwindcss,
    },
    {
        title: "Copy and Own the Code",
        description: "All components are local to your project. Fully customizable and framework-agnostic.",
        icon: Layers,
    },
    {
        title: "Accessible by Design",
        description: "Follows WAI-ARIA standards with keyboard navigation and screen reader support.",
        icon: Settings2,
    },
    {
        title: "Dark Mode & Themes",
        description: "Easily toggle between light and dark themes with Tailwind's class-based system.",
        icon: Palette,
    },
    {
        title: "Modern Developer Experience",
        description: "Written in TypeScript and designed for Next.js, Vite, and modern toolchains.",
        icon: Sparkles,
    },
];


export const packageManagers = [
    { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
    { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
    { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
    { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const shadcnSteps = [
    {
        title: "Initialize shadcn/ui",
        command: {
            npm: "npx shadcn-ui@latest init",
            yarn: "yarn dlx shadcn-ui@latest init",
            pnpm: "pnpm dlx shadcn-ui@latest init",
            bun: "bunx shadcn-ui@latest init",
        },
        description:
            "Starts the setup wizard for shadcn/ui. It will ask for your framework, Tailwind config path, and other preferences.",
    },
    {
        title: "Configure components.json",
        command: {
            npm: `{
  "style": "default",
  "rsc": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true
  }
}`,
            yarn: `{
  "style": "default",
  "rsc": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true
  }
}`,
            pnpm: `{
  "style": "default",
  "rsc": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true
  }
}`,
            bun: `{
  "style": "default",
  "rsc": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true
  }
}`
        },
        description:
            "Defines where your components, styles, and Tailwind setup live. You can customize the style and color scheme.",
    },
    {
        title: "Add a component",
        command: {
            npm: "npx shadcn-ui@latest add button",
            yarn: "yarn dlx shadcn-ui@latest add button",
            pnpm: "pnpm dlx shadcn-ui@latest add button",
            bun: "bunx shadcn-ui@latest add button",
        },
        description:
            "Copies the `Button` component source code directly into your project for full customization.",
    },
    {
        title: "Use the component",
        command: {
            npm: `import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}`,
            yarn: `import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}`,
            pnpm: `import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}`, 
            bun: `import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}`,
},
        description:
            "Once added, you can use your component anywhere. You own the code and can customize freely.",
    },
];


export const usageSteps = [
    {
        title: "Using Button Component",
        description: "Import and use the Button component from your local Shadcn UI folder.",
        example: `import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <Button variant="default">
      Click Me
    </Button>
  );
}`,
    },
    {
        title: "Dialog Component Example",
        description: "Add dialogs using accessible primitives for modals, tooltips, etc.",
        example: `import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    This is a Shadcn dialog component.
  </DialogContent>
</Dialog>;`,
    },
    {
        title: "Input with Label and Button",
        description: "Use Input with Button and form elements for beautiful layouts.",
        example: `import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ExampleForm() {
  return (
    <div className="flex gap-2">
      <Input placeholder="Enter email" />
      <Button>Submit</Button>
    </div>
  );
}`,
    },
];
