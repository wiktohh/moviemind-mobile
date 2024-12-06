export interface Movie {
    id: string;
    title: string;
    year: string;
    director: string;
    genre: string;
    rating: number;
    poster: string;
    description: string;
    duration: string;
    country: string;
    reviews: Review[];
}

export interface Review {
    user: string;
    date: string;
    comment: string;
    rating: number;
}
