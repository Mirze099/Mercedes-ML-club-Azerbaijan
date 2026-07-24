"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Ana səhifə" },
  { href: "/uzvler", label: "Üzvlər" },
  { href: "/tedbirler", label: "Tədbirlər" },
  { href: "/qalereya", label: "Qalereya" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/elaqe", label: "Əlaqə" },
];

// ML-Class-ın həqiqi şassi kodları — texniki "eyebrow" kimi istifadə olunur
const CHASSIS_CODES = ["W163", "W164", "W166"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menyu açıq olanda body scroll-u kilidlə
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");

        .navbar-shell {
          font-family: "Inter", sans-serif;
        }
        .navbar-display {
          font-family: "Oswald", sans-serif;
        }
        .chrome-line {
          background: linear-gradient(
            90deg,
            rgba(139, 146, 155, 0) 0%,
            rgba(200, 205, 210, 0.9) 20%,
            rgba(232, 234, 236, 1) 50%,
            rgba(200, 205, 210, 0.9) 80%,
            rgba(139, 146, 155, 0) 100%
          );
        }
        .nav-link {
          position: relative;
          color: #b8bcc2;
          transition: color 0.25s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 1px;
          background: #e8eaec;
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: #f2f3f4;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <header
        className={`navbar-shell fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(10, 11, 13, 0.85)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
        }}
      >
        {/* Şassi kodu eyebrow zolağı — yalnız scroll olmayanda görünür */}
        <div
          className="hidden md:flex items-center justify-center gap-6 overflow-hidden transition-all duration-500"
          style={{
            maxHeight: scrolled ? "0px" : "28px",
            opacity: scrolled ? 0 : 1,
            borderBottom: scrolled
              ? "none"
              : "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {CHASSIS_CODES.map((code, i) => (
            <span
              key={code}
              className="navbar-display text-[11px] tracking-[0.25em] py-1.5"
              style={{ color: "#6b6f76" }}
            >
              {code}
              {i < CHASSIS_CODES.length - 1 && (
                <span style={{ color: "#3a3d42", marginLeft: "24px" }}>•</span>
              )}
            </span>
          ))}
        </div>

        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          {/* Loqo / Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/Mercedes-Logo.png"
              alt="ML Club Logo"
              width={50}
              height={20}
            />
            <span className="flex flex-col leading-none">
              <span
                className="navbar-display font-semibold text-lg tracking-[0.08em]"
                style={{ color: "#f2f3f4" }}
              >
                ML CLUB
              </span>
              <span
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "#6b6f76" }}
              >
                Azərbaycan
              </span>
            </span>
          </Link>

          {/* Masaüstü naviqasiya */}
          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link navbar-display text-[13px] tracking-[0.15em] uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobil düymə */}
          <div className="flex items-center gap-4">
            <Link
              href="/elaqe"
              className="hidden lg:inline-flex navbar-display items-center text-[12px] tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-300"
              style={{
                borderColor: "#e8eaec",
                color: "#0a0b0d",
                backgroundColor: "#e8eaec",
              }}
            >
              Klub-a qoşul
            </Link>

            <button
              aria-label="Menyunu aç"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2"
              style={{ color: "#e8eaec" }}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Brushed-metal alt xətt */}
        <div className="chrome-line h-px w-full opacity-40" />
      </header>

      {/* Mobil tam-ekran menyu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-400"
        style={{
          backgroundColor: "#0a0b0d",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <div className="flex flex-col h-full justify-center px-10 gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="navbar-display text-3xl tracking-wide uppercase"
              style={{
                color: "#e8eaec",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/elaqe"
            onClick={() => setMobileOpen(false)}
            className="navbar-display inline-flex w-fit items-center text-sm tracking-[0.15em] uppercase px-6 py-3 mt-4"
            style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
          >
            Klub-a qoşul
          </Link>
        </div>
      </div>
    </>
  );
}
