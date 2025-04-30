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

type SentenceExample = {
  example: string;
  english: string;
  russian: string;
  german: string;
  spanish: string;
};

export interface Verb {
  id: string;
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
  examples?: SentenceExample[];
}

export interface PrepositionOfPlace {
  preposition: string;
  image: string;
  examples: SentenceExample[];
}

export type TranslationLanguage =
  | 'english'
  | 'russian'
  | 'german'
  | 'spanish'
  | 'chineese';
