import { Code } from "lucide-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { SiNgrx } from "react-icons/si";

const examples = [
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

export const NgrxExample = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (code, idx) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    } catch { }
  };

  return (
    <div className="space-y-12 px-4 md:px-6 py-10">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-red-50 shadow-md">
            <SiNgrx className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-[#319795] text-transparent bg-clip-text py-2">
            NgRx Examples
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Try these code snippets for a simple counter using NgRx’s actions, reducer, and store integration.
        </p>
      </div>

      {examples.map((item, idx) => (
        <div key={idx} className="rounded-xl border border-[#319795] bg-background p-5 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium flex items-center gap-2 text-foreground">
              <Code className="w-4 h-4 text-red-600" />
              {item.title}
            </h3>
            <div className="relative">
              <button
                onClick={() => handleCopy(item.code, idx)}
                className="text-muted-foreground hover:text-primary transition"
              >
                {copied === idx ? (
                  <HiCheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <IoCopyOutline className="w-6 h-6" />
                )}
              </button>
              {copied === idx && (
                <div className="absolute -top-6 right-0 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded shadow-sm animate-fade-in">
                  Copied!
                </div>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
            {item.code}
          </pre>
        </div>
      ))}
    </div>
  );
};
