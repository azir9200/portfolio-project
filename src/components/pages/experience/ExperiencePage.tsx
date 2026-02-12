"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "./experianceData";
import { Building, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Professional Experience
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-world roles where I built responsibility, customer
            communication, and operational discipline.
          </p>
        </motion.div>

        {/* center line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px 
          bg-gradient-to-b from-transparent via-primary/40 to-transparent
          hidden md:block
        "
        />

        <div className="space-y-16">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`
                  relative flex md:items-center
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                `}
              >
                {/* dot */}
                <div
                  className="
                  hidden md:block absolute left-1/2 -translate-x-1/2
                  w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40
                "
                />

                {/* card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="
                    w-full md:w-[46%]
                    rounded-2xl
                    p-7
                    bg-card/70 backdrop-blur-xl
                    border border-border
                    shadow-xl
                    transition
                  "
                >
                  {/* top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                        <Building className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">
                          {exp.position}
                        </h3>

                        <p className="text-xl font-semibold text-primary mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <Badge variant="secondary" className="text-sm font-medium">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* meta */}
                  <div className="flex flex-wrap gap-6 text-base font-medium text-muted-foreground mb-5">
                    <div className="flex gap-2 items-center">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    <div className="flex gap-2 items-center">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* description */}
                  <p className="text-xl leading-relaxed text-foreground/90 mb-6">
                    {exp.description}
                  </p>

                  {/* achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((a, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-lg leading-relaxed"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
