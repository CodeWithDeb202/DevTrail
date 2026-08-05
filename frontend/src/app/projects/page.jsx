"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/projectService";
import ProjectCard from "@/components/projects/ProjectCard";
import LoadingScreen from "@/components/LoadingScreen";
import Link from "next/link";
import { ArrowLeft, FolderPlus } from "lucide-react";


export default function Projects() {


    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchProjects = async () => {

            const data = await getProjects();

            setProjects(data);

            setLoading(false);

        };


        fetchProjects();


    }, []);

    if (loading) {
        return <LoadingScreen />;
    }



    return (

        <div className="
min-h-screen
bg-[#030712]
p-6
">
    <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-2"
                >
                    <ArrowLeft size={22} />
                    <span>Back to Dashboard</span>
                </Link>


            <div className="
flex
justify-between
mb-8
">


                <h1 className="
text-3xl
font-bold
text-white
">

                    My Projects

                </h1>


                <a

                    href="/create-project"

                    className="
bg-blue-600
px-5
py-3
rounded-xl
text-white
"

                >

                    + New Project

                </a>


            </div>



            <div className="
grid
md:grid-cols-3
gap-6
">


                {
                    projects.map((project) => (

                        <ProjectCard

                            key={project._id}

                            project={project}

                        />

                    ))
                }


            </div>


        </div>

    )

}