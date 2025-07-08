import { Code2, Layers, Sparkles, Info, CheckCircle, Clock } from "lucide-react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { SiVuedotjs } from "react-icons/si";

const highlights = [
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

export const VueOverview = () => {
  return (
    <div className="px-4 md:px-10 py-10 max-w-8xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-100 shadow-lg">
          <SiVuedotjs className="w-10 h-10 text-[#42b883]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#42b883] to-[#319795] bg-clip-text text-transparent py-2">
          Vue.js Framework
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
          Vue is a lightweight JavaScript framework focused on building interactive and performant UIs with ease and flexibility.
        </p>
      </div>

      {/* What, Why, When */}
      <div className="grid gap-10 md:grid-cols-3">
        <InfoBox
          icon={Info}
          title="What is Vue?"
          description="Vue is a progressive framework for building user interfaces. It’s incrementally adaptable and integrates easily with other projects or libraries."
        />
        <InfoBox
          icon={CheckCircle}
          title="Why Use Vue?"
          description="Vue provides a simple yet powerful API, built-in transitions, reactivity, and great docs. It’s easy to pick up and quick to build with."
        />
        <InfoBox
          icon={Clock}
          title="When to Use Vue?"
          description="Ideal for single-page applications, admin dashboards, and rapid prototypes where ease of use and scalability are key."
        />
      </div>

      {/* Highlights */}
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 text-xl">
          <MdOutlineTipsAndUpdates />
          <h2 className="font-bold text-[#319795]">Key Highlights of Vue</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="relative border border-[#319795] rounded-2xl p-6 bg-white/80 dark:bg-black/30 shadow-xl backdrop-blur-sm hover:scale-[1.01] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-[#42b883]" />
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Callout */}
      <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
        Vue.js is a developer-friendly framework perfect for projects that demand speed, simplicity, and flexibility. It's lightweight yet powerful — used by companies like Alibaba and Xiaomi.
      </div>
    </div>
  );
}

function InfoBox({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-[#42b883]" />
        <h3 className="font-semibold text-lg text-green-900 dark:text-green-300">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
