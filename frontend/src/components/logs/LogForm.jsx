"use client";

import { useState } from "react";
import { createLog } from "@/services/logService";
import toast from "react-hot-toast";


export default function LogForm({ projectId }) {


    const [form, setForm] = useState({

        title: "",
        description: ""

    });


    const [image, setImage] = useState(null);



    const submitHandler = async (e) => {

        e.preventDefault();


        const data = new FormData();


        data.append(
            "project",
            projectId
        );


        data.append(
            "title",
            form.title
        );


        data.append(
            "description",
            form.description
        );


        if (image) {

            data.append(
                "image",
                image
            );

        }


        try {

            await createLog(data);


            toast.success(
                "Daily log added 🚀"
            );


        }
        catch (error) {

            toast.error(
                "Failed to add log"
            );

        }


    };



    return (

        <form
            onSubmit={submitHandler}
            className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
space-y-4
"
        >


            <input

                placeholder="What did you build today?"

                className="auth-input"

                onChange={(e) => setForm({
                    ...form,
                    title: e.target.value
                })}

            />



            <textarea

                placeholder="Describe your progress..."

                className="auth-input min-h-32"

                onChange={(e) => setForm({
                    ...form,
                    description: e.target.value
                })}

            />



            <input

                type="file"

                accept="image/*"

                onChange={(e) => setImage(
                    e.target.files[0]
                )}

            />



            <button

                className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
"

            >

                Add Log

            </button>


        </form>

    )

}