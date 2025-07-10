import { Code2 } from "lucide-react";
import { SiAngular } from "react-icons/si";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

const examples = [
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

export const AngularExamples = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (text, idx) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(idx);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <div className="space-y-12 px-4 md:px-6 py-10">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-100 shadow-md">
                    <SiAngular className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-[#319795] text-transparent bg-clip-text py-2">
                    Angular Core Examples
                </h2>
            </div>

            <p className="text-base text-muted-foreground">
                Below are a few simple examples to help you get started with Angular components and routing.
            </p>

            {examples.map((ex, idx) => (
                <div key={idx} className="relative rounded-xl border border-[#319795] bg-white/80 dark:bg-black/30 p-6 shadow-md space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-red-600" />
                            {ex.title}
                        </h3>
                        <div className="relative">
                            <button
                                onClick={() => handleCopy(step.command, idx)}
                                className="text-muted-foreground hover:text-[#319795] transition"
                                title="Copy to clipboard"
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
                    <pre className="bg-muted/40 border border-[#cccccc] rounded-md p-3 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                        {ex.code}
                    </pre>
                </div>
            ))}
        </div>
    );
}
