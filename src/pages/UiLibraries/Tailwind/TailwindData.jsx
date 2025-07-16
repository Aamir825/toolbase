import { BadgeCheck, Info, Sparkles } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
    {
        title: "Utility-First Approach",
        description:
            "Build UIs with minimal CSS by composing utility classes directly in your HTML. This leads to fast, consistent styling with zero config.",
        icon: BadgeCheck,
    },
    {
        title: "Responsive Design",
        description:
            "Style for multiple screen sizes using intuitive prefixes like `md:`, `lg:`, and `xl:`. Mobile-first by default.",
        icon: Info,
    },
];

export const packageManagers = [
    { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
    { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
    { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
    { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const tailwindSteps = [
    {
        title: "Install Tailwind via CLI",
        description: "Install Tailwind CSS and its required PostCSS plugins for your project.",
        command: {
            npm: "npm install -D tailwindcss postcss autoprefixer",
            yarn: "yarn add -D tailwindcss postcss autoprefixer",
            pnpm: "pnpm add -D tailwindcss postcss autoprefixer",
            bun: "bun add -d tailwindcss postcss autoprefixer",
        },
    },
    {
        title: "Initialize Tailwind config",
        description: "This creates `tailwind.config.js` and `postcss.config.js` files.",
        command: {
            npm: "npx tailwindcss init -p",
            yarn: "yarn tailwindcss init -p",
            pnpm: "pnpx tailwindcss init -p",
            bun: "bunx tailwindcss init -p",
        },
    },
    {
        title: "Configure template paths",
        description: "Update `tailwind.config.js` with paths to your files that use Tailwind classes.",
        command: `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
    },
    {
        title: "Add Tailwind to CSS",
        description: "Insert Tailwind’s layers into your main CSS file (e.g., `src/index.css`).",
        command: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
    {
        title: "Start your dev server",
        description: "Start your development server to see Tailwind in action.",
        command: {
            npm: "npm run dev",
            yarn: "yarn dev",
            pnpm: "pnpm dev",
            bun: "bun run dev",
        },
    },
];


export const usageSteps = [
    {
        title: "Add Tailwind classes to your markup",
        description:
            "Use utility classes like `bg-blue-500`, `text-white`, `p-4`, and `rounded` directly in your HTML or JSX.",
        example: `<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
  Click me
</button>`,
    },
    {
        title: "Responsive design with prefixes",
        description:
            "Apply different styles on different screen sizes using prefixes like `sm:`, `md:`, and `lg:`.",
        example: `<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text size
</div>`,
    },
    {
        title: "Customize using config file",
        description:
            "Extend or override the default theme by updating `tailwind.config.js`.",
        example: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1c64f2',
      },
    },
  },
};`,
    },
];
