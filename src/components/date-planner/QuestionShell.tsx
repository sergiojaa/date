"use client";

import { motion } from "motion/react";
import { ProgressIndicator } from "./ProgressIndicator";
import type { QuestionPhase } from "@/lib/types";

type Props = {
  phase: QuestionPhase;
  heading: string;
  subtitle?: string;
  onBack?: () => void;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function QuestionShell({
  phase,
  heading,
  subtitle,
  onBack,
  children,
  footer,
}: Props) {
  return (
    <div className="flex min-h-dvh flex-col px-4 pb-8 pt-6 sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <div className="mb-6 flex items-center gap-4 sm:mb-8">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/70 text-stone-600 shadow-sm ring-1 ring-stone-200/80 transition hover:bg-white hover:text-stone-800 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
              aria-label="Go back to previous question"
            >
              ←
            </button>
          ) : (
            <div className="min-w-11" />
          )}
          <div className="flex-1">
            <ProgressIndicator phase={phase} />
          </div>
          <div className="min-w-11" aria-hidden />
        </div>

        <motion.header
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-center sm:mb-8 md:mb-10"
        >
          <h2 className="font-serif text-2xl text-stone-800 sm:text-3xl md:text-4xl">
            {heading}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-base text-stone-600 sm:text-lg">{subtitle}</p>
          ) : null}
        </motion.header>

        <div className="flex-1">{children}</div>

        <div className="sticky bottom-0 mt-8 flex justify-center bg-gradient-to-t from-[#f7f3ef] via-[#f7f3ef]/95 to-transparent pb-2 pt-4">
          {footer}
        </div>
      </div>
    </div>
  );
}
