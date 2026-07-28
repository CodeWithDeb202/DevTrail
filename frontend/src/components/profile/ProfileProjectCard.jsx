"use client";

import Link from "next/link";
import { Heart, Eye, Pencil, Trash2 } from "lucide-react";

export default function ProfileProjectCard({

    project,

    isOwner,

    onDelete

}) {

    return (

        <div
            className="
            bg-[#111827]
            border
            border-white/10
            rounded-2xl
            p-6
            hover:border-blue-500/40
            transition
            relative
            "
        >

            {
                isOwner && (

                    <div
                        className="
                        absolute
                        right-5
                        top-5
                        flex
                        gap-3
                        "
                    >

                        <Link
                            href={`/projects/edit/${project._id}`}
                            className="text-blue-400 hover:text-blue-300"
                        >

                            <Pencil size={18}/>

                        </Link>

                        <button
                            onClick={() => onDelete(project._id)}
                            className="text-red-400 hover:text-red-300"
                        >

                            <Trash2 size={18}/>

                        </button>

                    </div>

                )
            }

            <h2
                className="
                text-2xl
                font-bold
                text-white
                "
            >

                {project.title}

            </h2>

            <p
                className="
                text-gray-400
                mt-3
                leading-7
                "
            >

                {project.description}

            </p>

            <div
                className="
                flex
                flex-wrap
                gap-2
                mt-5
                "
            >

                {

                    project.techStack?.map((tech)=>(

                        <span

                            key={tech}

                            className="
                            px-3
                            py-1
                            rounded-full
                            bg-blue-500/10
                            text-blue-400
                            text-sm
                            "

                        >

                            {tech}

                        </span>

                    ))

                }

            </div>

            <div
                className="
                flex
                justify-between
                items-center
                mt-6
                "
            >

                <div className="flex gap-6">

                    <div className="flex items-center gap-2">

                        <Heart
                            size={18}
                            className="text-red-400"
                        />

                        <span>

                            {project.likes.length}

                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <Eye
                            size={18}
                            className="text-blue-400"
                        />

                        <span>

                            {project.views}

                        </span>

                    </div>

                </div>

                <Link

                    href={`/projects/${project._id}`}

                    className="
                    bg-blue-600
                    hover:bg-blue-500
                    px-5
                    py-2
                    rounded-lg
                    "

                >

                    Open Project

                </Link>

            </div>

        </div>

    );

}