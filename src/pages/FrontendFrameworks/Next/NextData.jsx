import { Code2, Layers, Zap } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";


export const highlights = [
  {
    title: "App Router & SSR",
    description: "Server-side rendering and the new App Router bring fast performance and flexibility.",
    icon: Code2,
  },
  {
    title: "File-Based Routing",
    description: "Every file in the `pages` or `app` directory becomes a route automatically.",
    icon: Layers,
  },
  {
    title: "Built-in Optimizations",
    description: "Automatic image optimization, dynamic imports, and static site generation (SSG).",
    icon: Zap,
  },
];


export function InfoBox({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-[#319795]" />
        <h3 className="font-semibold text-md text-[#205d5b] dark:text-[#91f1ec]">{title}</h3>
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
    title: "Create Next App",
    description: "Use the official CLI to quickly scaffold a new Next.js project.",
    command: {
      npm: "npx create-next-app@latest my-next-app",
      yarn: "yarn create next-app my-next-app",
      pnpm: "pnpm create next-app my-next-app",
      bun: "bunx create-next-app@latest my-next-app",
    },
  },
  {
    title: "Navigate & Install",
    description: "Move into your project directory and install packages.",
    command: {
      npm: "cd my-next-app && npm install",
      yarn: "cd my-next-app && yarn install",
      pnpm: "cd my-next-app && pnpm install",
      bun: "cd my-next-app && bun install",
    },
  },
  {
    title: "Start Development Server",
    description: "Start your local dev server at http://localhost:3000.",
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
        name: "Next.js Docs",
        href: "https://nextjs.org/docs",
        description: "Official guide for features like routing, data fetching, and deployment",
    },
    {
        name: "App Router (New)",
        href: "https://nextjs.org/docs/app",
        description: "The new routing system based on server components",
    },
    {
        name: "Next.js GitHub Repo",
        href: "https://github.com/vercel/next.js",
        description: "Open-source repo with discussions, issues, and source code",
    },
    {
        name: "Learn Next.js Course",
        href: "https://nextjs.org/learn",
        description: "Official interactive Next.js tutorial",
    },
    {
        name: "Vercel Hosting",
        href: "https://vercel.com",
        description: "Deploy your Next.js site in seconds with first-party hosting",
    },
];


export const examples = [
    {
        title: "Basic Page (App Router)",
        description: "This is a default page in the new `/app` directory.",
        code: `// app/page.tsx
export default function HomePage() {
  return <h1>Welcome to Next.js App Router!</h1>;
}`,
    },
    {
        title: "Layout Component (App Router)",
        description: "Shared layout for all pages in the app directory.",
        code: `// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,
    },
    {
        title: "API Route (Pages Router)",
        description: "A simple backend API using the `/pages/api` folder.",
        code: `// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API!" });
}`,
    },
    {
        title: "Dynamic Route with Params",
        description: "Rendering a page based on dynamic URL parameters.",
        code: `// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}`,
    },
];
