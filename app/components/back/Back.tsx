"use client"
import { useRouter } from "next/navigation";

export const Back = () => {
  const router = useRouter();
  return (
    <button onClick={() => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/');
      }
    }} className="inline-flex items-center gap-2 text-white mb-0 group cursor-pointer bg-transparent border-none p-0">
      <span className="bg-brand-primary/20 p-2 rounded-full group-hover:bg-brand-primary/30 transition-all">
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </span>
      <span className="font-bold">Volver</span>
    </button>
  );
};
