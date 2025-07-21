"use client";

import * as React from "react";
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import { PiProjectorScreen } from "react-icons/pi";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site.config";
import { Button } from "./ui/button";
import { ModeToggle } from "./darkmode.toggle";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-2 z-50 
        border p-4 rounded-md flex items-center justify-between relative my-2 
        bg-background backdrop-blur transition-colors duration-300
      "
    >
      {/* Left: Logo + name */}
      <div className="flex items-center gap-2">
        <Image
          src={siteConfig.profile.avatar}
          alt="Utsha Chandra Das"
          width={40}
          height={40}
          className="rounded-full border-2 border-white"
        />
        <Link href={siteConfig.social.linkedinHref} suppressHydrationWarning>
          <Button variant="outline" className="cursor-pointer">
            @utsha-das
          </Button>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4">
        {navitems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Button variant="ghost" className="flex items-center gap-1">
              {item.icon}
              {item.label}
            </Button>
          </Link>
        ))}
        <ModeToggle />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Sidebar with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full right-0 mt-3 w-full rounded-md border 
              bg-background p-4 shadow-md md:hidden z-50
            "
          >
            <div className="flex flex-col gap-2">
              {navitems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full "
                >
                  <Button
                    variant="ghost"
                    className="w-full flex justify-start gap-2 "
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
              ))}
              <ModeToggleFullWidth />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

type NavLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const navitems: NavLink[] = [
  { label: "Home", icon: <IoHomeOutline />, href: "#about" },
  { label: "Projects", icon: <PiProjectorScreen />, href: "#projects" },
  { label: "Work", icon: <IoBriefcaseOutline />, href: "#work" },
  { label: "Contact", icon: <IoMailOpenOutline />, href: "#contact" },
];

// ✅ ModeToggle wrapper for full width in mobile
const ModeToggleFullWidth = () => (
  <Button variant="outline" className="w-full" suppressHydrationWarning>
    <ModeToggle />
  </Button>
);
