"use client";

import {
    Calendar,
    Hammer,
    Pencil,
    Trash2
} from "lucide-react";


export default function LogCard({

    log,
    onEdit,
    onDelete

}) {


    return (

        <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">


            <div className="flex justify-between">


                <h2 className="text-xl font-bold">

                    {log.title}

                </h2>


                <div className="flex gap-3">


                    <button
                        onClick={()=>onEdit(log)}
                        className="text-blue-400 hover:text-blue-300"
                    >

                        <Pencil size={18}/>

                    </button>



                    <button
                        onClick={()=>onDelete(log._id)}
                        className="text-red-400 hover:text-red-300"
                    >

                        <Trash2 size={18}/>

                    </button>


                </div>


            </div>



            <span className="inline-block mt-3 bg-blue-600 px-3 py-1 rounded-full text-sm">

                {log.status}

            </span>



            <p className="text-gray-400 mt-4">

                {log.description}

            </p>



            <div className="flex gap-5 mt-5 text-gray-500 text-sm">


                <div className="flex items-center gap-2">

                    <Calendar size={16}/>

                    {new Date(log.date).toLocaleDateString()}

                </div>



                <div className="flex items-center gap-2">

                    <Hammer size={16}/>

                    Developer Journal

                </div>


            </div>


        </div>

    )

}