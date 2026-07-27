"use client";

import { motion } from "framer-motion";

import {
    FolderKanban,
    CalendarDays,
    Image,
    BarChart3,
    UserRound,
    Rocket
} from "lucide-react";


const features = [

    {
        icon: FolderKanban,
        title: "Project Workspace",
        description:
            "Manage your projects, milestones and development process in one place."
    },

    {
        icon: CalendarDays,
        title: "Daily Development Logs",
        description:
            "Document what you build every day and create your developer journey."
    },

    {
        icon: Image,
        title: "Progress Showcase",
        description:
            "Upload screenshots and show your real development progress."
    },

    {
        icon: BarChart3,
        title: "Growth Tracking",
        description:
            "Track consistency, streaks and project completion."
    },

    {
        icon: UserRound,
        title: "Developer Profile",
        description:
            "Create a public profile to showcase your skills and projects."
    },

    {
        icon: Rocket,
        title: "Build In Public",
        description:
            "Share your journey and inspire other developers."
    }

];



export default function Features() {


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

                        Everything You Need To Build Better

                    </h2>


                    <p className="
text-gray-400
mt-4
max-w-2xl
mx-auto
">

                        A complete workspace for developers to build,
                        track and showcase their projects.

                    </p>


                </div>



                <div className="
grid
md:grid-cols-3
gap-6
">


                    {
                        features.map((feature, index) => {


                            const Icon = feature.icon;


                            return (

                                <motion.div

                                    key={feature.title}

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
                                        delay: index * 0.1
                                    }}

                                    viewport={{
                                        once: true
                                    }}

                                    whileHover={{
                                        y: -8
                                    }}

                                    className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
hover:border-blue-500/50
transition
"

                                >


                                    <div className="
w-12
h-12
rounded-xl
bg-blue-500/10
flex
items-center
justify-center
text-blue-400
">


                                        <Icon size={25} />


                                    </div>



                                    <h3 className="
text-xl
font-semibold
text-white
mt-5
">

                                        {feature.title}

                                    </h3>



                                    <p className="
text-gray-400
mt-3
leading-relaxed
">

                                        {feature.description}

                                    </p>



                                </motion.div>

                            )


                        })
                    }


                </div>


            </div>


        </section>

    )

}