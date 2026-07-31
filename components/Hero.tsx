"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-end overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#050607" }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");

        .hero-display {
          font-family: "Oswald", sans-serif;
        }
        .hero-body {
          font-family: "Inter", sans-serif;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        /* Bugatti/Mercedes tərzi: aşağıdan qara, yuxarıdan şəffaf gradient — mətn həmişə oxunaqlı olur */
        .hero-gradient {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(5, 6, 7, 0.95) 0%,
            rgba(5, 6, 7, 0.55) 32%,
            rgba(5, 6, 7, 0.1) 60%,
            rgba(5, 6, 7, 0.35) 100%
          );
        }

        .hero-btn-ghost {
          backdrop-filter: blur(6px);
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
        }
        .hero-btn-ghost:hover {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @keyframes hero-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-anim-1 {
          animation: hero-fade-up 0.9s ease 0.2s both;
        }
        .hero-anim-2 {
          animation: hero-fade-up 0.9s ease 0.4s both;
        }
        .hero-anim-3 {
          animation: hero-fade-up 0.9s ease 0.6s both;
        }

        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        .scroll-indicator {
          animation: scroll-bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Fon video — Bugatti-dəki kimi tam ekran, avtomatik oxunan, səssiz */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/ML/ML-Group.png"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-gradient" />

      {/* Məzmun */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-28">
        <div className="hero-anim-1 flex items-center gap-3 mb-6">
          <span
            className="h-px w-10"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          />
          <span
            className="hero-display text-[12px] tracking-[0.35em] uppercase"
            style={{ color: "#d4d6d9" }}
          >
            Rəsmi ML-Class həvəskarlar birliyi
          </span>
        </div>

        <h1
          className="hero-anim-2 hero-display font-semibold uppercase leading-[0.95] mb-8"
          style={{
            color: "#f7f7f8",
            fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          Güc yolda
          <br />
          sınaqdan keçir
        </h1>

        <div className="hero-anim-3 flex flex-wrap items-center gap-4">
          <Link
            href="/uzvler"
            className="hero-display inline-flex items-center text-[13px] tracking-[0.15em] uppercase px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#f2f3f4", color: "#0a0b0d" }}
          >
            Klub-a qoşul
          </Link>
          <Link
            href="/qalereya"
            className="hero-btn-ghost hero-display inline-flex items-center text-[13px] tracking-[0.15em] uppercase px-8 py-4"
            style={{ color: "#f7f7f8" }}
          >
            Qalereyaya bax
          </Link>
        </div>
      </div>

      {/* Scroll indiqatoru — lüks avtomobil saytlarında standart element */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span
          className="hero-display text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Aşağı sürüşdür
        </span>
        <ChevronDown size={18} style={{ color: "rgba(255,255,255,0.6)" }} />
      </div>
    </section>
  );
}
