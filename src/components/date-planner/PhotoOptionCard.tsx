"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { PhotoOption } from "@/lib/options";

type Props = {
  option: PhotoOption;
  selected: boolean;
  onSelect: () => void;
  large?: boolean;
};

export function PhotoOptionCard({
  option,
  selected,
  onSelect,
  large = false,
}: Props) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileTap={{ scale: 0.97 }}
      className={`group relative isolate w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-md shadow-stone-900/8 ring-1 ring-stone-900/5 transition-shadow hover:shadow-lg hover:shadow-stone-900/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 ${
        large ? "min-h-[200px] sm:min-h-[240px] md:min-h-[280px]" : "min-h-[140px] sm:min-h-[160px]"
      } ${selected ? "ring-2 ring-rose-500/80 shadow-lg shadow-rose-900/12" : ""}`}
      aria-pressed={selected}
    >
      <Image
        src={option.imageUrl}
        alt={option.imageAlt}
        fill
        sizes={
          large
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        }
        className="object-cover transition-transform duration-500 group-active:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-stone-950/10" />
      {selected && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-sm text-white shadow-md"
          aria-hidden
        >
          ✓
        </motion.span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <p
          className={`font-medium tracking-tight text-white ${large ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}
        >
          <span className="mr-1.5" aria-hidden>
            {option.emoji}
          </span>
          {option.label}
        </p>
      </div>
    </motion.button>
  );
}
