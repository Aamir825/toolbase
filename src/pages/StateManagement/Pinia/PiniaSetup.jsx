import { TerminalSquare } from "lucide-react";
// import { SiPinia } from "react-icons/si";
import { useState } from "react";
import { GiPineapple } from "react-icons/gi";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "Install Pinia",
    command: "npm install pinia",
    description: "Add Pinia as a dependency in your Vue 3 project.",
  },
  {
    title: "Register Pinia in app",
    command: `// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');`,
    description: "Initialize Pinia and attach it to the Vue app instance.",
  },
  {
    title: "Create a store",
    command: `// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  }
});`,
    description: "Define a modular store with state and actions.",
  },
];

const resources = [
  { name: "Pinia Docs", link: "https://pinia.vuejs.org/", description: "Official guide and API reference." },
  { name: "Pinia GitHub", link: "https://github.com/vuejs/pinia", description: "Source code and issues." },
  { name: "Awesome Pinia", link: "https://github.com/antfu/awesome-pinia", description: "Curated list of plugins and examples." },
];

export const PiniaSetup = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (cmd, idx) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch { }
  };

  return (
    <div className="space-y-12 px-4 md:px-6 py-10">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-green-50 shadow-md">
            <GiPineapple className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-[#319795] text-transparent bg-clip-text py-2">
            Setting up Pinia
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Follow these steps to configure Pinia as your state management library in a Vue 3 application.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <TerminalSquare className="w-5 h-5 text-yellow-600" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.command, idx)}
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
              {step.command}
            </pre>
          </div>
        ))}
      </div>

      <div className="pt-6 space-y-3 border-t border-[#319795]">
        <h4 className="text-xl font-semibold text-[#319795]">🔗 Useful Pinia Links</h4>
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
