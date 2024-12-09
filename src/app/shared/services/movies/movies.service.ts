import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  movies = [
    {
      id: '1',
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      genre: 'Drama',
      rating: 9.3,
      duration: '142 min',
      country: 'USA',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgTLzGS7fm3TheEzBxhzgMxp5rPhoVHxxK2kbfd-rRfEEmHtk7kFZKVrrYslcvw15xjQ&usqp=CAU',
      reviews: [
        { user: 'Alice', date: '2023-11-20', comment: 'A timeless masterpiece!', rating: 5 },
        { user: 'Bob', date: '2023-10-15', comment: 'One of the best movies ever made.', rating: 4.9 },
      ],
      actors: [
        { id: '1', firstName: 'Leonardo', lastName: 'DiCaprio', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yhDDv3b5ixR0-eeKOz9sfth6qlJxUFRuMk3fRJktRUVlO4fJ' },
        { id: '2', firstName: 'Natalie', lastName: 'Portman', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Natalie_Portman_2019_San_Diego_Comic-Con.jpg/1200px-Natalie_Portman_2019_San_Diego_Comic-Con.jpg' },
        { id: '3', firstName: 'Morgan', lastName: 'Freeman', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/640px-Morgan_Freeman_Deauville_2018.jpg' },
      ],
    },
    {
      id: '2',
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      genre: 'Crime',
      rating: 9.2,
      duration: '175 min',
      country: 'USA',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRWOudz4RSOZDXhNh-evtpORM2jkms88ouQ&s',
      reviews: [
        { user: 'Charlie', date: '2023-09-05', comment: 'An unparalleled classic in cinema.', rating: 5 },
        { user: 'Dana', date: '2023-08-22', comment: 'The storyline and acting are phenomenal!', rating: 4.8 },
      ],
      actors: [
        { id: '4', firstName: 'Scarlett', lastName: 'Johansson', img: 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg' },
        { id: '5', firstName: 'Tom', lastName: 'Hanks', img: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg' },
        { id: '6', firstName: 'Emma', lastName: 'Stone', img: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Emma_Stone_at_the_2024_New_York_Film_Festival_1_%28cropped%29.jpg' },
      ],
    },
    {
      id: '3',
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
      genre: 'Action',
      rating: 9.0,
      duration: '152 min',
      country: 'USA',
      description:
        'When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical challenges of his ability to fight injustice.',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERfmV8fgdV4aHIzg9N065NmQWVXAQqbKNmQ&s',
      reviews: [
        { user: 'Eve', date: '2023-07-18', comment: 'Heath Ledger redefined the Joker.', rating: 5 },
        { user: 'Frank', date: '2023-06-30', comment: 'Nolan’s direction is stunning!', rating: 4.9 },
      ],
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
    },
    {
      id: '4',
      title: '12 Angry Men',
      year: '1957',
      director: 'Sidney Lumet',
      genre: 'Drama',
      rating: 9.0,
      duration: '96 min',
      country: 'USA',
      description:
        'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      poster:
        'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
      reviews: [
        { user: 'Grace', date: '2023-05-12', comment: 'A movie that defines "classic".', rating: 4.8 },
        { user: 'Henry', date: '2023-04-21', comment: 'The tension is palpable.', rating: 4.7 },
      ],
      actors: [
        { id: '10', firstName: 'Meryl', lastName: 'Streep', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Meryl_Streep_December_2018_%28cropped%29.jpg/640px-Meryl_Streep_December_2018_%28cropped%29.jpg' },
        { id: '3', firstName: 'Morgan', lastName: 'Freeman', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/640px-Morgan_Freeman_Deauville_2018.jpg' },
        { id: '1', firstName: 'Leonardo', lastName: 'DiCaprio', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yhDDv3b5ixR0-eeKOz9sfth6qlJxUFRuMk3fRJktRUVlO4fJ' },
      ],
    },
    {
      id: '5',
      title: "Harry Potter and the Sorcerer's Stone",
      year: '2001',
      director: 'Chris Columbus',
      genre: 'Fantasy',
      rating: 7.6,
      duration: '152 min',
      country: 'UK',
      description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoNXVDN3zi8uPLcHL4Tak6Gzh59N_9mlscA&s',
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
      reviews: [
        { user: 'Isla', date: '2023-03-15', comment: 'A magical journey for all ages.', rating: 4.5 },
        { user: 'Jack', date: '2023-02-11', comment: 'Nostalgic and heartwarming.', rating: 4.4 }
      ]
    },
    {
      id: '6',
      title: 'Pulp Fiction',
      year: '1994',
      director: 'Quentin Tarantino',
      genre: 'Crime',
      rating: 8.9,
      duration: '154 min',
      country: 'USA',
      description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkKEUHiXx-oIrvJd5Sxq3ksChSHyDaRw6xw&s',
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
      reviews: [
        { user: 'Karen', date: '2023-01-10', comment: 'Tarantino’s masterpiece.', rating: 5 },
        { user: 'Leo', date: '2022-12-20', comment: 'Witty, sharp, and unforgettable.', rating: 4.8 }
      ]
    },
    {
      id: '7',
      title: 'Forrest Gump',
      year: '1994',
      director: 'Robert Zemeckis',
      genre: 'Drama',
      rating: 8.8,
      duration: '142 min',
      country: 'USA',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, and more, are seen through the eyes of an Alabama man with an IQ of 75.',
      poster: 'https://www.galeriaplakatu.com/img/imagecache/580x874_product_media_190695_1020_A-j.webp',
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
      reviews: [
        { user: 'Mia', date: '2022-11-01', comment: 'Heartwarming and inspiring.', rating: 5 },
        { user: 'Nina', date: '2022-10-15', comment: 'Tom Hanks delivers his best.', rating: 4.9 }
      ]
    },
    {
      id: '8',
      title: 'The Matrix',
      year: '1999',
      director: 'The Wachowskis',
      genre: 'Sci-Fi',
      rating: 8.7,
      duration: '136 min',
      country: 'USA',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      poster: 'https://m.media-amazon.com/images/I/71x7df0yZdL._AC_UF1000,1000_QL80_.jpg',
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
      reviews: [
        { user: 'Olivia', date: '2023-09-10', comment: 'Mind-bending and thrilling.', rating: 5 },
        { user: 'Paul', date: '2023-08-18', comment: 'A sci-fi masterpiece.', rating: 4.9 }
      ]
    },
    {
      id: '9',
      title: 'The Lord of the Rings',
      year: '2001',
      director: 'Peter Jackson',
      genre: 'Fantasy',
      rating: 8.8,
      duration: '178 min',
      country: 'New Zealand',
      description: 'A meek Hobbit and his friends set out to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.',
      poster: 'https://i.ebayimg.com/images/g/DV4AAOSwmRli4zPU/s-l1200.jpg',
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
      reviews: [
        { user: 'Quinn', date: '2023-03-15', comment: 'An epic adventure.', rating: 5 },
        { user: 'Ryan', date: '2023-02-20', comment: 'A visual spectacle!', rating: 4.8 }
      ]
    },
    {
      id: '10',
      title: 'Inception',
      year: '2010',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      rating: 8.8,
      duration: '148 min',
      country: 'USA',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      poster: 'https://m.media-amazon.com/images/I/714b1KQmskL._AC_UF1000,1000_QL80_.jpg',
      actors: [
        { id: '7', firstName: 'Denzel', lastName: 'Washington', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg' },
        { id: '8', firstName: 'Anne', lastName: 'Hathaway', img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg' },
        { id: '9', firstName: 'Christian', lastName: 'Bale', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg' },
      ],
      reviews: [
        { user: 'Sophia', date: '2023-04-12', comment: 'Nolan at his best.', rating: 5 },
        { user: 'Tyler', date: '2023-03-25', comment: 'A movie that keeps you thinking.', rating: 4.8 }
      ]
    }
  ];


  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovieById(id: string) {
    return this.movies.find(movie => movie.id === id);
  }
}
