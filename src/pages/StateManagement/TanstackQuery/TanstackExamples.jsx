import { Code } from "lucide-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { SiReactquery } from "react-icons/si";

const examples = [
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

export const TanstackExample = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (code, idx) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-[#f0fff7] shadow-md">
                        <SiReactquery className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-green-400 text-transparent bg-clip-text py-2">
                        TanStack Query Examples
                    </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Get started with these common TanStack Query patterns in real-world apps.
                </p>
            </div>

            {examples.map((item, idx) => (
                <div
                    key={idx}
                    className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition"
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
                            <Code className="w-4 h-4 text-yellow-500" />
                            {item.title}
                        </h3>
                        <div className="relative">
                            <button
                                onClick={() => handleCopy(item.code, idx)}
                                className="text-muted-foreground hover:text-green-600"
                            >
                                {copied === idx ? <HiCheckCircle className="w-6 h-6 text-green-600" /> : <IoCopyOutline className="w-6 h-6" />}
                            </button>
                            {copied === idx && (
                                <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded shadow-sm animate-fade-in">
                                    Copied!
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <pre className="bg-muted/40 border border-[#ccc] rounded-md p-3 mt-2 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                        {item.code}
                    </pre>
                </div>
            ))}
        </div>
    );
};
