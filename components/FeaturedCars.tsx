// "use client";

// import Link from "next/link";
// import { Gauge, Calendar, MapPin, ArrowRight } from "lucide-react";
// import Image from "next/image";

// // Real datada bu, verilənlər bazasından (üzvün ödədiyi elan) gələcək
// const FEATURED_CARS = [
//   {
//     id: "01",
//     owner: "Elvin Məmmədov",
//     chassis: "W163",
//     title: "ML 350 4MATIC",
//     year: "2004",
//     mileage: "187 000 km",
//     city: "Bakı",
//     price: "18 900 AZN",
//     image: "/Sabo/IMG-1677.png",
//   },
//   {
//     id: "02",
//     owner: "Tural Hüseynov",
//     chassis: "W166",
//     title: "ML 63 AMG",
//     year: "2013",
//     mileage: "94 000 km",
//     city: "Gəncə",
//     price: "61 900 AZN",
//     image: "/cars/ml63.jpg",
//   },
//   {
//     id: "03",
//     owner: "Rəşad Quliyev",
//     chassis: "W163",
//     title: "ML 270 CDI",
//     year: "2003",
//     mileage: "241 000 km",
//     city: "Sumqayıt",
//     price: "11 200 AZN",
//     image: "/cars/ml270.jpg",
//   },
// ];

// export default function FeaturedCars() {
//   return (
//     <section
//       className="relative w-full py-24 md:py-32"
//       style={{ backgroundColor: "#0e0f12" }}
//     >
//       <style jsx global>{`
//         .fc-display {
//           font-family: "Oswald", sans-serif;
//         }
//         .fc-body {
//           font-family: "Inter", sans-serif;
//         }
//         .fc-card {
//           transition:
//             border-color 0.3s ease,
//             transform 0.3s ease;
//         }
//         .fc-card:hover {
//           border-color: #6b6f76;
//           transform: translateY(-4px);
//         }
//         .fc-media {
//           background: repeating-linear-gradient(
//             135deg,
//             #1a1c20,
//             #1a1c20 2px,
//             #17181b 2px,
//             #17181b 4px
//           );
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <span
//                 className="h-px w-10"
//                 style={{ backgroundColor: "#4a4e55" }}
//               />
//               <span
//                 className="fc-display text-[12px] tracking-[0.3em] uppercase"
//                 style={{ color: "#8b929b" }}
//               >
//                 Seçilmiş elanlar
//               </span>
//             </div>
//             <h2
//               className="fc-display font-semibold uppercase leading-none"
//               style={{
//                 color: "#f2f3f4",
//                 fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
//               }}
//             >
//               Üzvlərin avtomobilləri
//             </h2>
//           </div>

//           <Link
//             href="/qalereya"
//             className="fc-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase pb-1 border-b"
//             style={{ color: "#e8eaec", borderColor: "#3a3d42" }}
//           >
//             Bütün elanlara bax
//             <ArrowRight size={15} />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {FEATURED_CARS.map((car) => (
//             <Link
//               href={`/qalereya/${car.id}`}
//               key={car.id}
//               className="fc-card flex flex-col border"
//               style={{ borderColor: "#26282d", backgroundColor: "#101114" }}
//             >
//               {/* Şəkil yeri — real fotoya dəyişiləcək */}
//               <div className="fc-media relative w-full aspect-[4/3] flex items-end p-4">
//                 <span
//                   className="fc-display text-[11px] tracking-[0.2em] uppercase px-2.5 py-1"
//                   style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
//                 >
//                   {car.chassis}
//                 </span>
//               </div>

//               <div className="flex flex-col p-6 flex-1">
//                 <span
//                   className="fc-body text-[13px] mb-1"
//                   style={{ color: "#6b6f76" }}
//                 >
//                   {car.owner}
//                 </span>
//                 <h3
//                   className="fc-display font-medium text-xl mb-4"
//                   style={{ color: "#f2f3f4" }}
//                 >
//                   {car.title}
//                 </h3>

//                 <div
//                   className="flex items-center flex-wrap gap-x-5 gap-y-2 mb-6 fc-body text-[13px]"
//                   style={{ color: "#a9adb3" }}
//                 >
//                   <span className="flex items-center gap-1.5">
//                     <Calendar size={14} style={{ color: "#6b6f76" }} />
//                     {car.year}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <Gauge size={14} style={{ color: "#6b6f76" }} />
//                     {car.mileage}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <MapPin size={14} style={{ color: "#6b6f76" }} />
//                     {car.city}
//                   </span>
//                 </div>

//                 <div
//                   className="flex items-center justify-between mt-auto pt-4"
//                   style={{ borderTop: "1px solid #26282d" }}
//                 >
//                   <span
//                     className="fc-display font-semibold text-lg"
//                     style={{ color: "#f2f3f4" }}
//                   >
//                     {car.price}
//                   </span>
//                   <span
//                     className="fc-display text-[12px] tracking-[0.1em] uppercase"
//                     style={{ color: "#8b929b" }}
//                   >
//                     Ətraflı →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { Gauge, Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

// Real datada bu, verilənlər bazasından (üzvün ödədiyi elan) gələcək
const FEATURED_CARS = [
  {
    id: "01",
    owner: "Sabo",
    chassis: "W163",
    title: "ML 350 4MATIC",
    year: "2004",
    mileage: "187 000 km",
    city: "Bakı",
    price: "18 900 AZN",
    image: "/images/Sabo/075.png", // ✅ public/Sabo/IMG-1677.png
  },
  {
    id: "02",
    owner: "Mirzə",
    chassis: "W163",
    title: "ML 270 CDI",
    year: "2002",
    mileage: "440 000 km",
    city: "Baku",
    price: "61 900 AZN",
    image: "/images/Sway/319.png", // ✅ public/cars/ml63.jpg
  },
  {
    id: "03",
    owner: "Rəşad Quliyev",
    chassis: "W163",
    title: "ML 270 CDI",
    year: "2003",
    mileage: "241 000 km",
    city: "Sumqayıt",
    price: "11 200 AZN",
    image: "/images/Sabo/075-2.png", // ✅ public/cars/ml270.jpg
  },
];

export default function FeaturedCars() {
  return (
    <section
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: "#0e0f12" }}
    >
      <style jsx global>{`
        .fc-display {
          font-family: "Oswald", sans-serif;
        }
        .fc-body {
          font-family: "Inter", sans-serif;
        }
        .fc-card {
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }
        .fc-card:hover {
          border-color: #6b6f76;
          transform: translateY(-4px);
        }
        .fc-media {
          background: repeating-linear-gradient(
            135deg,
            #1a1c20,
            #1a1c20 2px,
            #17181b 2px,
            #17181b 4px
          );
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
                className="fc-display text-[12px] tracking-[0.3em] uppercase"
                style={{ color: "#8b929b" }}
              >
                Seçilmiş elanlar
              </span>
            </div>
            <h2
              className="fc-display font-semibold uppercase leading-none"
              style={{
                color: "#f2f3f4",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              }}
            >
              Üzvlərin avtomobilləri
            </h2>
          </div>

          <Link
            href="/qalereya"
            className="fc-display inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase pb-1 border-b"
            style={{ color: "#e8eaec", borderColor: "#3a3d42" }}
          >
            Bütün elanlara bax
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_CARS.map((car) => (
            <Link
              href={`/qalereya/${car.id}`}
              key={car.id}
              className="fc-card flex flex-col border"
              style={{ borderColor: "#26282d", backgroundColor: "#101114" }}
            >
              {/* ✅ Şəkil konteyneri — Next.js Image ilə */}
              <div className="fc-media relative w-full aspect-[1/1] overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.title} - ${car.owner}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={car.id === "01"} // İlk şəkil prioritet yüklənsin
                />
                {/* Chassis etiketi şəklin üzərində */}
                <span
                  className="fc-display absolute bottom-4 left-4 text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 z-10"
                  style={{ backgroundColor: "#e8eaec", color: "#0a0b0d" }}
                >
                  {car.chassis}
                </span>
              </div>

              <div className="flex flex-col p-6 flex-1">
                <span
                  className="fc-body text-[13px] mb-1"
                  style={{ color: "#6b6f76" }}
                >
                  {car.owner}
                </span>
                <h3
                  className="fc-display font-medium text-xl mb-4"
                  style={{ color: "#f2f3f4" }}
                >
                  {car.title}
                </h3>

                <div
                  className="flex items-center flex-wrap gap-x-5 gap-y-2 mb-6 fc-body text-[13px]"
                  style={{ color: "#a9adb3" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} style={{ color: "#6b6f76" }} />
                    {car.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Gauge size={14} style={{ color: "#6b6f76" }} />
                    {car.mileage}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} style={{ color: "#6b6f76" }} />
                    {car.city}
                  </span>
                </div>

                <div
                  className="flex items-center justify-between mt-auto pt-4"
                  style={{ borderTop: "1px solid #26282d" }}
                >
                  <span
                    className="fc-display text-[12px] tracking-[0.1em] uppercase"
                    style={{ color: "#8b929b" }}
                  >
                    Ətraflı →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
