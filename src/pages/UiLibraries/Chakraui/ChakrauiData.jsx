import { BadgeCheck, LayoutGrid, Moon, PlugZap } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
    {
        title: "Accessible Components",
        description: "All components follow WAI-ARIA guidelines and support keyboard navigation.",
        icon: BadgeCheck,
    },
    {
        title: "Responsive Design",
        description: "Easily build responsive layouts using Chakra’s responsive prop syntax.",
        icon: LayoutGrid,
    },
    {
        title: "Dark Mode Support",
        description: "Chakra comes with built-in dark mode support and theme toggling.",
        icon: Moon,
    },
    {
        title: "Theming System",
        description: "Customize themes and tokens using Chakra's powerful theming features.",
        icon: PlugZap,
    },
];


export const packageManagers = [
    { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
    { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
    { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
    { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]


export const installSteps = [
    {
        title: "1. Install Chakra UI",
        command: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
        description: "Install Chakra UI along with Emotion and Framer Motion (required peer dependencies).",
    },
    {
        title: "2. Set up ChakraProvider",
        command: `// main.jsx or index.js
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);`,
        description: "Wrap your app with ChakraProvider to enable theming and styles.",
        isCodeBlock: true,
    },
];


export const usageExamples = [
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