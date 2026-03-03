// components/EducationSection.jsx - Fixed Version
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  Camera,
  Coffee,
  Film,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Music,
  Plane,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const education = {
  degree: "Bachelor of Engineering",
  institution: "Atmiya Institute of Technology and Science",
  location: "Rajkot",
  period: "06/2015 – 07/2018",
  percentage: "78%",
  achievements: [
    "Led the Final Year Engineering Project from planning to successful delivery.",
    "Recognized for team leadership and coordination during college projects.",
    "Demonstrated good teamwork, problem-solving, and leadership skills during college projects.",
  ],
  courses: [
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Web Development",
    "IoT Fundamentals",
  ],
};

const hobbies = [
  {
    name: "Playing Cricket",
    icon: <Target className="w-4 h-4" />,
    color: "from-green-400 to-emerald-400",
  }, // Target instead of CricketBall
  {
    name: "Watching Cricket",
    icon: <Trophy className="w-4 h-4" />,
    color: "from-blue-400 to-cyan-400",
  },
  { name: "Videography", icon: <Film className="w-4 h-4" />, color: "from-purple-400 to-pink-400" },
  {
    name: "Photography",
    icon: <Camera className="w-4 h-4" />,
    color: "from-amber-400 to-orange-400",
  },
  {
    name: "Travelling",
    icon: <Plane className="w-4 h-4" />,
    color: "from-indigo-400 to-purple-400",
  },
  { name: "Music", icon: <Music className="w-4 h-4" />, color: "from-red-400 to-rose-400" },
  { name: "Tea", icon: <Coffee className="w-4 h-4" />, color: "from-stone-400 to-neutral-400" },
  { name: "Technology", icon: <Globe className="w-4 h-4" />, color: "from-sky-400 to-blue-400" },
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

// Floating Element Component
function FloatingElement({ children, delay = 0, duration = 3 }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function EducationSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const arr = [...Array(30)].map((_, i) => ({
        id: i,
        x1: Math.random() * window.innerWidth,
        x2: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        y2: Math.random() * window.innerHeight,
        duration: Math.random() * 30 + 30,
      }));
      setParticles(arr);
    }
  }, []);

  return (
    <section className="relative px-4 py-32 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_50%)]"></div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full bg-white/20"
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
            <GraduationCap className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Academic Background</span>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-white via-green-200 to-white bg-clip-text">
              Education &
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
              Personal Interests
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Academic foundation and passions that drive creativity and excellence
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Education Card - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <TiltCard>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-full group"
              >
                {/* Card Background */}
                <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-green-500 to-blue-500 opacity-5 rounded-3xl blur-xl group-hover:opacity-10" />

                {/* Main Card */}
                <div className="relative h-full p-8 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent_70%)]" />

                  {/* Floating Icons */}
                  <FloatingElement delay={0} duration={4}>
                    <GraduationCap className="absolute w-12 h-12 top-6 right-6 text-white/5" />
                  </FloatingElement>

                  <FloatingElement delay={1} duration={5}>
                    <BookOpen className="absolute w-16 h-16 bottom-6 left-6 text-white/5" />
                  </FloatingElement>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-3xl font-bold text-white">{education.degree}</h3>
                        <p className="text-xl text-gray-300">{education.institution}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span>Percentage: {education.percentage}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="flex items-center gap-2 mb-4 text-sm font-semibold text-green-400">
                        <Trophy className="w-4 h-4" />
                        KEY ACHIEVEMENTS
                      </h4>
                      <div className="space-y-3">
                        {education.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 mt-2" />
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="flex items-center gap-2 mb-4 text-sm font-semibold text-blue-400">
                        <BookOpen className="w-4 h-4" />
                        KEY COURSES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1 text-sm text-gray-300 transition-all border rounded-full bg-white/5 border-white/10 hover:border-green-500/50"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute w-64 h-64 rounded-full -bottom-20 -right-20 bg-gradient-to-r from-green-500 to-blue-500 opacity-5 blur-3xl" />
                  <div className="absolute w-64 h-64 rounded-full -top-20 -left-20 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 blur-3xl" />
                </div>
              </motion.div>
            </TiltCard>
          </div>

          {/* Hobbies Card - Takes 1 column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-full group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-purple-500 to-pink-500 opacity-5 rounded-3xl blur-xl group-hover:opacity-10" />

              {/* Main Card */}
              <div className="relative h-full p-8 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                {/* Floating Hearts */}
                <FloatingElement delay={2} duration={3}>
                  <Heart className="absolute w-12 h-12 top-6 right-6 text-white/5" />
                </FloatingElement>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Hobbies & Interests</h3>
                  </div>

                  <div className="space-y-4">
                    {hobbies.map((hobby, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-3 p-3 transition-all border cursor-pointer rounded-xl bg-white/5 border-white/5 hover:border-white/20 group/item"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${hobby.color} bg-opacity-20 flex items-center justify-center`}
                        >
                          <div className="text-white">{hobby.icon}</div>
                        </div>
                        <span className="text-gray-300 transition-colors group-hover/item:text-white">
                          {hobby.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 mt-8 border bg-white/5 rounded-xl border-white/10"
                  >
                    <p className="text-sm italic text-gray-400">
                      "Balance between work and passion creates excellence in both."
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4"
        >
          {[
            {
              label: "Graduation Year",
              value: "2018",
              icon: <Calendar className="w-5 h-5" />,
              color: "from-green-500 to-emerald-500",
            },
            {
              label: "Industy Certificate",
              value: "3+",
              icon: <BookOpen className="w-5 h-5" />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Projects",
              value: "6+",
              icon: <Award className="w-5 h-5" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Hobbies",
              value: "8",
              icon: <Heart className="w-5 h-5" />,
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

        {/* Timeline Decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative h-1 max-w-3xl mx-auto mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
          <div className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
            <div className="absolute inset-0 bg-green-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
