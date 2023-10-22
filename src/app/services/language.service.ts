import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageEnum } from '../../shared/constant/languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<LanguageEnum>(
    (localStorage.getItem('language') as LanguageEnum) ?? LanguageEnum.polish
  );

  setLanguage(language: LanguageEnum): void {
    this.languageSubject.next(language);
    localStorage.setItem('language', language);
  }

  getLanguage(): LanguageEnum {
    return this.languageSubject.value;
  }
}
