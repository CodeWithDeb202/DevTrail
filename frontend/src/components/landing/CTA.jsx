"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function CTA() {


    return (

        <section className="
bg-[#030712]
py-24
px-6
">


            <div className="
max-w-5xl
mx-auto
bg-gradient-to-r
from-blue-600/20
to-purple-600/20
border
border-white/10
rounded-3xl
p-10
md:p-16
text-center
">


                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0.9
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    viewport={{
                        once: true
                    }}

                >


                    <h2 className="
text-4xl
md:text-5xl
font-bold
text-white
">

                        Start Building Your Developer Journey

                    </h2>


                    <p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

                        Create projects, track your progress,
                        and build a portfolio that shows your real skills.

                    </p>



                    <div className="
flex
justify-center
gap-4
mt-8
flex-wrap
">


                        <Link

                            href="/signup"

                            className="
bg-blue-600
px-7
py-3
rounded-xl
text-white
hover:scale-105
transition
"

                        >

                            Create Free Account

                        </Link>



                        <Link

                            href="/login"

                            className="
border
border-white/20
px-7
py-3
rounded-xl
text-white
hover:bg-white/5
transition
"

                        >

                            Login

                        </Link>


                    </div>


                </motion.div>


            </div>


        </section>

    )

}