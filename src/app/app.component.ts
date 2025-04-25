import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { TranslationLanguage } from './types/word';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  appName = 'French';
  search = '';
  translationLanguage: TranslationLanguage = 'english';

  constructor(
    private dictionaryService: DictionaryService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.translationService.tanslationLanguage$.subscribe((language) => {
      this.translationLanguage = language;
    });
    console.log(localStorage.getItem('translation_language'));
  }

  searchChange() {
    this.dictionaryService.searchWord(this.search, this.translationLanguage);
  }

  setTranslationLanguage() {
    this.translationService.setTranslationLanguage(this.translationLanguage);
  }
}
