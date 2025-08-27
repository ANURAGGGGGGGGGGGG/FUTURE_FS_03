"use client";

import Image from "next/image";
import { useState } from "react";
import { brand } from "@/app/lib/content";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={brand.logo} alt={`${brand.name} logo`} width={32} height={32} />
          <span className="text-lg font-semibold">{brand.name}</span>
        </Link>
        <nav className="hidden min-[427px]:flex items-center gap-8 text-sm absolute left-1/2 -translate-x-1/2">
          <Link className="hover:text-primary transition-colors" href="/menu">Menu</Link>
          <Link className="hover:text-primary transition-colors" href="/rewards">Rewards</Link>
          <Link className="hover:text-primary transition-colors" href="/locations">Locations</Link>
        </nav>
        {/* Hamburger: visible at 426px and lower (animated, aria-driven) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="max-[426px]:inline-flex hidden group relative h-6 w-6 text-foreground"
          style={{
            "--width": "1.25rem",
            "--thickness": "0.125rem",
            "--gap": "0.25rem",
            "--color": "currentColor",
            "--duration": "300ms",
          }}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-full before:rounded-full before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] before:content-[''] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] before:group-aria-expanded:delay-0"></span>
          <span className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]"></span>
          <span className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] before:content-[''] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] before:group-aria-expanded:delay-0"></span>
        </button>
      </div>

      {/* Mobile dropdown (426px and lower) */}
      {open && (
        <div className="max-[426px]:block hidden border-t border-border bg-background">
          <nav className="px-6 py-4 flex flex-col gap-4 text-sm">
            <Link href="/menu" className="hover:text-primary transition-colors" onClick={() => setOpen(false)}>Menu</Link>
            <Link href="/rewards" className="hover:text-primary transition-colors" onClick={() => setOpen(false)}>Rewards</Link>
            <Link href="/locations" className="hover:text-primary transition-colors" onClick={() => setOpen(false)}>Locations</Link>
          </nav>
        </div>
      )}
    </header>
  );
}