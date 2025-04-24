import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { TranslationLanguage, Verb } from './types/word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  appName = 'French';
  filteredVerbs: Verb[] = [];
  search = '';
  tanslationLanguage: TranslationLanguage = 'english';

  constructor(public dictionaryService: DictionaryService) {
    this.filteredVerbs = dictionaryService.verbs;
  }

  ngOnInit(): void {
    this.tanslationLanguage =
      (localStorage.getItem('translation_language') as TranslationLanguage) ??
      'english';

    console.log(localStorage.getItem('translation_language'));
  }

  searchChange() {
    this.filteredVerbs = this.dictionaryService.verbs.filter(
      (verb) =>
        verb.french_infinitive
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase()) ||
        verb.translations.english
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase())
    );
  }

  setTranslationLanguage() {
    localStorage.setItem('translation_language', this.tanslationLanguage);
  }
}
