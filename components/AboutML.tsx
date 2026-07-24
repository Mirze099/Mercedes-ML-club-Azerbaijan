"use client";

const GENERATIONS = [
  {
    code: "W163",
    years: "1997 — 2005",
    desc: "İlk nəsil. Mercedes-Benz-in premium off-road seqmentinə ilk ciddi addımı — monokok şassi ilə klassik SUV-ları birləşdirdi.",
  },
  {
    code: "W164",
    years: "2005 — 2011",
    desc: "Daha iri gövdə, güclənmiş AMG versiyaları və AIRMATIC asqı sistemi ilə həm şəhər, həm də bezdorojye üçün uyğunlaşdı.",
  },
  {
    code: "W166",
    years: "2011 — 2015",
    desc: "Sonuncu ML nəsli — bundan sonra model GLE adı ilə davam etdi. Daha yüngül konstruksiya, aşağı yanacaq sərfiyyatı, müasir təhlükəsizlik sistemləri.",
  },
];

export default function AboutML() {
  return (
    <section
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: "#0a0b0d" }}
    >
      <style jsx global>{`
        .am-display {
          font-family: "Oswald", sans-serif;
        }
        .am-body {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "#4a4e55" }}
              />
              <span
                className="am-display text-[12px] tracking-[0.3em] uppercase"
                style={{ color: "#8b929b" }}
              >
                Model haqqında
              </span>
            </div>
            <h2
              className="am-display font-semibold uppercase leading-[0.95]"
              style={{
                color: "#f2f3f4",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              }}
            >
              Üç nəsil,
              <br />
              bir fəlsəfə
            </h2>
          </div>

          <div className="lg:col-span-8 flex items-center">
            <p
              className="am-body max-w-2xl"
              style={{ color: "#a9adb3", fontSize: "16px", lineHeight: 1.8 }}
            >
              Mercedes-Benz M-Class (ML), 1997-ci ildən 2015-ci ilədək istehsal
              olunub və markanın ilk premium sport-utility modeli olub. On
              səkkiz il ərzində üç nəsil buraxılıb — hər biri özünəməxsus
              xarakterlə. Klubumuzda bu üç nəslin hamısının sahibləri təmsil
              olunur, ona görə elanlarda hansı nəsildən danışdığımızı həmişə
              şassi kodu ilə göstəririk.
            </p>
          </div>
        </div>

        {/* Nəsillər siyahısı — spesifikasiya vərəqi tərzində */}
        <div style={{ borderTop: "1px solid #26282d" }}>
          {GENERATIONS.map((gen) => (
            <div
              key={gen.code}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-8"
              style={{ borderBottom: "1px solid #26282d" }}
            >
              <div className="md:col-span-2">
                <span
                  className="am-display font-semibold text-3xl"
                  style={{ color: "#f2f3f4" }}
                >
                  {gen.code}
                </span>
              </div>
              <div className="md:col-span-2">
                <span
                  className="am-body text-[13px] tracking-wide"
                  style={{ color: "#6b6f76" }}
                >
                  {gen.years}
                </span>
              </div>
              <div className="md:col-span-8">
                <p
                  className="am-body"
                  style={{
                    color: "#a9adb3",
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {gen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
