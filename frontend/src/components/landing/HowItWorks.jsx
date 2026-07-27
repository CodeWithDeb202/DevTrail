"use client";

import { motion } from "framer-motion";

import {
    PlusCircle,
    Activity,
    BookOpen,
    Share2
} from "lucide-react";


const steps = [

    {
        number: "01",
        icon: PlusCircle,
        title: "Create Your Project",
        description:
            "Start a new project and add your goals, tech stack and project details."
    },

    {
        number: "02",
        icon: Activity,
        title: "Track Your Progress",
        description:
            "Manage milestones, tasks and monitor your development progress."
    },

    {
        number: "03",
        icon: BookOpen,
        title: "Document Your Journey",
        description:
            "Add daily logs, screenshots and learning updates while building."
    },

    {
        number: "04",
        icon: Share2,
        title: "Showcase Your Work",
        description:
            "Share your public project page and developer profile."
    }

];


export default function HowItWorks() {


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
mb-16
">


                    <h2 className="
text-4xl
md:text-5xl
font-bold
text-white
">

                        How DevTrail Works

                    </h2>


                    <p className="
text-gray-400
mt-4
">

                        From idea to launch, document every step.

                    </p>


                </div>



                <div className="
grid
md:grid-cols-4
gap-6
">


                    {
                        steps.map((step, index) => {


                            const Icon = step.icon;


                            return (

                                <motion.div

                                    key={step.number}

                                    initial={{
                                        opacity: 0,
                                        y: 40
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

                                    className="
relative
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
"

                                >


                                    <div className="
text-blue-500
font-bold
text-lg
">

                                        {step.number}

                                    </div>



                                    <div className="
mt-5
w-12
h-12
rounded-xl
bg-blue-500/10
flex
items-center
justify-center
text-blue-400
">

                                        <Icon size={24} />

                                    </div>



                                    <h3 className="
text-white
font-semibold
text-xl
mt-5
">

                                        {step.title}

                                    </h3>



                                    <p className="
text-gray-400
mt-3
text-sm
leading-relaxed
">

                                        {step.description}

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