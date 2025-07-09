import { Code } from "lucide-react";
import { SiShadcnui } from "react-icons/si";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const usageSteps = [
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

export const ShadcnUsage = () => {
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
          <div className="p-2 rounded-full bg-gradient-to-br from-black to-[#e4e4e4] shadow-md">
            <SiShadcnui className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-black to-primary bg-clip-text text-transparent py-2">
            Shadcn/UI Usage Example
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Below are real examples showing how to use <strong>shadcn/ui</strong> components in your project after setup.
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
                  <Code className="w-5 h-5 text-primary" />
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
