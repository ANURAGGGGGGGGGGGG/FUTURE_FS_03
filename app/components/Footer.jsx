import { brand } from "@/app/lib/content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-top border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <Link className="hover:text-primary" href="/privacy">Privacy</Link>
          <Link className="hover:text-primary" href="/terms">Terms</Link>
          <Link className="hover:text-primary" href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}