import { Code, Zap, Layers } from "lucide-react";
import { FaLeaf } from "react-icons/fa";

const features = [
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

export const ZustandOverview = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-6 py-10 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-100 shadow-lg">
          <FaLeaf className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-teal-500 text-transparent bg-clip-text">
          Zustand
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A fast, intuitive state-management library for React apps—small footprint, big power.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border border-[#319795] rounded-2xl bg-white/80 backdrop-blur shadow-md hover:scale-[1.01] transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <f.icon className="w-6 h-6 text-green-600" />
              <h3 className="text-md font-semibold text-green-900">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{f.description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
        Zustand simplifies React state with just `create()`, returning hooks directly—no provider required.
      </div>
    </div>
  );
}
