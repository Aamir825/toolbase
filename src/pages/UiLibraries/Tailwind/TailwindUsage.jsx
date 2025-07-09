import { Code, } from "lucide-react";
import { RiTailwindCssFill } from "react-icons/ri";
import { useState } from "react";
import { HiClipboard, HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const usageSteps = [
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

export default function TailwindUsage() {
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
            <RiTailwindCssFill className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-blue-400 to-primary bg-clip-text text-transparent py-2">
            Tailwind CSS Usage Examples
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
          Examples showing how to apply Tailwind CSS utility classes in your projects to build responsive, customizable UIs.
        </p>
      </div>

      {/* Usage steps */}
      <div className="space-y-6">
        {usageSteps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-blue-400" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.example, idx)}
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label={`Copy example for ${step.title}`}
                  title={`Copy example for ${step.title}`}
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
            <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
