"use client";

import { motion } from "framer-motion";
import { Calendar, Hammer, Pencil, Trash2, Clock } from "lucide-react";

const statusColors = {
    Planning: "bg-yellow-500/20 text-yellow-400",
    Development: "bg-blue-500/20 text-blue-400",
    Testing: "bg-purple-500/20 text-purple-400",
    Deployment: "bg-green-500/20 text-green-400",
    Completed: "bg-emerald-500/20 text-emerald-400",
};

export default function LogCard({ log, onEdit, onDelete }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition"
        >
            <div className="flex justify-between">
                <h2 className="text-xl font-bold">{log.title}</h2>
                <div className="flex gap-3">
                    <button
                        onClick={() => onEdit(log)}
                        className="text-blue-400 hover:text-blue-300"
                    >
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(log._id)}
                        className="text-red-400 hover:text-red-300"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
                    statusColors[log.status] || "bg-blue-500/20 text-blue-400"
                }`}
            >
                {log.status}
            </span>

            <p className="text-gray-400 mt-4">{log.description}</p>

            <div className="flex flex-wrap gap-5 mt-5 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(log.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {log.timeSpent ? `${log.timeSpent}h` : "Dev Journal"}
                </div>
                <div className="flex items-center gap-2">
                    <Hammer size={16} />
                    {log.mood || "Developer Journal"}
                </div>
            </div>
        </motion.div>
    );
}
