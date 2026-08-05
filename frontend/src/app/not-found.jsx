"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center flex-col px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                    <Compass size={40} />
                </div>

                <h1 className="text-7xl md:text-8xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    404
                </h1>

                <p className="text-gray-400 mt-4 text-lg">
                    Page not found
                </p>

                <p className="text-gray-500 mt-2 max-w-sm mx-auto">
                    The page you are looking for does not exist or has been
                    moved.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition"
                >
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
}
