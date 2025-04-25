import { Injectable } from '@angular/core';
import { Word, Verb, TranslationLanguage } from './types/word';

import data from '../data/words.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  verbs: Verb[] = [];
  filteredVerbs = new BehaviorSubject<Verb[]>([]);
  filteredVerbs$ = this.filteredVerbs.asObservable();

  selectedWord = new BehaviorSubject<Verb | null>(null);
  selectedWord$ = this.selectedWord.asObservable();

  constructor() {
    this.verbs = data.verbs;
    this.filteredVerbs.next(this.verbs);
  }

  selectWord(id: string) {
    if (!id.length) {
      this.selectedWord.next(null);
      return;
    }

    this.selectedWord.next(this.verbs.find((verb) => verb.id === id) ?? null);
  }

  searchWord(search: string, translation: TranslationLanguage) {
    this.filteredVerbs.next(
      this.verbs.filter(
        (verb) =>
          verb.french_infinitive
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          (verb.translations[translation] ?? verb.translations.english)
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
      )
    );
  }
}
