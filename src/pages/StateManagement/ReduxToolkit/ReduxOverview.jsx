import { SiRedux } from "react-icons/si";
import { features } from "@/pages/StateManagement/ReduxToolkit/ReduxData"

export const ReduxOverview = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-6 py-10 space-y-16">
      {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#fffcfb] shadow-lg">
                <SiRedux className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text py-2">
                Redux Toolkit (RTK)
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Redux Toolkit is the official, recommended approach for managing global state in React applications. It includes powerful utilities for reducers, async logic, and store configuration.
              </p>
            </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 border border-[#319795] rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur shadow-md hover:scale-[1.01] transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <feature.icon className="w-6 h-6 text-purple-600" />
              <h3 className="text-md font-semibold text-purple-900 dark:text-purple-300">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Callout */}
      <div className="mt-16 border border-[#319795] rounded-xl bg-[#e0f8f6] dark:bg-[#0f272a] p-6 shadow-md text-sm leading-relaxed text-[#205d5b] dark:text-[#d1f1ef] text-center">
        Redux Toolkit improves the Redux experience by making state management more efficient, scalable, and enjoyable.
      </div>
    </div>
  );
}
