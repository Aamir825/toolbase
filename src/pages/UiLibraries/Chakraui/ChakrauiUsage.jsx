import { Code } from "lucide-react";
import { useState } from "react";
import { SiChakraui } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const usageExamples = [
  {
    title: "Basic Button",
    description: "Use Chakra's Button component with built-in styles and props.",
    example: `import { Button } from "@chakra-ui/react";

<Button colorScheme="teal" size="md">
  Click Me
</Button>`,
  },
  {
    title: "Stack Layout",
    description: "Use Stack to manage spacing between elements.",
    example: `import { Stack, Button } from "@chakra-ui/react";

<Stack direction="row" spacing={4}>
  <Button colorScheme="blue">Save</Button>
  <Button colorScheme="red">Cancel</Button>
</Stack>`,
  },
  {
    title: "Responsive Box",
    description: "Apply responsive props easily using Chakra's array/object syntax.",
    example: `import { Box } from "@chakra-ui/react";

<Box w={["100%", "50%"]} p={4} bg="gray.100">
  Responsive Box
</Box>`,
  },
];

export const ChakrauiUsage = () => {
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
          <div className="p-2 rounded-full bg-[#ecfffc] shadow-md">
            <SiChakraui className="w-8 h-8 text-[#3ecfcd]" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient bg-gradient-to-b from-[#3ecfcd] to-primary bg-clip-text text-transparent py-2">
            Chakra UI Usage Examples
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          These examples demonstrate how to use Chakra’s utility props and components for layout, styling, and interaction.
        </p>
      </div>

      <div className="space-y-6">
        {usageExamples.map((step, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-[#3ecfcd]" />
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
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
            <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
              {step.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
