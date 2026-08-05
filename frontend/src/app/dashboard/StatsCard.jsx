"use client";

import { motion } from "framer-motion";

export default function StatsCard({ title, value, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition"
        >
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-400 text-sm">{title}</p>
                    <h2 className="text-3xl font-bold text-white mt-2">
                        {value}
                    </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {icon}
                </div>
            </div>
        </motion.div>
    );
}
