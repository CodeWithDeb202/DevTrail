"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "@/services/api";
import LoadingScreen from "@/components/LoadingScreen";
import { Folder, Heart, Eye } from "lucide-react";

export default function PublicProfilePage() {
    const { username } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await api.get(`/profile/${username}`);
            setProfile(res.data);
        };

        fetchProfile();
    }, [username]);

    if (!profile) {
        return <LoadingScreen />;
    }

    const totalLikes = profile.projects.reduce(
        (sum, p) => sum + (p.likes?.length || 0),
        0
    );
    const totalViews = profile.projects.reduce(
        (sum, p) => sum + (p.views || 0),
        0
    );

    return (
        <div className="min-h-screen bg-[#030712] text-white">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#111827] border border-white/10 rounded-3xl p-8"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {profile.user.profileImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={profile.user.profileImage}
                                alt={profile.user.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
                                {profile.user.name?.[0]?.toUpperCase()}
                            </div>
                        )}

                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold">
                                {profile.user.name}
                            </h1>
                            <p className="text-gray-400 mt-1">
                                @{profile.user.username}
                            </p>
                            {profile.user.bio && (
                                <p className="text-gray-300 mt-4 max-w-xl">
                                    {profile.user.bio}
                                </p>
                            )}
                        </div>

                        <div className="md:ml-auto flex gap-8 text-center">
                            <div>
                                <h2 className="font-bold text-2xl">
                                    {profile.projectsCount || 0}
                                </h2>
                                <p className="text-gray-400">Projects</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">
                                    {totalLikes}
                                </h2>
                                <p className="text-gray-400">Likes</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">
                                    {totalViews}
                                </h2>
                                <p className="text-gray-400">Views</p>
                            </div>
                        </div>
                    </div>

                    {profile.user.skills?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                            {profile.user.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Projects */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Folder size={24} className="text-blue-400" />
                        Projects
                    </h2>

                    {profile.projects.length === 0 ? (
                        <div className="bg-[#111827] border border-dashed border-white/10 rounded-2xl p-12 text-center text-gray-400">
                            No projects yet.
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-6">
                            {profile.projects.map((project, index) => (
                                <motion.div
                                    key={project._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#111827] rounded-2xl p-5 border border-white/10 hover:border-blue-500/40 transition"
                                >
                                    <h3 className="font-bold text-xl">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mt-2 text-sm line-clamp-2">
                                        {project.description}
                                    </p>

                                    {project.techStack?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.techStack
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center mt-5 text-sm text-gray-400">
                                        <div className="flex gap-4">
                                            <span className="flex items-center gap-1">
                                                <Heart
                                                    size={16}
                                                    className="text-red-400"
                                                />
                                                {project.likes?.length || 0}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Eye
                                                    size={16}
                                                    className="text-blue-400"
                                                />
                                                {project.views || 0}
                                            </span>
                                        </div>
                                        <span className="text-blue-400">
                                            {project.progress}%
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
