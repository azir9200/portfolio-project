"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { PenTool } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-md bg-background border dark:border-slate-700/70 z-30">
      <div className="flex h-full items-center justify-between px-6 md:px-8">
        {/* Logo with consistent padding */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <PenTool className="w-5 h-5 " />
          </div>
          <span className="bg-gradient-primary bg-clip-text ">BlogCraft</span>
        </Link>

        {/* Desktop Menu with consistent horizontal spacing */}
        <NavMenu className="hidden md:block" />

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          <Button className="rounded-full px-5 py-2 text-sm md:text-base">
            <Link href="/login" className="block w-full text-center">
              Login
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
