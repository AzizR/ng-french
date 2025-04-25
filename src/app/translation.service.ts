import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationLanguage } from './types/word';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  tanslationLanguageSubject = new BehaviorSubject<TranslationLanguage>(
    'english'
  );
  tanslationLanguage$ = this.tanslationLanguageSubject.asObservable();

  constructor() {
    this.tanslationLanguageSubject.next(
      (localStorage.getItem('translation_language') as TranslationLanguage) ??
        'english'
    );
  }

  setTranslationLanguage(tanslationLanguage: TranslationLanguage) {
    this.tanslationLanguageSubject.next(tanslationLanguage);
    localStorage.setItem('translation_language', tanslationLanguage);
  }
}
