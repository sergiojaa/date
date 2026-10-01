"use client";

import { motion } from "motion/react";

type Props = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export function TimeOptionPill({ label, selected, onSelect }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileTap={{ scale: 0.97 }}
      aria-pressed={selected}
      className={`min-h-[52px] w-full cursor-pointer rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 text-center text-lg font-medium text-stone-800 shadow-md shadow-stone-900/5 backdrop-blur-sm transition hover:border-rose-200/90 hover:bg-white hover:shadow-lg hover:shadow-rose-900/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 sm:min-h-[56px] sm:text-xl md:min-h-[60px] ${
        selected
          ? "border-rose-300/90 bg-gradient-to-b from-white to-rose-50/90 ring-2 ring-rose-400/70 shadow-lg shadow-rose-900/10"
          : ""
      }`}
    >
      {label}
    </motion.button>
  );
}
