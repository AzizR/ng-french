import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  PrepositionOfPlace,
  TranslationLanguage,
  Verb,
} from '../../types/word';
import { DictionaryService } from '../../dictionary.service';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
  tanslationLanguage: TranslationLanguage = 'english';
  subcriptions = new Subscription();

  filteredVerbs: Verb[] = [];
  filteredPrepositions: PrepositionOfPlace[] = [];

  constructor(
    private dictionaryService: DictionaryService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.subcriptions.add(
      this.dictionaryService.filteredVerbs$.subscribe(
        (verbs) => (this.filteredVerbs = verbs)
      )
    );

    this.subcriptions.add(
      this.dictionaryService.filteredPrepositions$.subscribe(
        (preps) => (this.filteredPrepositions = preps)
      )
    );

    this.subcriptions.add(
      this.translationService.tanslationLanguage$.subscribe(
        (language) => (this.tanslationLanguage = language)
      )
    );

    const res = this.filteredVerbs.map((verb) => verb.french_infinitive);
    console.log(res);
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

  trackVerbId(index: number, verb: Verb) {
    return verb.id;
  }
}
