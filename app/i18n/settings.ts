export const fallbackLng = "en";
export const defaultNS = "common";
export const languages = [fallbackLng, "de", "fr"] as const;
export const cookieName = "i18next"
export const headerName = 'x-language'
export type Language = (typeof languages)[number];
