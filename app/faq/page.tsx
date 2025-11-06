"use client";
 
import { useTranslation } from "../i18n/client";

const Page = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      {t("welcome")}
      <p>{t("description")}</p>
      <LanguageSwitcher />
    </div>
  );
};

export default Page;

function LanguageSwitcher() {
  "use client";
  const { i18n } = useTranslation();

  return (
    <button
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "de" : "en")}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Switch to {i18n.language === "en" ? "German" : "English"}
    </button>
  );
}
