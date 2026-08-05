import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, FolderOpen } from "lucide-react";

export default function QuickActions() {
    return (
        <div className="flex gap-4 flex-wrap">
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                <Link
                    href="/create-project"
                    className="bg-blue-600 px-5 py-3 rounded-xl text-white inline-flex items-center gap-2 hover:bg-blue-500 transition"
                >
                    <Plus size={18} />
                    Create Project
                </Link>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                <Link
                    href="/projects"
                    className="bg-white/10 px-5 py-3 rounded-xl text-white inline-flex items-center gap-2 hover:bg-white/20 transition"
                >
                    <FolderOpen size={18} />
                    View Projects
                </Link>
            </motion.div>
        </div>
    );
}
