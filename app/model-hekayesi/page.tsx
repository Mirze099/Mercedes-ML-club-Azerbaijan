"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const CHAPTERS = [
  {
    num: "01",
    chassis: "W163",
    years: "1997 — 2005",
    title: "Başlanğıc",
    text: "Mercedes-Benz-in premium off-road seqmentinə ilk ciddi addımı. Monokok şassi ilə klassik SUV konsepti arasında körpü qurdu və dünya bazarında yeni bir kateqoriya yaratdı.",
    image: "/images/Sway/319-3.png",
  },
  {
    num: "02",
    chassis: "W164",
    years: "2005 — 2011",
    title: "Yetkinlik",
    text: "Daha iri gövdə, güclənmiş AMG versiyaları və AIRMATIC hava asqı sistemi. ML artıq sadəcə off-road maşını deyil, hər gün sürülən lüks SUV idi.",
    image: "/images/ML/images.jpg",
  },
  {
    num: "03",
    chassis: "W166",
    years: "2011 — 2015",
    title: "Miras",
    text: "Sonuncu ML nəsli. Daha yüngül konstruksiya, aşağı yanacaq sərfiyyatı, müasir təhlükəsizlik sistemləri — bundan sonra ad GLE-yə keçdi, amma xarakter yaşadı.",
    image: "/images/ML/1920x.jpg",
  },
];

// Naviqasiya oxları — lucide-react yox, inline SVG
const IconChevron = ({
  direction = "up",
  ...p
}: React.SVGProps<SVGSVGElement> & { direction?: "up" | "down" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: direction === "down" ? "rotate(180deg)" : "none" }}
    {...p}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export default function ModelHekayesiPage() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalChapters = CHAPTERS.length;
  const totalScreens = totalChapters + 2; // hero + fəsillər + CTA

  const goToChapter = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      if (index < 0 || index > totalChapters + 1) return;
      if (index === currentChapter) return;

      setIsTransitioning(true);
      setCurrentChapter(index);

      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [isTransitioning, currentChapter, totalChapters],
  );

  // Body scroll-u kilidlə — "presentation mode" hissi üçün, çıxanda geri qaytar
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Wheel naviqasiyası — kiçik trackpad "jitter"-lərini süzgəcdən keçiririk
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning || Math.abs(e.deltaY) < 12) return;
      if (e.deltaY > 0) goToChapter(currentChapter + 1);
      else goToChapter(currentChapter - 1);
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [currentChapter, isTransitioning, goToChapter]);

  // Touch (mobil sürüşdürmə)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToChapter(currentChapter + 1);
        else goToChapter(currentChapter - 1);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container?.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentChapter, isTransitioning, goToChapter]);

  // Klaviatura
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        goToChapter(currentChapter + 1);
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        goToChapter(currentChapter - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentChapter, goToChapter]);

  const scrollProgress = (currentChapter / (totalScreens - 1)) * 100;

  return (
    <main
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        backgroundColor: "#000000",
        touchAction: "none",
      }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Oswald:wght@500;600&display=swap");

        .msp-body {
          font-family: "Inter", sans-serif;
        }
        .msp-display {
          font-family: "Oswald", sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-1 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .delay-2 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .delay-3 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .delay-4 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .msp-kenburns-active {
          animation: kenburns 9s ease-out forwards;
        }

        /* Film-grain toxuması — kinematik hiss üçün çox aşağı opasitli SVG səs-küy */
        .msp-grain {
          position: fixed;
          inset: 0;
          z-index: 40;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .msp-nav-arrow {
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }
        .msp-nav-arrow:hover {
          transform: translateY(-2px);
        }
        .msp-nav-arrow:disabled {
          opacity: 0.2;
          cursor: default;
        }
        .msp-nav-arrow:disabled:hover {
          transform: none;
        }
      `}</style>

      {/* Film-grain overlay */}
      <div className="msp-grain" />

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, transparent, #ffffff)",
            boxShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
        />
      </div>

      {/* Fəsil sayğacı — sol yuxarı, professional "story" saytlarının standart elementi */}
      <div className="fixed top-6 left-6 md:top-8 md:left-10 z-50 flex items-center gap-2">
        <span
          className="msp-display text-[13px] tracking-[0.2em]"
          style={{ color: "#ffffff" }}
        >
          {String(currentChapter + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            width: "16px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        />
        <span
          className="msp-display text-[13px] tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {String(totalScreens).padStart(2, "0")}
        </span>
      </div>

      {/* Hero — 0-cı ekran */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-out"
        style={{
          opacity: currentChapter === 0 ? 1 : 0,
          visibility: currentChapter === 0 ? "visible" : "hidden",
        }}
      >
        <section className="relative w-full h-full flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-0 ${currentChapter === 0 ? "msp-kenburns-active" : ""}`}
            >
              <Image
                src="/images/ML/ML-Group.png"
                alt="ML-Class Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.6) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-16 lg:px-24">
            <div className="mb-10 md:mb-16 animate-fade-in-left">
              <span
                className="msp-body text-[12px] md:text-[13px] tracking-[0.4em] uppercase font-light"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Model hekayəsi
              </span>
            </div>

            <h1
              className="msp-body font-light leading-[0.95] mb-8 animate-fade-in-up delay-1"
              style={{
                color: "#ffffff",
                fontSize: "clamp(2.4rem, 8vw, 5.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Üç nəsil,
              <br />
              bir xarakter
            </h1>

            <div className="flex items-center gap-4 md:gap-6 animate-fade-in-up delay-2">
              <div
                className="hidden sm:block"
                style={{
                  width: "48px",
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
              />
              <p
                className="msp-body font-light text-[14px] md:text-[15px] leading-[1.8]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                1997-ci ildən 2015-ci ilə qədər — ML-Class-ın
                <br className="hidden sm:block" />
                on səkkiz illik yolunu üç fəsildə izlə.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Fəsil bölmələri */}
      {CHAPTERS.map((chapter, index) => (
        <div
          key={chapter.chassis}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{
            opacity: currentChapter === index + 1 ? 1 : 0,
            visibility: currentChapter === index + 1 ? "visible" : "hidden",
          }}
        >
          <section className="relative w-full h-full flex items-center">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`absolute inset-0 ${currentChapter === index + 1 ? "msp-kenburns-active" : ""}`}
              >
                <Image
                  src={chapter.image}
                  alt={`Mercedes-Benz ML-Class ${chapter.chassis}`}
                  fill
                  className="object-cover"
                  priority={index < 1}
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.5) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-16 lg:px-24">
              <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16 animate-fade-in-left delay-1">
                <span
                  className="msp-body text-[13px] md:text-[14px] tracking-[0.4em] uppercase font-light"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {chapter.chassis}
                </span>
                <span
                  style={{
                    width: "32px",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                />
                <span
                  className="msp-body text-[13px] md:text-[14px] tracking-[0.3em] uppercase font-light"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {chapter.years}
                </span>
              </div>

              <h2
                className="msp-body font-light leading-[1] mb-8 md:mb-12 animate-fade-in-up delay-2"
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(2.6rem, 9vw, 6.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {chapter.title}
              </h2>

              <p
                className="msp-body max-w-[520px] font-light leading-[1.8] animate-fade-in-up delay-3"
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px" }}
              >
                {chapter.text}
              </p>
            </div>

            {/* Fəsil nömrəsi — böyük, solğun fon elementi */}
            <div
              className="hidden sm:block absolute right-6 md:right-16 bottom-16 animate-fade-in-up delay-4"
              style={{ color: "rgba(255,255,255,0.08)" }}
            >
              <span
                className="msp-body font-light leading-none"
                style={{ fontSize: "clamp(6rem, 15vw, 12rem)" }}
              >
                {chapter.num}
              </span>
            </div>
          </section>
        </div>
      ))}

      {/* CTA — son ekran */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-out"
        style={{
          opacity: currentChapter === totalChapters + 1 ? 1 : 0,
          visibility:
            currentChapter === totalChapters + 1 ? "visible" : "hidden",
        }}
      >
        <section className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-0 ${currentChapter === totalChapters + 1 ? "msp-kenburns-active" : ""}`}
            >
              <Image
                src="/images/ml-club.jpg"
                alt="ML Klub"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.82) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 text-center px-6">
            <h2
              className="msp-body font-light leading-[1] mb-8 md:mb-10 animate-fade-in-up delay-1"
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Sənin hekayən
              <br />
              hansı fəsildə?
            </h2>
            <p
              className="msp-body font-light mb-10 md:mb-12 text-[14px] md:text-[15px] leading-[1.8] max-w-[480px] mx-auto animate-fade-in-up delay-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              İstər W163, istər W166 — hər nəslin öz sahibi klubun bir
              hissəsidir.
            </p>
            <Link
              href="/uzvler"
              className="inline-flex items-center gap-3 group text-[13px] md:text-[14px] tracking-[0.15em] uppercase font-light transition-all duration-500 animate-fade-in-up delay-3"
              style={{ color: "#ffffff" }}
            >
              <span
                className="transition-all duration-500 group-hover:w-12"
                style={{
                  width: "32px",
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              />
              <span className="transition-all duration-500 group-hover:translate-x-1">
                Klub-a qoşul
              </span>
            </Link>
          </div>
        </section>
      </div>

      {/* Klik-lə naviqasiya oxları — jest/wheel-ə güvənməyənlər üçün əlçatanlıq */}
      <div className="fixed bottom-6 md:bottom-8 right-6 md:right-10 z-50 flex flex-col gap-2">
        <button
          onClick={() => goToChapter(currentChapter - 1)}
          disabled={currentChapter === 0 || isTransitioning}
          aria-label="Əvvəlki bölmə"
          className="msp-nav-arrow flex items-center justify-center w-10 h-10 rounded-full border"
          style={{ borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}
        >
          <IconChevron direction="up" width={16} height={16} />
        </button>
        <button
          onClick={() => goToChapter(currentChapter + 1)}
          disabled={currentChapter === totalScreens - 1 || isTransitioning}
          aria-label="Növbəti bölmə"
          className="msp-nav-arrow flex items-center justify-center w-10 h-10 rounded-full border"
          style={{ borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}
        >
          <IconChevron direction="down" width={16} height={16} />
        </button>
      </div>

      {/* Naviqasiya indikatorları — masaüstündə sağda şaquli, mobil-də gizli (aşağıdakı oxlar kifayətdir) */}
      <div className="hidden lg:flex fixed right-24 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        <button
          onClick={() => goToChapter(0)}
          className="flex items-center gap-4 justify-end group"
          aria-label="Başlanğıc"
        >
          <span
            className="msp-body text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-500"
            style={{
              color: "rgba(255,255,255,0.6)",
              opacity: currentChapter === 0 ? 1 : 0,
              transform:
                currentChapter === 0 ? "translateX(0)" : "translateX(10px)",
            }}
          >
            Başlanğıc
          </span>
          <div
            className="rounded-full transition-all duration-500"
            style={{
              width: currentChapter === 0 ? "8px" : "4px",
              height: currentChapter === 0 ? "8px" : "4px",
              backgroundColor:
                currentChapter === 0 ? "#ffffff" : "rgba(255,255,255,0.2)",
            }}
          />
        </button>

        {CHAPTERS.map((chapter, i) => (
          <button
            key={chapter.chassis}
            onClick={() => goToChapter(i + 1)}
            className="flex items-center gap-4 justify-end group"
            aria-label={chapter.chassis}
          >
            <span
              className="msp-body text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{
                color: "rgba(255,255,255,0.6)",
                opacity: currentChapter === i + 1 ? 1 : 0,
                transform:
                  currentChapter === i + 1
                    ? "translateX(0)"
                    : "translateX(10px)",
              }}
            >
              {chapter.chassis}
            </span>
            <div
              className="rounded-full transition-all duration-500"
              style={{
                width: currentChapter === i + 1 ? "8px" : "4px",
                height: currentChapter === i + 1 ? "8px" : "4px",
                backgroundColor:
                  currentChapter === i + 1
                    ? "#ffffff"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          </button>
        ))}

        <button
          onClick={() => goToChapter(totalChapters + 1)}
          className="flex items-center gap-4 justify-end group"
          aria-label="Klub"
        >
          <span
            className="msp-body text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-500"
            style={{
              color: "rgba(255,255,255,0.6)",
              opacity: currentChapter === totalChapters + 1 ? 1 : 0,
              transform:
                currentChapter === totalChapters + 1
                  ? "translateX(0)"
                  : "translateX(10px)",
            }}
          >
            Klub
          </span>
          <div
            className="rounded-full transition-all duration-500"
            style={{
              width: currentChapter === totalChapters + 1 ? "8px" : "4px",
              height: currentChapter === totalChapters + 1 ? "8px" : "4px",
              backgroundColor:
                currentChapter === totalChapters + 1
                  ? "#ffffff"
                  : "rgba(255,255,255,0.2)",
            }}
          />
        </button>
      </div>

      {/* Sürüşdürmə göstəricisi — yalnız ilk ekranda */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500"
        style={{ opacity: currentChapter === 0 ? 1 : 0 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="msp-body text-[11px] tracking-[0.3em] uppercase font-light"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Scroll
          </span>
          <div
            className="w-[1px] h-12"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
