// components/CertificatesSection.jsx
"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Calendar,
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Medal,
  Share2,
  Shield,
  Star,
  Trophy,
} from "lucide-react";
import { useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Agile Fundamentals and Scrum Workshop",
    issuer: "TSS Consultancy",
    date: "2024",
    credentialId: "AGILE-2024-001",
    skills: ["Agile", "Scrum", "Sprint Planning"],
    color: "from-blue-500 to-cyan-500",
    icon: <BookOpen className="w-6 h-6" />,
    type: "Professional Workshop",
  },
  {
    id: 2,
    title: "Manual Testing Workshop",
    issuer: "TSS Consultancy",
    date: "2024",
    credentialId: "TEST-2024-002",
    skills: ["Test Cases", "Bug Tracking", "QA Process"],
    color: "from-purple-500 to-pink-500",
    icon: <FileText className="w-6 h-6" />,
    type: "Technical Certification",
  },
  {
    id: 3,
    title: "Communication Skill Workshop - Realize Your Dream",
    issuer: "TSS Consultancy",
    date: "2023",
    credentialId: "COMM-2023-003",
    skills: ["Communication", "Leadership", "Soft Skills"],
    color: "from-green-500 to-emerald-500",
    icon: <Star className="w-6 h-6" />,
    type: "Soft Skills Training",
  },
];

// 3D Flip Card Component
function FlipCard({ certificate, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = e => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * 10;
    const rotateYValue = ((centerX - x) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    if (!isFlipped) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative h-[350px] perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 cursor-pointer preserve-3d"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          rotateX: !isFlipped ? rotateX : 0,
          rotateY: !isFlipped ? rotateY : 180,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full group">
            {/* Card Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`}
            />

            {/* Main Card */}
            <div className="relative h-full p-6 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10">
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.3),transparent_70%)]" />

              {/* Top Bar with Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${certificate.color} flex items-center justify-center`}
                >
                  {certificate.icon}
                </div>
                <div className="flex gap-2">
                  <span
                    className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${certificate.color} text-white font-medium`}
                  >
                    {certificate.type}
                  </span>
                </div>
              </div>

              {/* Certificate Icon */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-6 opacity-10"
              >
                <Trophy
                  className={`w-24 h-24 text-transparent bg-gradient-to-r ${certificate.color} bg-clip-text`}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold text-white line-clamp-2">
                  {certificate.title}
                </h3>

                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Issued {certificate.date}</span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs text-gray-300 border rounded-full bg-white/5 border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Flip Hint */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1 text-xs text-gray-500"
                  >
                    <span>Click to flip</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r ${certificate.color} opacity-10 rounded-full blur-2xl`}
              />
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r ${certificate.color} opacity-10 rounded-full blur-2xl`}
              />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)]">
          <div className="relative w-full h-full group">
            {/* Card Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-10 rounded-2xl blur-xl`}
            />

            {/* Main Card */}
            <div className="relative flex flex-col items-center justify-center h-full p-6 overflow-hidden text-center border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                <BadgeCheck
                  className={`w-20 h-20 text-transparent bg-gradient-to-r ${certificate.color} bg-clip-text mb-4`}
                />
              </motion.div>

              <h4 className="mb-2 text-lg font-semibold text-white">Credential ID</h4>
              <p className="mb-4 text-sm text-gray-400">{certificate.credentialId}</p>

              <div className="flex flex-col w-full gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${certificate.color} text-white text-sm font-medium`}
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-colors border rounded-xl bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <Share2 className="w-4 h-4" />
                  Share Credential
                </motion.button>
              </div>

              <p className="mt-4 text-xs text-gray-500">Click to flip back</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CertificatesSection() {
  return (
    <section className="relative px-4 py-32 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1),transparent_50%)]"></div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-600/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-purple-600/10 blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Badges */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Award className="w-8 h-8 text-white/5" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 backdrop-blur-xl border-white/10"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Professional Credentials</span>
            <Medal className="w-4 h-4 text-purple-400" />
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text">
              Certifications &
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
              Achievements
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Verified credentials and professional development accomplishments
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <FlipCard key={cert.id} certificate={cert} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3"
        >
          {[
            {
              label: "Total Certifications",
              value: "8+",
              icon: <Award className="w-5 h-5" />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Learning Hours",
              value: "500+",
              icon: <BookOpen className="w-5 h-5" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Skills Verified",
              value: "15+",
              icon: <CheckCircle className="w-5 h-5" />,
              color: "from-green-500 to-emerald-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 text-center border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-20 flex items-center justify-center mb-3`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Verification Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border rounded-full bg-white/5 backdrop-blur-xl border-white/10">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">
              All certificates are verified and blockchain-secured
            </span>
            <BadgeCheck className="w-5 h-5 text-blue-400" />
          </div>
        </motion.div>
      </div>

      {/* Add required CSS for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
