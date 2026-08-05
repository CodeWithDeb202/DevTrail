"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { updateTheme } from "@/services/settingsService";
import { toast } from "react-hot-toast";
import { Moon, Sun, Monitor, Loader2, Palette } from "lucide-react";

const themes = [
    { key: "dark", label: "Dark", icon: Moon },
    { key: "light", label: "Light", icon: Sun },
    { key: "system", label: "System", icon: Monitor },
];

export default function AppearanceTab() {
    const { theme, changeTheme } = useTheme();
    const [saving, setSaving] = useState(false);

    const handleSelect = async (value) => {
        setSaving(true);
        // Apply instantly via context
        changeTheme(value);
        try {
            // Persist to backend as well
            await updateTheme(value);
            toast.success("Theme updated!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to save theme");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Palette size={22} className="text-blue-400" />
                Appearance
            </h2>
            <p className="text-gray-400 mb-6">
                Choose how DevTrail looks to you.
            </p>

            <div className="grid grid-cols-3 gap-4">
                {themes.map(({ key, label, icon: Icon }) => (
                    <button
                        key={key}
                        onClick={() => handleSelect(key)}
                        disabled={saving}
                        className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition ${
                            theme === key
                                ? "bg-blue-600 border-blue-500 text-white"
                                : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                    >
                        <Icon size={28} />
                        <span className="font-medium">{label}</span>
                    </button>
                ))}
            </div>

            {saving && (
                <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
                    <Loader2 size={16} className="animate-spin" />
                    Saving...
                </div>
            )}
        </div>
    );
}
