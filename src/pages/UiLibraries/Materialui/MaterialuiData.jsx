import { BadgeCheck, Info, Sparkles } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";


export const highlights = [
    {
        title: "Material Design System",
        description: "Components built on Google’s Material Design system with modern styling.",
        icon: Sparkles,
    },
    {
        title: "Theme Customization",
        description: "Supports light/dark mode, custom colors, fonts, and breakpoints.",
        icon: Info,
    },
    {
        title: "Rich Component Set",
        description: "Offers inputs, dialogs, data grids, navigation, charts, and more.",
        icon: BadgeCheck,
    },
    {
        title: "Accessibility First",
        description: "Every component follows WAI-ARIA and accessibility standards.",
        icon: BadgeCheck,
    },
];


export const packageManagers = [
    { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
    { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
    { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
    { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]


export const muiSteps = [
    {
        title: "Install MUI Core",
        command: {
            npm: "npm install @mui/material @emotion/react @emotion/styled",
            yarn: "yarn add @mui/material @emotion/react @emotion/styled",
            pnpm: "pnpm add @mui/material @emotion/react @emotion/styled",
            bun: "bun add @mui/material @emotion/react @emotion/styled",
        },
        description: "Install the core Material UI library along with Emotion (CSS-in-JS) dependencies.",
    },
    {
        title: "Add MUI Icons (Optional)",
        command: {
            npm: "npm install @mui/icons-material",
            yarn: "yarn add @mui/icons-material",
            pnpm: "pnpm add @mui/icons-material",
            bun: "bun add @mui/icons-material",
        },
        description: "Install Material Icons if you want to use the icon components.",
    },
    {
        title: "Wrap App in ThemeProvider",
        command: {
            npm: `import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>;`,
            yarn: `import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>;`,
            pnpm: `import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>;`,
            bun: `import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>;`,
        },
        description:
            "Set up a basic MUI theme and wrap your app using \`ThemeProvider\` for global theming support.",
    },
];


export const usageSteps = [
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

