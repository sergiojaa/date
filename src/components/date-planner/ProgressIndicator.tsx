"use client";

import { motion } from "motion/react";
import { questionIndex, type QuestionPhase } from "@/lib/types";

type Props = {
  phase: QuestionPhase;
};

export function ProgressIndicator({ phase }: Props) {
  const current = questionIndex(phase);
  const total = 6;

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-2.5"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Question ${current + 1} of ${total}`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const filled = i <= current;
        const active = i === current;
        return (
          <motion.span
            key={i}
            className="relative block h-1.5 overflow-hidden rounded-full bg-stone-300/60"
            initial={false}
            animate={{
              width: active ? 40 : 24,
              opacity: filled ? 1 : 0.45,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400/90 to-rose-600/90"
              initial={false}
              animate={{ scaleX: filled ? 1 : 0 }}
              style={{ transformOrigin: "left center" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </motion.span>
        );
      })}
    </div>
  );
}
