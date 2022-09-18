import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
const translations = {
  en: {
    "ingredienti": "Ingredient",
    "search": "Search",
    "no-result": "No result for: ",
    "result": "Results found for: ",
    "footer": "Powered by "
  },
  it: {
    "ingredienti": "Ingredienti",
    "search": "Ricerca",
    "no-result": "Nessun risultato per: ",
    "result": "Risultati trovati per: ",
    "footer": "Sviluppato da "
  },
};
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;

export default i18n;