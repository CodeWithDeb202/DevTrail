"use client";

export default function AuthCard({ children, title, description }) {

    return (

        <div className="
min-h-screen
flex
items-center
justify-center
bg-[#030712]
px-4
">

            <div className="
w-full
max-w-md
bg-[#111827]
border
border-white/10
rounded-2xl
p-8
shadow-xl
">

                <h1 className="
text-3xl
font-bold
text-white
mb-2
">

                    {title}

                </h1>


                <p className="
text-gray-400
mb-8
">

                    {description}

                </p>


                {children}


            </div>

        </div>

    )

}