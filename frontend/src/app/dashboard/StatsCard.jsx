"use client";

import { motion } from "framer-motion";


export default function StatsCard({
    title,
    value,
    icon
}) {


    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            whileHover={{
                scale: 1.03
            }}

            className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
"

        >


            <div className="
flex
justify-between
items-center
">


                <div>

                    <p className="
text-gray-400
text-sm
">

                        {title}

                    </p>


                    <h2 className="
text-3xl
font-bold
text-white
mt-2
">

                        {value}

                    </h2>


                </div>


                <div className="
text-blue-400
">

                    {icon}

                </div>


            </div>


        </motion.div>

    )

}