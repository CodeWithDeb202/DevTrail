"use client";

import ProfileProjectCard from "./ProfileProjectCard";

export default function RecentProjects({

    projects,

    isOwner,

    onDelete

}){

    return(

        <div
            className="
            bg-[#111827]
            border
            border-white/10
            rounded-2xl
            p-6
            "
        >

            <h2
                className="
                text-2xl
                font-bold
                mb-6
                "
            >

                Projects

            </h2>

            {

                projects.length===0 ?

                (

                    <div
                        className="
                        py-16
                        text-center
                        text-gray-400
                        "
                    >

                        No Projects Yet

                    </div>

                )

                :

                (

                    <div
                        className="
                        space-y-5
                        "
                    >

                        {

                            projects.map((project)=>(

                                <ProfileProjectCard

                                    key={project._id}

                                    project={project}

                                    isOwner={isOwner}

                                    onDelete={onDelete}

                                />

                            ))

                        }

                    </div>

                )

            }

        </div>

    )

}