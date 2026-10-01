"use client";

import { motion } from "motion/react";
import type { DateOption } from "@/lib/options";

type Props = {
  option: DateOption;
  selected: boolean;
  onSelect: () => void;
};

export function DateOptionCard({ option, selected, onSelect }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      aria-pressed={selected}
      className={`relative w-full cursor-pointer rounded-3xl border border-stone-200/80 bg-white/80 p-8 text-center shadow-lg shadow-stone-900/6 backdrop-blur-sm transition-[colors,box-shadow,border-color] hover:border-rose-200/90 hover:shadow-xl hover:shadow-rose-900/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 sm:p-10 md:p-8 lg:p-10 ${
        selected
          ? "border-rose-300/80 bg-gradient-to-b from-white to-rose-50/80 ring-2 ring-rose-400/60"
          : ""
      }`}
    >
      {selected && (
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-sm text-white">
          ✓
        </span>
      )}
      <p className="font-serif text-2xl text-stone-800 sm:text-3xl">
        {option.dayLabel}
      </p>
      <p className="mt-2 text-base text-stone-600 sm:text-lg">
        {option.dateLabel}
      </p>
    </motion.button>
  );
}
