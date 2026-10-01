export type DatePlanSelections = {
  food: string;
  drink: string;
  dessert: string;
  walk: string;
  music: string;
  date: string;
  time: string;
};

export const emptySelections = (): DatePlanSelections => ({
  food: "",
  drink: "",
  dessert: "",
  walk: "",
  music: "",
  date: "",
  time: "",
});

export type ExperiencePhase =
  | "intro"
  | "envelope-opening"
  | "reveal"
  | "food"
  | "drink"
  | "dessert"
  | "walk"
  | "music"
  | "date"
  | "final";

export type QuestionPhase = Extract<
  ExperiencePhase,
  "food" | "drink" | "dessert" | "walk" | "music" | "date"
>;

export const QUESTION_PHASES: QuestionPhase[] = [
  "food",
  "drink",
  "dessert",
  "walk",
  "music",
  "date",
];

export function questionIndex(phase: QuestionPhase): number {
  return QUESTION_PHASES.indexOf(phase);
}
