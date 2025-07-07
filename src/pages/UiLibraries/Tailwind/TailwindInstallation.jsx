import { TerminalSquare } from "lucide-react";
import { HiClipboard, HiCheckCircle } from "react-icons/hi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

const tailwindSteps = [
  {
    title: "1. Install Tailwind via npm",
    command: "npm install -D tailwindcss postcss autoprefixer",
    description: "Install Tailwind CSS and its required PostCSS plugins for your project.",
  },
  {
    title: "2. Initialize Tailwind config",
    command: "npx tailwindcss init -p",
    description: "This creates `tailwind.config.js` and `postcss.config.js` files.",
  },
  {
    title: "3. Configure template paths",
    command: `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}`,
    description: "Update `tailwind.config.js` with paths to your files that use Tailwind classes.",
    isCodeBlock: true,
  },
  {
    title: "4. Add Tailwind to CSS",
    command: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    description: "Insert Tailwind’s layers into your main CSS file (e.g., `src/index.css`).",
    isCodeBlock: true,
  },
  {
    title: "5. Start your dev server",
    command: "npm run dev",
    description: "Start your development server to see Tailwind in action.",
  },
];

export default function TailwindInstallation() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] shadow-md">
            <RiTailwindCssFill className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#0f766e] bg-clip-text text-transparent">
            Tailwind Installation Guide
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          Follow these steps to add Tailwind CSS to your frontend project using Vite, React, or any other toolchain.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {tailwindSteps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-background p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>

              <div className="relative">
                <button
                  onClick={() => handleCopy(step.command, idx)}
                  className="text-muted-foreground hover:text-primary transition"
                >
                  {copied === idx ? (
                    <HiCheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <IoCopyOutline className="w-6 h-6" />
                  )}
                </button>
                {copied === idx && (
                  <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded shadow-sm animate-fade-in">
                    Copied!
                  </div>
                )}
              </div>
            </div>

            <div className="bg-muted/40 border rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
