"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Background3D from "./components/Background3D"
import Image from "next/image"
import { Phone, MessageCircle, Instagram, Facebook, Mail, MapPin } from "lucide-react"
import Navbar from "./components/Navbar"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  const { scrollY } = useScroll()
  const useScrollY = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <main className="text-white relative">
      <Navbar />
      <WhatsAppButton />
      <Background3D />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.1 }}
        >
          <motion.div style={{ y: useScrollY }} className="w-full h-full">
            <Image
              src="/hero-bg.jpg"
              alt="Tech Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 -z-10"></div>
        <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="mt-10"
>
  <Image
  
    src="/logo2.png"
    alt="TandaTech Logo"
    width={310}
    height={310}
    className="mb-10"
    priority
  />
</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Custom Solutions for Every Digital Challenge.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-2xl text-gray-300 text-lg"
        >
          Custom solutions for homes and small businesses. Clean installs. Fast support. Real expertise.
        </motion.p>

        <div className="mt-12 flex gap-6 flex-wrap justify-center">
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

          <a
            href="mailto:info@tandatech.co.za"
            className="border border-gray-400 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <Mail size={18} /> Email Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Network Installations", desc: "Structured, scalable and clean deployments." },
            { title: "WiFi Optimization", desc: "Stronger coverage, better performance." },
            { title: "CCTV Installation", desc: "Secure, reliable surveillance systems." },
            { title: "Structured Cabling", desc: "Professional cable management." },
            { title: "Laptop & PC Repairs", desc: "Hardware and software fixes." },
            { title: "On-Site IT Support", desc: "Fast response in Randburg." }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] p-6 rounded-2xl shadow-lg"
            >
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { number: "01", title: "Contact Us", desc: "Message us on WhatsApp or call and explain the issue." },
              { number: "02", title: "We Assess", desc: "We evaluate remotely or on-site and provide a clear quote." },
              { number: "03", title: "We Fix or Install", desc: "Professional work delivered efficiently and tested properly." }
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 bg-[#111827] rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl font-bold text-green-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PRICING */}

<section id="pricing" className="py-20 px-6 bg-[#0f172a]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
      Pricing Guide
    </h2>

    <p className="text-center text-gray-400 mb-16">
      Transparent pricing. No hidden call-out surprises.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* REMOTE SUPPORT */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Remote Support</h3>
        <p className="text-3xl font-bold mb-6">From R350</p>
        <ul className="space-y-3 text-gray-400 mb-6">
          <li>✔ Virus Removal</li>
          <li>✔ Software Troubleshooting</li>
          <li>✔ Email Setup</li>
          <li>✔ Microsoft 365 Setup</li>
        </ul>
      </div>

      {/* ON-SITE SUPPORT */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border-2 border-green-500">
        <h3 className="text-xl font-semibold mb-4">On-Site Support</h3>
        <p className="text-3xl font-bold mb-6">From R450</p>
        <ul className="space-y-3 text-gray-400 mb-6">
          <li>✔ PC & Laptop Repairs</li>
          <li>✔ Network Troubleshooting</li>
          <li>✔ WiFi Optimization</li>
          <li>✔ Printer Setup</li>
        </ul>
      </div>

      {/* BUSINESS PACKAGE */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Business IT Package</h3>
        <p className="text-3xl font-bold mb-6">From R1,500</p>
        <ul className="space-y-3 text-gray-400 mb-6">
          <li>✔ Network Setup</li>
          <li>✔ Router Configuration</li>
          <li>✔ Basic Firewall Setup</li>
          <li>✔ Office Device Setup</li>
        </ul>
      </div>

    </div>

    {/* INDIVIDUAL PRICES */}
    <div className="mt-20">
      <h3 className="text-2xl font-semibold mb-8 text-center">
        Individual Service Pricing (From)
      </h3>

      <div className="grid md:grid-cols-2 gap-6 text-gray-300">

        <div className="bg-[#111827] p-6 rounded-xl">
          • SSD Upgrade Installation – <span className="font-semibold">From R500</span><br/>
          • Laptop Screen Replacement – <span className="font-semibold">From R1,200</span><br/>
          • Windows Installation – <span className="font-semibold">From R450</span><br/>
          • Data Recovery (Basic) – <span className="font-semibold">From R800</span>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl">
          • CCTV Installation (Per Camera) – <span className="font-semibold">From R950</span><br/>
          • Structured Cabling (Per Point) – <span className="font-semibold">From R650</span><br/>
          • UniFi / MikroTik Router Setup – <span className="font-semibold">From R1,000</span><br/>
          • Microsoft 365 Business Setup – <span className="font-semibold">From R550</span>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        Final pricing may vary depending on hardware and complexity.
      </p>
    </div>
  </div>
</section>
{/* MANAGED SUPPORT PLANS */}
<div className="mt-24">
  <h3 className="text-2xl font-semibold text-center mb-12">
    Managed IT Support Plans
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {/* HOME PLAN */}
    <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
      <h4 className="text-xl font-semibold mb-4">Home IT Care</h4>
      <p className="text-3xl font-bold mb-6">
        From R499 <span className="text-base font-normal text-gray-400">/month</span>
      </p>
      <ul className="space-y-3 text-gray-400">
        <li>✔ Remote Support (2 Sessions)</li>
        <li>✔ Priority WhatsApp Response</li>
        <li>✔ Antivirus Health Check</li>
        <li>✔ System Optimization</li>
      </ul>
    </div>

    {/* SMALL OFFICE */}
    <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border-2 border-green-500">
      <h4 className="text-xl font-semibold mb-4">Small Office Plan</h4>
      <p className="text-3xl font-bold mb-6">
        From R1,200 <span className="text-base font-normal text-gray-400">/month</span>
      </p>
      <ul className="space-y-3 text-gray-400">
        <li>✔ Up to 5 Devices Covered</li>
        <li>✔ Remote + On-Site Support</li>
        <li>✔ Network Monitoring</li>
        <li>✔ Monthly Maintenance Check</li>
      </ul>
    </div>

    {/* BUSINESS PLAN */}
    <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
      <h4 className="text-xl font-semibold mb-4">Business Support Pro</h4>
      <p className="text-3xl font-bold mb-6">
        From R2,500 <span className="text-base font-normal text-gray-400">/month</span>
      </p>
      <ul className="space-y-3 text-gray-400">
        <li>✔ Up to 15 Devices Covered</li>
        <li>✔ Dedicated Priority Support</li>
        <li>✔ Network & Firewall Management</li>
        <li>✔ Backup Monitoring</li>
      </ul>
    </div>

  </div>

  <p className="text-center text-gray-500 mt-8 text-sm">
    Custom enterprise plans available on request.
  </p>
</div>
{/* TESTIMONIALS */}
<section className="py-20 px-6 bg-[#0a0f1c]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
      What Clients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-[#111827] p-6 rounded-2xl shadow-lg">
        <p className="text-gray-400 mb-4">
          “Professional and efficient. My office network installation was clean and properly managed.”
        </p>
        <h4 className="font-semibold">– Retail Store Owner, Ferndale</h4>
      </div>

      <div className="bg-[#111827] p-6 rounded-2xl shadow-lg">
        <p className="text-gray-400 mb-4">
          “WiFi issues fixed same day. Very knowledgeable and reliable.”
        </p>
        <h4 className="font-semibold">– Home Client, Randburg</h4>
      </div>

      <div className="bg-[#111827] p-6 rounded-2xl shadow-lg">
        <p className="text-gray-400 mb-4">
          “CCTV installation was neat and professional. Highly recommended.”
        </p>
        <h4 className="font-semibold">– Small Business Client</h4>
      </div>
    </div>
  </div>
</section>
{/* OUR PARTNERS */}
<section className="py-20 px-6 bg-[#0f172a]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">Our Technology Partners</h2>

    <div className="grid md:grid-cols-4 gap-8 text-gray-400 text-lg font-semibold">
      <div>MikroTik</div>
      <div>Ubiquiti UniFi</div>
      <div>HP</div>
      <div>Dell</div>
      <div>Lenovo</div>
      <div>Microsoft</div>
      <div>TP-Link</div>
      <div>Hikvision</div>
    </div>
  </div>
</section>
{/* ABOUT US */}
<section id="about" className="py-24 px-6 bg-[#0a0f1c]">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-16">
      About TandaTech
    </h2>

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* ABOUT COMPANY */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Who We Are</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
  Founded in 2023, TandaTech is an independent IT and networking solutions provider
  delivering professional technical support and infrastructure services to homes and small businesses
  across South Africa, with a strong operational presence in Gauteng. 
</p>

<p className="text-gray-400 leading-relaxed">
  We specialize in network installations, WiFi optimization, structured
  cabling, CCTV deployment, and ongoing technical support. Our approach is
  built on clean execution, transparent pricing, and long-term client
  relationships.
</p>

        <p className="text-gray-500 text-sm mt-6">
          Registered Company Number: 2023 / 801455 / 07
        </p>
      </div>

      {/* FOUNDER PROFILE */}
<div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
  <div className="flex flex-col items-center text-center">

    <Image
      src="/taj.jpg"
      alt="Taj Thomas Thobela"
      width={160}
      height={160}
      className="rounded-full mb-6 object-cover"
    />

    <h3 className="text-2xl font-semibold mb-2">
      Taj Thomas Thobela
    </h3>

    <p className="text-gray-400 mb-6">
      Founder & Lead IT Technician
    </p>

    <div className="text-left text-gray-400 space-y-3 w-full">
      <p>• Advanced Diploma in ICT</p>
      <p>• Microsoft 365 Administration (Professional Development)</p>
      <p>• Network Infrastructure & Routing (Vendor Experience: MikroTik / UniFi)</p>
      <p>• Structured Cabling & CCTV Deployment</p>
      <p>• Project-Based IT Installations</p>
    </div>

  </div>
</div>

    </div>

    {/* VISION & MISSION */}
    <div className="grid md:grid-cols-2 gap-12 mt-20">

      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-400">
          To provide dependable, transparent, and professional IT solutions
          that help homes and small businesses operate efficiently and securely.
        </p>
      </div>

      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
        <p className="text-gray-400">
          To become a trusted IT partner in Gauteng, known for reliability,
          clean technical execution, and long-term client relationships.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* WORK SHOWCASE */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Recent Installations</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
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
      </motion.section>
      {/* CONTACT */}
<section id="contact" className="py-20 px-6 bg-[#0a0f1c]">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-8">
      Contact TandaTech
    </h2>

    <div className="space-y-4 text-gray-300 mb-10">
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

    {/* GOOGLE MAPS EMBED */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=32%20Hill%20Street%20Ferndale%20Randburg%202194&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>

    </main>
  )
}