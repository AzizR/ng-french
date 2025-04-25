import { Component, OnDestroy, OnInit } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { TranslationLanguage } from './types/word';
import { TranslationService } from './translation.service';
import { filter, Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  appName = 'French';
  search = '';
  translationLanguage: TranslationLanguage = 'english';
  subscription = new Subscription();
  url = '';

  constructor(
    private dictionaryService: DictionaryService,
    private translationService: TranslationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.tanslationLanguage$.subscribe((language) => {
        this.translationLanguage = language;
      })
    );

    this.url = this.router.url;
    this.updateCurrentUrlOnRedirect();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateCurrentUrlOnRedirect() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url = event.urlAfterRedirects;
        console.log(this.url);
      });
  }

  searchChange() {
    this.dictionaryService.searchWord(this.search, this.translationLanguage);
  }

  setTranslationLanguage() {
    this.translationService.setTranslationLanguage(this.translationLanguage);
  }
}
