"use client";

import { motion } from "framer-motion";

export default function ModernBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient — switches with mode */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-slate-100 via-white to-slate-200
          dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        "
      />

      {/* animated blob 1 — theme aware */}
      <motion.div
        animate={{ x: [0, 120, -80, 0], y: [0, -60, 100, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        className="
          absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl
          bg-blue-500/25
          dark:bg-blue-600/20
        "
      />

      {/* animated blob 2 — theme aware */}
      <motion.div
        animate={{ x: [0, -100, 140, 0], y: [0, 120, -80, 0] }}
        transition={{ duration: 26, repeat: Infinity }}
        className="
          absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl
          bg-purple-500/25
          dark:bg-purple-600/20
        "
      />

      {/* grid overlay — invert color for light/dark */}
      <div
        className="
          absolute inset-0 opacity-[0.05] dark:opacity-[0.06]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />
    </div>
  );
}
