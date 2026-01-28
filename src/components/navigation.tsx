"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Scale,
  Menu,
  Phone,
  Shield,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/knowledge-base", label: "Legal FAQ" },
  { href: "/partner-dashboard", label: "Partner Dashboard" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal">
            <Scale className="h-5 w-5 text-gold" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-charcoal">
              LARCOMES
            </span>
            <span className="-mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Solicitors
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-charcoal/70 transition-colors hover:bg-secondary hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Shield className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs">ISO 27001</span>
          </div>
          <Button
            size="sm"
            className="gold-gradient border-0 text-charcoal font-semibold shadow-sm hover:opacity-90"
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-charcoal text-white">
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-2.5 px-2">
                <Scale className="h-5 w-5 text-gold" />
                <span className="text-lg font-bold tracking-tight">
                  LARCOMES
                </span>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-charcoal-light hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="px-2">
                <Button className="w-full gold-gradient border-0 text-charcoal font-semibold">
                  <Phone className="mr-1.5 h-3.5 w-3.5" />
                  Contact Us
                </Button>
              </div>
              <div className="flex items-center gap-1.5 px-3 text-xs text-white/50">
                <Shield className="h-3 w-3" />
                ISO 27001 Compliant
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
