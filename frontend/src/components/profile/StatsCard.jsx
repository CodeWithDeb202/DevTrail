"use client";

import {
    Folder,
    Heart,
    Eye,
    CheckCircle
} from "lucide-react";

export default function StatsCard({

    projects = []

}) {

    const totalProjects = projects.length;

    const totalLikes = projects.reduce(

        (total, project) => total + project.likes.length,

        0

    );

    const totalViews = projects.reduce(

        (total, project) => total + project.views,

        0

    );

    const completedProjects = projects.filter(

        project => project.status === "Completed"

    ).length;

    const stats = [

        {

            title: "Projects",

            value: totalProjects,

            icon: Folder

        },

        {

            title: "Likes",

            value: totalLikes,

            icon: Heart

        },

        {

            title: "Views",

            value: totalViews,

            icon: Eye

        },

        {

            title: "Completed",

            value: completedProjects,

            icon: CheckCircle

        }

    ];

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

            {

                stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div

                            key={item.title}

                            className="
                            bg-[#111827]
                            border
                            border-white/10
                            rounded-2xl
                            p-5
                            hover:border-blue-500/40
                            transition
                            "

                        >

                            <Icon

                                className="text-blue-500"

                                size={24}

                            />

                            <h3 className="mt-4 text-3xl font-bold">

                                {item.value}

                            </h3>

                            <p className="text-gray-400 mt-2">

                                {item.title}

                            </p>

                        </div>

                    );

                })

            }

        </div>

    );

}