"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

// Klub üçün əsas statistika — real məzmun kimi doldurulmalıdır
const STATS = [
  { value: "120+", label: "Aktiv üzv" },
  { value: "3", label: "Nəsil: W163 / W164 / W166" },
  { value: "24", label: "İllik görüş" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ backgroundColor: "#0a0b0d", minHeight: "100vh" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");

        .hero-display {
          font-family: "Oswald", sans-serif;
        }
        .hero-body {
          font-family: "Inter", sans-serif;
        }
        .hero-outline-text {
          -webkit-text-stroke: 1px rgba(232, 234, 236, 0.18);
          color: transparent;
        }
        @keyframes hero-fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-anim-1 {
          animation: hero-fade-up 0.8s ease 0.1s both;
        }
        .hero-anim-2 {
          animation: hero-fade-up 0.8s ease 0.3s both;
        }
        .hero-anim-3 {
          animation: hero-fade-up 0.8s ease 0.5s both;
        }
        .hero-anim-4 {
          animation: hero-fade-up 0.8s ease 0.7s both;
        }
      `}</style>

      {/* Arxa fonda böyük "W166" konturlu mətn — şassi kodu vizual toxuma kimi */}
      <span
        className="hero-display hero-outline-text absolute select-none pointer-events-none font-bold"
        style={{
          fontSize: "min(38vw, 520px)",
          right: "-4%",
          top: "50%",
          transform: "translateY(-50%)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        W163
      </span>

      {/* İncə perspektiv xətləri — asfalt/yol hissi */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 79px, #e8eaec 80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-10 pt-32 pb-20">
        <div className="hero-anim-1 flex items-center gap-3 mb-8">
          <span className="h-px w-10" style={{ backgroundColor: "#4a4e55" }} />
          <span
            className="hero-display text-[12px] tracking-[0.3em] uppercase"
            style={{ color: "#8b929b" }}
          >
            Rəsmi ML-Class həvəskarlar birliyi
          </span>
        </div>

        <h1
          className="hero-anim-2 hero-display font-semibold uppercase leading-[0.95] mb-8"
          style={{
            color: "#f2f3f4",
            fontSize: "clamp(2.75rem, 7vw, 6rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Güc yolda
          <br />
          <span style={{ color: "#8b929b" }}>sınaqdan keçir</span>
        </h1>

        <p
          className="hero-anim-3 hero-body max-w-xl mb-12"
          style={{ color: "#a9adb3", fontSize: "17px", lineHeight: 1.7 }}
        >
          Azərbaycanda Mercedes-Benz ML-Class sahiblərini bir araya gətirən
          klub. Off-road görüşlər, texniki dəstək və üç nəslin — W163, W164,
          W166 — sürücülərinin birgə icması.
        </p>

        <div className="hero-anim-4 flex flex-wrap items-center gap-5 mb-20">
          <Link
            href="/uzvler"
            className="hero-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase px-7 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
          >
            Klub-a qoşul
            <ArrowDownRight size={16} style={{ transform: "rotate(-90deg)" }} />
          </Link>
          <Link
            href="/qalereya"
            className="hero-display inline-flex items-center text-[13px] tracking-[0.15em] uppercase px-7 py-4 border transition-colors duration-300"
            style={{ borderColor: "#3a3d42", color: "#e8eaec" }}
          >
            Qalereyaya bax
          </Link>
        </div>

        {/* Statistika zolağı */}
        <div
          className="hero-anim-4 flex flex-wrap gap-x-14 gap-y-6 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="hero-display font-semibold text-3xl"
                style={{ color: "#f2f3f4" }}
              >
                {stat.value}
              </span>
              <span
                className="hero-body text-[13px] tracking-wide"
                style={{ color: "#6b6f76" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
