import { Database, Zap } from "lucide-react";
import { MdDraw } from "react-icons/md";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
  {
    title: "Vue-Native Store",
    description: "Built specifically for Vue 3, well integrated with Composition API and reactivity.",
    icon: Zap,
  },
  {
    title: "Lightweight",
    description: "Define multiple stores each focused on a specific domain of your application.",
    icon: MdDraw,
  },
  {
    title: "TypeScript Support",
    description: "Full TS support out of the box—type safety for every getter, action, and state field.",
    icon: Database,
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
    title: "Install Pinia",
    command: {
      npm: "npm install pinia",
      yarn: "yarn add pinia",
      pnpm: "pnpm add pinia",
      bun: "bun add pinia",
    },
    description: "Add Pinia as a dependency in your Vue 3 project.",
  },
  {
    title: "Register Pinia in app",
    command: {
      npm: `// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');`,
      yarn: `// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');`,
      pnpm: `// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');`,
      bun: `// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');`,
    },
    description: "Initialize Pinia and attach it to the Vue app instance.",
    isCodeBlock: true,
  },
  {
    title: "Create a store",
    command: {
      npm: `// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  }
});`,
      yarn: `// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  }
});`,
      pnpm: `// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  }
});`,
      bun: `// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  }
});`,
    },
    description: "Define a modular store with state and actions.",
    isCodeBlock: true,
  },
];

export const resources = [
  { name: "Pinia Docs", link: "https://pinia.vuejs.org/", description: "Official guide and API reference." },
  { name: "Pinia GitHub", link: "https://github.com/vuejs/pinia", description: "Source code and issues." },
  { name: "Awesome Pinia", link: "https://github.com/antfu/awesome-pinia", description: "Curated list of plugins and examples." },
];


export const examples = [
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