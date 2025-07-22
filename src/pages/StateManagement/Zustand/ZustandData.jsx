import { Zap, Layers } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const features = [
  {
    title: "Minimal & Lightweight",
    description: "Tiny API surface (~1 KB), no boilerplate—just create and use.",
    icon: FaLeaf,
  },
  {
    title: "Global & Local State",
    description: "Use one store or multiple dedicated ones per feature.",
    icon: Layers,
  },
  {
    title: "Built‑in React Hooks",
    description: "Selective rendering using hooks like `useStore(state => state.foo)`.",
    icon: Zap,
  },
];

export const packageManagers = [
  { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
  { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
  { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
  { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const steps = [
  {
    title: "Install Zustand",
    command: {
      npm: "npm install zustand",
      yarn: "yarn add zustand",
      pnpm: "pnpm add zustand",
      bun: "bun add zustand",
    },
    description: "Add the Zustand package to your project.",
  },
  {
    title: "Create a Store",
    command: {
      npm: `// store.js
import { create } from 'zustand';

export const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}));`,
      yarn: `// store.js
import { create } from 'zustand';

export const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}));`,
      pnpm: `// store.js
import { create } from 'zustand';

export const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}));`,
      bun: `// store.js
import { create } from 'zustand';

export const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}));`,
    },
    description: "Define global state and actions using Zustand's `create` function.",
  },
  {
    title: "Use Store in Components",
    command: {
      npm: `// Counter.jsx
import React from 'react';
import { useStore } from './store';

function Counter() {
  const { count, inc } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default Counter;`,
      yarn: `// Counter.jsx
import React from 'react';
import { useStore } from './store';

function Counter() {
  const { count, inc } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default Counter;`,
      pnpm: `// Counter.jsx
import React from 'react';
import { useStore } from './store';

function Counter() {
  const { count, inc } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default Counter;`,
      bun: `// Counter.jsx
import React from 'react';
import { useStore } from './store';

function Counter() {
  const { count, inc } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default Counter;`,
    },
    description: "Access state and actions directly in components using the custom hook.",
  },
];

export const resources = [
  { name: "Zustand Docs", link: "https://zustand.surge.sh/", description: "Core documentation & API reference" },
  { name: "Zustand Github", link: "https://github.com/pmndrs/zustand", description: "Source code and community discussions." },
];

export const examples = [
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