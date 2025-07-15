import { Code2, Layers, Zap } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
    {
        title: "Component Architecture",
        description: "Break your application into cohesive components, each with its own logic and template.",
        icon: Layers,
    },
    {
        title: "Powerful CLI",
        description: "Angular CLI provides commands to scaffold components, services, routes, and more.",
        icon: Zap,
    },
    {
        title: "Two-Way Binding",
        description: "Sync UI with model effortlessly using Angular’s built-in binding syntax.",
        icon: Code2,
    },
];

export function InfoBox({ icon: Icon, title, description }) {
    return (
        <div className="bg-white/80 dark:bg-black/30 border border-[#319795] rounded-2xl shadow-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-md text-red-900 dark:text-red-300">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

export const packageManagers = [
  { key: "npm", label: "npm", icon: <SiNpm className=" text-red-600" /> },
  { key: "yarn", label: "Yarn", icon: <TbBrandYarn className=" text-blue-500" /> },
  { key: "pnpm", label: "pnpm", icon: <SiPnpm className=" text-amber-500" /> },
  { key: "bun", label: "Bun", icon: <SiBun className=" text-gray-400" /> }
]

export const steps = [
  {
    title: "Install Angular CLI",
    description: "Globally install the Angular CLI to start creating Angular applications.",
    command: {
      npm: "npm install -g @angular/cli",
      yarn: "yarn global add @angular/cli",
      pnpm: "pnpm add -g @angular/cli",
      bun: "bun add -g @angular/cli", // Bun does not fully support global CLI tools, but included for completeness
    },
  },
  {
    title: "Create a New App",
    description: "Scaffold a new Angular project with routing, styling, and more.",
    command: {
      npm: "ng new my-app",
      yarn: "ng new my-app",
      pnpm: "ng new my-app",
      bun: "ng new my-app",
    },
  },
  {
    title: "Run Development Server",
    description: "Start the local dev server and open the app in your browser.",
    command: {
      npm: "cd my-app && ng serve",
      yarn: "cd my-app && ng serve",
      pnpm: "cd my-app && ng serve",
      bun: "cd my-app && ng serve",
    },
  },
];

export const links = [
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

export const examples = [
    {
        title: "Basic Component",
        code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <h1>{{ title }}</h1>
    <button (click)="increment()">Increment</button>
    <p>Count: {{ count }}</p>
  \`,
})
export class AppComponent {
  title = 'Angular Counter';
  count = 0;

  increment() {
    this.count++;
  }
}`,
    },
    {
        title: "Routing Example",
        code: `// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}`,
    },
];