"use client";

import { useTranslation as useBaseTranslation } from "react-i18next";
import { clientI18n } from "./index";

export function useTranslation(ns: string = "common") {
  const translation = useBaseTranslation(ns);
  return { ...translation, i18n: clientI18n };
}
