"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gauge,
  Calendar,
  MapPin,
  Fuel,
  Settings2,
  Palette,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { machines } from "@/data/machines";

// QEYD: bu, `machines` massivindəki hər elementin gözlənilən sahələrinə əsaslanır:
// id, owner, chassis, title, year, mileage, city, fuel, transmission, color,
// engine, power, desc, image (tək şəkil) və ya images (şəkil massivi), price (opsional).
// Sənin data strukturunda sahə adları fərqlidirsə, aşağıdaki `car.xxx` yerlərini uyğunlaşdır.

export default function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeImage, setActiveImage] = useState(0);

  const car = machines.find((m) => String(m.id) === id);

  if (!car) {
    return (
      <main
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundColor: "#0a0b0d", minHeight: "100vh" }}
      >
        <p
          className="mb-6"
          style={{ color: "#a9adb3", fontFamily: "Inter, sans-serif" }}
        >
          Bu elan tapılmadı və ya silinib.
        </p>
        <Link
          href="/qalereya"
          className="px-6 py-3 border text-[13px] tracking-[0.15em] uppercase"
          style={{
            borderColor: "#3a3d42",
            color: "#f2f3f4",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          Kataloqa qayıt
        </Link>
      </main>
    );
  }

  // Bir şəkil ("image") ya da bir neçə şəkil ("images") dəstəklənir
  const gallery: string[] =
    (car as any).images && (car as any).images.length > 0
      ? (car as any).images
      : car.image
        ? [car.image]
        : [];

  const SPECS = [
    { icon: Calendar, label: "İl", value: car.year },
    car.mileage != null && {
      icon: Gauge,
      label: "Yürüş",
      value: `${car.mileage.toLocaleString("az-AZ")} km`,
    },
    car.fuel && { icon: Fuel, label: "Yanacaq növü", value: car.fuel },
    car.transmission && {
      icon: Settings2,
      label: "Sürətlər qutusu",
      value: car.transmission,
    },
    car.color && { icon: Palette, label: "Rəng", value: car.color },
    car.city && { icon: MapPin, label: "Şəhər", value: car.city },
  ].filter(Boolean) as {
    icon: typeof Calendar;
    label: string;
    value: string | number;
  }[];

  return (
    <main style={{ backgroundColor: "#0a0b0d" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");
        .d-display {
          font-family: "Oswald", sans-serif;
        }
        .d-body {
          font-family: "Inter", sans-serif;
        }
        .d-media {
          background: repeating-linear-gradient(
            135deg,
            #1a1c20,
            #1a1c20 2px,
            #17181b 2px,
            #17181b 4px
          );
        }
        .d-thumb {
          transition:
            border-color 0.25s ease,
            opacity 0.25s ease;
          opacity: 0.55;
        }
        .d-thumb.active {
          border-color: #e8eaec;
          opacity: 1;
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="pt-32 px-6 md:px-10">
        <div
          className="max-w-7xl mx-auto flex items-center gap-2 mb-8 d-body text-[13px]"
          style={{ color: "#6b6f76" }}
        >
          <Link href="/" style={{ color: "#6b6f76" }}>
            Ana səhifə
          </Link>
          <span>/</span>
          <Link href="/qalereya" style={{ color: "#6b6f76" }}>
            Qalereya
          </Link>
          <span>/</span>
          <span style={{ color: "#a9adb3" }}>{car.title}</span>
        </div>
      </div>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Şəkil qalereyası */}
          <div className="lg:col-span-7">
            <div className="d-media relative w-full aspect-[7/8] overflow-hidden">
              {gallery.length > 0 ? (
                <Image
                  src={gallery[activeImage]}
                  alt={car.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className="d-display text-[13px] tracking-[0.2em] uppercase"
                    style={{ color: "#4a4e55" }}
                  >
                    Şəkil yoxdur
                  </span>
                </div>
              )}

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage((i) =>
                        i === 0 ? gallery.length - 1 : i - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#f2f3f4",
                    }}
                    aria-label="Əvvəlki şəkil"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span
                    className="absolute top-4 right-4 d-display text-[12px] tracking-[0.2em] uppercase px-2.5 py-1"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#f2f3f4",
                    }}
                  >
                    {activeImage + 1} / {gallery.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveImage((i) =>
                        i === gallery.length - 1 ? 0 : i + 1,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#f2f3f4",
                    }}
                    aria-label="Növbəti şəkil"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-3 mt-4">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActiveImage(i)}
                    className={`d-thumb relative flex-1 aspect-[4/3] border-2 overflow-hidden ${i === activeImage ? "active" : ""}`}
                    style={{
                      borderColor: i === activeImage ? "#e8eaec" : "#26282d",
                    }}
                    aria-label={`Şəkil ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Təsvir */}
            {car.desc && (
              <div className="mt-14">
                <h2
                  className="d-display font-semibold text-xl uppercase mb-4"
                  style={{ color: "#f2f3f4" }}
                >
                  Elan haqqında
                </h2>
                <p
                  className="d-body"
                  style={{
                    color: "#a9adb3",
                    fontSize: "15px",
                    lineHeight: 1.85,
                  }}
                >
                  {car.desc}
                </p>
              </div>
            )}

            {/* Texniki spesifikasiya */}
            {SPECS.length > 0 && (
              <div className="mt-14">
                <h2
                  className="d-display font-semibold text-xl uppercase mb-6"
                  style={{ color: "#f2f3f4" }}
                >
                  Texniki məlumat
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                  {SPECS.map((spec, i) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-4"
                      style={{
                        borderBottom:
                          i < SPECS.length - (SPECS.length % 2 === 0 ? 2 : 1)
                            ? "1px solid #1e2024"
                            : "none",
                      }}
                    >
                      <span
                        className="flex items-center gap-2.5 d-body text-[14px]"
                        style={{ color: "#6b6f76" }}
                      >
                        <spec.icon size={16} />
                        {spec.label}
                      </span>
                      <span
                        className="d-body text-[14px] font-medium"
                        style={{ color: "#f2f3f4" }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sağ panel — qiymət/əlaqə, sticky */}
          <div className="lg:col-span-5">
            <div
              className="sticky top-28 border p-8"
              style={{ borderColor: "#26282d", backgroundColor: "#101114" }}
            >
              {car.chassis && (
                <span
                  className="d-display inline-flex text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 mb-5"
                  style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
                >
                  {car.chassis}
                </span>
              )}

              <h1
                className="d-display font-semibold uppercase leading-none mb-2"
                style={{ color: "#f2f3f4", fontSize: "2rem" }}
              >
                {car.title}
              </h1>
              {(car.engine || car.power) && (
                <p
                  className="d-body text-[14px] mb-8"
                  style={{ color: "#6b6f76" }}
                >
                  {[car.engine, car.power].filter(Boolean).join(" · ")}
                </p>
              )}

              {car.owner && (
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-full d-display font-medium"
                    style={{ backgroundColor: "#1e2024", color: "#a9adb3" }}
                  >
                    {car.owner
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span
                      className="d-body text-[14px] font-medium"
                      style={{ color: "#f2f3f4" }}
                    >
                      {car.owner}
                    </span>
                    <span
                      className="d-body text-[13px]"
                      style={{ color: "#6b6f76" }}
                    >
                      Klub üzvü
                    </span>
                  </div>
                </div>
              )}

              {/* <a
                href="tel:+994000000000"
                className="d-display inline-flex w-full items-center justify-center gap-2 text-[13px] tracking-[0.15em] uppercase px-6 py-4 mb-3 transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
              >
                <Phone size={16} />
                Sahibi ilə əlaqə
              </a> */}
              <Link
                href="/qalereya"
                className="d-display inline-flex w-full items-center justify-center text-[13px] tracking-[0.15em] uppercase px-6 py-4 border"
                style={{ borderColor: "#3a3d42", color: "#f2f3f4" }}
              >
                Kataloqa qayıt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
