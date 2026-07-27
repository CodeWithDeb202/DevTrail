"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/services/projectService";


export default function ProjectDetails() {

    const { id } = useParams();


    const [project, setProject] = useState(null);



    useEffect(() => {


        const fetchProject = async () => {

            const data = await getProjectById(id);

            setProject(data);

        };


        fetchProject();


    }, [id]);



    if (!project) {

        return (

            <div className="
min-h-screen
bg-[#030712]
text-white
p-6
">

                Loading...

            </div>

        )

    }



    return (

        <div className="
min-h-screen
bg-[#030712]
text-white
p-6
">


            <h1 className="
text-4xl
font-bold
">

                {project.title}

            </h1>



            <p className="
text-gray-400
mt-3
">

                {project.description}

            </p>



            <div className="
mt-8
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
">


                <h2 className="
text-xl
font-semibold
">

                    Progress

                </h2>


                <div className="
mt-4
h-3
bg-gray-700
rounded-full
">


                    <div

                        className="
h-full
bg-blue-500
rounded-full
"

                        style={{
                            width: `${project.progress}%`
                        }}

                    />


                </div>


            </div>



        </div>

    )

}