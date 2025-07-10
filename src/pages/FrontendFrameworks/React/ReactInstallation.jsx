import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "1. Create a New Project Folder",
    command: "mkdir my-react-app",
    description: "Make a new folder for your project files.",
  },
  {
    title: "2. Open Project in Code Editor",
    command: "code my-react-app",
    description: "Open the folder in VS Code (or your preferred editor).",
  },
  {
    title: "3. Open Terminal Inside Editor",
    command: "Use Ctrl + ` or Terminal → New Terminal",
    description: "Access the terminal inside your code editor to run commands.",
    isNote: true,
  },
  {
    title: "4. Create a React App using Vite",
    command: "npm create vite@latest",
    description: "Use Vite to scaffold a React project in the current folder.",
  },
  {
    title: "5. Install Project Dependencies",
    command: "npm install",
    description: "Install required node packages listed in package.json.",
  },
  {
    title: "6. Start the Development Server",
    command: "npm run dev",
    description: "Launch the dev server and preview your app in the browser.",
  },
];

const resources = [
  {
    name: "Vite",
    link: "https://vitejs.dev/guide/",
    description: "Fast, modern build tool for frontend development.",
  },
  {
    name: "React Router DOM",
    link: "https://reactrouter.com/home",
    description: "Declarative routing for React applications.",
  },
  {
    name: "React Icons",
    link: "https://react-icons.github.io/react-icons/",
    description: "Popular icon packs in React components.",
  },
  {
    name: "Lucide Icons",
    link: "https://lucide.dev/icons/",
    description: "Elegant, consistent open-source icon library.",
  },
];

export const ReactInstallation = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="space-y-14 px-4 md:px-6 py-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#d0f1ee] shadow-md">
            <FaReact className="w-8 h-8 text-blue-400 animate-spin-slow" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-r from-blue-400 to-black bg-clip-text text-transparent py-2">
            Getting Started with React
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          Follow these essential steps to quickly set up a React project using <strong>Vite</strong> — a next-gen frontend tool that’s fast, simple, and optimized for modern development.
        </p>
      </div>

      {/* Setup Steps */}
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-blue-400" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.command, idx)}
                  className="text-muted-foreground hover:text-[#319795] transition"
                  title="Copy to clipboard"
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
            <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </pre>
          </div>
        ))}
      </div>

      {/* Useful Packages */}
      <div className="pt-6 space-y-3 border-t border-[#319795] border-muted">
        <h4 className="text-xl font-semibold text-[#319795]">🔗 Useful React Links</h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {resources.map((pkg, idx) => (
            <li key={idx}>
              <a
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#319795] font-medium transition"
              >
                {pkg.name}
              </a>{" "}
              — <span className="text-muted-foreground">{pkg.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
