import { Code } from "lucide-react";
import { useState } from "react";
import { SiPrimereact } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const usageExamples = [
  {
    title: "Use Button Component",
    description: "Import and use a styled PrimeReact button.",
    example: `import { Button } from 'primereact/button';

<Button label="Click Me" icon="pi pi-check" className="p-button-success" />`,
  },
  {
    title: "Use InputText Component",
    description: "PrimeReact provides fully styled input components out of the box.",
    example: `import { InputText } from 'primereact/inputtext';

<InputText placeholder="Enter text" className="w-full" />`,
  },
  {
    title: "Use DataTable Component",
    description: "Create rich, paginated tables with sorting and filtering.",
    example: `import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

<DataTable value={products}>
  <Column field="name" header="Name" />
  <Column field="price" header="Price" />
</DataTable>`,
  },
];

export const PrimereactUsage = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    await navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#227093] shadow-md">
            <SiPrimereact className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#227093] bg-clip-text text-transparent">
            PrimeReact Usage Examples
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
          Explore how to use PrimeReact components to rapidly build user interfaces with a clean design and powerful features.
        </p>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        {usageExamples.map((step, idx) => (
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
