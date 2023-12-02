import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum, i18nLanguageMap } from 'src/shared/constant/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movies-app';

  constructor(private readonly translate: TranslateService) {
    const currentLanguage =
      i18nLanguageMap.get(
        (localStorage.getItem('language') as LanguageEnum) ??
          LanguageEnum.english
      ) ?? 'en';
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    translate.use(currentLanguage);
  }
}
