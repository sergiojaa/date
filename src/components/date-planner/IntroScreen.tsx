"use client";

import { motion } from "motion/react";

type Props = {
  onOpen: () => void;
  opening: boolean;
};

export function IntroScreen({ onOpen, opening }: Props) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-12">
      <motion.div
        className="max-w-lg space-y-4 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="font-serif text-4xl text-stone-800 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi Nini <span aria-hidden>❤️</span>
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed text-stone-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          I just wanted to make you a little bit happier today.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed text-stone-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          So… I made something just for you.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 w-full max-w-xs sm:max-w-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
      >
        <motion.button
          type="button"
          onClick={onOpen}
          disabled={opening}
          whileTap={{ scale: opening ? 1 : 0.96 }}
          className="group w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400 disabled:pointer-events-none disabled:cursor-not-allowed"
          aria-label="Open the letter"
        >
          <div className="relative mx-auto aspect-[4/3] w-full perspective-[800px]">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-100 via-[#f5ebe3] to-rose-200/80 shadow-xl shadow-rose-900/15 ring-1 ring-rose-900/10"
              animate={
                opening
                  ? { scale: 1.05, opacity: 0, y: -40 }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-x-8 top-0 h-0 w-0 border-l-[calc(50%-2rem)] border-r-[calc(50%-2rem)] border-b-[3.5rem] border-l-transparent border-r-transparent border-b-rose-300/50" />
              <div className="flex h-full flex-col items-center justify-center gap-2 pt-6">
                <span className="text-4xl" aria-hidden>
                  💌
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-rose-800 shadow-sm ring-1 ring-rose-200/80 transition group-active:scale-95">
                  Open it <span aria-hidden>💌</span>
                </span>
              </div>
              <motion.div
                className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-2xl bg-gradient-to-b from-rose-200/90 to-rose-100/40"
                animate={opening ? { rotateX: -160, opacity: 0 } : { rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}
