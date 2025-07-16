import { BadgeCheck, Palette, LayoutGrid, PlugZap } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
  {
    title: "Rich Component Library",
    description: "AntD provides 60+ carefully crafted components optimized for enterprise apps.",
    icon: LayoutGrid,
  },
  {
    title: "Consistent Design System",
    description: "Built around the Ant Design specification for consistent user interfaces.",
    icon: Palette,
  },
  {
    title: "Internationalization (i18n)",
    description: "Supports multiple languages with built-in i18n utilities.",
    icon: BadgeCheck,
  },
  {
    title: "Theme Customization",
    description: "Easily override styles using Less variables or CSS-in-JS solutions.",
    icon: PlugZap,
  },
];

export const packageManagers = [
    { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
    { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
    { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
    { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const steps = [
  {
    title: "1. Install Ant Design",
    command: "npm install antd",
    description: "Install the core Ant Design package into your project.",
  },
  {
    title: "2. Import Styles",
    command: `// main.jsx or App.jsx
import 'antd/dist/reset.css';`,
    description: "Import the default CSS to apply Ant Design styles.",
  },
  {
    title: "3. Start using components",
    command: `import { Button } from 'antd';

<Button type="primary">AntD Button</Button>`,
    description: "Import and use components as needed from the library.",
    isCodeBlock: true,
  },
];


export const usageExamples = [
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