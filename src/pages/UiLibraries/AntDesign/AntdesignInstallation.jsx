import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { SiAntdesign } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { handleCopy } from "@/components/shared/CopyToClipboard";
import { packageManagers, steps } from "@/pages/UiLibraries/AntDesign/AntdesignData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export const AntdesignInstallation = () => {
  const [copied, setCopied] = useState(null);
  const [selectedTabs, setSelectedTabs] = useState({});

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
                  <TerminalSquare className="w-5 h-5 text-[#f72b10]" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
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
