import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { handleCopy } from "@/components/shared/CopyToClipboard"
import { packageManagers, steps, resources } from "@/pages/StateManagement/Zustand/ZustandData"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ZustandSetup = () => {
  const [copied, setCopied] = useState(null);
  const [selectedTabs, setSelectedTabs] = useState({});

  return (
    <div className="space-y-12 px-4 md:px-6 py-10">
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
                  onClick={() => handleCopy(
                    typeof s.command === "string"
                      ? s.command
                      : s.command[selectedTabs[i] || "npm"], // pick per-step tab
                    setCopied,
                    i
                  )}
                  className="text-muted-foreground hover:text-[#319795] transition"
                  title="Copy to clipboard"
                >
                  {copied === i ? (
                    <HiCheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <IoCopyOutline className="w-6 h-6" />
                  )}
                </button>
                {copied === i && (
                  <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded shadow-sm animate-fade-in">
                    Copied!
                  </div>
                )}
              </div>
            </div>
            {/* <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {s.command}
            </pre> */}
            {s.all ? (
              <pre className="bg-muted/50 border border-gray-300 rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                {s.command}
              </pre>
            ) : (
              <Tabs value={selectedTabs[i] || "npm"} onValueChange={(value) => setSelectedTabs((prev) => ({ ...prev, [i]: value }))} className="w-full">
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
                      {s.command[pm.key]}
                    </pre>
                  </TabsContent>
                ))}
              </Tabs>
            )}
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
