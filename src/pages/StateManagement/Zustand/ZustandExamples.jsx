import { Code } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

const examples = [
    {
        title: "Basic Counter Store",
        description: "Define state and methods with `create`.",
        code: `import { create } from 'zustand';

export const useCounter = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}));`,
    },
    {
        title: "Using the Store in Components",
        description: "Retrieve state and actions via hook.",
        code: `function Counter() {
  const { count, inc } = useCounter();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}`,
    },
];

export const ZustandExample = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (c, idx) => {
        try {
            await navigator.clipboard.writeText(c);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch { }
    };

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-green-50 shadow-md">
                        <FaLeaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-500 text-transparent bg-clip-text py-2">
                        Zustand Examples
                    </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Simple and clear usage demos to quickly understand Zustand store usage.
                </p>
            </div>

            {examples.map((e, i) => (
                <div key={i} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
                            <Code className="w-4 h-4 text-green-600" />
                            {e.title}
                        </h3>
                        <div className="relative">
                            <button
                                onClick={() => handleCopy(e.code, i)}
                                className="text-muted-foreground hover:text-green-600"
                            >
                                {copied === i ? <HiCheckCircle className="w-6 h-6 text-green-600" /> : <IoCopyOutline className="w-6 h-6" />}
                            </button>
                            {copied === i && (
                                <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded shadow-sm animate-fade-in">
                                    Copied!
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{e.description}</p>
                    <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {e.code}
                    </pre>
                </div>
            ))}
        </div>
    );
}
