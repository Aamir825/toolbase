import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { SiPrimereact } from "react-icons/si";
import { HiClipboard, HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "1. Install PrimeReact and PrimeIcons",
    command: "npm install primereact primeicons",
    description: "Installs the core PrimeReact UI library and the PrimeIcons icon set.",
  },
  {
    title: "2. Install peer dependencies",
    command: "npm install react-transition-group classnames",
    description: "PrimeReact requires these packages for transitions and utility support.",
  },
  {
    title: "3. Import PrimeReact CSS",
    command: `// In main.jsx or index.js
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';`,
    description: "Import the necessary theme, core styles, and icons.",
    isCodeBlock: true,
  },
];

export const PrimereactInstallation = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    await navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#ecfdff] shadow-md">
            <SiPrimereact className="w-8 h-8 text-[#3bdaf6]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#3bdaf6] to-primary bg-clip-text text-transparent py-2">
            PrimeReact Installation Guide
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Follow these steps to set up PrimeReact with full styling and icon support.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-[#3bdaf6]" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
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

            <div className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
