"use client";

import Link from "next/link";
import { Users, ShieldCheck, Wrench, Flag, ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "2022", label: "Təsis ili" },
  { value: "120+", label: "Aktiv üzv" },
  { value: "3", label: "Nəsil: W163 / W164 / W166" },
  { value: "24", label: "İllik tədbir" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Etibarlılıq",
    desc: "Hər elan moderasiyadan keçir. Kataloqda gördüyün hər avtomobil real üzv tərəfindən təqdim olunub.",
  },
  {
    icon: Wrench,
    title: "Texniki bilik",
    desc: "Klub daxilində təcrübəli sahiblər servis, ehtiyat hissə və diaqnostika mövzusunda bir-birinə dəstək olur.",
  },
  {
    icon: Users,
    title: "İcma",
    desc: "Off-road görüşlərdən texniki seminarlara qədər — üç nəslin sahiblərini bir masa arxasında birləşdiririk.",
  },
  {
    icon: Flag,
    title: "Miras",
    desc: "1997-ci ildən bu günə qədər ML-Class-ın tarixini və hər nəslin özünəməxsus xarakterini yaşadırıq.",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Klub təsis olundu",
    desc: "Bakıda 8 həvəskarın təşəbbüsü ilə ilk görüş keçirildi.",
  },
  {
    year: "2025",
    title: "120+ üzv həddi",
    desc: "Klub Azərbaycanın ən böyük ML-Class icmasına çevrildi.",
  },
];

export default function HaqqimizdaPage() {
  return (
    <main style={{ backgroundColor: "#0a0b0d" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");
        .a-display {
          font-family: "Oswald", sans-serif;
        }
        .a-body {
          font-family: "Inter", sans-serif;
        }
        .a-value-card {
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }
        .a-value-card:hover {
          border-color: #6b6f76;
          transform: translateY(-4px);
        }
      `}</style>

      {/* Başlıq — digər səhifələrlə eyni struktur */}
      <section
        className="pt-40 pb-20 px-6 md:px-10"
        style={{ borderBottom: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="flex items-center gap-2 mb-6 a-body text-[13px]"
            style={{ color: "#6b6f76" }}
          >
            <Link href="/" style={{ color: "#6b6f76" }}>
              Ana səhifə
            </Link>
            <span>/</span>
            <span style={{ color: "#a9adb3" }}>Haqqımızda</span>
          </div>

          <h1
            className="a-display font-semibold uppercase leading-[0.95] mb-6"
            style={{
              color: "#f2f3f4",
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            }}
          >
            Bir marka,
            <br />
            bir icma
          </h1>

          <p
            className="a-body max-w-xl"
            style={{ color: "#a9adb3", fontSize: "16px", lineHeight: 1.8 }}
          >
            Biz Azərbaycanda Mercedes-Benz ML-Class sahiblərini bir araya
            gətirən qeyri-rəsmi, lakin ciddi qurulmuş bir klubuq. Məqsədimiz
            sadədir — bu maşını sevən insanları tapmaq, biliklə dəstəkləmək və
            üç nəslin mirasını yaşatmaq.
          </p>
        </div>
      </section>

      {/* Statistika zolağı */}
      <section
        className="py-14 px-6 md:px-10"
        style={{ borderBottom: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="a-display font-semibold text-4xl"
                style={{ color: "#f2f3f4" }}
              >
                {stat.value}
              </span>
              <span
                className="a-body text-[13px] tracking-wide"
                style={{ color: "#6b6f76" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Missiya — böyük mətn bölünməsi (Bugatti heritage səhifələri referansı) */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "#4a4e55" }}
              />
              <span
                className="a-display text-[12px] tracking-[0.3em] uppercase"
                style={{ color: "#8b929b" }}
              >
                Missiyamız
              </span>
            </div>
            <h2
              className="a-display font-semibold uppercase leading-[0.95]"
              style={{
                color: "#f2f3f4",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              }}
            >
              Sürücüdən
              <br />
              sürücüyə
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-center">
            <p
              className="a-body max-w-2xl"
              style={{ color: "#a9adb3", fontSize: "16px", lineHeight: 1.85 }}
            >
              ML-Class sadəcə bir avtomobil deyil — hər nəsli özünəməxsus
              xarakterə malik mühəndislik nümunəsidir. Klubumuz kommersiya
              məqsədli deyil: məqsədimiz üzvlərin öz avtomobillərini düzgün
              qiymətləndirilmiş şəkildə təqdim etməsinə, təcrübə mübadiləsinə və
              real görüşlərdə tanışlığa şərait yaratmaqdır. Hər yeni üzv bizim
              üçün sadəcə bir "elan" deyil, icmanın bir hissəsidir.
            </p>
          </div>
        </div>
      </section>

      {/* Dəyərlər — 4 kart */}
      <section
        className="py-24 px-6 md:px-10"
        style={{ backgroundColor: "#0e0f12" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="a-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Dəyərlərimiz
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="a-value-card flex flex-col border p-7"
                style={{ borderColor: "#26282d", backgroundColor: "#101114" }}
              >
                <val.icon
                  size={22}
                  style={{ color: "#8b929b" }}
                  className="mb-5"
                />
                <h3
                  className="a-display font-medium text-lg mb-3"
                  style={{ color: "#f2f3f4" }}
                >
                  {val.title}
                </h3>
                <p
                  className="a-body text-[14px]"
                  style={{ color: "#a9adb3", lineHeight: 1.7 }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Xronologiya — Bugatti "Heritage" tərzi vertikal timeline */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="a-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Klubun tarixi
            </span>
          </div>

          <div style={{ borderTop: "1px solid #26282d" }}>
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-8"
                style={{ borderBottom: "1px solid #26282d" }}
              >
                <div className="md:col-span-2">
                  <span
                    className="a-display font-semibold text-3xl"
                    style={{ color: "#f2f3f4" }}
                  >
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <span
                    className="a-display text-[15px] tracking-wide"
                    style={{ color: "#c9cdd2" }}
                  >
                    {item.title}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p
                    className="a-body"
                    style={{
                      color: "#a9adb3",
                      fontSize: "15px",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Son CTA */}
      <section
        className="py-24 px-6 md:px-10 text-center"
        style={{ borderTop: "1px solid #1e2024", backgroundColor: "#0e0f12" }}
      >
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <h2
            className="a-display font-semibold uppercase text-2xl mb-4"
            style={{ color: "#f2f3f4" }}
          >
            Bizə qoşulmaq istəyirsən?
          </h2>
          <p
            className="a-body mb-8"
            style={{ color: "#a9adb3", fontSize: "15px", lineHeight: 1.7 }}
          >
            Klubun üzvü ol, avtomobilini kataloqa əlavə et və icmanın bir
            hissəsi ol.
          </p>
          <Link
            href="/uzvler"
            className="a-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
          >
            Üzv ol
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
