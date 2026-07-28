"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/services/projectService";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";


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
            <Link
                href="/projects"
                className="
    inline-flex
    items-center
    gap-2
    text-gray-400
    hover:text-white
    transition
    mb-6
    "
            >
                <ArrowLeft size={22} />

                <span>
                    Back to Projects
                </span>

            </Link>


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

                <Link

                    href={`/projects/${id}/logs`}

                    className="
    mt-6
    inline-flex
    items-center
    gap-2
    bg-blue-600
    px-5
    py-3
    rounded-xl
    text-white
    hover:bg-blue-700
    transition
    "

                >

                    <FileText size={20} />

                    Daily Logs

                </Link>


            </div>



        </div>

    )

}