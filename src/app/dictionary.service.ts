import { Injectable } from '@angular/core';
import {
  Word,
  Verb,
  TranslationLanguage,
  PrepositionOfPlace,
} from './types/word';

import data from '../data/words.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  #verbs: Verb[] = [];
  #filteredVerbsSubject = new BehaviorSubject<Verb[]>([]);
  filteredVerbs$ = this.#filteredVerbsSubject.asObservable();

  prepositions: PrepositionOfPlace[] = [];
  #filteredPrepositionsSubject = new BehaviorSubject<PrepositionOfPlace[]>([]);
  filteredPrepositions$ = this.#filteredPrepositionsSubject.asObservable();

  selectedWord = new BehaviorSubject<Verb | null>(null);
  selectedWord$ = this.selectedWord.asObservable();

  constructor() {
    this.#verbs = data.verbs;
    this.#filteredVerbsSubject.next(this.#verbs);

    this.prepositions = data.prepositions;
    this.#filteredPrepositionsSubject.next(this.prepositions);
  }

  selectWord(id: string) {
    if (!id.length) {
      this.selectedWord.next(null);
      return;
    }

    this.selectedWord.next(this.#verbs.find((verb) => verb.id === id) ?? null);
  }

  searchWord(search: string, translation: TranslationLanguage) {
    this.#filteredVerbsSubject.next(
      this.#verbs.filter(
        (verb) =>
          verb.french_infinitive
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          (verb.translations[translation] ?? verb.translations.english)
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
      )
    );

    this.#filteredPrepositionsSubject.next(
      this.prepositions.filter((prep) =>
        prep.preposition
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
    );
  }
}
