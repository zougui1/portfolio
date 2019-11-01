import { flatten } from 'flat';

import { translations } from '../../translations';
import { FlattenedLang } from './Translations.types';

export class Translations {

  private static translations: translations = translations;

  public static getRaw() {
    return Translations.translations;
  }

  public static getLang(lang: string) {
    return Translations.getRaw()[lang];
  }

  public static flattenLang(lang: string): FlattenedLang {
    return flatten(Translations.getLang(lang));
  }

  public static getTrans(lang: string, path: string) {
    return Translations.flattenLang(lang)[path];
  }

  public static metatags(lang: string, path: string) {
    return Translations.getTrans(lang, 'metatags.' + path);
  }

  public static getMetatagList(lang: string) {
    return Object.keys(Translations.getLang(lang).metatags);
  }

  public static getMetatagsObject(lang: string) {
    const metatags: any = {};
    const metatagList = Translations.getMetatagList(lang);

    metatagList.forEach(metatag => {
      metatags[metatag] = Translations.metatags(lang, metatag);
    });

    return metatags;
  }
}
