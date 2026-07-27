import Link from "next/link";


export default function NotFound() {

    return (

        <div className="
min-h-screen
bg-[#030712]
text-white
flex
items-center
justify-center
flex-col
">


            <h1 className="
text-6xl
font-bold
">

                404

            </h1>


            <p className="
text-gray-400
mt-3
">

                Page not found

            </p>


            <Link

                href="/"

                className="
mt-6
bg-blue-600
px-5
py-3
rounded-xl
"

            >

                Go Home

            </Link>


        </div>

    )

}