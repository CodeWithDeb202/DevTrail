"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function ProgressCard({ progress }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6"
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold flex items-center gap-2">
                    <TrendingUp size={20} className="text-blue-400" />
                    Overall Progress
                </h2>
                <span className="text-blue-400 font-bold">{progress}%</span>
            </div>

            <div className="mt-5 h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <p className="text-gray-400 mt-3">
                {progress}% completed
            </p>
        </motion.div>
    );
}
