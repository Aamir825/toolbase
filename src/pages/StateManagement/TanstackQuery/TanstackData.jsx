import { Network, ShieldCheck, TimerReset } from "lucide-react";
import { SiBun, SiNpm, SiPnpm } from "react-icons/si";
import { TbBrandYarn } from "react-icons/tb";

export const features = [
    {
        title: "Powerful Caching",
        description: "Automatically caches and updates data efficiently, reducing redundant network requests.",
        icon: ShieldCheck,
    },
    {
        title: "Background Sync",
        description: "Keeps data fresh by refetching in the background when components remount or focus changes.",
        icon: TimerReset,
    },
    {
        title: "Declarative Fetching",
        description: "Manage server-state with hooks like `useQuery` and `useMutation`.",
        icon: Network,
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
        title: "Install TanStack Query",
        command: {
            npm: "npm install @tanstack/react-query",
            yarn: "yarn add @tanstack/react-query",
            pnpm: "pnpm add @tanstack/react-query",
            bun: "bun add @tanstack/react-query",
        },
        description: "Install the core library for data fetching and caching.",
    },
    {
        title: "Create a Query Client",
        command: {
            npm: `// queryClient.js
import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();`,
            yarn: `// queryClient.js
import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();`,
            pnpm: `// queryClient.js
import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();`,
            bun: `// queryClient.js
import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();`,
        },
        description: "Initialize a `QueryClient` instance.",
    },
    {
        title: "Wrap your app with Provider",
        command: {
            npm: `// main.jsx or index.js
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>`,
            yarn: `// main.jsx or index.js
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>`,
            pnpm: `// main.jsx or index.js
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>`,
            bun: `// main.jsx or index.js
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>`,
        },
        description: "Wrap your root component with `QueryClientProvider`.",
    },
];

export const resources = [
    {
        name: "TanStack Query Docs",
        link: "https://tanstack.com/query/latest",
        description: "Official documentation and API references.",
    },
    {
        name: "Query DevTools",
        link: "https://tanstack.com/query/latest/docs/devtools",
        description: "Debug your queries with powerful developer tools.",
    },
    {
        name: "TanStack GitHub",
        link: "https://github.com/TanStack/query",
        description: "Source code and community discussions.",
    },
];


export const examples = [
    {
        title: "Basic useQuery",
        description: "Fetch user data from API.",
        code: `import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data)
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    },
    {
        title: "Basic useMutation",
        description: "Add a user with `useMutation`.",
        code: `import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function AddUser() {
  const mutation = useMutation({
    mutationFn: (newUser) => axios.post('/api/users', newUser),
    onSuccess: () => {
      alert('User added!');
    },
  });

  return (
    <button onClick={() => mutation.mutate({ name: 'John' })}>
      Add User
    </button>
  );
}`,
    },
];