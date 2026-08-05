"use client";

import { useState } from "react";
import api from "@/services/api";
import { toast } from "react-hot-toast";
import { KeyRound, Loader2 } from "lucide-react";

export default function SecurityTab() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.newPassword !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (form.newPassword.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        try {
            await api.put("/auth/password", {
                currentPassword: form.currentPassword,
                newPassword: form.newPassword,
            });

            toast.success("Password changed successfully!");
            setForm({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                    "Failed to change password"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#111827] rounded-2xl border border-white/10 p-6"
        >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <KeyRound size={22} className="text-blue-400" />
                Change Password
            </h2>

            <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="auth-input mb-4"
                required
            />

            <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="auth-input mb-4"
                required
            />

            <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="auth-input"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl mt-6 inline-flex items-center gap-2 transition disabled:opacity-50"
            >
                {loading ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Updating...
                    </>
                ) : (
                    "Update Password"
                )}
            </button>
        </form>
    );
}
