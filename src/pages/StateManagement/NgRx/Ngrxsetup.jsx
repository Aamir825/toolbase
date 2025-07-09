import { TerminalSquare } from "lucide-react";
import { SiNgrx } from "react-icons/si";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "Install @ngrx packages",
    command: "npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools",
    description: "Core NgRx modules for store, side effects, entity, and developer tools.",
  },
  {
    title: "Register Store in AppModule",
    command: `// app.module.ts
import { StoreModule } from '@ngrx/store';
import { effects } from './state';
@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(effects),
  ],
})`,
    description: "Initialize NgRx store and load root effects.",
  },
  {
    title: "Add Store DevTools",
    command: `// app.module.ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })`,
    description: "Enable time-travel debugging and state inspection.",
  },
];

const resources = [
  { name: "NgRx Docs", link: "https://ngrx.io/guide/store", description: "Official guide and API reference." },
  { name: "NgRx GitHub", link: "https://github.com/ngrx/platform", description: "Source code and issues." },
  { name: "NgRx Demo App", link: "https://github.com/ngrx/platform/tree/master/projects/example-app", description: "Work through a full demo application." },
];

export const NgrxSetup = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (cmd, idx) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="space-y-12 px-4 md:px-8 py-10">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-red-50 shadow-md">
            <SiNgrx className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-[#319795] text-transparent bg-clip-text py-2">
            Setting up NgRx in Angular
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Integrate NgRx Store, Effects, and DevTools into your Angular application quickly.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <TerminalSquare className="w-5 h-5 text-red-600" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button onClick={() => handleCopy(step.command, idx)} className="text-muted-foreground hover:text-red-600 transition">
                  {copied === idx ? <HiCheckCircle className="w-6 h-6 text-green-600" /> : <IoCopyOutline className="w-6 h-6" />}
                </button>
              </div>
            </div>
            <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </pre>
          </div>
        ))}
      </div>

      <div className="pt-6 space-y-3 border-t border-[#319795]">
        <h4 className="text-xl font-semibold text-[#319795]">🔗 Useful NgRx Links</h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {resources.map((pkg, idx) => (
            <li key={idx}>
              <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#319795] font-medium transition">
                {pkg.name}
              </a>{" "}
              — <span className="text-muted-foreground">{pkg.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
