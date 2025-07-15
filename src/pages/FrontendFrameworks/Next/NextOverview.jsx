import { Info, CheckCircle, Clock } from "lucide-react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { highlights, InfoBox } from "@/pages/FrontendFrameworks/Vue/Vuedata"


export const NextOverview = () => {
  return (
    <div className="px-4 md:px-6 py-10 max-w-8xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-100 shadow-lg">
          <RiNextjsFill className="w-10 h-10 text-black" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-[#319795] to-black bg-clip-text text-transparent py-2">
          Next.js Framework
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
          Next.js is a React framework for production. It enables hybrid static & server rendering, route pre-fetching, API routes, and more.
        </p>
      </div>

      {/* What, Why, When */}
      <div className="grid gap-3 md:grid-cols-3">
        <InfoBox
          icon={Info}
          title="What is Next.js?"
          description="A full-stack React framework for building server-rendered or statically-exported apps with routing, API support, and optimized performance."
        />
        <InfoBox
          icon={CheckCircle}
          title="Why Use Next.js?"
          description="SEO-friendly, built-in SSR/SSG, file-based routing, API routes, and first-party support for React Server Components and the new App Router."
        />
        <InfoBox
          icon={Clock}
          title="When to Use Next.js?"
          description="Use Next.js when building dynamic apps, dashboards, e-commerce platforms, blogs, or anything where performance, routing, or SEO matters."
        />
      </div>

      {/* Highlights */}
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 text-xl">
          <MdOutlineTipsAndUpdates />
          <h2 className="font-bold text-[#319795]">Key Highlights of Next.js</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="relative border border-[#319795] rounded-2xl p-6 bg-white/80 dark:bg-black/30 shadow-xl backdrop-blur-sm hover:scale-[1.01] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-[#319795]" />
                <h3 className="text-md font-semibold text-[#205d5b] dark:text-[#91f1ec]">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Callout */}
      <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
        Next.js is the gold standard for production React apps. Built by Vercel, it powers the web for companies like Netflix, Twitch, TikTok, and more.
      </div>
    </div>
  );
}