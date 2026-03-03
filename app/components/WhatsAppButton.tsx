"use client"

import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27826490965"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}