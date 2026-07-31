"use client";

import { useState } from "react";
import Link from "next/link";

// Inline SVG ikonlar — lucide-react-dan asılı deyil
const IconPhone = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconSend = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </svg>
);

const IconInstagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconMail = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconMapPin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconChevronDown = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const IconArrowUpRight = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const CHANNELS = [
  {
    icon: IconPhone,
    label: "Telefon",
    value: "+994 50 376 55 75",
    href: "tel:+994503765575  ",
  },
  {
    icon: IconSend,
    label: "Telegram",
    value: "@mlklubaz",
    href: "https://t.me/mlklubaz",
  },
  {
    icon: IconInstagram,
    label: "Instagram",
    value: "@mlklub.az",
    href: "https://instagram.com/mlklub.az",
  },
  {
    icon: IconMail,
    label: "E-poçt",
    value: "info@mlklub.az",
    href: "mailto:info@mlklub.az",
  },
];

const REPS = [
  { city: "Bakı", name: "Sabo", chassis: "W163" },
  { city: "Gəncə", name: "Tural Hüseynov", chassis: "W166" },
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
    <main className="overflow-x-hidden" style={{ backgroundColor: "#0a0b0d" }}>
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

      {/*
        Split hero — DÜZƏLİŞ:
        Əvvəlki versiyada `minHeight: "70vh"` inline style bütün ekran
        ölçülərinə tətbiq olunurdu. Mobil-də sağ diaqonal panel gizli
        olduğu üçün (`hidden lg:block`) sol mətn bloku bu 70vh-lik sahənin
        içində "üzürdü" və altında lazımsız boşluq qalırdı. İndi minimum
        hündürlük yalnız `lg:` breakpoint-dən etibarən tətbiq olunur,
        mobil-də hündürlük məzmuna görə avtomatik təyin olunur.
      */}
      <section className="relative w-full grid grid-cols-1 lg:grid-cols-2 lg:min-h-[70vh] overflow-hidden">
        <div className="flex flex-col justify-center min-w-0 px-6 md:px-10 lg:px-16 pt-28 lg:pt-32 pb-16">
          {/* flex-wrap əlavə olundu — çox dar ekranlarda daşmanın qarşısını alır */}
          <div
            className="flex flex-wrap items-center gap-2 mb-8 e-body text-[13px]"
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
            style={{ color: "#f2f3f4", fontSize: "clamp(2rem, 8vw, 4rem)" }}
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

        {/* Sağ diaqonal panel — yalnız lg (≥1024px) ekranlarda görünür */}
        <div
          className="e-media relative hidden lg:block overflow-hidden"
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
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
        className="py-16 md:py-20 px-6 md:px-10"
        style={{ borderTop: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-12">
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
                className="e-channel flex flex-col justify-between border p-5 sm:p-6 group"
                style={{ borderColor: "#26282d", minHeight: "140px" }}
              >
                <div className="flex items-start justify-between">
                  <ch.icon
                    width={22}
                    height={22}
                    style={{ color: "#8b929b" }}
                  />
                  <IconArrowUpRight
                    width={18}
                    height={18}
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
                    className="e-body text-[14px] sm:text-[15px] break-all sm:break-normal"
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
      <section
        className="py-16 md:py-20 px-6 md:px-10"
        style={{ backgroundColor: "#0e0f12" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-12">
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
                className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-8 md:items-center py-6 md:py-7"
                style={{ borderBottom: "1px solid #26282d" }}
              >
                <div className="md:col-span-3 flex items-center gap-2">
                  <IconMapPin
                    width={16}
                    height={16}
                    style={{ color: "#6b6f76" }}
                  />
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
                    className="e-display inline-flex text-[11px] tracking-[0.2em] uppercase px-2.5 py-1"
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
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-12">
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
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left"
                >
                  <span
                    className="e-display text-[15px] md:text-[18px] leading-snug"
                    style={{ color: "#f2f3f4" }}
                  >
                    {item.q}
                  </span>
                  <IconChevronDown
                    width={20}
                    height={20}
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
                    maxHeight: openFaq === i ? "240px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    className="e-body pb-5 md:pb-6 pr-6 md:pr-10"
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
