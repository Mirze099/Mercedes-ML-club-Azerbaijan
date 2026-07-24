"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

// Real datada bu, təqvim/backend-dən gələcək
const EVENTS = [
  {
    day: "14",
    month: "Avq",
    title: "Off-road klub görüşü",
    location: "Qobustan",
    desc: "İllik payız görüşü — bütün nəsillərdən ML sahibləri üçün açıq off-road marşrutu.",
  },
  {
    day: "02",
    month: "Sen",
    title: "Texniki seminar: AIRMATIC asqı",
    location: "Bakı, klub mərkəzi",
    desc: "W164 və W166 sahibləri üçün asqı sisteminin diaqnostikası və qulluğu üzrə praktiki görüş.",
  },
  {
    day: "21",
    month: "Sen",
    title: "Klub piknik günü",
    location: "Şamaxı",
    desc: "Ailəvi görüş — maşın nümayişi, foto sessiya və klub üzvləri arasında tanışlıq.",
  },
];

export default function Events() {
  return (
    <section
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: "#0e0f12" }}
    >
      <style jsx global>{`
        .ev-display {
          font-family: "Oswald", sans-serif;
        }
        .ev-body {
          font-family: "Inter", sans-serif;
        }
        .ev-row {
          transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
        }
        .ev-row:hover {
          background-color: #17181b;
          border-color: #4a4e55;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "#4a4e55" }}
              />
              <span
                className="ev-display text-[12px] tracking-[0.3em] uppercase"
                style={{ color: "#8b929b" }}
              >
                Klub təqvimi
              </span>
            </div>
            <h2
              className="ev-display font-semibold uppercase leading-none"
              style={{
                color: "#f2f3f4",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              }}
            >
              Yaxın tədbirlər
            </h2>
          </div>

          <Link
            href="/tedbirler"
            className="ev-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase pb-1 border-b"
            style={{ color: "#e8eaec", borderColor: "#3a3d42" }}
          >
            Bütün tədbirlər
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {EVENTS.map((event, i) => (
            <Link
              href={`/tedbirler/${i}`}
              key={event.title}
              className="ev-row flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border px-6 md:px-8 py-7"
              style={{ borderColor: "#26282d" }}
            >
              {/* Tarix bloku */}
              <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-0 md:w-20 shrink-0">
                <span
                  className="ev-display font-semibold text-4xl leading-none"
                  style={{ color: "#f2f3f4" }}
                >
                  {event.day}
                </span>
                <span
                  className="ev-display text-[13px] tracking-[0.2em] uppercase"
                  style={{ color: "#6b6f76" }}
                >
                  {event.month}
                </span>
              </div>

              {/* Şaquli ayırıcı */}
              <div
                className="hidden md:block w-px self-stretch"
                style={{ backgroundColor: "#26282d" }}
              />

              {/* Məzmun */}
              <div className="flex-1">
                <h3
                  className="ev-display font-medium text-xl mb-2"
                  style={{ color: "#f2f3f4" }}
                >
                  {event.title}
                </h3>
                <p
                  className="ev-body text-[14px] mb-3"
                  style={{ color: "#a9adb3", lineHeight: 1.6 }}
                >
                  {event.desc}
                </p>
                <span
                  className="flex items-center gap-1.5 ev-body text-[13px]"
                  style={{ color: "#6b6f76" }}
                >
                  <MapPin size={14} />
                  {event.location}
                </span>
              </div>

              {/* Ox işarəsi */}
              <div className="hidden md:flex items-center shrink-0">
                <ArrowRight size={20} style={{ color: "#4a4e55" }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
