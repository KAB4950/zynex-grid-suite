import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en from "./en.json";
import da from "./da.json";

type Language = "en" | "da";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = { en, da: da as unknown as Translations };

const defaultContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => setLang(lang), []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(LanguageContext);
};
