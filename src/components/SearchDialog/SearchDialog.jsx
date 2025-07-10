import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';
import { FaRegCircle } from 'react-icons/fa';

const docLinks = {
    frontend: [
        { title: "React JS", path: "/reactoverview" },
        { title: "Angular", path: "/angularoverview" },
        { title: "Vue", path: "/vueoverview" },
        { title: "Next", path: "/nextoverview" },
    ],
    ui: [
        { title: "Tailwind CSS", path: "/tailwindoverview" },
        { title: "ShadCN", path: "/shadcnoverview" },
        { title: "Material UI", path: "/muioverview" },
        { title: "Prime React", path: "/primereactoverview" },
        { title: "Chakra UI", path: "/chakrauioverview" },
        { title: "Ant Design", path: "/antdesignoverview" },
    ],
    state: [
        { title: "Redux Toolkit", path: "/reduxoverview" },
        { title: "Zustand", path: "/zustandoverview" },
        { title: "Tanstack Query", path: "/tanstackoverview" },
        { title: "NgRx", path: "/ngrxoverview" },
        { title: "Pinia", path: "/piniaoverview" },
    ],
};

export const SearchDialog = ({ model, setModel }) => {
    const [search, setSearch] = useState("");

    // Filter links by search query
    const filteredLinks = Object.entries(docLinks).reduce((acc, [category, links]) => {
        const matched = links.filter(link =>
            link.title.toLowerCase().includes(search.toLowerCase())
        );
        if (matched.length > 0) {
            acc[category] = matched;
        }
        return acc;
    }, {});

    const categoryTitles = {
        frontend: "Frontend Frameworks",
        ui: "UI Libraries",
        state: "State Management",
    };
    return (
        <Dialog open={model} onOpenChange={setModel} className="">
            <DialogContent className="sm:max-w-lg p-4 shadow-md border-0 bg-gradient-to-r from-[#f4fbf8] to-[#e1f3ea]">
                <DialogHeader>
                    <DialogTitle className="text-base text-muted-foreground font-medium">
                        Quick Search
                    </DialogTitle>
                </DialogHeader>

                {/* Search Input */}
                <div className="mb-3">
                    <Input
                        placeholder="Search documentation..."
                        className="w-full rounded-md border border-[#319795] outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Render Filtered Categories */}
                <div className="space-y-4 max-h-60 overflow-y-auto">
                    {Object.entries(filteredLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-semibold text-[#aab4b4] uppercase px-3 mb-1 tracking-wide">
                                {categoryTitles[category]}
                            </h4>
                            {links.map((link, idx) => (
                                <Link
                                    key={idx}
                                    to={link.path}
                                    onClick={() => { setModel(false), setSearch("") }}
                                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#e4f7f3] text-sm text-[#076161] transition"
                                >
                                    <FaRegCircle className="text-xs" /> {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Optional: No Results Found */}
                    {Object.keys(filteredLinks).length === 0 && (
                        <p className="text-sm px-3 text-[#319795]">No results found.</p>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
