"use client";

import { motion } from "motion/react";

type Props = {
  onStart: () => void;
};

export function RevealScreen({ onStart }: Props) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="max-w-xl space-y-6"
      >
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl md:text-6xl">
          Plan Our Date <span aria-hidden>✨</span>
        </h1>
        <p className="text-lg leading-relaxed text-stone-600 sm:text-xl">
          I&apos;ll take care of everything.
          <br />
          You just have a few very important decisions to make.{" "}
          <span aria-hidden>😌</span>
        </p>
        <div className="pt-4">
          <motion.button
            type="button"
            onClick={onStart}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-10 py-4 text-lg font-medium text-white shadow-lg shadow-rose-900/20 transition hover:from-rose-600 hover:to-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          >
            Let&apos;s do it <span aria-hidden>❤️</span>
          </motion.button>
          <motion.p
            className="mt-6 text-sm text-stone-500"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            go on, tap it <span aria-hidden>👀</span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
