"use client";

import { motion } from "framer-motion";

import {Gift, ExternalLink} from "lucide-react";


const projects = [

    {
        title: "E-Commerce Platform",
        developer: "Alex Developer",
        tech: [
            "Next.js",
            "Node.js",
            "MongoDB"
        ],
        progress: "92%"
    },


    {
        title: "AI Dashboard",
        developer: "Sarah Code",
        tech: [
            "React",
            "Express",
            "Cloudinary"
        ],
        progress: "78%"
    },


    {
        title: "Travel Application",
        developer: "John Dev",
        tech: [
            "React",
            "Tailwind",
            "API"
        ],
        progress: "85%"
    }

];



export default function Showcase() {


    return (

        <section className="
bg-[#030712]
py-24
px-6
">


            <div className="
max-w-6xl
mx-auto
">


                <div className="
text-center
mb-14
">


                    <h2 className="
text-4xl
md:text-5xl
font-bold
text-white
">

                        Built By Developers

                    </h2>


                    <p className="
text-gray-400
mt-4
">

                        Explore real projects and development journeys.

                    </p>


                </div>



                <div className="
grid
md:grid-cols-3
gap-6
">


                    {
                        projects.map((project, index) => (


                            <motion.div

                                key={project.title}

                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15
                                }}

                                viewport={{
                                    once: true
                                }}

                                whileHover={{
                                    scale: 1.03
                                }}

                                className="
bg-[#111827]
border
border-white/10
rounded-2xl
overflow-hidden
"

                            >


                                <div className="
h-40
bg-linear-to-r
from-blue-600
to-purple-600
flex
items-center
justify-center
text-white
text-4xl
font-bold
">

                                    {project.title[0]}

                                </div>



                                <div className="
p-5
">


                                    <h3 className="
text-xl
font-bold
text-white
">

                                        {project.title}

                                    </h3>



                                    <p className="
text-gray-400
mt-2
">

                                        by {project.developer}

                                    </p>



                                    <div className="
flex
flex-wrap
gap-2
mt-4
">


                                        {
                                            project.tech.map((item) => (

                                                <span

                                                    key={item}

                                                    className="
bg-blue-500/10
text-blue-400
px-3
py-1
rounded-full
text-xs
"

                                                >

                                                    {item}

                                                </span>

                                            ))
                                        }


                                    </div>



                                    <div className="
mt-5
">


                                        <div className="
flex
justify-between
text-sm
text-gray-400
">

                                            <span>
                                                Progress
                                            </span>

                                            <span>
                                                {project.progress}
                                            </span>

                                        </div>


                                        <div className="
h-2
bg-gray-700
rounded-full
mt-2">
                                            <div
                                                className="h-full bg-blue-500 rounded-full "
                                                style={{
                                                    width: project.progress
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-5 text-gray-400">
                                        <Gift size={18} />
                                        <ExternalLink size={18} />
                                    </div>
                                </div>
                            </motion.div>

                        ))
                    }
                </div>
            </div>

        </section>

    )

}