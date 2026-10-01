"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { labelForSelection } from "@/lib/options";
import type { DatePlanSelections } from "@/lib/types";

type Props = {
  selections: DatePlanSelections;
};

const SUMMARY_ROWS: {
  key: keyof DatePlanSelections;
  icon: string;
  title: string;
}[] = [
  { key: "date", icon: "📅", title: "Date" },
  { key: "time", icon: "🕕", title: "Time" },
  { key: "food", icon: "🍽️", title: "Food" },
  { key: "drink", icon: "🥂", title: "Drink" },
  { key: "dessert", icon: "🍰", title: "Dessert" },
  { key: "walk", icon: "🌙", title: "Walk" },
  { key: "music", icon: "🎶", title: "Music" },
];

function FloatingHeart({ delay, x }: { delay: number; x: string }) {
  return (
    <motion.span
      className="pointer-events-none absolute text-rose-300/70"
      style={{ left: x, top: "20%" }}
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{ opacity: [0, 1, 0], y: -120, scale: 1 }}
      transition={{ duration: 2.5, delay, ease: "easeOut" }}
      aria-hidden
    >
      ♥
    </motion.span>
  );
}

export function FinalScreen({ selections }: Props) {
  const summary = useMemo(
    () =>
      SUMMARY_ROWS.map((row) => ({
        ...row,
        value: labelForSelection(row.key, selections[row.key]),
      })),
    [selections],
  );

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 py-12">
      {["12%", "28%", "44%", "62%", "78%"].map((x, i) => (
        <FloatingHeart key={x} x={x} delay={i * 0.25} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg space-y-4 text-center"
      >
        <h1 className="font-serif text-3xl text-stone-800 sm:text-4xl md:text-5xl">
          Perfect choice, Nini <span aria-hidden>❤️</span>
        </h1>
        <p className="text-lg text-stone-600">Your part is done.</p>
        <p className="text-lg leading-relaxed text-stone-600">
          I&apos;ll take care of the rest.
          <br />
          Just be ready. <span aria-hidden>😌</span>
        </p>
        <p className="text-lg font-medium text-stone-700">
          Our date is officially planned. <span aria-hidden>💌</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-10 w-full max-w-md rounded-3xl border border-rose-200/60 bg-white/85 p-6 shadow-xl shadow-rose-900/8 backdrop-blur-sm sm:p-8"
      >
        <ul className="space-y-4">
          {summary.map((row) => (
            <li
              key={row.key}
              className="flex items-start justify-between gap-4 border-b border-stone-100 pb-4 last:border-0 last:pb-0"
            >
              <span className="text-sm font-medium text-stone-500">
                <span className="mr-1.5" aria-hidden>
                  {row.icon}
                </span>
                {row.title}
              </span>
              <span className="text-right text-base font-medium text-stone-800">
                {row.value}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
