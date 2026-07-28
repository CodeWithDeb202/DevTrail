"use client";

import { useState } from "react";
import { createProject } from "@/services/projectService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function ProjectForm() {


    const router = useRouter();


    const [loading, setLoading] = useState(false);


    const [form, setForm] = useState({

        title: "",
        description: "",
        techStack: ""

    });



    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            setLoading(true);


            await createProject({

                ...form,

                techStack:
                    form.techStack
                        .split(",")
                        .map(item => item.trim())

            });


            toast.success(
                "Project created 🚀"
            );


            router.push("/projects");


        }
        catch (error) {

            toast.error(
                "Failed to create project"
            );

        }
        finally {

            setLoading(false);

        }


    };



    return (

        <form

            onSubmit={handleSubmit}

            className="
space-y-5
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
"

        >


            <input

                name="title"

                onChange={handleChange}

                placeholder="Project Title"

                className="auth-input"

            />



            <textarea

                name="description"

                onChange={handleChange}

                placeholder="Project Description"

                className="auth-input min-h-32"

            />



            <input

                name="techStack"

                onChange={handleChange}

                placeholder="React, Node, MongoDB"

                className="auth-input"

            />



            <button

                disabled={loading}

                className="
w-full
py-3
rounded-xl
bg-linear-to-r
from-blue-600
to-purple-600
text-white
"

            >

                {
                    loading
                        ?
                        "Creating..."
                        :
                        "Create Project"
                }

            </button>



        </form>

    )

}