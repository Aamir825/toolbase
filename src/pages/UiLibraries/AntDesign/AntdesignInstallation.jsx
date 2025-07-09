import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { SiAntdesign } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "1. Install Ant Design",
    command: "npm install antd",
    description: "Install the core Ant Design package into your project.",
  },
  {
    title: "2. Import Styles",
    command: `// main.jsx or App.jsx
import 'antd/dist/reset.css';`,
    description: "Import the default CSS to apply Ant Design styles.",
  },
  {
    title: "3. Start using components",
    command: `import { Button } from 'antd';

<Button type="primary">AntD Button</Button>`,
    description: "Import and use components as needed from the library.",
    isCodeBlock: true,
  },
];

export const AntdesignInstallation = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    await navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#fffcfb] shadow-md">
            <SiAntdesign className="w-8 h-8 text-[#f72b10]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#f72b10] to-primary bg-clip-text text-transparent py-2">
            Ant Design Installation Guide
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Set up Ant Design in your React project with just a few steps.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
              <button
                onClick={() => handleCopy(step.command, idx)}
                className="text-muted-foreground hover:text-primary transition"
              >
                {copied === idx ? (
                  <HiCheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <IoCopyOutline className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
