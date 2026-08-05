"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectById } from "@/services/projectService";
import LoadingScreen from "@/components/LoadingScreen";
import Link from "next/link";
import { FileText, ArrowLeft, Code2, ExternalLink } from "lucide-react";

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            const data = await getProjectById(id);
            setProject(data);
        };

        fetchProject();
    }, [id]);

    if (!project) {
        return <LoadingScreen />;
    }

    return (
        <div className="min-h-screen bg-[#030712] text-white p-6">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6"
                >
                    <ArrowLeft size={22} />
                    <span>Back to Projects</span>
                </Link>

                <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
                                {project.status}
                            </span>
                            <h1 className="text-4xl font-bold">
                                {project.title}
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition"
                                >
<Code2 size={18} />
                                    Code
                                </a>
                            )}
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-xl transition"
                                >
                                    <ExternalLink size={18} />
                                    Live
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        {project.description}
                    </p>

                    {project.techStack?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-6 bg-[#111827] border border-white/10 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Progress</h2>
                        <span className="text-blue-400 font-bold">
                            {project.progress}%
                        </span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                        />
                    </div>

                    <Link
                        href={`/projects/${id}/logs`}
                        className="mt-6 inline-flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl text-white hover:bg-blue-700 transition"
                    >
                        <FileText size={20} />
                        Daily Logs
                    </Link>
                </div>
            </div>
        </div>
    );
}
