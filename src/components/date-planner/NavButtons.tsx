"use client";

import { motion } from "motion/react";

type NextProps = {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
};

export function NextButton({
  onClick,
  disabled = false,
  label = "Next →",
}: NextProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className="min-h-12 min-w-[140px] cursor-pointer rounded-full bg-stone-800 px-8 py-3 text-base font-medium text-white shadow-md transition hover:bg-stone-900 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500 disabled:shadow-none disabled:hover:bg-stone-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
    >
      {label}
    </motion.button>
  );
}
