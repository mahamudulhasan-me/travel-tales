"use client";
import { motion } from "framer-motion";
const SendIcon = () => {
  return (
    <motion.div
      animate={{
        x: [0, 15, 0],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mb-1"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        className="inline-block"
      >
        <defs>
          <linearGradient id="sendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          d="m22 2-7 20-4-9-9-4Z"
          stroke="url(#sendGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2 11 13"
          stroke="url(#sendGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default SendIcon;
