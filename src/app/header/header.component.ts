import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { LanguageEnum } from '../../shared/constant/languages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  language: LanguageEnum;

  constructor(private readonly languageService: LanguageService) {
    this.language = languageService.getLanguage();
  }

  onLanguageChange(language: LanguageEnum) {
    this.language = language;
    this.languageService.setLanguage(language);
  }
}
