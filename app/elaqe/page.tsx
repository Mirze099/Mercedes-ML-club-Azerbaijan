"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Send,
  Mail,
  MapPin,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const CHANNELS = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+994 50 000 00 00",
    href: "tel:+994500000000",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@mlklubaz",
    href: "https://t.me/mlklubaz",
  },
  {
    icon: Mail,
    label: "Instagram",
    value: "@mlklub.az",
    href: "https://instagram.com/mlklub.az",
  },
  {
    icon: Mail,
    label: "E-poçt",
    value: "info@mlklub.az",
    href: "mailto:info@mlklub.az",
  },
];

const REPS = [
  { city: "Bakı", name: "Elvin Məmmədov", chassis: "W164" },
  { city: "Gəncə", name: "Tural Hüseynov", chassis: "W166" },
  { city: "Sumqayıt", name: "Rəşad Quliyev", chassis: "W163" },
];

const FAQ = [
  {
    q: "Klub üzvü olmaq üçün nə lazımdır?",
    a: "Mercedes-Benz ML-Class (istənilən nəsil — W163, W164 və ya W166) sahibi olmaq kifayətdir. Qeydiyyat formu doldurulur və klub moderatorları 24 saat ərzində təsdiqləyir.",
  },
  {
    q: "Avtomobilimi kataloqa necə əlavə edərəm?",
    a: '"Üzv ol" səhifəsindən uyğun paketi seçib ödənişi tamamladıqdan sonra, avtomobilinin şəkilləri və məlumatları ilə formu doldurursan. Elan yoxlanılıb 24 saata qədər aktiv olur.',
  },
  {
    q: "Ödəniş üsulları hansılardır?",
    a: "Bank kartı ilə onlayn ödəniş və ya bank köçürməsi qəbul olunur. Ödəniş təfərrüatları qeydiyyat zamanı göndərilir.",
  },
  {
    q: "Off-road tədbirlərə qeydiyyatsız üzv qatıla bilərmi?",
    a: "Xeyr, tədbirlər yalnız klub üzvləri üçündür. Bu, həm təhlükəsizlik, həm də tədbirin keyfiyyətinə nəzarət məqsədi daşıyır.",
  },
];

export default function ElaqePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main style={{ backgroundColor: "#0a0b0d" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");
        .e-display {
          font-family: "Oswald", sans-serif;
        }
        .e-body {
          font-family: "Inter", sans-serif;
        }

        .e-channel {
          transition:
            border-color 0.3s ease,
            background-color 0.3s ease;
        }
        .e-channel:hover {
          border-color: #6b6f76;
          background-color: #15171a;
        }
        .e-channel:hover .e-arrow {
          transform: translate(3px, -3px);
        }
        .e-arrow {
          transition: transform 0.3s ease;
        }

        .e-media {
          background: repeating-linear-gradient(
            135deg,
            #17181b,
            #17181b 2px,
            #101114 2px,
            #101114 4px
          );
        }

        .e-faq-icon {
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Split hero — sol: mətn, sağ: diaqonal kəsilmiş media paneli (Porsche dilerlik səhifəsi referansı) */}
      <section
        className="relative w-full grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "70vh" }}
      >
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-40 lg:pt-32 pb-16">
          <div
            className="flex items-center gap-2 mb-8 e-body text-[13px]"
            style={{ color: "#6b6f76" }}
          >
            <Link href="/" style={{ color: "#6b6f76" }}>
              Ana səhifə
            </Link>
            <span>/</span>
            <span style={{ color: "#a9adb3" }}>Əlaqə</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="e-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Bizimlə danış
            </span>
          </div>

          <h1
            className="e-display font-semibold uppercase leading-[0.95] mb-8"
            style={{
              color: "#f2f3f4",
              fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
            }}
          >
            Sualın var?
            <br />
            Bizə çat.
          </h1>

          <p
            className="e-body max-w-md"
            style={{ color: "#a9adb3", fontSize: "16px", lineHeight: 1.8 }}
          >
            Üzvlük, elan yerləşdirmə və ya tədbirlər barədə — istədiyin kanaldan
            bizə yaz. Adətən bir gün ərzində cavab veririk.
          </p>
        </div>

        {/* Sağ diaqonal panel */}
        <div
          className="e-media relative hidden lg:block"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <span
            className="e-display absolute select-none pointer-events-none font-bold uppercase"
            style={{
              fontSize: "18vw",
              color: "transparent",
              WebkitTextStroke: "1px rgba(232,234,236,0.1)",
              right: "-10%",
              top: "50%",
              transform: "translateY(-50%)",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            ML
          </span>
        </div>
      </section>

      {/* Əlaqə kanalları — böyük klikanabilir kartlar */}
      <section
        className="py-20 px-6 md:px-10"
        style={{ borderTop: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="e-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Əlaqə kanalları
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  ch.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="e-channel flex flex-col justify-between border p-6 group"
                style={{ borderColor: "#26282d", minHeight: "160px" }}
              >
                <div className="flex items-start justify-between">
                  <ch.icon size={22} style={{ color: "#8b929b" }} />
                  <ArrowUpRight
                    size={18}
                    className="e-arrow"
                    style={{ color: "#4a4e55" }}
                  />
                </div>
                <div>
                  <span
                    className="e-display text-[11px] tracking-[0.2em] uppercase block mb-1"
                    style={{ color: "#6b6f76" }}
                  >
                    {ch.label}
                  </span>
                  <span
                    className="e-body text-[15px]"
                    style={{ color: "#f2f3f4" }}
                  >
                    {ch.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Regional nümayəndələr — şəhər üzrə əlaqə şəxsləri */}
      <section
        className="py-20 px-6 md:px-10"
        style={{ backgroundColor: "#0e0f12" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="e-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Regional nümayəndələr
            </span>
          </div>

          <div style={{ borderTop: "1px solid #26282d" }}>
            {REPS.map((rep) => (
              <div
                key={rep.city}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-7"
                style={{ borderBottom: "1px solid #26282d" }}
              >
                <div className="md:col-span-3 flex items-center gap-2">
                  <MapPin size={16} style={{ color: "#6b6f76" }} />
                  <span
                    className="e-display text-[15px] tracking-wide uppercase"
                    style={{ color: "#f2f3f4" }}
                  >
                    {rep.city}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <span
                    className="e-body text-[14px]"
                    style={{ color: "#a9adb3" }}
                  >
                    {rep.name}
                  </span>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span
                    className="e-display text-[11px] tracking-[0.2em] uppercase px-2.5 py-1"
                    style={{ backgroundColor: "#1e2024", color: "#8b929b" }}
                  >
                    {rep.chassis}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — akkordeon */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="e-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Tez-tez verilən suallar
            </span>
          </div>

          <div style={{ borderTop: "1px solid #26282d" }}>
            {FAQ.map((item, i) => (
              <div key={item.q} style={{ borderBottom: "1px solid #26282d" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span
                    className="e-display text-[16px] md:text-[18px] pr-6"
                    style={{ color: "#f2f3f4" }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="e-faq-icon shrink-0"
                    style={{
                      color: "#8b929b",
                      transform:
                        openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    className="e-body pb-6 pr-10"
                    style={{
                      color: "#a9adb3",
                      fontSize: "14px",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
