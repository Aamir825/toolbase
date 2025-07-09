import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "Install Zustand",
    command: "npm install zustand",
    description: "Add the Zustand package to your project.",
  },
  {
    title: "Create a Store",
    command: `// store.js
import { create } from 'zustand';

export const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}));`,
    description: "Define state and actions in one reusable hook.",
  },
];

const resources = [
  { name: "Zustand Docs", link: "https://zustand.surge.sh/", description: "Core documentation & API reference" },
  { name: "Zustand Github", link: "https://github.com/pmndrs/zustand", description: "Source code and community discussions." },
];

export const ZustandSetup = () => {
  const [copied, setCopied] = useState(null);
  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch { }
  };

  return (
    <div className="space-y-12 px-4 md:px-8 py-10">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-green-50 shadow-md">
            <FaLeaf className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-500 text-transparent bg-clip-text py-2">
            Installing Zustand
          </h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Set up a lightweight store with simple hooks and intuitive syntax.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-xl border border-[#319795] bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <TerminalSquare className="w-5 h-5 text-green-600" />
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{s.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(s.command, i)}
                  className="text-muted-foreground hover:text-green-600"
                >
                  {copied === i ? <HiCheckCircle className="w-6 h-6 text-green-600" /> : <IoCopyOutline className="w-6 h-6" />}
                </button>
                {copied === i && (
                  <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded shadow-sm animate-fade-in">
                    Copied!
                  </div>
                )}
              </div>
            </div>
            <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {s.command}
            </pre>
          </div>
        ))}
      </div>

      {/* Useful Packages */}
      <div className="pt-6 space-y-3 border-t border-[#319795]">
        <h4 className="text-xl font-semibold text-[#319795]">🔗 Useful Zustand Links</h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {resources.map((pkg, idx) => (
            <li key={idx}>
              <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#319795] font-medium">
                {pkg.name}
              </a>
              {" — "}
              <span className="text-muted-foreground">{pkg.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
