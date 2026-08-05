"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteAccount } from "@/services/settingsService";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-hot-toast";
import { Trash2, Loader2, AlertTriangle } from "lucide-react";

export default function DeleteAccountTab() {
    const router = useRouter();
    const { logout } = useAuth();
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirming, setConfirming] = useState(false);

    const handleDelete = async () => {
        if (!password) {
            toast.error("Please enter your password");
            return;
        }
        setLoading(true);
        try {
            await deleteAccount(password);
            toast.success("Account deleted successfully");
            logout();
            router.push("/");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to delete account"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#111827] rounded-2xl border border-red-500/30 p-6">
            <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2">
                <Trash2 size={22} />
                Delete Account
            </h2>

            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="flex items-start gap-3">
                    <AlertTriangle
                        size={20}
                        className="text-red-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                        <h3 className="font-semibold text-red-400">
                            Warning: This action cannot be undone
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Deleting your account will permanently remove all
                            of your projects, daily logs, and profile data.
                        </p>
                    </div>
                </div>
            </div>

            {!confirming ? (
                <button
                    onClick={() => setConfirming(true)}
                    className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl mt-6 transition"
                >
                    Delete My Account
                </button>
            ) : (
                <div className="mt-6">
                    <p className="text-gray-400 mb-4">
                        Enter your password to confirm deletion:
                    </p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="auth-input"
                    />
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={handleDelete}
                            disabled={loading}
                            className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl inline-flex items-center gap-2 transition disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Deleting...
                                </>
                            ) : (
                                "Confirm Delete"
                            )}
                        </button>
                        <button
                            onClick={() => {
                                setConfirming(false);
                                setPassword("");
                            }}
                            disabled={loading}
                            className="bg-gray-600 hover:bg-gray-500 px-6 py-3 rounded-xl transition disabled:opacity-50"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
