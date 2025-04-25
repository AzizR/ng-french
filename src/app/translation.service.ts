import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationLanguage } from './types/word';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  tanslationLanguage = new BehaviorSubject<TranslationLanguage>('english');
  tanslationLanguage$ = this.tanslationLanguage.asObservable();

  constructor() {
    this.tanslationLanguage.next(
      (localStorage.getItem('translation_language') as TranslationLanguage) ??
        'english'
    );
  }

  setTranslationLanguage(tanslationLanguage: TranslationLanguage) {
    this.tanslationLanguage.next(tanslationLanguage);
    localStorage.setItem('translation_language', tanslationLanguage);
  }
}
