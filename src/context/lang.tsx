import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LangContextData } from '../models/lang.model';

const LangContext = createContext<LangContextData>({} as LangContextData);

export function LangProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<LangContextData['lang']>('en');
  const [dataContent, setDataContent] =
    useState<LangContextData['dataContent']>(null);

  function switchLang(lang: LangContextData['lang']) {
    if (currentLang !== lang) {
      window.localStorage.setItem('lang', lang);
      setCurrentLang(lang);
    }
  }

  // fetch a user from a fake backend API
  useEffect(() => {
    const localLang = window.localStorage.getItem('lang');
    if (localLang === ('pt-br' || 'en')) {
      setCurrentLang(localLang);
    }
  }, []);

  useEffect(() => {
    const data = require(`../lang/${currentLang}.json`);
    setDataContent(data);
  }, [currentLang]);

  return (
    <LangContext.Provider
      value={{
        lang: currentLang,
        switchLang,
        dataContent,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);

  return context;
}
