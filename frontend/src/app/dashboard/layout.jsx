"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Folder, User, Settings } from "lucide-react";
import Sidebar from "@/app/dashboard/Sidebar";
import Navbar from "@/app/dashboard/Navbar";

const mobileMenu = [
    { name: "Home", icon: Home, link: "/dashboard" },
    { name: "Projects", icon: Folder, link: "/projects" },
    { name: "Profile", icon: User, link: "/profile" },
    { name: "Settings", icon: Settings, link: "/settings" },
];

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#030712] text-white flex">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />

                <main className="p-4 md:p-6 flex-1 pb-24 md:pb-6">
                    {children}
                </main>

                {/* Mobile bottom navigation */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111827] border-t border-white/10 flex justify-around py-3 z-50">
                    {mobileMenu.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.link;
                        return (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`flex flex-col items-center gap-1 text-xs ${
                                    active
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                            >
                                <Icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
