import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { Code } from "lucide-react";
import { SiVuedotjs } from "react-icons/si";
import { handleCopy } from "@/components/shared/CopyToClipboard"
import { examples} from "@/pages/FrontendFrameworks/Vue/Vuedata"

export const VueExamples = () => {
  const [copied, setCopied] = useState(null);

  return (
    <div className="space-y-10 px-4 md:px-6 py-10">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-green-100 shadow-md">
          <SiVuedotjs className="w-8 h-8 text-[#42b883]" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#42b883] to-[#319795] text-transparent bg-clip-text py-2">
          Vue Core Examples
        </h2>
      </div>
      <p className="text-base text-muted-foreground">
        Here are a couple of core Vue examples demonstrating both the Composition and Options API.
      </p>

      {examples.map((example, idx) => (
        <div
          key={idx}
          className="relative border border-[#319795] bg-white/80 dark:bg-black/30 rounded-xl p-5 shadow-sm backdrop-blur-sm"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
              <Code className="w-5 h-5 text-[#42b883]" />
              {example.title}
            </h3>
            <div className="relative">
                <button
                  onClick={() => handleCopy(example.code, setCopied, idx)}
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
          <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">{example.code}</pre>
        </div>
      ))}
    </div>
  );
}
