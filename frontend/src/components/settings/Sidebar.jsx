"use client";

import {
    User,
    KeyRound,
    Palette,
    Bell,
    ShieldCheck,
    Trash2,
} from "lucide-react";

const menus = [
    ["account", "Account", User],
    ["security", "Security", KeyRound],
    ["appearance", "Appearance", Palette],
    ["notification", "Notifications", Bell],
    ["privacy", "Privacy", ShieldCheck],
    ["delete", "Delete Account", Trash2],
];

export default function Sidebar({ tab, setTab }) {
    return (
        <div className="bg-[#111827] rounded-2xl border border-white/10 p-4">
            {menus.map(([key, label, Icon]) => (
                <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl mb-2 transition ${
                        tab === key
                            ? "bg-blue-600"
                            : "hover:bg-white/5"
                    }`}
                >
                    <Icon size={18} />
                    {label}
                </button>
            ))}
        </div>
    );
}
