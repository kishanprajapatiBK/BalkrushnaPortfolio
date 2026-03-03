// components/ContactSection.jsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Coffee,
  Copy,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Twitter,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

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
        y: [0, -15, 0],
        x: [0, 5, -5, 0],
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

// Animated Input Field
function AnimatedInput({ type, placeholder, icon: Icon, color = "from-purple-500 to-pink-500" }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity`}
      />
      <div className="relative flex items-center">
        <Icon
          className={`absolute left-4 w-5 h-5 transition-colors ${isFocused ? `text-transparent bg-gradient-to-r ${color} bg-clip-text` : "text-gray-500"}`}
        />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all border bg-white/5 border-white/10 rounded-xl focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500/50"
        />
      </div>
      {isFocused && (
        <motion.div
          layoutId="input-glow"
          className={`absolute inset-0 -z-10 bg-gradient-to-r ${color} opacity-20 blur-xl rounded-xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        />
      )}
    </motion.div>
  );
}

export function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kishanprajapatipk49@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative px-4 py-32 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.1),transparent_50%)]"></div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-20 left-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 200, 0],
          }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Icons */}
        <FloatingElement delay={0} duration={8}>
          <Mail className="absolute w-16 h-16 top-1/4 left-1/4 text-white/5" />
        </FloatingElement>
        <FloatingElement delay={2} duration={10}>
          <Phone className="absolute w-20 h-20 bottom-1/3 right-1/3 text-white/5" />
        </FloatingElement>
        <FloatingElement delay={4} duration={12}>
          <MessageCircle className="absolute w-24 h-24 top-2/3 left-1/2 text-white/5" />
        </FloatingElement>
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
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Available for Opportunities</span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
              Let's
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text">
              Connect
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Have a project in mind? Let's discuss how I can help you achieve your goals
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Info Card */}
          <TiltCard>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-purple-500 to-pink-500 opacity-5 rounded-3xl blur-xl group-hover:opacity-10" />

              {/* Main Card */}
              <div className="relative h-full p-8 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent_70%)]" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                    <Mail className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-white">Contact Information</h3>
                    <p className="text-sm text-gray-400">Reach out anytime</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mb-8 space-y-6">
                  {/* Email */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 transition-all border rounded-xl bg-white/5 border-white/5 hover:border-purple-500/30 group/item"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm text-gray-400">Email</p>
                      <p className="font-medium text-white">kishanprajapatipk49@gmail.com</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleCopyEmail}
                      className="p-2 transition-opacity rounded-lg opacity-0 bg-white/5 group-hover/item:opacity-100"
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 transition-all border rounded-xl bg-white/5 border-white/5 hover:border-pink-500/30"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 bg-opacity-20">
                      <Phone className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-gray-400">Phone</p>
                      <p className="font-medium text-white">+91 97372 64428</p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 transition-all border rounded-xl bg-white/5 border-white/5 hover:border-amber-500/30"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 bg-opacity-20">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-gray-400">Location</p>
                      <p className="font-medium text-white">Ahmedabad, India</p>
                    </div>
                  </motion.div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-3 p-4 mb-8 border bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border-white/10">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm text-gray-300">Typical response time</p>
                    <p className="text-sm font-semibold text-white"> 24 hours</p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-gray-400">
                    Connect on social media
                  </h4>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Github,
                        href: "#",
                        label: "GitHub",
                        color: "from-gray-600 to-gray-700",
                      },
                      {
                        icon: Linkedin,
                        href: "#",
                        label: "LinkedIn",
                        color: "from-blue-600 to-blue-700",
                      },
                      {
                        icon: Twitter,
                        href: "#",
                        label: "Twitter",
                        color: "from-sky-500 to-sky-600",
                      },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        className="relative group/social"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity blur-md`}
                        />
                        <div className="relative flex items-center justify-center w-12 h-12 transition-all border rounded-xl bg-white/5 border-white/10 group-hover/social:border-transparent">
                          <social.icon className="w-5 h-5 text-gray-400 transition-colors group-hover/social:text-white" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl" />
              </div>
            </motion.div>
          </TiltCard>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Card Background */}
            <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-purple-500 to-pink-500 opacity-5 rounded-3xl blur-xl group-hover:opacity-10" />

            {/* Main Card */}
            <div className="relative p-8 overflow-hidden border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <Send className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="mb-1 text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-sm text-gray-400">I'll get back to you soon</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <AnimatedInput
                  type="text"
                  placeholder="Your Name"
                  icon={MessageCircle}
                  color="from-purple-500 to-pink-500"
                />

                <AnimatedInput
                  type="email"
                  placeholder="Your Email"
                  icon={Mail}
                  color="from-pink-500 to-rose-500"
                />

                <AnimatedInput
                  type="text"
                  placeholder="Subject"
                  icon={Zap}
                  color="from-amber-500 to-orange-500"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-4 text-white placeholder-gray-500 transition-all border resize-none bg-white/5 border-white/10 rounded-xl focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500/50"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl" />
                  <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-purple-700 to-pink-700 group-hover/btn:opacity-100 rounded-xl" />

                  <div className="relative flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white">
                    {formStatus === "idle" && (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </>
                    )}
                    {formStatus === "sending" && (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                        />
                        Sending...
                      </>
                    )}
                    {formStatus === "success" && (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    )}
                    {formStatus === "error" && (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        Something went wrong
                      </>
                    )}
                  </div>
                </motion.button>
              </form>

              {/* Decorative Elements */}
              <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl" />
            </div>
          </motion.div>
        </div>

        

       
      </div>
    </section>
  );
}
