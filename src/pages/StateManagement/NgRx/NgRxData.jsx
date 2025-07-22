import { ClipboardList, ShieldCheck, Repeat } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const highlights = [
  {
    title: "Redux Inspired",
    description: "Built with NgRx Store, Effects & Entity following Redux principles in Angular.",
    icon: ClipboardList,
  },
  {
    title: "Side‑Effect Management",
    description: "Easily handle async tasks using `@ngrx/effects` for clean service-based logic.",
    icon: ShieldCheck,
  },
  {
    title: "Entity Cache",
    description: "Manage collections with built‑in CRUD helpers via `@ngrx/entity`.",
    icon: Repeat,
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
    title: "Install @ngrx packages",
    command: {
      npm: "npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools",
      yarn: "yarn add @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools",
      pnpm: "pnpm add @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools",
      bun: "bun add @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools",
    },
    description: "Core NgRx modules for store, side effects, entity, and developer tools.",
  },
  {
    title: "Register Store in AppModule",
    command: {
      npm: `// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(effects),
  ],
})`,
      yarn: `// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(effects),
  ],
})`,
      pnpm: `// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(effects),
  ],
})`,
      bun: `// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(effects),
  ],
})`,
    },
    description: "Initialize NgRx store and load root effects.",
  },
  {
    title: "Add Store DevTools",
    command: {
      npm: `// app.module.ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})`,
      yarn: `// app.module.ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})`,
      pnpm: `// app.module.ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})`,
      bun: `// app.module.ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})`,
    },
    description: "Enable time-travel debugging and state inspection.",
  },
];

export const resources = [
  { name: "NgRx Docs", link: "https://ngrx.io/guide/store", description: "Official guide and API reference." },
  { name: "NgRx GitHub", link: "https://github.com/ngrx/platform", description: "Source code and issues." },
  { name: "NgRx Demo App", link: "https://github.com/ngrx/platform/tree/master/projects/example-app", description: "Work through a full demo application." },
];

export const examples = [
  {
    title: "Define Counter Actions & Reducer",
    description: "Create actions and reducer using `createAction` & `createReducer`.",
    code: `import { createAction, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

const initial = 0;

export const counterReducer = createReducer(
  initial,
  on(increment, state => state + 1),
  on(decrement, state => state - 1)
);`,
  },
  {
    title: "Connect Store in Component",
    description: "Use `Store` to dispatch and select counter state in Angular.",
    code: `import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './counter.reducer';

@Component({
  selector: 'app-counter',
  template: \`
    <div>{{ count$ | async }}</div>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  \`
})
export class CounterComponent {
  count$ = this.store.select('counter');
  constructor(private store: Store<{ counter: number }>) {}

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
}`,
  },
];