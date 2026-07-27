"use client";

import Link from "next/link";
import { Send, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const FOOTER_LINKS = {
  Klub: [
    { href: "/haqqimizda", label: "Haqqımızda" },
    { href: "/uzvler", label: "Üzv ol" },
    { href: "/tedbirler", label: "Tədbirlər" },
  ],
  Katalog: [
    { href: "/qalereya", label: "Bütün elanlar" },
    { href: "/qalereya/elan-yerlesdir", label: "Elan yerləşdir" },
  ],
  Əlaqə: [
    { href: "/elaqe", label: "Bizimlə əlaqə" },
    { href: "/qaydalar", label: "Klub qaydaları" },
  ],
};

export default function CtaAndFooter() {
  return (
    <>
      <style jsx global>{`
        .cf-display {
          font-family: "Oswald", sans-serif;
        }
        .cf-body {
          font-family: "Inter", sans-serif;
        }
        .cf-link {
          color: #8b929b;
          transition: color 0.25s ease;
        }
        .cf-link:hover {
          color: #f2f3f4;
        }
      `}</style>

      {/* Son CTA */}
      <section
        className="relative w-full py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: "#0a0b0d" }}
      >
        <span
          className="cf-display absolute select-none pointer-events-none font-bold uppercase"
          style={{
            fontSize: "min(20vw, 260px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(232,234,236,0.08)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ML KLUB
        </span>

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="cf-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Bizə qoşul
            </span>
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
          </div>

          <h2
            className="cf-display font-semibold uppercase leading-[0.95] mb-8"
            style={{ color: "#f2f3f4", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Maşınını klubda
            <br />
            görmək istəyirsən?
          </h2>

          <p
            className="cf-body max-w-md mb-10"
            style={{ color: "#a9adb3", fontSize: "16px", lineHeight: 1.7 }}
          >
            Üzv ol, avtomobilini elan kataloquna əlavə et və Azərbaycandakı
            ML-Class icmasının bir hissəsi ol.
          </p>

          <Link
            href="/uzvler"
            className="cf-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
          >
            İndi qoşul
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative w-full pt-16 pb-10"
        style={{ backgroundColor: "#0a0b0d", borderTop: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            {/* Loqo + qısa təsvir */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/Mercedes-Logo.png"
                  alt="ML Club Logo"
                  width={50}
                  height={20}
                />
                <span className="flex flex-col leading-none">
                  <span
                    className="cf-display font-semibold text-lg tracking-[0.08em]"
                    style={{ color: "#f2f3f4" }}
                  >
                    ML KLUB
                  </span>
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase"
                    style={{ color: "#6b6f76" }}
                  >
                    Azərbaycan
                  </span>
                </span>
              </div>
              <p
                className="cf-body max-w-sm"
                style={{ color: "#6b6f76", fontSize: "14px", lineHeight: 1.7 }}
              >
                Mercedes-Benz ML-Class (W163 / W164 / W166) sahiblərini
                birləşdirən rəsmi klub və avtomobil kataloqu.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <Link href="#" aria-label="Telegram" className="cf-link">
                  <Send size={20} />
                </Link>
              </div>
            </div>

            {/* Link sütunları */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(FOOTER_LINKS).map(([section, links]) => (
                <div key={section}>
                  <h4
                    className="cf-display text-[12px] tracking-[0.2em] uppercase mb-5"
                    style={{ color: "#f2f3f4" }}
                  >
                    {section}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="cf-link cf-body text-[14px]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid #1e2024" }}
          >
            <span className="cf-body text-[13px]" style={{ color: "#4a4e55" }}>
              © {new Date().getFullYear()} ML Klub Azərbaycan. Bütün hüquqlar
              qorunur. Website by Mirzə
            </span>

            <span
              className="cf-display text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#3a3d42" }}
            >
              W163 · W164 · W166
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
