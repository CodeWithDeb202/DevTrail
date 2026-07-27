"use client";

import { useAuth } from "@/context/AuthContext";

import StatsCard from "@/components/dashboard/StatsCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import QuickActions from "@/components/dashboard/QuickActions";

import { Folder, FileText, Flame, CheckCircle } from "lucide-react";


export default function Dashboard() {

    const { user } = useAuth();
    if (loading) {

        return <p>Loading...</p>

    }


    return (

        <div>


            <h1 className="
text-3xl
font-bold
mb-6
">

                Welcome back,
                {" "}
                {user?.name || "Developer"} 👋

            </h1>


            <div className="
grid
md:grid-cols-4
gap-5
mb-8
">


                <StatsCard
                    title="Projects"
                    value="12"
                    icon={<Folder />}
                />


                <StatsCard
                    title="Logs"
                    value="48"
                    icon={<FileText />}
                />


                <StatsCard
                    title="Streak"
                    value="15 Days"
                    icon={<Flame />}
                />


                <StatsCard
                    title="Completed"
                    value="8"
                    icon={<CheckCircle />}
                />


            </div>


            <ProgressCard />


            <div className="mt-8">

                <QuickActions />

            </div>


        </div>

    )

}