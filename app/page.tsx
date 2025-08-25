'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Users, Calendar, BarChart3, MonitorCheck } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const fullText = "Conference Room Management & Meeting System";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = displayedText.length;
      if (!isDeleting && i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        setSpeed(100);
      } else if (isDeleting && i > 0) {
        setDisplayedText(fullText.substring(0, i - 1));
        setSpeed(50);
      } else if (!isDeleting && i === fullText.length) {
        setIsDeleting(true);
        setSpeed(1500);
      } else if (isDeleting && i === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-gradient-to-b from-white to-[#E6F7FF]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/assets/platform.PNG"
      alt="Background"
      className="w-full h-full object-contain opacity-20"
    />
  </div>

  {/* Content */}
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-bold text-[#0E98D8] h-24 mb-8 relative z-10"
  >
    {displayedText}
    <span className="animate-pulse">|</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="mt-4 text-lg md:text-xl max-w-2xl relative z-10"
  >
    Developed during a 2-month summer internship with COSL in China.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="mt-8 relative z-10"
  >
    <Link href={"/signin"}>
      <button className="bg-[#0E98D8] hover:bg-[#0C7AB0] text-white px-6 py-3 rounded-2xl shadow-lg cursor-pointer">
      Explore Frontend
    </button>
    </Link>
  </motion.div>
</section>


{/* About Section */}
<section className="py-20 px-6 md:px-20 bg-gray-50">
<div className="grid md:grid-cols-2 gap-10 items-center">
{/* Left: Image */}
<motion.img
src="/assets/ship.gif"
alt="Project illustration"
className="rounded-lg shadow-lg"
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
/>


{/* Right: Text */}
<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
>
<h2 className="text-3xl font-bold text-[#0E98D8] mb-6">
About the Project
</h2>
<p className="text-lg leading-relaxed">
This project was developed during a two-month international summer internship at COSL in China.
The system streamlines conference room booking, meeting management, and utilization analytics.
It provides a seamless experience for employees to manage users, rooms, and schedules effectively.
</p>
</motion.div>
</div>
</section>

      {/* Modules Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0E98D8] mb-12">
            System Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-[#0E98D8] mb-4" />
              <h3 className="font-semibold text-lg mb-2">User Management</h3>
              <p> Manage name, department, and email records.</p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
              <MonitorCheck className="w-10 h-10 text-[#0E98D8] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Conference Room Management</h3>
              <p>CRUD operations for rooms: name, location, capacity, equipment, and status.</p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
              <Calendar className="w-10 h-10 text-[#0E98D8] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Room Booking</h3>
              <p>Book rooms, add meeting details, invite attendees, detect conflicts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0E98D8] mb-12">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Real-time Updates" },
              { icon: MonitorCheck, title: "Conflict Detection" },
              { icon: Users, title: "Conference Room Booking" },
              { icon: BarChart3, title: "Analytics & Reports" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-sm"
              >
                <feature.icon className="w-10 h-10 text-[#0E98D8] mb-4" />
                <h3 className="font-medium text-lg">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 text-center text-sm text-gray-600">
        Developed by <span className="font-semibold">Muhannad Alduraywish</span> during Summer Internship at COSL, China.
      </footer>
    </div>
  );
}
