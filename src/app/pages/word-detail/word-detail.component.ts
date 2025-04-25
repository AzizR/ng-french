import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionaryService } from '../../dictionary.service';
import { Verb } from '../../types/word';

@Component({
  selector: 'app-word-detail',
  standalone: false,
  templateUrl: './word-detail.component.html',
  styleUrl: './word-detail.component.scss',
})
export class WordDetailComponent implements OnInit {
  id: string = '';
  word: Verb | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.dictionaryService.selectedWord$.subscribe(
      (word) => (this.word = word)
    );

    this.dictionaryService.selectWord(this.id);
  }
}
