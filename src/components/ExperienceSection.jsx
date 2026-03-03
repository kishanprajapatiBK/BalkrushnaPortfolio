// components/ExperienceSection.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Box,
  Briefcase,
  Bug,
  Calendar,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  MapPin,
  Star,
  TestTube,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Quality Analyst",
    company: "Qaafie Software",
    location: "Ahmedabad",
    period: "10/2025 - Present",
    type: "Current Role",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
    achievements: [
      "Leading quality assurance for multiple high-impact projects",
      "Implemented automated testing framework reducing manual effort by 40%",
      "Mentoring junior testers in best practices",
    ],
    responsibilities: [
      "Mobile Application Testing",
      "Web Application Testing",
      "API Testing",
      "Basic Automation Testing",
    ],
  },
  {
    title: "Associate Test Engineer",
    company: "TSS Consultancy Private Limited",
    location: "Rajkot",
    period: "01/2024 – 10/2025",
    icon: <TestTube className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Achieved 95% test coverage with comprehensive RTM",
      "Received 'Star Performer' award for exceptional defect detection",
      "Reduced production bugs by 30% through rigorous testing",
    ],
    responsibilities: [
      "Analyzed software requirements and prepared test scenarios, test cases, and test data",
      "Execute manual test cases and logged defects in JIRA",
      "Performed Functional, Regression, and Smoke Testing during release cycles",
      "Prepared Requirement Traceability Matrix (RTM) for complete test coverage",
    ],
  },
  {
    title: "QA Tester",
    company: "Johnson Controls-Hitachi Air Conditioning India Ltd",
    location: "Ahmedabad",
    period: "12/2022 – 12/2024",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Successfully launched airCloud Home IoT platform with zero critical bugs",
      "Designed innovative flasher circuit improving device connectivity by 25%",
      "Received appreciation from Japanese leadership for technical excellence",
    ],
    responsibilities: [
      "Developed and executed validation plans for IoT products and features",
      "Configured test environments for airCloud Home and hardware setup",
      "Functional testing for embedded systems",
      "Hands-on experience in soldering electronic components and circuit design",
    ],
  },
];

const techStack = {
  "Qaafie Software": ["React Native", "Node.js", "Postman", "JIRA", "Selenium"],
  "TSS Consultancy Private Limited": ["JIRA", "Postman", "SQL", "RTM", "Agile"],
  "Johnson Controls-Hitachi Air Conditioning India Ltd": [
    "IoT",
    "Embedded C",
    "Hardware Testing",
    "Circuit Design",
  ],
};

export function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative px-4 py-32 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.1),transparent_50%)]"></div>

        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute rounded-full top-20 left-10 w-96 h-96 bg-purple-600/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-pink-600/10 blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header with Premium Badge */}
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
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 backdrop-blur-xl border-white/10"
          >
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">3+ Years of Excellence</span>
            <Award className="w-4 h-4 text-amber-400" />
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
              Professional
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text">
              Journey
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            A track record of delivering quality and driving excellence across domains
          </p>
        </motion.div>

        {/* Timeline Experience Cards */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            style={{ scaleY: scale, opacity }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-amber-500 origin-top"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.3 }}
                className={`absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} p-0.5 shadow-[0_0_30px_rgba(168,85,247,0.5)]`}
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-full">
                  {exp.icon}
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`w-full md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <div className="relative group">
                  {/* Glassmorphism Card */}
                  <div className="relative p-8 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10">
                    {/* Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="mb-1 text-2xl font-bold text-white">{exp.title}</h3>
                          <p
                            className={`text-lg bg-gradient-to-r ${exp.color} text-transparent bg-clip-text font-semibold`}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 border border-white/10`}
                        >
                          <span className="text-xs font-semibold text-white">
                            {exp.type || "Full Time"}
                          </span>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <span className="flex items-center gap-1 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-amber-400">
                          <Star className="w-4 h-4" />
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <ChevronRight
                                className={`w-4 h-4 mt-1 text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`}
                              />
                              <span className="text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-purple-400">
                          <Layers className="w-4 h-4" />
                          RESPONSIBILITIES
                        </h4>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                          {exp.responsibilities.map((item, i) => (
                            <motion.li
                              key={i}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2`}
                              />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="mb-3 text-xs font-semibold text-gray-500">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                          {techStack[exp.company].map((tech, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 border border-white/10 text-gray-300`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-opacity`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-20 md:grid-cols-4"
        >
          {[
            {
              label: "Defects Found",
              value: "600+",
              icon: Bug,
              color: "from-red-500 to-pink-500",
            },
            {
              label: "Test Cases",
              value: "3000+",
              icon: TestTube,
              color: "from-blue-500 to-cyan-500",
            },
            { label: "Projects", value: "6+", icon: Box, color: "from-green-500 to-emerald-500" },
            {
              label: "Automation",
              value: "20%",
              icon: Code2,
              color: "from-purple-500 to-indigo-500",
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
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
