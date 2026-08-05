"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Home,
    Folder,
    User,
    Settings,
    LogOut,
    Sparkles,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const menu = [
    { name: "Dashboard", icon: Home, link: "/dashboard" },
    { name: "Projects", icon: Folder, link: "/projects" },
    { name: "Profile", icon: User, link: "/profile" },
    { name: "Settings", icon: Settings, link: "/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <motion.aside
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="hidden md:flex w-64 min-h-screen bg-[#111827] border-r border-white/10 p-6 flex-col sticky top-0 h-screen"
        >
            <h1 className="text-2xl font-bold mb-10 flex items-center gap-2">
                Dev<span className="text-blue-500">Trail</span>
                <Sparkles size={16} className="text-blue-400" />
            </h1>
            <nav className="space-y-3">
                {menu.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.link;

                    return (
                        <Link
                            key={item.name}
                            href={item.link}
                            className={`flex items-center gap-3 p-3 rounded-xl transition ${active ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                        >
                            <Icon size={20} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 text-red-400 hover:bg-red-500/10 w-full p-3 rounded-xl transition"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </motion.aside>
    );
}
