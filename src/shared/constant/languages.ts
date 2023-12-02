export enum LanguageEnum {
  polish = 'pl-PL',
  english = 'en-US',
}

export const languageMap = new Map<LanguageEnum, string>([
  [LanguageEnum.polish, 'polish'],
  [LanguageEnum.english, 'english'],
]);

export const i18nLanguageMap = new Map<LanguageEnum, string>([
  [LanguageEnum.polish, 'pl'],
  [LanguageEnum.english, 'en'],
]);
