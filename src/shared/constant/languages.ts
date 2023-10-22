export enum LanguageEnum {
  polish = 'pl-PL',
  english = 'en-US',
}

export const languageMap = new Map<LanguageEnum, string>([
  [LanguageEnum.polish, 'polish'],
  [LanguageEnum.english, 'english'],
]);
