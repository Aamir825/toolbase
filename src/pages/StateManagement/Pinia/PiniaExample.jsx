import { Code } from "lucide-react";
// import { SiPinia } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { GiPineapple } from "react-icons/gi";

const examples = [
  {
    title: "Use Counter Store in Vue Component",
    description: "How to import and use a Pinia store in your Vue component.",
    code: `<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>`,
  },
];

export const PiniaExample = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (code, idx) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="space-y-12 px-4 md:px-8 py-10">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-green-50 shadow-md">
            <GiPineapple className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-[#319795] text-transparent bg-clip-text py-2">
            Pinia Example
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          See how easy it is to use Pinia store in your components with minimal boilerplate.
        </p>
      </div>

      {examples.map((item, idx) => (
        <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
              <Code className="w-4 h-4 text-yellow-600" />
              {item.title}
            </h3>
            <button onClick={() => handleCopy(item.code, idx)} className="text-muted-foreground hover:text-primary transition">
              {copied === idx ? <HiCheckCircle className="w-6 h-6 text-green-600" /> : <IoCopyOutline className="w-6 h-6" />}
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
            {item.code}
          </pre>
        </div>
      ))}
    </div>
  );
};
