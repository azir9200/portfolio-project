"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/context/themeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname(); // ✅ detects active page path

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const getSectionColor = (section: string) => {
    const colorMap: Record<string, string> = {
      "/": "from-blue-600 to-purple-600",
      "/services": "from-green-500 to-emerald-500",
      "/skills": "from-orange-500 to-red-500",
      "/experience": "from-indigo-500 to-blue-500",
      "/education": "from-teal-500 to-cyan-500",
      "/projects": "from-pink-500 to-rose-500",
      "/contact": "from-gray-600 to-gray-800",
    };
    return colorMap[section] || "from-blue-600 to-purple-600";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`sm:text-2xl text-xl font-bold bg-gradient-to-r ${getSectionColor(
              pathname
            )} bg-clip-text text-transparent transition-all duration-500`}
          >
            AZIR UDDIN 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* <a
                            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <Mail className="w-6 h-6" />
                          </a> */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 font-medium px-3 py-2 rounded-md ${
                  pathname === item.path
                    ? `bg-gradient-to-r ${getSectionColor(
                        pathname
                      )} bg-clip-text text-transparent font-bold scale-105`
                    : "text-foreground hover:text-primary hover:bg-accent/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Link href="/login"> Login</Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in bg-background/95 rounded-lg border border-border p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 rounded-md transition-all duration-300 ${
                  pathname === item.path
                    ? `bg-gradient-to-r ${getSectionColor(
                        pathname
                      )} bg-clip-text text-transparent font-bold`
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
