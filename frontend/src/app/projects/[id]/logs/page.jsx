"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import LogForm from "@/components/logs/LogForm";
import LogList from "@/components/logs/LogList";
import LogSearch from "@/components/logs/LogSearch";
import LogFilter from "@/components/logs/LogFilter";

import { getLogs, deleteLog } from "@/services/logService";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function LogsPage() {


    const params = useParams();

    const projectId = params.id;


    const [logs, setLogs] = useState([]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");
    const [editLog, setEditLog] = useState(null);

    const handleEdit = (log) => {

        setEditLog(log);

    };



    const handleDelete = async (id) => {

        try {

            await deleteLog(id);


            setLogs(
                logs.filter(
                    (log) => log._id !== id
                )
            );


        }
        catch (error) {

            console.log(error);

        }

    };



    useEffect(() => {


        const fetchLogs = async () => {

            const data = await getLogs(projectId);

            setLogs(data);

        };


        if (projectId) {

            fetchLogs();

        }


    }, [projectId]);

    return (

        <div className="min-h-screen bg-[#030712] text-white p-6">

            <div className="max-w-7xl mx-auto">

                <Link
                    href={`/projects/${projectId}`}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-2"
                >
                    <ArrowLeft size={22} />
                    <span>Back to Project</span>
                </Link>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">


                    <h1 className="text-4xl font-bold">

                        Developer Journal

                    </h1>

                </div>

                <div className="grid lg:grid-cols-3 gap-6">

                    <div>

                        <LogForm

                            projectId={projectId}

                            logs={logs}

                            setLogs={setLogs}

                            editLog={editLog}

                            setEditLog={setEditLog}

                        />

                    </div>

                    <div className="lg:col-span-2">

                        <div className="flex flex-col md:flex-row gap-4 mb-6">

                            <LogSearch search={search} setSearch={setSearch} />

                            <LogFilter filter={filter} setFilter={setFilter} />

                        </div>

                        <LogList

                            logs={logs}

                            setLogs={setLogs}

                            search={search}

                            filter={filter}

                            onEdit={handleEdit}

                            onDelete={handleDelete}

                        />

                    </div>

                </div>

            </div>

        </div>

    )

}