import { useCMS } from 'tinacms';
import { I18nClient } from '../i18nClient';
import { RealDoc, TranslateFunction, useTranslation } from './useTranslation';

interface Docs<T> {
  currentDoc: RealDoc<T>;
  defaultDoc: RealDoc<T>;
}

export function useTranslations<
  S extends Record<string, any> = Record<string, any>
>(
  translations: { [key in keyof S]: Docs<any> }
): [{ [key in keyof S]: TranslateFunction }, I18nClient] {
  type Translations = {
    [key in keyof S]: TranslateFunction;
  };
  const cms = useCMS();
  const returnValue: Translations = {} as Translations;

  Object.keys(translations).forEach((key) => {
    const t = useTranslation(
      translations[key].currentDoc,
      translations[key].defaultDoc
    );
    returnValue[key as keyof S] = t;
  });

  return [returnValue, cms.api.localization];
}
