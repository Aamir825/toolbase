import { Code } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const examples = [
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

export const NextExamples = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (text, idx) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#e6f6f6] shadow-md">
                    <RiNextjsFill className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#319795] to-black text-transparent bg-clip-text py-2">
                    Next.js Core Examples
                </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl">
                Below are practical examples of building pages, layouts, APIs, and dynamic routes in Next.js using both App Router and Pages Router.
            </p>

            {/* Examples */}
            <div className="space-y-8">
                {examples.map((ex, idx) => (
                    <div
                        key={idx}
                        className="relative border border-[#319795] bg-white/80 dark:bg-black/30 rounded-xl p-5 shadow-md backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
                                <Code className="w-4 h-4 text-[#319795]" />
                                {ex.title}
                            </h3>
                            <div className="relative">
                                <button
                                    onClick={() => handleCopy(ex.code, idx)}
                                    className="text-muted-foreground hover:text-[#319795] transition"
                                    title="Copy to clipboard"
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
                        <p className="text-sm text-muted-foreground mb-2">{ex.description}</p>
                        <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-1 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                            {ex.code}
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}
