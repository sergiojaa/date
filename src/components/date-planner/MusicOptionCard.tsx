"use client";

import { motion } from "motion/react";
import type { MusicOption } from "@/lib/options";

type Props = {
  option: MusicOption;
  selected: boolean;
  onSelect: () => void;
};

export function MusicOptionCard({ option, selected, onSelect }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileTap={{ scale: 0.97 }}
      aria-pressed={selected}
      className={`relative min-h-[120px] w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-left shadow-md ring-1 ring-white/10 transition-shadow hover:shadow-lg hover:shadow-rose-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 sm:min-h-[132px] ${option.gradient} ${
        selected ? "ring-2 ring-rose-400/90 shadow-lg shadow-rose-950/20" : ""
      }`}
    >
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl ${option.accent}`}
        aria-hidden
      />
      <div
        className="absolute bottom-3 right-3 text-4xl opacity-20"
        aria-hidden
      >
        ♪
      </div>
      {selected && (
        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-rose-700">
          ✓
        </span>
      )}
      <p className="relative text-base font-medium text-white sm:text-lg">
        <span className="mr-1.5" aria-hidden>
          {option.emoji}
        </span>
        {option.label}
      </p>
      <p className="relative mt-2 text-xs text-white/55">Tap to choose</p>
    </motion.button>
  );
}
