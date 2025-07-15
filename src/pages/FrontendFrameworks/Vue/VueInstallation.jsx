import { TerminalSquare } from "lucide-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { SiVuedotjs } from "react-icons/si";
import { handleCopy } from "@/components/shared/CopyToClipboard"
import { packageManagers, steps, links} from "@/pages/FrontendFrameworks/Vue/Vuedata"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const VueInstallation = () => {
  const [copied, setCopied] = useState(null);
  const [selectedTabs, setSelectedTabs] = useState({});

  return (
    <div className="space-y-12 px-4 md:px-6 py-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100 shadow-md">
            <SiVuedotjs className="w-8 h-8 text-[#42b883]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#42b883] to-[#319795] text-transparent bg-clip-text py-2">
            Getting Started with Vue
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          Set up a Vue app quickly with Vite and enjoy a blazing fast dev experience.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-[#42b883]" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
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
            {/* <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </pre> */}
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

      {/* Useful Links */}
      <div className="space-y-4 pt-6 border-t border-[#319795]">
        <h3 className="text-xl font-semibold text-[#319795] flex items-center gap-2">🔗 Useful Vue Links</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#319795] font-medium transition"
              >
                {link.name}
              </a>{" "}
              — <span className="text-muted-foreground">{link.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
