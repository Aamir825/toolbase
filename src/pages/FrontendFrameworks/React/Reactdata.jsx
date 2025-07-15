import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";
import { Code2, Lightbulb, Sparkles } from "lucide-react";


export const highlights = [
  {
    title: "Component-Based",
    description:
      "Design reusable components and manage complex UIs by breaking them down into isolated pieces.",
    icon: Code2,
  },
  {
    title: "Declarative UI",
    description:
      "Write UI logic in a readable and predictable way, letting React handle DOM updates.",
    icon: Lightbulb,
  },
  {
    title: "Thriving Ecosystem",
    description:
      "Take advantage of React's massive community, tools, libraries, and third-party integrations.",
    icon: Sparkles,
  },
]

export const packageManagers = [
  { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
  { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
  { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
  { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const steps = [
  {
    title: "1. Create a React App using Vite",
    description: "Use Vite to scaffold a React project.",
    command: {
      npm: "npm create vite@latest",
      yarn: "yarn create vite",
      pnpm: "pnpm create vite",
      bun: "bun create vite",
    },
  },
  {
    title: "2. Install Project Dependencies",
    description: "Install required node packages.",
    command: {
      npm: "npm install",
      yarn: "yarn install",
      pnpm: "pnpm install",
      bun: "bun install",
    },
  },
  {
    title: "3. Start the Development Server",
    description: "Launch the dev server and preview your app.",
    command: {
      npm: "npm run dev",
      yarn: "yarn dev",
      pnpm: "pnpm dev",
      bun: "bun run dev",
    },
  },
]


export const resources = [
  {
    name: "Vite",
    link: "https://vitejs.dev/guide/",
    description: "Fast, modern build tool for frontend development.",
  },
  {
    name: "React Router DOM",
    link: "https://reactrouter.com/home",
    description: "Declarative routing for React applications.",
  },
  {
    name: "React Icons",
    link: "https://react-icons.github.io/react-icons/",
    description: "Popular icon packs in React components.",
  },
  {
    name: "Lucide Icons",
    link: "https://lucide.dev/icons/",
    description: "Elegant, consistent open-source icon library.",
  },
]

export const examples = [
  {
    title: "Functional Component with Hooks",
    description: "A basic counter using `useState`.",
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
  },
  {
    title: "Conditional Rendering",
    description: "Show or hide elements based on state.",
    code: `import React, { useState } from 'react';

function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle
      </button>
      {visible && <p>Hello, world!</p>}
    </div>
  );
}

export default ToggleText;`,
  },
  {
    title: "Mapping List Items",
    description: "Render a list from an array of data.",
    code: `import React from 'react';

function NameList() {
  const names = ['Alice', 'Bob', 'Charlie'];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;`,
  },
];