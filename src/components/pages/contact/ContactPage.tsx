"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AtSign,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }
    {
      success && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      );
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-10 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-pulse">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Let&apos;s Connect
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I’m actively seeking opportunities as a software developer where I
            can contribute to real-world products, grow my skills, and work with
            a collaborative team. If you’re hiring or looking for a motivated
            developer, I’d love to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ContactPage Info */}
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I’m open to full-time, internship, or entry-level software
                development roles. I enjoy working in collaborative
                environments, learning from experienced engineers, and building
                scalable, user-focused applications. Feel free to reach out if
                you think I’d be a good fit for your team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Email Address
                    </p>
                    <a
                      href="mailto:aziruddin83@gmail.com"
                      className="font-semibold text-lg hover:text-primary transition-colors"
                    >
                      aziruddin83@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Phone Number
                    </p>
                    <p className="font-semibold text-lg">00351920319177</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="font-semibold text-lg">Porto, Portugal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ContactPage Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you soon
                  </p>
                </div>

                <form className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your Name..."
                      className="h-12 bg-background/50 border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <AtSign className="w-4 h-4 text-primary" />
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your Email..."
                      className="h-12 bg-background/50 border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Subject
                    </label>
                    <Input
                      name="subject"
                      className="h-12 bg-background/50 border-border focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Write your message here...."
                      className="min-h-[120px] resize-none bg-background/50 border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group/btn relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
