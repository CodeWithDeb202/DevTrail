"use client";

import { motion } from "framer-motion";

export default function LoadingScreen({ label = "Loading" }) {
    return (
        <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center gap-6">
            <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Outer rotating ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-blue-500/20 border-t-blue-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner counter-rotating ring */}
                <motion.div
                    className="absolute inset-2 rounded-full border-4 border-purple-500/20 border-b-purple-500"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                />
                {/* Center pulse */}
                <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white font-semibold"
            >
                Dev<span className="text-blue-500">Trail</span>
            </motion.div>

            <motion.p
                className="text-gray-400 text-sm"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                {label}...
            </motion.p>
        </div>
    );
}
