import { BadgeCheck, PlugZap, Wrench, LayoutGrid } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
  {
    title: "80+ Rich Components",
    description: "Includes data tables, charts, calendars, dropdowns, dialogs, and more out of the box.",
    icon: LayoutGrid,
  },
  {
    title: "Built-in Theming",
    description: "Customize your UI with built-in light/dark themes and style configuration.",
    icon: Wrench,
  },
  {
    title: "Accessibility & RTL",
    description: "Follows WCAG guidelines and supports right-to-left layouts for multilingual apps.",
    icon: BadgeCheck,
  },
  {
    title: "Enterprise Ready",
    description: "Used in enterprise apps worldwide with commercial support and premium templates.",
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
    title: "Install PrimeReact and PrimeIcons",
    command: {
      npm: "npm install primereact primeicons",
      yarn: "yarn add primereact primeicons",
      pnpm: "pnpm add primereact primeicons",
      bun: "bun add primereact primeicons",
    },
    description: "Installs the core PrimeReact UI library and the PrimeIcons icon set.",
  },
  {
    title: "Install Peer Dependencies",
    command: {
      npm: "npm install react-transition-group classnames",
      yarn: "yarn add react-transition-group classnames",
      pnpm: "pnpm add react-transition-group classnames",
      bun: "bun add react-transition-group classnames",
    },
    description: "PrimeReact requires these packages for transitions and utility support.",
  },
  {
    title: "Import PrimeReact CSS",
    command: {
        npm: `// In main.jsx or index.js
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';`,
        yarn: `// In main.jsx or index.js
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';`,
        pnpm: `// In main.jsx or index.js
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';`,
        bun: `// In main.jsx or index.js
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';`,
},
    description: "Import the necessary theme, core styles, and icons.",
  },
];


export const usageExamples = [
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
