import Link from "next/link";


export default function Footer() {


    return (

        <footer className="
bg-[#030712]
border-t
border-white/10
px-6
py-10
">


            <div className="
max-w-6xl
mx-auto
flex
flex-col
md:flex-row
justify-between
gap-8
">


                <div>


                    <h2 className="
text-2xl
font-bold
text-white
">

                        Dev<span className="text-blue-500">
                            Trail
                        </span>

                    </h2>


                    <p className="
text-gray-400
mt-3
max-w-sm
">

                        A platform for developers to build,
                        track and showcase their journey.

                    </p>


                </div>



                <div className="
flex
gap-10
text-gray-400
">


                    <div className="
space-y-3
">

                        <h3 className="
text-white
font-semibold
">

                            Product

                        </h3>


                        <Link href="/features">
                            Features
                        </Link>


                        <br />


                        <Link href="/projects">
                            Projects
                        </Link>


                    </div>



                    <div className="
space-y-3
">

                        <h3 className="
text-white
font-semibold
">

                            Legal

                        </h3>


                        <Link href="/privacy">
                            Privacy Policy
                        </Link>


                        <br />


                        <Link href="/terms">
                            Terms

                        </Link>


                    </div>



                </div>


            </div>



            <div className="
text-center
text-gray-500
mt-10
text-sm
">

                © 2026 DevTrail. All rights reserved.

            </div>


        </footer>

    )

}