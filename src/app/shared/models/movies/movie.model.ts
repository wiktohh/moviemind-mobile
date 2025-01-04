export interface Movie {
    id: string;
    title: string;
    description: string;
    genre: Genre;
    releaseDate: string; 
    boxOffice: number;
    duration: number;
    reviews: Review[];
    roles: Role[];
    countries: Country[];
    image: string | null;
    score: number;
    numberOfReviews: number;
  }

  export interface Review {
    id: string;
    comment: string;
    rating: number;
    movieId: string;
    movie: MovieSummary; 
    userId: string;
    user: User;
  }
  

  export interface MovieSummary {
    id: string;
    title: string;
    description: string;
    genre: number;
    releaseDate: string;
    boxOffice: number;
    duration: number;
  }

  export interface User {
    id: string;
    login: string;
    email: string;
  }

  export interface Role {
    id: string;
    personId: string;
    person: Person;
    movie: MovieSummary;
    movieId: string;
    movieProductionRole: number;
    character: string;
    score: number;
    numberOfReviews: number;
  }

  export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    biography: string;
    pictureUrl: string;
  }
  
  export interface Country {
    id: string;
    countryName: string;
  }

  export enum Genre {
    Akcja = 0,
    Animacja = 1,
    AnimacjaDlaDoroslych = 2,
    Anime = 3,
    Biograficzny = 4,
    Basn = 5,
    CzarnaKomedia = 6,
    DlaDzieci = 7,
    Dokumentalny = 8,
    Dramat = 9,
    Obyczajowy = 10,
    SciFi = 11,
    Fantasy = 12,
    Przyrodniczy = 13,
    Erotyczny = 14,
    Romans = 15,
    Wojenny = 16,
    Western = 17,
    Przygodowy = 18,
    Thriller = 19,
    Musical = 20,
  }
  