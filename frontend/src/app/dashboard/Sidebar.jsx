"use client";

import Link from "next/link";
import {
    Home,
    Folder,
    User,
    Settings,
    LogOut
} from "lucide-react";


const menu = [
    {
        name: "Dashboard",
        icon: Home,
        link: "/dashboard"
    },
    {
        name: "Projects",
        icon: Folder,
        link: "/projects"
    },
    {
        name: "Profile",
        icon: User,
        link: "/profile"
    },
    {
        name: "Settings",
        icon: Settings,
        link: "/settings"
    }
];


export default function Sidebar() {

    return (

        <aside className="hidden md:flex w-64 min-h-screen bg-[#111827] border-r border-white/10 p-6 flex-col">
            <h1 className="text-2xl font-bold mb-10">
                Dev<span className="text-blue-500">
                    Trail
                </span>
            </h1>
            <nav className="space-y-3">
                {
                    menu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
                                <Icon size={20} />
                                {item.name}
                            </Link>
                        )
                    })
                }
            </nav>

            <div className="mt-auto">
                <button className="flex items-center gap-3 text-red-400 p-3">

                    <LogOut size={20} />

                    Logout

                </button>


            </div>


        </aside>

    )

}