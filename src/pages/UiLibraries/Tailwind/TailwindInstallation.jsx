import { TerminalSquare } from "lucide-react";
import { HiCheckCircle } from "react-icons/hi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { handleCopy } from "@/components/shared/CopyToClipboard";
import { packageManagers, tailwindSteps } from "@/pages/UiLibraries/Tailwind/TailwindData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function TailwindInstallation() {
  const [copied, setCopied] = useState(null);
  const [selectedTabs, setSelectedTabs] = useState({});

  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] shadow-md">
            <RiTailwindCssFill className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-blue-400 to-primary bg-clip-text text-transparent py-2">
            Tailwind Installation Guide
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Follow these steps to add Tailwind CSS to your frontend project using Vite, React, or any other toolchain.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {tailwindSteps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-blue-400" />
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{step.description}</p>
              </div>

              <div className="relative">
                <button
                  onClick={() => handleCopy(
                    typeof step.command === "string"
                      ? step.command
                      : step.command[selectedTabs[idx] || "npm"], // pick per-step tab
                    setCopied,
                    idx
                  )}
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

            {/* <div className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </div> */}
            {/* Tabs */}
            {step.all ? (
              <pre className="bg-muted/50 border border-gray-300 rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                {step.command}
              </pre>
            ) : (
              <Tabs value={selectedTabs[idx] || "npm"} onValueChange={(value) => setSelectedTabs((prev) => ({ ...prev, [idx]: value }))} className="w-full">
                <TabsList className="">
                  {packageManagers.map((pm) => (
                    <TabsTrigger key={pm.key} value={pm.key}>
                      <span className="flex items-center gap-1 text-xs cursor-pointer">
                        {pm.icon}
                        {pm.label}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {packageManagers.map((pm) => (
                  <TabsContent key={pm.key} value={pm.key}>
                    <pre className="bg-muted/50 border border-gray-300 rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                      {step.command[pm.key]}
                    </pre>
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}