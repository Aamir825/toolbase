import { FaTools } from "react-icons/fa";
import { Repeat, Zap } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const features = [
  {
    title: "Modern Redux",
    description: "RTK simplifies store setup, reduces boilerplate, and enforces best practices.",
    icon: FaTools,
  },
  {
    title: "Built-in Async Support",
    description: "Handle async operations using `createAsyncThunk` and extraReducers.",
    icon: Zap,
  },
  {
    title: "Code Splitting Friendly",
    description: "Slices make it easier to organize logic by domain for large-scale apps.",
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
    title: "Install Redux Toolkit and React-Redux",
    command: {
      npm: "npm install @reduxjs/toolkit react-redux",
      yarn: "yarn add @reduxjs/toolkit react-redux",
      pnpm: "pnpm add @reduxjs/toolkit react-redux",
      bun: "bun add @reduxjs/toolkit react-redux",
    },
    description: "Core dependencies for store configuration and React bindings.",
  },
  {
    title: "Create the Store",
    command: {
      npm: `// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
      yarn: `// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
      pnpm: `// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
      bun: `// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
    },
    description: "Use `configureStore` to bootstrap your Redux store with slices.",
  },
  {
    title: "Wrap the App with Provider",
    command: {
      npm: `// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,
      yarn: `// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,
      pnpm: `// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,
      bun: `// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,
    },
    description: "Integrate Redux with React using the `Provider` component.",
  },
];


export const resources = [
    {
        name: "Redux Toolkit Docs",
        link: "https://redux-toolkit.js.org",
        description: "The official Redux Toolkit documentation, including tutorials and API reference.",
    },
    {
        name: "Redux Toolkit GitHub",
        link: "https://github.com/reduxjs/redux-toolkit",
        description: "GitHub repository for RTK—open issues, source code, discussions.",
    },
    {
        name: "Redux Essentials Tutorial",
        link: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts",
        description: "Step-by-step tutorial using Redux Toolkit in real-world apps.",
    },
    {
        name: "RTK Query Docs",
        link: "https://redux-toolkit.js.org/rtk-query/overview",
        description: "Built-in solution for data fetching and caching in Redux Toolkit.",
    },
];


export const examples = [
    {
        title: "Create a Slice",
        description: "Using `createSlice` to define actions and reducers in one place.",
        code: `import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 },
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;`,
    },
    {
        title: "Configure Store",
        description: "Setting up the store using `configureStore`.",
        code: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
    },
    {
        title: "Access & Dispatch in Component",
        description: "Using `useSelector` and `useDispatch` in a functional component.",
        code: `import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}`,
    },
];