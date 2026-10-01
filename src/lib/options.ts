export type PhotoOption = {
  id: string;
  label: string;
  emoji: string;
  imageUrl: string;
  imageAlt: string;
};

export type MusicOption = {
  id: string;
  label: string;
  emoji: string;
  gradient: string;
  accent: string;
};

export type DateOption = {
  id: string;
  dayLabel: string;
  dateLabel: string;
};

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const localImage = (filename: string) => `/images/${filename}`;

export const FOOD_OPTIONS: PhotoOption[] = [
  {
    id: "pizza",
    label: "Pizza",
    emoji: "🍕",
    imageUrl: u("photo-1513104890138-7c749659a591"),
    imageAlt: "Fresh pizza with melted cheese",
  },
  {
    id: "sushi",
    label: "Sushi",
    emoji: "🍣",
    imageUrl: u("photo-1579584425555-c3ce17fd4351"),
    imageAlt: "Assorted sushi rolls on a plate",
  },
  {
    id: "burgers",
    label: "Burgers",
    emoji: "🍔",
    imageUrl: u("photo-1568901346375-23c9450c58cd"),
    imageAlt: "Juicy burger with fresh toppings",
  },
  {
    id: "pasta",
    label: "Pasta",
    emoji: "🍝",
    imageUrl: u("photo-1621996346565-e3dbc646d9a9"),
    imageAlt: "Creamy pasta dish",
  },
  {
    id: "steak",
    label: "Steak",
    emoji: "🥩",
    imageUrl: localImage("steak.jpg"),
    imageAlt: "Plated grilled steak with herbs",
  },
  {
    id: "asian",
    label: "Asian food",
    emoji: "🍜",
    imageUrl: u("photo-1569718212165-3a8278d5f624"),
    imageAlt: "Bowl of Asian noodles",
  },
];

export const DRINK_OPTIONS: PhotoOption[] = [
  {
    id: "cocktails",
    label: "Cocktails",
    emoji: "🍹",
    imageUrl: localImage("cocktails.jpg"),
    imageAlt: "Cocktail glasses with colorful drinks",
  },
  {
    id: "wine",
    label: "Wine",
    emoji: "🍷",
    imageUrl: u("photo-1510812431401-41d2bd2722f3"),
    imageAlt: "Glass of red wine",
  },
  {
    id: "coffee",
    label: "Coffee",
    emoji: "☕",
    imageUrl: u("photo-1495474472287-4d71bcdd2085"),
    imageAlt: "Latte art in a coffee cup",
  },
  {
    id: "lemonade",
    label: "Lemonade",
    emoji: "🍋",
    imageUrl: localImage("lemonade.jpg"),
    imageAlt: "Fresh lemonade with lemon slices in a glass",
  },
  {
    id: "soft-drinks",
    label: "Soft drinks",
    emoji: "🥤",
    imageUrl: localImage("soft-drinks.jpg"),
    imageAlt: "Chilled soft drinks with ice",
  },
  {
    id: "surprise-drink",
    label: "Surprise me",
    emoji: "👀",
    imageUrl: localImage("surprise-drink.jpg"),
    imageAlt: "Elegant covered dish suggesting a surprise drink",
  },
];

export const DESSERT_OPTIONS: PhotoOption[] = [
  {
    id: "ice-cream",
    label: "Ice cream",
    emoji: "🍦",
    imageUrl: u("photo-1563805042-7684c019e1cb"),
    imageAlt: "Scoops of ice cream",
  },
  {
    id: "cake",
    label: "Cake",
    emoji: "🍰",
    imageUrl: u("photo-1578985545062-69928b1d9587"),
    imageAlt: "Slice of layered cake",
  },
  {
    id: "waffles",
    label: "Waffles",
    emoji: "🧇",
    imageUrl: u("photo-1562376552-0d160a2f238d"),
    imageAlt: "Waffles with berries",
  },
  {
    id: "cheesecake",
    label: "Cheesecake",
    emoji: "🍓",
    imageUrl: u("photo-1524351199678-941a58a3df50"),
    imageAlt: "Cheesecake with strawberry topping",
  },
  {
    id: "chocolate",
    label: "Something chocolate",
    emoji: "🍫",
    imageUrl: localImage("chocolate.jpg"),
    imageAlt: "Rich molten chocolate dessert",
  },
  {
    id: "surprise-dessert",
    label: "Surprise me",
    emoji: "❤️",
    imageUrl: localImage("surprise-dessert.jpg"),
    imageAlt: "Beautiful dessert table with a mystery presentation",
  },
];

export const WALK_OPTIONS: PhotoOption[] = [
  {
    id: "lisi-lake",
    label: "Lisi Lake",
    emoji: "🌙",
    imageUrl: u("photo-1439066615861-d1af74d74000", 1200),
    imageAlt: "Serene lake at golden hour",
  },
  {
    id: "turtle-lake",
    label: "Turtle Lake",
    emoji: "🌙",
    imageUrl: localImage("turtle-lake.jpg"),
    imageAlt: "Turtle Lake in Tbilisi, Georgia",
  },
  {
    id: "mtatsminda",
    label: "Mtatsminda Park",
    emoji: "🌙",
    imageUrl: u("photo-1441974231531-c6227db76b6e", 1200),
    imageAlt: "Forest path in a city park at dusk",
  },
];

export const MUSIC_OPTIONS: MusicOption[] = [
  {
    id: "georgian",
    label: "Georgian songs",
    emoji: "🇬🇪",
    gradient: "from-rose-900/90 via-red-950/80 to-stone-900/90",
    accent: "bg-amber-400/20",
  },
  {
    id: "jazz",
    label: "Jazz",
    emoji: "🎷",
    gradient: "from-indigo-950/90 via-violet-950/80 to-stone-900/90",
    accent: "bg-amber-300/15",
  },
  {
    id: "rock",
    label: "Rock",
    emoji: "🎸",
    gradient: "from-zinc-900 via-stone-800 to-red-950/90",
    accent: "bg-orange-500/15",
  },
  {
    id: "rnb",
    label: "R&B / Soul",
    emoji: "🎙️",
    gradient: "from-fuchsia-950/90 via-purple-950/80 to-stone-900/90",
    accent: "bg-pink-400/15",
  },
  {
    id: "lofi",
    label: "Chill / Lo-fi",
    emoji: "🌙",
    gradient: "from-slate-900 via-blue-950/80 to-stone-900/90",
    accent: "bg-sky-400/15",
  },
  {
    id: "your-playlist",
    label: "Your playlist",
    emoji: "❤️",
    gradient: "from-rose-950/90 via-red-900/70 to-stone-900/90",
    accent: "bg-rose-300/20",
  },
  {
    id: "surprise-music",
    label: "Surprise me",
    emoji: "👀",
    gradient: "from-stone-800 via-rose-950/80 to-stone-900/90",
    accent: "bg-white/10",
  },
];

export const DATE_OPTIONS: DateOption[] = [
  {
    id: "2026-10-04",
    dayLabel: "Sunday",
    dateLabel: "October 4, 2026",
  },
  {
    id: "2026-10-05",
    dayLabel: "Monday",
    dateLabel: "October 5, 2026",
  },
  {
    id: "2026-10-06",
    dayLabel: "Tuesday",
    dateLabel: "October 6, 2026",
  },
];

export const TIME_OPTIONS: { id: string; label: string }[] = [
  { id: "18:00", label: "18:00" },
  { id: "18:30", label: "18:30" },
  { id: "19:00", label: "19:00" },
  { id: "19:30", label: "19:30" },
  { id: "20:00", label: "20:00" },
  { id: "20:30", label: "20:30" },
  { id: "21:00", label: "21:00" },
];

export function labelForSelection(
  category: keyof import("./types").DatePlanSelections,
  id: string,
): string {
  const lists: Record<string, { id: string; label: string }[]> = {
    food: FOOD_OPTIONS,
    drink: DRINK_OPTIONS,
    dessert: DESSERT_OPTIONS,
    walk: WALK_OPTIONS,
    music: MUSIC_OPTIONS.map((m) => ({ id: m.id, label: m.label })),
    date: DATE_OPTIONS.map((d) => ({
      id: d.id,
      label: `${d.dayLabel}, ${d.dateLabel.replace(", 2026", "")}`,
    })),
    time: TIME_OPTIONS,
  };
  return lists[category]?.find((o) => o.id === id)?.label ?? id;
}
