"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({ reset }) {
    return (
        <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center flex-col px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                    <AlertTriangle size={40} />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold">
                    Something went wrong
                </h1>

                <p className="text-gray-400 mt-4 max-w-md mx-auto">
                    An unexpected error occurred. Please try again or refresh
                    the page.
                </p>

                <button
                    onClick={() => reset?.()}
                    className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition"
                >
                    <RotateCcw size={18} />
                    Try Again
                </button>
            </motion.div>
        </div>
    );
}
