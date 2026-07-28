"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import api from '@/services/api';

import StatsCard from "@/app/dashboard/StatsCard";
import ProgressCard from "@/app/dashboard/ProgressCard";
import QuickActions from "@/app/dashboard/QuickActions";

import { Folder, FileText, Flame, CheckCircle } from "lucide-react";


export default function Dashboard() {
    const [stats, setStats] = useState({
        totalProjects: 0,
        totalLogs: 0,
        completedLogs: 0,
        streak: 0,
        progress: 0,
    });

    const getDashboardStats = async () => {
        try {
            const response = await api.get("/dashboard/stats");

            setStats(response.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        getDashboardStats();

    }, []);

    const { user, loading } = useAuth();
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
                    value = {stats.totalProjects}
                    icon={<Folder />}
                />


                <StatsCard
                    title="Logs"
                    value = {stats.totalLogs}
                    icon={<FileText />}
                />


                <StatsCard
                    title="Streak"
                    value = {stats.streak}
                    icon={<Flame />}
                />


                <StatsCard
                    title="Completed"
                    value = {stats.completedLogs}
                    icon={<CheckCircle />}
                />


            </div>


            <ProgressCard progress={stats.progress} />


            <div className="mt-8">

                <QuickActions />

            </div>


        </div>

    )

}