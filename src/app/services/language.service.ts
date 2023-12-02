import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageEnum } from '../../shared/constant/languages';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<LanguageEnum>(
    (localStorage.getItem('language') as LanguageEnum) ?? LanguageEnum.polish
  );

  constructor(private readonly translateService: TranslateService) {}

  setLanguage(language: LanguageEnum): void {
    this.languageSubject.next(language);
    localStorage.setItem('language', language);
    this.translateService.use(language);
  }

  getLanguage(): LanguageEnum {
    return this.languageSubject.value;
  }
}
