import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { i18nConfig } from "./config";
// import { initReactI18next } from "react-i18next";

export async function createTranslation(lang: string, ns: string = "common") {
  const i18n = createInstance();
  await i18n
    // .use(initReactI18next)
    .use(
      resourcesToBackend(async (language: string, namespace: string) => {
        const response = await fetch(`/locales/${language}/${namespace}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load translation`);
        }
        return response.json();
      })
    )
    .init({
      ...i18nConfig,
      lng: lang,
      ns,
    });

  return {
    t: i18n.getFixedT(lang, ns),
  };
}
