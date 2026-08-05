"use client";

import { useEffect, useState } from "react";
import { getMyProfile, updateProfile } from "@/services/profileService";
import { toast } from "react-hot-toast";
import { Save, Loader2 } from "lucide-react";

export default function AccountTab() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState({
        name: "",
        bio: "",
        skills: "",
        github: "",
        linkedin: "",
        instagram: "",
        website: "",
        publicProfile: true,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getMyProfile();
                const user = data.user;
                setForm({
                    name: user.name || "",
                    bio: user.bio || "",
                    skills: user.skills?.join(", ") || "",
                    github: user.github || "",
                    linkedin: user.linkedin || "",
                    instagram: user.instagram || "",
                    website: user.website || "",
                    publicProfile: user.publicProfile,
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            await updateProfile(form);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to update profile");
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
        <form
            onSubmit={handleSubmit}
            className="bg-[#111827] rounded-2xl border border-white/10 p-6"
        >
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

            <div className="grid md:grid-cols-2 gap-5">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="auth-input"
                    required
                />
                <input
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    placeholder="Skills (comma separated)"
                    className="auth-input"
                />
                <input
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="GitHub URL"
                    className="auth-input"
                />
                <input
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className="auth-input"
                />
                <input
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    placeholder="Instagram URL"
                    className="auth-input"
                />
                <input
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="Website"
                    className="auth-input"
                />
            </div>

            <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="auth-input mt-5 min-h-32"
            />

            <button
                type="submit"
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl mt-6 inline-flex items-center gap-2 transition disabled:opacity-50"
            >
                {saving ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Saving...
                    </>
                ) : (
                    <>
                        <Save size={18} />
                        Save Changes
                    </>
                )}
            </button>
        </form>
    );
}
