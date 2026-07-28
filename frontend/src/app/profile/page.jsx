"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import AboutCard from "@/components/profile/AboutCard";
import SkillsCard from "@/components/profile/SkillsCard";
import SocialLinks from "@/components/profile/SocialLinks";
import RecentProjects from "@/components/profile/RecentProjects";
import StatsCard from "@/components/profile/StatsCard";

import { getMyProfile } from "@/services/profileService";
import { deleteProject } from "@/services/projectService";

export default function ProfilePage() {

    const [user, setUser] = useState(null);

    const [projects, setProjects] = useState([]);

    const [projectsCount, setProjectsCount] = useState(0);

    const [loading, setLoading] = useState(true);

    const isOwner = true;

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const data = await getMyProfile();

            setUser(data.user);

            setProjects(data.projects);

            setProjectsCount(data.projectsCount);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        const ok = confirm(
            "Delete this project?"
        );

        if (!ok) return;

        try {

            await deleteProject(id);

            fetchProfile();

        } catch (error) {

            console.log(error);

        }

    };

    if (loading) {

        return (

            <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center">

                Loading...

            </div>

        );

    }

    return (

        <main className="min-h-screen bg-[#030712] text-white p-6">

            <div className="max-w-7xl mx-auto space-y-6">

                <Link

                    href="/dashboard"

                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white"

                >

                    <ArrowLeft size={20} />

                    Back to Dashboard

                </Link>

                <ProfileHeader

                    user={user}

                    projectsCount={projectsCount}

                    isOwner={isOwner}

                />

                <div className="grid lg:grid-cols-3 gap-6">

                    <div className="space-y-6">

                        <AboutCard

                            user={user}

                        />

                        <SkillsCard

                            user={user}

                        />

                        <SocialLinks

                            user={user}

                        />

                    </div>

                    <div className="lg:col-span-2 space-y-6">

                        <StatsCard

                            projects={projects}

                        />

                        <RecentProjects

                            projects={projects}

                            isOwner={isOwner}

                            onDelete={handleDelete}

                        />

                    </div>

                </div>

            </div>

        </main>

    );

}