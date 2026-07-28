import Sidebar from "@/app/dashboard/Sidebar";
import Navbar from "@/app/dashboard/Navbar";


export default function DashboardLayout({ children }) {

    return (

        <div className="
min-h-screen
bg-[#030712]
text-white
flex
">


            <Sidebar />


            <div className="
flex-1
">


                <Navbar />


                <main className="
p-6
">

                    {children}

                </main>


            </div>


        </div>

    )

}