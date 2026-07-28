"use client";


import { useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import {
    updateProject,
    deleteProject
} from "@/services/projectService";



export default function ProjectCard({
    project
}) {


    const [edit, setEdit] = useState(false);


    const [title, setTitle] = useState(project.title);

    const [description, setDescription] = useState(
        project.description
    );



    const handleUpdate = async () => {


        await updateProject(
            project._id,
            {
                title,
                description
            }
        );


        window.location.reload();


    }



    const handleDelete = async () => {

        const confirmDelete = confirm("Are you sure delete this project?");
        if (!confirmDelete) return;

        try {
            const res = await deleteProject(project._id);
            console.log("Success:", res);

            window.location.reload();

        } catch (error) {
            console.log("Status:", error.response?.status);
            console.log("Response:", error.response?.data);
        }
    };



    return (

        <div className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-5
hover:-translate-y-1
transition
relative
">


            {/* Icons */}

            <div className="
absolute
right-4
top-4
flex
gap-3
">


                <button
                    onClick={() => setEdit(true)}
                    className="
text-blue-400
hover:text-blue-300
"
                >

                    <Pencil size={18} />

                </button>



                <button
                    onClick={handleDelete}
                    className="
text-red-400
hover:text-red-300
"
                >

                    <Trash2 size={18} />

                </button>


            </div>




            {
                edit ? (

                    <div>


                        <input

                            value={title}

                            onChange={
                                e => setTitle(e.target.value)
                            }

                            className="
bg-gray-800
text-white
p-2
rounded-lg
w-full
mb-3
"

                        />



                        <textarea

                            value={description}

                            onChange={
                                e => setDescription(e.target.value)
                            }

                            className="
bg-gray-800
text-white
p-2
rounded-lg
w-full
"

                        />



                        <div className="
flex
gap-3
mt-3
">


                            <button

                                onClick={handleUpdate}

                                className="
bg-green-600
px-4
py-2
rounded-lg
text-white
"

                            >

                                Save

                            </button>



                            <button

                                onClick={() => setEdit(false)}

                                className="
bg-gray-600
px-4
py-2
rounded-lg
text-white
"

                            >

                                Cancel

                            </button>


                        </div>



                    </div>


                ) : (



                    <>


                        <h2 className="
text-xl
font-bold
text-white
">

                            {project.title}

                        </h2>



                        <p className="
text-gray-400
mt-2
">

                            {project.description}

                        </p>



                        <div className="
mt-4
flex
flex-wrap
gap-2
">

                            {
                                project.techStack?.map((tech) => (

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



                        <div className="
mt-5
text-sm
text-gray-400
">

                            Progress: {project.progress}%

                        </div>



                        <Link

                            href={`/projects/${project._id}`}

                            className="
text-blue-400
mt-4
inline-block
"

                        >

                            Open Workspace →

                        </Link>


                    </>


                )

            }



        </div>


    )

}