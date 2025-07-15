import { Code } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { handleCopy} from "@/components/shared/CopyToClipboard";
import { examples } from "@/pages/FrontendFrameworks/React/Reactdata";


export const ReactExamples = () => {
  const [copied, setCopied] = useState(null);


  return (
    <div className="space-y-12 px-4 md:px-6 py-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#d0f1ee] shadow-md">
            <FaReact className="w-8 h-8 text-blue-400 animate-spin-slow" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-r from-blue-400 to-black bg-clip-text text-transparent py-2">
            React Core Examples
          </h2>
        </div>
        <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
          Explore foundational React patterns through simple yet powerful examples. These cover common tasks like managing state, conditional rendering, and rendering dynamic lists.
        </p>
      </div>

      {/* Example Cards */}
      <div className="space-y-10">
        {examples.map((example, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-blue-400" />
                  {example.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{example.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(example.code, setCopied, idx)}
                  className="text-muted-foreground hover:text-blue-600 transition"
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
            <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {example.code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
