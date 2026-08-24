type YandexMetrika = (counterId: number, method: "reachGoal", goal: string) => void;

export const streamGoals = {
  yandex: "stream_yandex_music",
  vk: "stream_vk",
  spotify: "stream_spotify",
  youtube: "stream_youtube",
} as const;

declare global {
  interface Window {
    ym?: YandexMetrika;
  }
}

export function reachMetrikaGoal(goal: string) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(111878173, "reachGoal", goal);
  }
}
