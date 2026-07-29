"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Gauge, Calendar, MapPin, SlidersHorizontal, X } from "lucide-react";
import { machines } from "@/data/machines";

const CHASSIS_FILTERS = ["Hamısı", "W163", "W164", "W166"];
const SORT_OPTIONS = [
  { key: "yeni", label: "Ən yeni elanlar" },
  { key: "yurus-az", label: "Yürüş: azdan çoxa" },
];

export default function QaleriyaPage() {
  const [chassisFilter, setChassisFilter] = useState("Hamısı");
  const [sort, setSort] = useState("yeni");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredCars = useMemo(() => {
    let result = machines.filter(
      (car) => chassisFilter === "Hamısı" || car.chassis === chassisFilter,
    );

    if (sort === "yurus-az") {
      result = [...result].sort(
        (a, b) =>
          Number(String(a.mileage).replace(/\D/g, "")) -
          Number(String(b.mileage).replace(/\D/g, "")),
      );
    }

    if (sort === "yeni") {
      result = [...result].sort((a, b) => Number(b.year) - Number(a.year));
    }

    return result;
  }, [chassisFilter, sort]);

  return (
    <main style={{ backgroundColor: "#0a0b0d" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");
        .g-display {
          font-family: "Oswald", sans-serif;
        }
        .g-body {
          font-family: "Inter", sans-serif;
        }

        .g-card {
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }
        .g-card:hover {
          border-color: #6b6f76;
          transform: translateY(-4px);
        }

        .g-media {
          background: repeating-linear-gradient(
            135deg,
            #1a1c20,
            #1a1c20 2px,
            #17181b 2px,
            #17181b 4px
          );
        }

        .g-chip {
          transition:
            background-color 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }
      `}</style>

      {/* Başlıq — /uzvler ilə eyni struktur, sayt boyu ardıcıllıq üçün */}
      <section
        className="pt-40 pb-16 px-6 md:px-10"
        style={{ borderBottom: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="flex items-center gap-2 mb-6 g-body text-[13px]"
            style={{ color: "#6b6f76" }}
          >
            <Link href="/" style={{ color: "#6b6f76" }}>
              Ana səhifə
            </Link>
            <span>/</span>
            <span style={{ color: "#a9adb3" }}>Qalereya</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1
              className="g-display font-semibold uppercase leading-[0.95]"
              style={{
                color: "#f2f3f4",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              }}
            >
              Avtomobil
              <br />
              kataloqu
            </h1>
            <span className="g-body text-[14px]" style={{ color: "#6b6f76" }}>
              {filteredCars.length} elan tapıldı
            </span>
          </div>
        </div>
      </section>

      {/* Filter zolağı — Porsche used-car axtarış interfeysi referansı */}
      <section
        className="sticky top-0 z-30 py-5 px-6 md:px-10 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(10,11,13,0.9)",
          borderBottom: "1px solid #1e2024",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2">
            {CHASSIS_FILTERS.map((chassis) => (
              <button
                key={chassis}
                onClick={() => setChassisFilter(chassis)}
                className="g-chip g-display text-[12px] tracking-[0.15em] uppercase px-4 py-2 border"
                style={{
                  borderColor:
                    chassisFilter === chassis ? "#e8eaec" : "#26282d",
                  backgroundColor:
                    chassisFilter === chassis ? "#e8eaec" : "transparent",
                  color: chassisFilter === chassis ? "#0a0b0d" : "#a9adb3",
                }}
              >
                {chassis}
              </button>
            ))}
          </div>

          <button
            onClick={() => setFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 g-display text-[12px] tracking-[0.15em] uppercase px-4 py-2 border"
            style={{ borderColor: "#26282d", color: "#f2f3f4" }}
          >
            <SlidersHorizontal size={15} />
            Filtrlə
          </button>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="g-display text-[12px] tracking-[0.1em] uppercase px-4 py-2 border bg-transparent"
            style={{ borderColor: "#26282d", color: "#a9adb3" }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option
                key={opt.key}
                value={opt.key}
                style={{ backgroundColor: "#0e0f12" }}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/*
        Mobil filter overlay — DÜZƏLİŞ:
        Əvvəlki versiyada `fixed inset-0` istifadə olunurdu, yəni overlay
        `top: 0`-dan başlayırdı — düz Navbar-ın da yerləşdiyi nöqtədən.
        Nəticədə overlay-in başlıq sətri (Şassi kodu / X) Navbar-ın üstünə
        "yapışırdı". Həll: overlay-i Navbar-ın hündürlüyü qədər (80px,
        Navbar-dakı h-20 ilə eynidir) aşağıdan başladırıq və z-index-i
        Navbar-ın z-50-dən aşağı saxlayırıq ki, Navbar həmişə üstdə qalsın.
      */}
      {filtersOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 md:hidden overflow-y-auto"
          style={{ top: "80px", backgroundColor: "#0a0b0d" }}
        >
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: "1px solid #1e2024" }}
          >
            <span
              className="g-display text-[13px] tracking-[0.2em] uppercase"
              style={{ color: "#f2f3f4" }}
            >
              Şassi kodu
            </span>
            <button
              onClick={() => setFiltersOpen(false)}
              style={{ color: "#f2f3f4" }}
              aria-label="Bağla"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col gap-3 p-6">
            {CHASSIS_FILTERS.map((chassis) => (
              <button
                key={chassis}
                onClick={() => {
                  setChassisFilter(chassis);
                  setFiltersOpen(false);
                }}
                className="g-display text-left text-[14px] tracking-[0.1em] uppercase px-4 py-3 border"
                style={{
                  borderColor:
                    chassisFilter === chassis ? "#e8eaec" : "#26282d",
                  color: chassisFilter === chassis ? "#f2f3f4" : "#a9adb3",
                }}
              >
                {chassis}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Kataloq şəbəkəsi */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <Link
              href={`/qalereya/${car.id}`}
              key={car.id}
              className="g-card flex flex-col border"
              style={{
                borderColor: car.highlighted ? "#4a4e55" : "#26282d",
                backgroundColor: "#101114",
              }}
            >
              <div className="g-media relative w-full aspect-[4/5] flex items-start justify-between p-4 overflow-hidden">
                {car.image && (
                  <Image
                    src={car.image}
                    alt={`${car.title} - ${car.owner}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover w-full h-full absolute inset-0"
                  />
                )}

                <span
                  className="g-display text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 z-10"
                  style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
                >
                  {car.chassis}
                </span>
                {car.highlighted && (
                  <span
                    className="g-display text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 z-10"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "#f2f3f4",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    Vurğulanmış
                  </span>
                )}
              </div>

              <div className="flex flex-col p-6 flex-1">
                <span
                  className="g-body text-[13px] mb-1"
                  style={{ color: "#6b6f76" }}
                >
                  {car.owner}
                </span>
                <h3
                  className="g-display font-medium text-xl mb-4"
                  style={{ color: "#f2f3f4" }}
                >
                  {car.title}
                </h3>

                <div
                  className="flex items-center flex-wrap gap-x-5 gap-y-2 mb-6 g-body text-[13px]"
                  style={{ color: "#a9adb3" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} style={{ color: "#6b6f76" }} />
                    {car.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Gauge size={14} style={{ color: "#6b6f76" }} />
                    {car.mileage.toLocaleString("az-AZ")} km
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} style={{ color: "#6b6f76" }} />
                    {car.city}
                  </span>
                </div>

                <div
                  className="flex items-center justify-end mt-auto pt-4"
                  style={{ borderTop: "1px solid #26282d" }}
                >
                  <span
                    className="g-display text-[12px] tracking-[0.1em] uppercase"
                    style={{ color: "#8b929b" }}
                  >
                    Ətraflı →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <p className="g-body text-center py-20" style={{ color: "#6b6f76" }}>
            Seçilmiş filtrə uyğun elan tapılmadı.
          </p>
        )}
      </section>
    </main>
  );
}
