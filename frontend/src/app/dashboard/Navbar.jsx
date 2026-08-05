"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Navbar() {
    const { user } = useAuth();

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="h-20 border-b border-white/10 flex items-center justify-between px-6"
        >
            <div>
                <h2 className="text-xl font-semibold">
                    Developer Workspace
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-3">
                    {user?.profileImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={user.profileImage}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold">
                            {user?.name?.[0]?.toUpperCase() || "D"}
                        </div>
                    )}
                    <span className="hidden sm:block text-gray-300 font-medium">
                        {user?.name || "Developer"}
                    </span>
                </Link>
            </div>
        </motion.header>
    );
}
