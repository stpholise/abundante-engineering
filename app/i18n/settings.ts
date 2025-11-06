export const defaultNS = "common";

export const fallbackLng = "en";
export const languages = ["en", "de"] as const;
export type Language = (typeof languages)[number];
