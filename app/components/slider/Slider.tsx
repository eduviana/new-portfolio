// "use client";
// import React, { useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import "./slider.styles.css";
// import Image from "next/image";

// interface SliderProps {
//   images: string[];
// }

// export default function Slider({ images }: SliderProps) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   if (!images?.length) return null;

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//   });

//   return (
//     <div className="w-full mx-auto">
//       <div ref={sliderRef} className="keen-slider">
//         {images.map((src, index) => (
//           <div key={src} className="keen-slider__slide flex justify-center">
//             <div
//                 className="
//             relative 
//             w-full
//             h-[700px]
//             border-2 
//             border-brand-borderLight 
//             rounded-sm 
//             overflow-hidden
           
//           "
//               >
//                 <Image
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   fill
//                   className="object-contain"
                  
//                 />
//               </div>
//           </div>
//         ))}
//       </div>

//       {loaded && instanceRef.current && (
//         <div className="dots">
//           {Array.from({
//             length: instanceRef.current?.track?.details?.slides.length ?? 0,
//           }).map((_, idx) => (
//             <button
//               key={idx}
//               aria-label={`Go to slide ${idx + 1}`}
//               aria-current={currentSlide === idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={"dot" + (currentSlide === idx ? " active" : "")}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./slider.styles.css";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  if (!images?.length) return null;

  return (
    <div className="navigation-wrapper w-full mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div key={src} className="keen-slider__slide flex justify-center">
            {/* CONTENEDOR PRINCIPAL */}
            <div className="relative w-full h-[700px] rounded-sm overflow-hidden bg-[#0a0a0a]">
              
              {/* 1. CAPA DE FONDO (El "truco"): Imagen desenfocada para rellenar barras */}
              <div 
                className="absolute inset-0 z-0 opacity-40 blur-3xl scale-110"
                style={{ 
                    backgroundImage: `url(${src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
              />

              {/* 2. OVERLAY SUTIL: Para unificar el fondo difuminado con el color de tu web */}
              <div className="absolute inset-0 z-10 bg-zinc-900" />

              {/* 3. IMAGEN REAL: Con object-contain para que no se corte */}
              <div className="relative z-20 w-full h-full p-4 flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl" 
                  priority={index === 0}
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      {loaded && instanceRef.current && (
        <>
          <button
            className="arrow arrow--left"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Anterior"
          >
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="arrow arrow--right"
            onClick={() => instanceRef.current?.next()}
            aria-label="Siguiente"
          >
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="dots mt-4">
            {Array.from({
              length: instanceRef.current?.track?.details?.slides.length ?? 0,
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}