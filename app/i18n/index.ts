"use client";

import i18next, { type i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import { fallbackLng, defaultNS } from "./settings";

export const clientI18n: i18n = i18next.createInstance();

clientI18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: fallbackLng,
    fallbackLng,
    defaultNS,
    interpolation: { escapeValue: false },
    backend: { 
      loadPath: "/locales/{{lng}}/common.json",
    },
  })
  .catch((err) => console.error("i18n init error:", err));

export default clientI18n;
