import { Code } from "lucide-react";
import { useState } from "react";
import { SiAntdesign } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { handleCopy } from "@/components/shared/CopyToClipboard";
import { usageExamples } from "@/pages/UiLibraries/AntDesign/AntdesignData";


export const AntdesignUsage = () => {
  const [copied, setCopied] = useState(null);

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-[#fffcfb] shadow-md">
            <SiAntdesign className="w-8 h-8 text-[#f72b10]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#f72b10] to-primary bg-clip-text text-transparent py-2">
            Ant Design Usage Examples
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Quick examples to help you implement common Ant Design components and patterns.
        </p>
      </div>

      <div className="space-y-6">
        {usageExamples.map((step, idx) => (
          <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-[#f72b10]" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.example, setCopied, idx)}
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
            <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
