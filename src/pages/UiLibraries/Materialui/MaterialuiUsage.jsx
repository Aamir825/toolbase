import { Code } from "lucide-react";
import { SiMui } from "react-icons/si";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const usageSteps = [
  {
    title: "Use MUI Button component",
    description: "Material UI provides pre-built, accessible button components with consistent styling.",
    example: `<Button variant="contained" color="primary">
  Click Me
</Button>`,
  },
  {
    title: "Customize theme colors",
    description: "Use `createTheme` to define your own palette, typography, and more.",
    example: `import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});`,
  },
  {
    title: "Responsive Grid layout",
    description: "Use the `Grid` component to create responsive layouts easily.",
    example: `<Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <Paper>Left</Paper>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Paper>Right</Paper>
  </Grid>
</Grid>`,
  },
];

export const MaterialuiUsage = () => {
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
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#007FFF] to-[#0059B2] shadow-md">
            <SiMui className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#0f766e] bg-clip-text text-transparent">
            MUI Usage Examples
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
          Explore common examples of how to use Material UI components and customization options in your React projects.
        </p>
      </div>

      {/* Usage steps */}
      <div className="space-y-6">
        {usageSteps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-background p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleCopy(step.example, idx)}
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label={`Copy example for ${step.title}`}
                  title={`Copy example for ${step.title}`}
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
              {step.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
