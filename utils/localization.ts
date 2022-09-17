import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
const translations = {
  en: {
    "page.home.head.title": "Cocktail bar is open",
    "page.home.head.meta.description": "Do you want to know how to make a cocktail? visit my site and have a look",
    "ingredienti": "Ingredient",
    "search": "Search",
    "page.home.cocktail.new": "New random cocktail",
    "no-result": "No result for: ",
    "footer": "Powered by "
  },
  it: {
    "page.home.head.title": "Cocktail bar è aperto",
    "page.home.head.meta.description": "Vuoi sapere come si fa un cocktail? visita il mio sito e dai un'occhiata",
    "ingredienti": "Ingredienti",
    "search": "Ricerca",
    "page.home.cocktail.new": "Nuovo cocktail random",
    "no-result": "Nessun risultato per: ",
    "footer": "Sviluppato da "
  },
};
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;

export default i18n;