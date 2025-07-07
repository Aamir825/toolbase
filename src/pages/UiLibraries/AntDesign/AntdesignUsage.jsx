import { Code } from "lucide-react";
import { useState } from "react";
import { SiAntdesign } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const usageExamples = [
  {
    title: "Primary Button",
    description: "Use the `type` prop to customize button styles.",
    example: `<Button type="primary">Submit</Button>`,
  },
  {
    title: "Form with Validation",
    description: "Build forms using Form, Input, and validation rules.",
    example: `<Form layout="vertical">
  <Form.Item label="Email" name="email" rules={[{ required: true }]}>
    <Input />
  </Form.Item>
</Form>`,
  },
  {
    title: "Modal Component",
    description: "Trigger modals with controlled state.",
    example: `const [isModalOpen, setIsModalOpen] = useState(false);

<Modal
  title="Example Modal"
  open={isModalOpen}
  onOk={() => setIsModalOpen(false)}
  onCancel={() => setIsModalOpen(false)}
>
  <p>Modal content goes here</p>
</Modal>`,
  },
];

export const AntdesignUsage = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, idx) => {
    await navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#0074e0] to-[#f72b10] shadow-md">
            <SiAntdesign className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-[#319795] bg-clip-text text-transparent">
            Ant Design Usage Examples
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
          Quick examples to help you implement common Ant Design components and patterns.
        </p>
      </div>

      <div className="space-y-6">
        {usageExamples.map((step, idx) => (
          <div key={idx} className="rounded-xl border bg-background p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
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
