import { TerminalSquare, ExternalLink } from "lucide-react";
import { SiAngular } from "react-icons/si";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const steps = [
  {
    title: "Install Angular CLI",
    command: "npm install -g @angular/cli",
    description: "Globally install the Angular CLI to start creating Angular applications.",
  },
  {
    title: "Create a New App",
    command: "ng new my-app",
    description: "Scaffold a new Angular project with routing, styling, and more.",
  },
  {
    title: "Run Development Server",
    command: "cd my-app && ng serve",
    description: "Start the local dev server and open the app in your browser.",
  },
];

const links = [
  {
    name: "Angular Official Docs",
    href: "https://angular.io/docs",
    description: "Comprehensive guide to Angular concepts, API, and tutorials.",
  },
  {
    name: "Angular CLI Documentation",
    href: "https://angular.io/cli",
    description: "Details on commands and configurations available via Angular CLI.",
  },
  {
    name: "Angular Material UI",
    href: "https://material.angular.io/",
    description: "Pre-built UI components following Google's Material Design system.",
  },
  {
    name: "Angular Icons (Material Icons)",
    href: "https://fonts.google.com/icons?icon.set=Material+Icons",
    description: "Official Material Icons to enhance Angular applications visually.",
  },
  {
    name: "Angular GitHub Repository",
    href: "https://github.com/angular/angular",
    description: "Source code and development history of the Angular framework.",
  },
];

export const AngularInstallation = () => {
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
    <div className="space-y-14 px-4 md:px-8 py-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-red-100 shadow-md">
            <SiAngular className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-[#319795] text-transparent bg-clip-text py-2">
            Getting Started with Angular
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          Here's how you can set up an Angular project in just a few minutes using the official CLI tool.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md backdrop-blur-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-red-600" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.command, idx)}
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
            <pre className="bg-muted/50 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </pre>
          </div>
        ))}
      </div>

      {/* Useful Links */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="text-xl font-semibold text-[#319795] flex items-center gap-2">
          🔗 Useful Angular Links
        </h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#319795] font-medium transition"
              >
                {link.name}
              </a>{" "}
              — <span className="text-muted-foreground">{link.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
