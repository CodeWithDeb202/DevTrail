"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";

import {
    getMyProfile,
    updateProfile
} from "@/services/profileService";

export default function EditProfilePage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [preview, setPreview] = useState("/default-avatar.png");

    const [profileImage, setProfileImage] = useState(null);

    const [form, setForm] = useState({
        name: "",
        bio: "",
        skills: "",
        github: "",
        linkedin: "",
        instagram: "",
        website: "",
        publicProfile: true
    });

    useEffect(() => {

        fetchProfile();

    }, []);

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

                publicProfile: user.publicProfile

            });

            setPreview(
                user.profileImage || "/default-avatar.png"
            );

        }

        catch (error) {

            console.log(error);

            toast.error("Failed to load profile");

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value

        });

    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setProfileImage(file);

        setPreview(URL.createObjectURL(file));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const data = new FormData();

            Object.keys(form).forEach((key) => {

                data.append(key, form[key]);

            });

            if (profileImage) {

                data.append("profileImage", profileImage);

            }

            await updateProfile(data);

            toast.success("Profile updated successfully!");

            setTimeout(() => {

                router.push("/profile");

            }, 1200);

        }
        catch (err) {

            console.log(err);

            toast.error("Failed to update profile");

        }
        finally {

            setLoading(false);

        }

    };

    return (

        <main className="min-h-screen bg-[#030712] text-white flex justify-center py-10">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-[#111827] rounded-2xl p-8 space-y-5"
            >
                <Link
                    href="/profile"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >

                    <ArrowLeft size={20} />

                    Back to Profile

                </Link>

                <h1 className="text-3xl font-bold">

                    Edit Profile

                </h1>

                <div className="flex justify-center">

                    <img
                        src={preview}
                        alt=""
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                    />

                </div>

                <input
                    type="file"
                    onChange={handleImage}
                    className="w-full"
                />

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-gray-800 rounded-lg p-3"
                    required
                />

                <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Bio"
                    className="w-full bg-gray-800 rounded-lg p-3"
                    rows={4}
                />

                <input
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    placeholder="React, Node, MongoDB"
                    className="w-full bg-gray-800 rounded-lg p-3"
                />

                <input
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="Github Link"
                    className="w-full bg-gray-800 rounded-lg p-3"
                />

                <input
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn Link"
                    className="w-full bg-gray-800 rounded-lg p-3"
                />

                <input
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    placeholder="Instagram Link"
                    className="w-full bg-gray-800 rounded-lg p-3"
                />

                <input
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="Website"
                    className="w-full bg-gray-800 rounded-lg p-3"
                />

                <label className="flex gap-3 items-center">

                    <input
                        type="checkbox"
                        name="publicProfile"
                        checked={form.publicProfile}
                        onChange={handleChange}
                    />

                    Public Profile

                </label>

                <button
                    disabled={loading}
                    className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-500"
                >

                    {
                        loading
                            ? "Saving..."
                            : (
                                form.bio ||
                                form.skills ||
                                form.github ||
                                form.linkedin ||
                                form.instagram ||
                                form.website
                            )
                                ? "Update Profile"
                                : "Save Profile"
                    }

                </button>

            </form>

        </main>

    );

}