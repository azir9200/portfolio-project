"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eye, FileDown, Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import Image from "next/image";
import HeroImg from "@/assets/images/azir.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 pt-20">
        <div className="flex justify-between items-center md:flex-row flex-col-reverse">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="md:space-y-4 space-y-2">
              <h1 className="text-xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-800">Hi, I&apos;m </span>

                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AZIR UDDIN
                </span>
              </h1>

              <h2 className="text-xl lg:text-3xl font-light">
                <span className="text-[#149ECA] font-bold">
                  <Typewriter
                    words={[
                      "Full-Stack MERN Developer.",
                      "Specializing in Clean, Scalable Web Apps & API Integration.",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </span>
              </h2>

              <p className="text-lg text-foreground leading-relaxed max-w-xl">
                I am a Senior Full-Stack Developer with 6+ years of experience
                designing, building, and maintaining production web applications
                across frontend, backend, and cloud infrastructure. Strong
                background in modern JavaScript frameworks, backend API
                development, database design, and cloud deployments. Proven
                track record delivering end-to-end solutions both as a long-term
                in-house engineer and as a senior freelancer on Upwork and
                Fiverr. Experienced in mentoring developers, reviewing code, and
                translating business requirements into practical, maintainable
                technical solutions
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/document/d/1HxqhwR29SrReGr6aQw6U65-DXeP3-yC2NudYMuxYWY8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-900 hover:to-purple-900 text-white px-4"
                >
                  <Eye className="w-4 h-5 mr-2" />
                  View Resume
                </Button>
              </a>
              {/* Download Resume Button */}
              <a
                href="https://docs.google.com/document/d/1HxqhwR29SrReGr6aQw6U65-DXeP3-yC2NudYMuxYWY8/export?format=pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-2"
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>

              <a href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6"
                >
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/azirzaif/about"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/azir9200"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/azir9200"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/00351920319177"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end my-8 md:my-0">
            <div className="relative">
              <div className="md:w-[400px] md:h-[400px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white p-4">
                  <Image
                    src={HeroImg}
                    alt="Portrait of MD Azir Uddin"
                    width={400}
                    height={400}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-300 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold text-lg">AZIR</span>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#education"
            className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
