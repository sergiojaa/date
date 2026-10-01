"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DecorativeBackground } from "./DecorativeBackground";
import { IntroScreen } from "./IntroScreen";
import { RevealScreen } from "./RevealScreen";
import { QuestionShell } from "./QuestionShell";
import { PhotoOptionCard } from "./PhotoOptionCard";
import { MusicOptionCard } from "./MusicOptionCard";
import { DateOptionCard } from "./DateOptionCard";
import { TimeOptionPill } from "./TimeOptionPill";
import { NextButton } from "./NavButtons";
import { FinalScreen } from "./FinalScreen";
import {
  DATE_OPTIONS,
  TIME_OPTIONS,
  DESSERT_OPTIONS,
  DRINK_OPTIONS,
  FOOD_OPTIONS,
  MUSIC_OPTIONS,
  WALK_OPTIONS,
} from "@/lib/options";
import {
  emptySelections,
  QUESTION_PHASES,
  type DatePlanSelections,
  type ExperiencePhase,
  type QuestionPhase,
} from "@/lib/types";

const slide = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

export function DatePlannerExperience() {
  const [phase, setPhase] = useState<ExperiencePhase>("intro");
  const [selections, setSelections] = useState<DatePlanSelections>(
    emptySelections,
  );

  const setField = useCallback(
    <K extends keyof DatePlanSelections>(key: K, value: string) => {
      setSelections((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleOpenEnvelope = () => {
    setPhase("envelope-opening");
    window.setTimeout(() => setPhase("reveal"), 900);
  };

  const handlePlanSubmit = () => {
    console.log("Date plan selections:", selections);
    setPhase("final");
  };

  const renderQuestion = (q: QuestionPhase) => {
    switch (q) {
      case "food":
        return (
          <QuestionShell
            phase="food"
            heading="First things first… what are we eating? 🍽️"
            subtitle="Choose wisely."
            footer={
              <NextButton
                disabled={!selections.food}
                onClick={() => setPhase("drink")}
              />
            }
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
              {FOOD_OPTIONS.map((option) => (
                <PhotoOptionCard
                  key={option.id}
                  option={option}
                  selected={selections.food === option.id}
                  onSelect={() => setField("food", option.id)}
                />
              ))}
            </div>
          </QuestionShell>
        );
      case "drink":
        return (
          <QuestionShell
            phase="drink"
            heading="Okay… what are we drinking? 🥂"
            onBack={() => setPhase("food")}
            footer={
              <NextButton
                disabled={!selections.drink}
                onClick={() => setPhase("dessert")}
              />
            }
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
              {DRINK_OPTIONS.map((option) => (
                <PhotoOptionCard
                  key={option.id}
                  option={option}
                  selected={selections.drink === option.id}
                  onSelect={() => setField("drink", option.id)}
                />
              ))}
            </div>
          </QuestionShell>
        );
      case "dessert":
        return (
          <QuestionShell
            phase="dessert"
            heading={"There's always room for dessert, right? 🍰"}
            onBack={() => setPhase("drink")}
            footer={
              <NextButton
                disabled={!selections.dessert}
                onClick={() => setPhase("walk")}
              />
            }
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
              {DESSERT_OPTIONS.map((option) => (
                <PhotoOptionCard
                  key={option.id}
                  option={option}
                  selected={selections.dessert === option.id}
                  onSelect={() => setField("dessert", option.id)}
                />
              ))}
            </div>
          </QuestionShell>
        );
      case "walk":
        return (
          <QuestionShell
            phase="walk"
            heading="And after we eat… where should we go for a walk? 🌙"
            subtitle="Pick our after-dinner spot."
            onBack={() => setPhase("dessert")}
            footer={
              <NextButton
                disabled={!selections.walk}
                onClick={() => setPhase("music")}
              />
            }
          >
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {WALK_OPTIONS.map((option) => (
                <PhotoOptionCard
                  key={option.id}
                  option={option}
                  large
                  selected={selections.walk === option.id}
                  onSelect={() => setField("walk", option.id)}
                />
              ))}
            </div>
          </QuestionShell>
        );
      case "music":
        return (
          <QuestionShell
            phase="music"
            heading="One more important question… what are we listening to in the car? 🎶"
            subtitle="Pick the vibe."
            onBack={() => setPhase("walk")}
            footer={
              <NextButton
                disabled={!selections.music}
                onClick={() => setPhase("date")}
              />
            }
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
              {MUSIC_OPTIONS.map((option) => (
                <MusicOptionCard
                  key={option.id}
                  option={option}
                  selected={selections.music === option.id}
                  onSelect={() => setField("music", option.id)}
                />
              ))}
            </div>
          </QuestionShell>
        );
      case "date":
        return (
          <QuestionShell
            phase="date"
            heading="One last thing… when am I stealing you for the evening? ❤️"
            onBack={() => setPhase("music")}
            footer={
              <NextButton
                disabled={!selections.date || !selections.time}
                label="Plan our date ❤️"
                onClick={handlePlanSubmit}
              />
            }
          >
            <div className="mx-auto max-w-4xl space-y-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-6">
                {DATE_OPTIONS.map((option) => (
                  <DateOptionCard
                    key={option.id}
                    option={option}
                    selected={selections.date === option.id}
                    onSelect={() => setField("date", option.id)}
                  />
                ))}
              </div>

              <AnimatePresence>
                {selections.date ? (
                  <motion.section
                    key="time-picker"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5 border-t border-rose-200/50 pt-8 sm:pt-10"
                  >
                    <div className="text-center">
                      <h3 className="font-serif text-2xl text-stone-800 sm:text-3xl">
                        What time should I pick you up? ❤️
                      </h3>
                      <p className="mt-2 text-base text-stone-600 sm:text-lg">
                        Choose your time. I&apos;ll handle the rest.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-4 lg:max-w-3xl lg:mx-auto">
                      {TIME_OPTIONS.map((option) => (
                        <TimeOptionPill
                          key={option.id}
                          label={option.label}
                          selected={selections.time === option.id}
                          onSelect={() => setField("time", option.id)}
                        />
                      ))}
                    </div>
                  </motion.section>
                ) : null}
              </AnimatePresence>
            </div>
          </QuestionShell>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <DecorativeBackground />
      <AnimatePresence mode="wait">
        {(phase === "intro" || phase === "envelope-opening") && (
          <motion.div key="intro" {...slide}>
            <IntroScreen
              onOpen={handleOpenEnvelope}
              opening={phase === "envelope-opening"}
            />
          </motion.div>
        )}
        {phase === "reveal" && (
          <motion.div key="reveal" {...slide}>
            <RevealScreen onStart={() => setPhase("food")} />
          </motion.div>
        )}
        {QUESTION_PHASES.includes(phase as QuestionPhase) && (
          <motion.div key={phase} {...slide}>
            {renderQuestion(phase as QuestionPhase)}
          </motion.div>
        )}
        {phase === "final" && (
          <motion.div key="final" {...slide}>
            <FinalScreen selections={selections} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
