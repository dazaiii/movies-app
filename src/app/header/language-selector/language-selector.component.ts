import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { LanguageEnum, languageMap } from '../../../shared/constant/languages';
import { FormControl } from '@angular/forms';
import { Subscription, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  @Input() language: LanguageEnum;
  @Output() languageChange = new EventEmitter<LanguageEnum>();

  languages: {
    value: LanguageEnum;
    view: string;
  }[] = [];

  selectedLanguage: FormControl;
  options: string[] = [];

  private readonly subscriptions: Subscription[] = [];

  constructor() {
    for (const [language, view] of languageMap) {
      this.languages.push({ value: language, view });
    }
  }

  ngOnInit(): void {
    this.selectedLanguage = new FormControl<LanguageEnum>(this.language);

    this.subscriptions.push(
      this.selectedLanguage.valueChanges
        .pipe(
          distinctUntilChanged(),
          map((x: any) => x.value)
        )
        .subscribe((language: any) => {
          this.languageChange.emit(language);
          window.location.reload();
        })
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
