import { TerminalSquare } from "lucide-react";
import { SiMui } from "react-icons/si";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const muiSteps = [
  {
    title: "1. Install MUI Core",
    command: "npm install @mui/material @emotion/react @emotion/styled",
    description:
      "Install the core Material UI library along with Emotion (CSS-in-JS) dependencies.",
  },
  {
    title: "2. Add MUI Icons (Optional)",
    command: "npm install @mui/icons-material",
    description: "Install Material Icons if you want to use the icon components.",
  },
  {
    title: "3. Wrap App in ThemeProvider",
    command: `import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>;`,
    description:
      "Set up a basic MUI theme and wrap your app using `ThemeProvider` for global theming support.",
    isCodeBlock: true,
  },
];

export const MaterialuiInstallation = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Heading */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#007FFF] to-[#0059B2] shadow-md">
            <SiMui className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#0f766e] bg-clip-text text-transparent">
            MUI Installation Guide
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
          Follow these steps to set up Material UI in your React project using npm or yarn.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {muiSteps.map((step, idx) => (
          <div key={idx} className="rounded-xl border bg-background p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <TerminalSquare className="w-5 h-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.command, idx)}
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label="Copy code"
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

            <pre className="bg-muted/40 border rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.command}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
