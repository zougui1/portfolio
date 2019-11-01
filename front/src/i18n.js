import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const ld = new LanguageDetector();
console.log(ld);
for (const key in ld.detectors) {
  try {
    console.log('language detector lookup:' + key, ld.detectors[key].lookup())
  } catch(e) {}
}

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: {
      'en-US': ['en'],
      'en-GB': ['en'],
      'fr-FR': ['fr'],
      default: ['en']
    },
    NS: ['navbar', 'glossary', 'home', 'loading','metatags'],
    defaultNS: 'home',
    debug: true,
    cache: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      wait: true,
    }
  });

i18n.loadNamespaces('glossary');

export default i18n;
