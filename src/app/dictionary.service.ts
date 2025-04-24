import { Injectable } from '@angular/core';
import { Word, Verb } from './types/word';

import data from '../data/words.json';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  verbs: Verb[];
  constructor() {
    this.verbs = data.verbs;
    console.log(this.verbs);
  }
}
