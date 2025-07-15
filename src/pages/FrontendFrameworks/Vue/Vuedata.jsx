import { Code2, Layers, Sparkles  } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
  {
    title: "Reactive Core",
    description: "Vue uses a reactive data-binding system that updates the UI automatically.",
    icon: Sparkles,
  },
  {
    title: "Component-Based",
    description: "Like React and Angular, Vue encourages reusable, encapsulated components.",
    icon: Layers,
  },
  {
    title: "Simplicity First",
    description: "Minimal learning curve with powerful capabilities for both beginners and pros.",
    icon: Code2,
  },
];

export function InfoBox({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-[#42b883]" />
        <h3 className="font-semibold text-md text-green-900 dark:text-green-300">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export const packageManagers = [
  { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
  { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
  { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
  { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const steps = [
  {
    title: "Install Vite + Vue",
    description: "Scaffold a new Vue app using Vite’s fast setup.",
    command: {
      npm: "npm create vite@latest my-vue-app -- --template vue",
      yarn: "yarn create vite my-vue-app --template vue",
      pnpm: "pnpm create vite my-vue-app -- --template vue",
      bun: "bun create vite my-vue-app --template vue",
    },
  },
  {
    title: "Navigate & Install",
    description: "Move into your project folder and install dependencies.",
    command: {
      npm: "cd my-vue-app && npm install",
      yarn: "cd my-vue-app && yarn",
      pnpm: "cd my-vue-app && pnpm install",
      bun: "cd my-vue-app && bun install",
    },
  },
  {
    title: "Start Development Server",
    description: "Start your dev server and preview your app in the browser.",
    command: {
      npm: "npm run dev",
      yarn: "yarn dev",
      pnpm: "pnpm dev",
      bun: "bun run dev",
    },
  },
];

export const links = [
  {
    name: "Vue Official Docs",
    href: "https://vuejs.org/guide/introduction.html",
    description: "Comprehensive documentation for learning Vue.js",
  },
  {
    name: "Vue Router",
    href: "https://router.vuejs.org/",
    description: "Official routing library for Vue.js applications",
  },
  {
    name: "Pinia (State Management)",
    href: "https://pinia.vuejs.org/",
    description: "The intuitive and powerful Vue store system",
  },
  {
    name: "VueUse",
    href: "https://vueuse.org/",
    description: "Collection of essential Vue composition utilities",
  },
  {
    name: "Vue GitHub Repo",
    href: "https://github.com/vuejs/core",
    description: "Official source code and issues on GitHub",
  },
];

export const examples = [
  {
    title: "Reactive Counter (Composition API)",
    code: `<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count: {{ count }}</button>
</template>`,
  },
  {
    title: "Basic Component (Options API)",
    code: `<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello from Vue!",
    };
  },
};
</script>`,
  },
];