"use client";

import { useEffect, useState } from "react";
import { getMyProfile } from "@/services/profileService";
import { updatePrivacy } from "@/services/settingsService";
import { toast } from "react-hot-toast";
import { ShieldCheck, Loader2 } from "lucide-react";

export default function PrivacyTab() {
    const [loading, setLoading] = useState(true);
    const [savingKey, setSavingKey] = useState(null);
    const [privacy, setPrivacy] = useState({
        publicProfile: true,
        publicProjects: true,
        publicTimeline: false,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getMyProfile();
                const user = data.user;
                setPrivacy({
                    publicProfile: user.publicProfile ?? true,
                    publicProjects: user.publicProjects ?? true,
                    publicTimeline: user.publicTimeline ?? false,
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
        setPrivacy((prev) => ({ ...prev, [key]: value }));
        try {
            await updatePrivacy({ [key]: value });
            toast.success("Privacy settings updated!");
        } catch (error) {
            console.log(error);
            setPrivacy((prev) => ({ ...prev, [key]: !value }));
            toast.error("Failed to update privacy settings");
        } finally {
            setSavingKey(null);
        }
    };

    const items = [
        {
            key: "publicProfile",
            title: "Public Profile",
            desc: "Allow anyone to view your profile.",
        },
        {
            key: "publicProjects",
            title: "Public Projects",
            desc: "Show your projects on your public profile.",
        },
        {
            key: "publicTimeline",
            title: "Public Timeline",
            desc: "Show your development activity timeline publicly.",
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
                <ShieldCheck size={22} className="text-blue-400" />
                Privacy
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
                                    handleToggle(
                                        item.key,
                                        !privacy[item.key]
                                    )
                                }
                                disabled={savingKey !== null}
                                className={`relative w-14 h-8 rounded-full transition ${
                                    privacy[item.key]
                                        ? "bg-blue-600"
                                        : "bg-gray-700"
                                }`}
                            >
                                <span
                                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                                        privacy[item.key]
                                            ? "left-7"
                                            : "left-1"
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
