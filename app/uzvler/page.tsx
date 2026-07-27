"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const PLANS = [
  {
    name: "Standart elan",
    price: "15",
    period: "/ ay",
    desc: "Bir avtomobili kataloqa əlavə etmək üçün əsas paket.",
    features: [
      "1 avtomobil elanı",
      "Maks. 6 şəkil",
      "30 gün aktiv müddət",
      "Əsas spesifikasiya sahələri",
    ],
    highlighted: false,
  },
  {
    name: "Vurğulanmış elan",
    price: "35",
    period: "/ ay",
    desc: "Kataloqun ön sırasında görünmək və daha çox baxış üçün.",
    features: [
      "1 avtomobil elanı",
      "Maks. 15 şəkil",
      "60 gün aktiv müddət",
      "Kataloqda önə çəkilmiş yer",
      '"Vurğulanmış" nişanı',
    ],
    highlighted: true,
  },
  {
    name: "İllik klub üzvliyi",
    price: "180",
    period: "/ il",
    desc: "Aktiv üzvlər üçün — elan yerləşdirmə və klub tədbirlərinə giriş.",
    features: [
      "3 avtomobilə qədər elan",
      "Limitsiz şəkil",
      "İl ərzində limitsiz yeniləmə",
      "Klub tədbirlərinə pulsuz giriş",
      "Prioritet dəstək",
    ],
    highlighted: false,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Qeydiyyatdan keç",
    desc: "Ad, əlaqə nömrəsi və avtomobilin şassi kodu ilə üzv formu doldur.",
  },
  {
    num: "02",
    title: "Paketini seç",
    desc: "İstədiyin elan paketini seç və ödənişi tamamla.",
  },
  {
    num: "03",
    title: "Elanın yayımlanır",
    desc: "Komandamız məlumatları yoxlayır və 24 saat ərzində elan kataloqda görünür.",
  },
];

export default function UzvlerPage() {
  return (
    <main style={{ backgroundColor: "#0a0b0d" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap");
        .u-display {
          font-family: "Oswald", sans-serif;
        }
        .u-body {
          font-family: "Inter", sans-serif;
        }

        .plan-card {
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }
        .plan-card:hover {
          border-color: #6b6f76;
          transform: translateY(-4px);
        }
      `}</style>

      {/* Səhifə başlığı — Porsche konfiqurator səhifələrindəki kimi sadə, böyük, üstündə breadcrumb */}
      <section
        className="relative pt-40 pb-20 px-6 md:px-10"
        style={{ borderBottom: "1px solid #1e2024" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="flex items-center gap-2 mb-6 u-body text-[13px]"
            style={{ color: "#6b6f76" }}
          >
            <Link href="/" style={{ color: "#6b6f76" }}>
              Ana səhifə
            </Link>
            <span>/</span>
            <span style={{ color: "#a9adb3" }}>Üzv ol</span>
          </div>

          <h1
            className="u-display font-semibold uppercase leading-[0.95] mb-6"
            style={{
              color: "#f2f3f4",
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            }}
          >
            Klubun bir
            <br />
            hissəsi ol
          </h1>

          <p
            className="u-body max-w-xl"
            style={{ color: "#a9adb3", fontSize: "16px", lineHeight: 1.8 }}
          >
            Avtomobilini Azərbaycandakı ən böyük ML-Class kataloquna əlavə et,
            klub tədbirlərinə qoşul və eyni marka sevgisini bölüşən icmanın üzvü
            ol.
          </p>
        </div>
      </section>

      {/* Necə işləyir — qısa 3 addım */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="u-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Necə işləyir
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step) => (
              <div key={step.num}>
                <span
                  className="u-display font-semibold text-5xl"
                  style={{ color: "#3a3d42" }}
                >
                  {step.num}
                </span>
                <h3
                  className="u-display font-medium text-xl mt-4 mb-2"
                  style={{ color: "#f2f3f4" }}
                >
                  {step.title}
                </h3>
                <p
                  className="u-body text-[14px]"
                  style={{ color: "#a9adb3", lineHeight: 1.7 }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarif kartları — Porsche/Mercedes konfiqurator paket seçimi tərzində */}
      <section
        className="py-20 px-6 md:px-10"
        style={{ backgroundColor: "#0e0f12" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#4a4e55" }}
            />
            <span
              className="u-display text-[12px] tracking-[0.3em] uppercase"
              style={{ color: "#8b929b" }}
            >
              Paketlər
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="plan-card flex flex-col border p-8"
                style={{
                  borderColor: plan.highlighted ? "#e8eaec" : "#26282d",
                  backgroundColor: "#101114",
                }}
              >
                {plan.highlighted && (
                  <span
                    className="u-display text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 w-fit mb-5"
                    style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
                  >
                    Tövsiyə olunur
                  </span>
                )}

                <h3
                  className="u-display font-medium text-xl mb-2"
                  style={{ color: "#f2f3f4" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="u-body text-[14px] mb-6"
                  style={{ color: "#a9adb3", lineHeight: 1.6 }}
                >
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className="u-display font-semibold text-4xl"
                    style={{ color: "#f2f3f4" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="u-body text-[14px]"
                    style={{ color: "#6b6f76" }}
                  >
                    AZN {plan.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-10">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 u-body text-[14px]"
                      style={{ color: "#c9cdd2" }}
                    >
                      <Check
                        size={16}
                        style={{
                          color: "#8b929b",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/uzvler/qeydiyyat"
                  className="u-display inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.15em] uppercase px-6 py-3.5 mt-auto transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: plan.highlighted
                      ? "#e8eaec"
                      : "transparent",
                    color: plan.highlighted ? "#0a0b0d" : "#f2f3f4",
                    border: plan.highlighted ? "none" : "1px solid #3a3d42",
                  }}
                >
                  Seç
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <p className="u-body text-[13px] mt-10" style={{ color: "#4a4e55" }}>
            * Bütün elanlar yayımlanmadan əvvəl klub moderatorları tərəfindən
            yoxlanılır.
          </p>
        </div>
      </section>

      {/* Son CTA — sadə, sual üçün əlaqə */}
      <section
        className="py-24 px-6 md:px-10 text-center"
        style={{ borderTop: "1px solid #1e2024" }}
      >
        <div className="max-w-lg mx-auto">
          <h2
            className="u-display font-semibold uppercase text-2xl mb-4"
            style={{ color: "#f2f3f4" }}
          >
            Sualın var?
          </h2>
          <p
            className="u-body mb-8"
            style={{ color: "#a9adb3", fontSize: "15px", lineHeight: 1.7 }}
          >
            Paket seçimi və ya elan yerləşdirmə barədə suallarını bizə yaz.
          </p>
          <Link
            href="/elaqe"
            className="u-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase px-8 py-4 border"
            style={{ borderColor: "#3a3d42", color: "#f2f3f4" }}
          >
            Bizimlə əlaqə saxla
          </Link>
        </div>
      </section>
    </main>
  );
}
