import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [HeaderComponent, LanguageSelectorComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, DropdownModule, RouterModule, ReactiveFormsModule],
})
export class HeaderModule {}
