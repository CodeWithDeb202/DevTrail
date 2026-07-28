"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default function ProfileHeader({
    user,
    projectsCount,
    isOwner
}) {

    return (

        <div className="bg-[#111827] rounded-3xl border border-white/10 p-8">

            <div className="flex flex-col md:flex-row justify-between">

                <div className="flex gap-6">

                    <Image
                        src={
                            user?.profileImage
                                ? user.profileImage
                                : "/default-avatar.png"
                        }
                        alt="profile"
                        width={140}
                        height={140}
                        className="rounded-full object-cover border-4 border-blue-500"
                    />

                    <div>

                        <h1 className="text-3xl font-bold">

                            {user?.name || "Full Name"}

                        </h1>

                        <p className="text-gray-400 mt-1">

                            @{user?.username}

                        </p>

                        <div className="flex gap-8 mt-6">

                            <div>

                                <h2 className="font-bold text-2xl">

                                    {projectsCount || 0}

                                </h2>

                                <p className="text-gray-400">

                                    Projects

                                </p>

                            </div>

                            <div>

                                <h2 className="font-bold text-2xl">

                                    {user?.followers?.length || 0}

                                </h2>

                                <p className="text-gray-400">

                                    Followers

                                </p>

                            </div>

                            <div>

                                <h2 className="font-bold text-2xl">

                                    {user?.following?.length || 0}

                                </h2>

                                <p className="text-gray-400">

                                    Following

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {
                    isOwner && (

                        <div>

                            <Link
                                href="/profile/edit"
                                className="
                                flex
                                items-center
                                gap-2
                                bg-blue-600
                                hover:bg-blue-500
                                px-5
                                py-3
                                rounded-xl
                                "
                            >

                                <Pencil size={18} />

                                Edit Profile

                            </Link>

                        </div>

                    )
                }

            </div>

        </div>

    );

}