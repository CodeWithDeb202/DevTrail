"use client";

import { useEffect, useState } from "react";
import { getMyProfile } from "@/services/profileService";
import { updateNotifications } from "@/services/settingsService";
import { toast } from "react-hot-toast";
import { Bell, Loader2 } from "lucide-react";

export default function NotificationTab() {
    const [loading, setLoading] = useState(true);
    const [savingKey, setSavingKey] = useState(null);
    const [prefs, setPrefs] = useState({
        emailNotifications: true,
        weeklyReport: true,
        buildReminder: true,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getMyProfile();
                const user = data.user;
                setPrefs({
                    emailNotifications: user.emailNotifications ?? true,
                    weeklyReport: user.weeklyReport ?? true,
                    buildReminder: user.buildReminder ?? true,
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleToggle = async (key, value) => {
        setSavingKey(key);
        setPrefs((prev) => ({ ...prev, [key]: value }));
        try {
            await updateNotifications({ [key]: value });
            toast.success("Notification preferences updated!");
        } catch (error) {
            console.log(error);
            setPrefs((prev) => ({ ...prev, [key]: !value }));
            toast.error("Failed to update preferences");
        } finally {
            setSavingKey(null);
        }
    };

    const items = [
        {
            key: "emailNotifications",
            title: "Email Notifications",
            desc: "Receive important updates via email.",
        },
        {
            key: "weeklyReport",
            title: "Weekly Report",
            desc: "Get a summary of your development activity every week.",
        },
        {
            key: "buildReminder",
            title: "Build Reminder",
            desc: "Remind me to log my daily builds.",
        },
    ];

    if (loading) {
        return (
            <div className="bg-[#111827] rounded-2xl border border-white/10 p-6 text-gray-400">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Bell size={22} className="text-blue-400" />
                Notifications
            </h2>

            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.key}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                    >
                        <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">
                                {item.desc}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            {savingKey === item.key && (
                                <Loader2
                                    size={18}
                                    className="animate-spin text-gray-400"
                                />
                            )}
                            <button
                                onClick={() =>
                                    handleToggle(item.key, !prefs[item.key])
                                }
                                disabled={savingKey !== null}
                                className={`relative w-14 h-8 rounded-full transition ${
                                    prefs[item.key]
                                        ? "bg-blue-600"
                                        : "bg-gray-700"
                                }`}
                            >
                                <span
                                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                                        prefs[item.key] ? "left-7" : "left-1"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
