// components/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiBug, BiCheckShield, BiCodeAlt, BiTestTube } from "react-icons/bi";
import { FiAward, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  HiOutlineArrowDown,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { MdOutlineStars, MdOutlineTrendingUp, MdOutlineVerified } from "react-icons/md";

export function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Client-side par hi generate karo
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);
  return (
    <>
      {/* Premium Background with Glassmorphism */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>

        {/* Animated gradient orbs */}
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-pink-600/20 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-amber-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero */}
      <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [null, -30, 30, -30],
                x: [null, 30, -30, 30],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/5 backdrop-blur-xl border-white/10">
              <MdOutlineStars className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text">
                QA ENGINEER
              </span>
              <MdOutlineVerified className="w-5 h-5 text-amber-400" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h1 className="mb-6 font-bold text-7xl md:text-8xl lg:text-9xl">
              <span className="text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
                Balkrushna
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text">
                Prajapati
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xl text-gray-300">
              <span className="flex items-center gap-2 px-6 py-2 border rounded-full bg-white/5 border-white/10">
                <BiCheckShield className="w-5 h-5 text-emerald-400" />
                 Quality Analyst 
              </span>
              <span className="flex items-center gap-2 px-6 py-2 border rounded-full bg-white/5 border-white/10">
                <MdOutlineTrendingUp className="w-5 h-5 text-blue-400" />
                3+ Years Excellence
              </span>
              <span className="flex items-center gap-2 px-6 py-2 border rounded-full bg-white/5 border-white/10">
                <FiAward className="w-5 h-5 text-amber-400" />
                5+ Projects Delivered
              </span>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid max-w-3xl grid-cols-2 gap-4 mx-auto mb-12 md:grid-cols-4"
          >
            {[
              {
                label: "Test Cases",
                value: "6K+",
                icon: BiTestTube,
                color: "from-purple-500 to-purple-600",
              },
              {
                label: "Bugs Found",
                value: "1K+",
                icon: BiBug,
                color: "from-pink-500 to-pink-600",
              },
              {
                label: "Agile/Scrum Sprints Delivered",
                value: "95%",
                icon: MdOutlineStars,
                color: "from-amber-500 to-amber-600",
              },
              {
                label: "Automation",
                value: "20%",
                icon: BiCodeAlt,
                color: "from-blue-500 to-blue-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 transition-all duration-300 border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10 hover:border-white/20"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center mb-3`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative px-8 py-4 overflow-hidden text-lg font-semibold rounded-full group bg-gradient-to-r from-purple-600 to-pink-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <HiOutlineArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </span>
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-purple-700 to-pink-700 group-hover:opacity-100"></div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="px-8 py-4 text-lg font-semibold transition-all border rounded-full bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10"
            >
              Experience
            </motion.a>
          </motion.div>

          {/* Contact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center max-w-2xl gap-6 p-4 mx-auto border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[2px]">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <HiOutlinePhone className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-sm text-gray-300">+91 97372 64428</span>
            </div>

            <div className="w-px h-8 bg-white/10"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[2px]">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <HiOutlineMail className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-sm text-gray-300">kishanprajapatipk49@gmail.com</span>
            </div>

            <div className="w-px h-8 bg-white/10"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[2px]">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <HiOutlineLocationMarker className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-sm text-gray-300">Ahmedabad, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-3 mt-8"
          >
            {[
              { icon: FiGithub, href: "#", color: "hover:text-purple-400" },
              { icon: FiLinkedin, href: "#", color: "hover:text-blue-400" },
              { icon: FiTwitter, href: "#", color: "hover:text-sky-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                href={social.href}
                className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all hover:border-white/20`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -translate-x-1/2 bottom-8 left-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center w-6 h-10 border-2 rounded-full border-white/20"
          >
            <motion.div
              animate={{ height: [4, 12, 4], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 mt-2 rounded-full bg-gradient-to-b from-purple-400 to-pink-400"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
