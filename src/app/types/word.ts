export interface Word {
  french: string;
  type: 'greeting' | 'noun' | 'verb';
  translations: {
    english: string;
    russian: string;
    german: string;
    spanish: string;
    chineese?: string;
  };
}

export interface Verb {
  french_infinitive: string;
  conjugations: {
    je: string;
    tu: string;
    'il/elle'?: string;
    nous: string;
    vous: string;
    'ils/elles': string;
  };
  translations: {
    english: string;
    russian: string;
    german: string;
    spanish: string;
    chineese?: string;
  };
}

export type TranslationLanguage =
  | 'english'
  | 'russian'
  | 'german'
  | 'spanish'
  | 'chineese';
