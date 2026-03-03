"use client"

import { motion } from "framer-motion"
import Background3D from "./components/Background3D"
import Image from "next/image"
import { Phone, MessageCircle, Instagram, Facebook, Mail, MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-[#0a0f1c] text-white relative overflow-hidden">

      <Background3D />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <Image
          src="/logo.png"
          alt="TandaTech Logo"
          width={200}
          height={200}
          className="mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Professional IT & Networking Solutions in Randburg
        </motion.h1>

        <p className="mt-6 max-w-xl text-gray-300">
          Custom solutions for homes and small businesses. Clean installs. Fast support. Real expertise.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="https://wa.me/27826490965"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
          >
            <MessageCircle size={18} /> WhatsApp Now
          </a>

          <a
            href="tel:0826490965"
            className="border border-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Network Installations",
            "WiFi Optimization",
            "CCTV Installation",
            "Structured Cabling",
            "Laptop & PC Repairs",
            "On-Site IT Support"
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] p-6 rounded-2xl shadow-lg"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </section>
      {/* WORK SHOWCASE */}
<section className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">
    Recent Installations
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[1,2,3,4,5,6,7,8,9,10].map((num) => (
      <motion.div
        key={num}
        whileHover={{ scale: 1.05 }}
        className="overflow-hidden rounded-2xl"
      >
        <Image
          src={`/work/work${num}.jpeg`}
          alt="TandaTech Installation"
          width={500}
          height={400}
          className="rounded-2xl object-cover"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <h2 className="text-3xl font-bold mb-6">Contact TandaTech</h2>

        <div className="space-y-4">
          <p className="flex justify-center items-center gap-2">
            <MapPin size={18} /> 32 Hill Street, Ferndale, Randburg, 2194
          </p>

          <p className="flex justify-center items-center gap-2">
            <Mail size={18} /> info@tandatech.co.za
          </p>

          <p className="flex justify-center items-center gap-2">
            <Phone size={18} /> 082 649 0965
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://instagram.com/tandatech.co.za">
            <Instagram />
          </a>

          <a href="#">
            <Facebook />
          </a>
        </div>
      </section>

    </main>
  )
}