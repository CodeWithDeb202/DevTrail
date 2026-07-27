"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function Hero() {


    return (

        <section className="
min-h-screen
bg-[#030712]
flex
items-center
justify-center
px-6
overflow-hidden
">


            <div className="
max-w-6xl
grid
md:grid-cols-2
gap-10
items-center
">


                <motion.div

                    initial={{
                        opacity: 0,
                        x: -50
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.6
                    }}

                >


                    <h1 className="
text-5xl
md:text-7xl
font-bold
text-white
leading-tight
">

                        Build.
                        Track.
                        Showcase.

                        <span className="
text-blue-500
">

                            Your Journey.

                        </span>

                    </h1>



                    <p className="
text-gray-400
mt-6
text-lg
max-w-xl
">

                        DevTrail helps developers track projects,
                        document progress and showcase their
                        complete building journey.

                    </p>



                    <div className="
flex
gap-4
mt-8
">


                        <Link

                            href="/signup"

                            className="
bg-blue-600
px-6
py-3
rounded-xl
text-white
hover:scale-105
transition
"

                        >

                            Start Building

                        </Link>



                        <Link

                            href="/projects"

                            className="
border
border-white/20
px-6
py-3
rounded-xl
text-white
hover:bg-white/5
transition
"

                        >

                            Explore Projects

                        </Link>


                    </div>


                </motion.div>


                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    className="
relative
"

                >


                    <div className="
bg-[#111827]
border
border-white/10
rounded-3xl
p-6
shadow-2xl
">


                        <div className="
h-3
w-3
rounded-full
bg-red-500
inline-block
mr-2
"/>


                        <div className="
h-3
w-3
rounded-full
bg-yellow-500
inline-block
mr-2
"/>


                        <div className="
h-3
w-3
rounded-full
bg-green-500
inline-block
"/>


                        <div className="
mt-6
space-y-4
">


                            <div className="
bg-white/5
rounded-xl
p-4
text-gray-300
">

                                🚀 Project Progress: 75%

                            </div>


                            <div className="
bg-white/5
rounded-xl
p-4
text-gray-300
">

                                🔥 Current Streak: 21 Days

                            </div>


                            <div className="
bg-white/5
rounded-xl
p-4
text-gray-300
">

                                📝 Daily Logs: 48

                            </div>


                        </div>


                    </div>


                </motion.div>


            </div>


        </section>

    )

}