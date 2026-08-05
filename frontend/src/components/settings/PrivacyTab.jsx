"use client";

import { useEffect, useState } from "react";
import { getMyProfile, updateProfile } from "@/services/profileService";
import { toast } from "react-hot-toast";
import { ShieldCheck, Loader2 } from "lucide-react";

export default function PrivacyTab() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [publicProfile, setPublicProfile] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getMyProfile();
                setPublicProfile(data.user.publicProfile);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const togglePublicProfile = async () => {
        setSaving(true);
        const newValue = !publicProfile;

        try {
            await updateProfile({ publicProfile: newValue });
            setPublicProfile(newValue);
            toast.success(
                newValue
                    ? "Profile is now public"
                    : "Profile is now private"
            );
        } catch (error) {
            console.log(error);
            toast.error("Failed to update privacy settings");
        } finally {
            setSaving(false);
        }
    };

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

            <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                    <div>
                        <h3 className="font-semibold">Public Profile</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Allow anyone to view your profile and projects.
                        </p>
                    </div>
                    <button
                        onClick={togglePublicProfile}
                        disabled={saving}
                        className={`relative w-14 h-8 rounded-full transition ${
                            publicProfile ? "bg-blue-600" : "bg-gray-700"
                        }`}
                    >
                        <span
                            className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                                publicProfile ? "left-7" : "left-1"
                            }`}
                        />
                    </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 opacity-50">
                    <div>
                        <h3 className="font-semibold">Public Projects</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Show your projects on your public profile.
                        </p>
                    </div>
                    <div className="w-14 h-8 rounded-full bg-blue-600 relative">
                        <span className="absolute top-1 left-7 w-6 h-6 rounded-full bg-white" />
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 opacity-50">
                    <div>
                        <h3 className="font-semibold">Public Timeline</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Show your activity timeline publicly.
                        </p>
                    </div>
                    <div className="w-14 h-8 rounded-full bg-gray-700 relative">
                        <span className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}
