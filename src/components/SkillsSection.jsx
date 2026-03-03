// components/SkillsSection.jsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Shield,
  Smartphone,
  Star,
  Terminal,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Testing Expertise",
    icon: <Shield className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Manual Testing", level: 98, icon: <CheckCircle2 className="w-4 h-4" /> },
      { name: "Functional Testing", level: 95, icon: <CheckCircle2 className="w-4 h-4" /> },
      { name: "Regression Testing", level: 92, icon: <CheckCircle2 className="w-4 h-4" /> },
      { name: "Smoke Testing", level: 90, icon: <CheckCircle2 className="w-4 h-4" /> },
      { name: "Sanity Testing", level: 88, icon: <CheckCircle2 className="w-4 h-4" /> },
      { name: "Responsive Testing", level: 85, icon: <Smartphone className="w-4 h-4" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "JIRA", level: 95, icon: <GitBranch className="w-4 h-4" /> },
      { name: "Postman", level: 90, icon: <Terminal className="w-4 h-4" /> },
      { name: "API Testing", level: 88, icon: <Globe className="w-4 h-4" /> },
      { name: "Selenium", level: 75, icon: <Code2 className="w-4 h-4" /> },
      { name: "IoT Testing", level: 85, icon: <Cpu className="w-4 h-4" /> },
      { name: "TestRail", level: 82, icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    title: "Professional Skills",
    icon: <Users className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Teamwork", level: 98, icon: <Users className="w-4 h-4" /> },
      { name: "Leadership", level: 88, icon: <Award className="w-4 h-4" /> },
      { name: "Problem-solving", level: 95, icon: <Zap className="w-4 h-4" /> },
      { name: "Agile Methodology", level: 92, icon: <TrendingUp className="w-4 h-4" /> },
      { name: "Scrum", level: 90, icon: <Layers className="w-4 h-4" /> },
      { name: "Communication", level: 87, icon: <Star className="w-4 h-4" /> },
    ],
  },
  {
    title: "Technical Knowledge",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "SDLC", level: 94, icon: <Database className="w-4 h-4" /> },
      { name: "STLC", level: 96, icon: <Database className="w-4 h-4" /> },
      { name: "RTM", level: 90, icon: <GitBranch className="w-4 h-4" /> },
      { name: "Test Case Design", level: 92, icon: <Layout className="w-4 h-4" /> },
      { name: "Defect Tracking", level: 95, icon: <Shield className="w-4 h-4" /> },
      { name: "SQL Basics", level: 78, icon: <Database className="w-4 h-4" /> },
    ],
  },
];

// 3D Tilt Card Component
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPercent = (mouseX / width - 0.5) * 2;
    const yPercent = (mouseY / height - 0.5) * 2;
    x.set(xPercent * 100);
    y.set(yPercent * 100);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: hovering ? springRotateX : 0,
        rotateY: hovering ? springRotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  );
}

// Skill Bar Component
function SkillBar({ name, level, icon, color, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-transparent bg-gradient-to-r ${color} bg-clip-text`}>{icon}</span>
          <span className="text-sm font-medium text-gray-300">{name}</span>
        </div>
        <motion.span
          animate={{ scale: isHovered ? 1.2 : 1 }}
          className={`text-sm font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text`}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const arr = [...Array(20)].map((_, i) => ({
        id: i,
        x1: Math.random() * window.innerWidth,
        x2: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        y2: Math.random() * window.innerHeight,
        duration: Math.random() * 20 + 20,
      }));
      setParticles(arr);
    }
  }, []);

  return (
    <section className="relative px-4 py-32 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.1),transparent_50%)]"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            animate={{ x: [p.x1, p.x2], y: [p.y1, p.y2] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
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
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Comprehensive Skill Set</span>
            <Award className="w-4 h-4 text-purple-400" />
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
              Technical
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text">
              Expertise
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Mastery across testing methodologies, tools, and professional practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <TiltCard key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-full group"
              >
                {/* Card Background with Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity`}
                />

                {/* Main Card */}
                <div className="relative h-full p-8 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent_70%)]" />

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20 flex items-center justify-center`}
                    >
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-white">{category.title}</h3>
                      <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.color}`} />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <SkillBar
                        key={i}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                        color={category.color}
                        index={i}
                      />
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r ${category.color} opacity-5 rounded-full blur-3xl`}
                  />
                  <div
                    className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r ${category.color} opacity-5 rounded-full blur-3xl`}
                  />
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-4 mt-16 md:grid-cols-4"
        >
          {[
            {
              label: "Years Experience",
              value: "3+",
              icon: <TrendingUp className="w-5 h-5" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Tools Mastered",
              value: "8+",
              icon: <Wrench className="w-5 h-5" />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Certifications",
              value: "3+",
              icon: <Award className="w-5 h-5" />,
              color: "from-green-500 to-emerald-500",
            },
            {
              label: "Projects",
              value: "5+",
              icon: <Layers className="w-5 h-5" />,
              color: "from-orange-500 to-red-500",
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

        {/* Skill Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-sm text-gray-500">TRUSTED BY</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {[
              "JIRA",
              "Postman",
              "Selenium",
              "TestRail",
              "Git",
              "Jenkins",
              "Docker",
              "Kubernetes",
            ].map((tool, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
                className="font-medium text-gray-600"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
