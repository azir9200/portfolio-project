"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/assets/images/azir.jpg";

const AboutPage = () => {
  const skillTags = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "React Query",
    "Node.js",
    "Express",
    "GraphQL",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Jest",
    "Webpack",
    "Vite",
  ];

  const roles = [
    {
      title: "Senior Software Engineer — Radisson Blu",
      period: "Mar 2024 – Present · Dublin, Ireland",
      description:
        "SSR/ISR performance, Redux and localStorage state sync, hybrid caching with Redis and CloudFront, Lambda and ECS optimization, React Query and SWR, Lambda@Edge and CloudWatch.",
    },
    {
      title: "Senior Software Engineer — KSG Catering",
      period: "Aug 2021 – Mar 2024 · Dublin, Ireland",
      description:
        "MongoDB sharding and indexing, Kafka and Redis Pub/Sub, microservices and GraphQL, GitLab CI/CD with Docker, Kubernetes, and Terraform.",
    },
    {
      title: "Senior Software Engineer — Viking Cruises",
      period: "May 2017 – Aug 2021 · Lisbon, Portugal",
      description:
        "Monolith-to-microservices migration with Node.js and Express, Istio, PostgreSQL and MongoDB, React and Next.js SSR, Jenkins and Docker pipelines.",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About <span className="text-primary">Me</span>
        </motion.h1>
        <p className="max-w-3xl mx-auto text-muted-foreground">
          Senior Software Engineer with 9+ years in JavaScript and TypeScript,
          focused on scalable frontends and backends, cloud platforms, and
          reliable delivery.
        </p>
      </div>

      {/* Bio + Image */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="leading-relaxed text-muted-foreground">
            I specialize in React, Next.js, and Node.js, with deep experience in
            SSR, API design, microservices, and event-driven architecture. I work
            hands-on with AWS, Docker, Kubernetes, and CI/CD, and I care about
            performance, automated testing, code review, and mentoring.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Languages: English, Portuguese, Spanish, Italian.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="bg-primary hover:bg-primary/80 transition  px-5 py-2 rounded-lg font-medium text-primary-foreground"
            >
              View Resume
            </Link>
            <Link
              href="/projects"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition px-5 py-2 rounded-lg font-medium"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src={HeroImg}
            alt="Azir Uddin"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover border border-gray-800"
          />
        </motion.div>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skillTags.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full border border-gray-700 hover:bg-primary hover:border-primary hover:text-primary-foreground transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {roles.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start gap-4 mb-2 flex-wrap">
                <h3 className="text-lg font-semibold text-white">
                  {job.title}
                </h3>
                <p className="text-gray-400 text-sm shrink-0">{job.period}</p>
              </div>
              <p className="text-gray-400">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">Let&apos;s Connect</h2>
        <p className="text-muted-foreground mb-6">
          Open to senior engineering roles and technical collaborations.
        </p>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-2 rounded-lg transition font-medium inline-block"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
