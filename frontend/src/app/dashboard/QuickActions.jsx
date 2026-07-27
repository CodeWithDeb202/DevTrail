import Link from "next/link";


export default function QuickActions() {


    return (

        <div className="
flex
gap-4
flex-wrap
">


            <Link

                href="/create-project"

                className="
bg-blue-600
px-5
py-3
rounded-xl
text-white
"

            >

                + Create Project

            </Link>



            <Link

                href="/projects"

                className="
bg-white/10
px-5
py-3
rounded-xl
text-white
"

            >

                View Projects

            </Link>


        </div>

    )

}