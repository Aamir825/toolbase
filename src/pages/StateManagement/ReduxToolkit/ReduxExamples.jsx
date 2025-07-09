import { Code } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { SiRedux } from "react-icons/si";

const examples = [
    {
        title: "Create a Slice",
        description: "Using `createSlice` to define actions and reducers in one place.",
        code: `import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 },
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;`,
    },
    {
        title: "Configure Store",
        description: "Setting up the store using `configureStore`.",
        code: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
    },
    {
        title: "Access & Dispatch in Component",
        description: "Using `useSelector` and `useDispatch` in a functional component.",
        code: `import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}`,
    },
];

export const ReduxExample = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (code, idx) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <div className="space-y-12 px-4 md:px-8 py-10">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-[#fffcfb] shadow-md">
                        <SiRedux className="w-8 h-8 text-purple-500" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text py-2">
                        Redux Toolkit Examples
                    </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Explore essential Redux Toolkit snippets to help you get started fast with clean, predictable state management.
                </p>
            </div>

            {examples.map((item, idx) => (
                <div
                    key={idx}
                    className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition"
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
                            <Code className="w-4 h-4 text-purple-600" />
                            {item.title}
                        </h3>
                        <div className="relative">
                            <button
                                onClick={() => handleCopy(item.code, idx)}
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
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {item.code}
                    </pre>
                </div>
            ))}
        </div>
    );
}
