import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor() { }

  getMovies() {
    const movies = [
      {
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        genre: 'Drama',
        rating: 9.3,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgTLzGS7fm3TheEzBxhzgMxp5rPhoVHxxK2kbfd-rRfEEmHtk7kFZKVrrYslcvw15xjQ&usqp=CAU'
      },
      {
        title: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        genre: 'Crime',
        rating: 9.2,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRWOudz4RSOZDXhNh-evtpORM2jkms88ouQ&s'
      },
      {
        title: 'The Dark Knight',
        year: '2008',
        director: 'Christopher Nolan',
        genre: 'Action',
        rating: 9.0,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERfmV8fgdV4aHIzg9N065NmQWVXAQqbKNmQ&s'
      },
      {
        title: '12 Angry Men',
        year: '1957',
        director: 'Sidney Lumet',
        genre: 'Drama',
        rating: 9.0,
        poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg'
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        year: '2001',
        director: 'Chris Columbus',
        genre: 'Fantasy',
        rating: 7.6,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoNXVDN3zi8uPLcHL4Tak6Gzh59N_9mlscA&s'
      },
      {
        title: 'Pulp Fiction',
        year: '1994',
        director: 'Quentin Tarantino',
        genre: 'Crime',
        rating: 8.9,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkKEUHiXx-oIrvJd5Sxq3ksChSHyDaRw6xw&s'
      },
      {
        title: 'Forrest Gump',
        year: '1994',
        director: 'Robert Zemeckis',
        genre: 'Drama',
        rating: 8.8,
        poster: 'https://www.galeriaplakatu.com/img/imagecache/580x874_product_media_190695_1020_A-j.webp'
      },
      {
        title: 'The Matrix',
        year: '1999',
        director: 'The Wachowskis',
        genre: 'Sci-Fi',
        rating: 8.7,
        poster: 'https://m.media-amazon.com/images/I/71x7df0yZdL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'The Lord of the Rings',
        year: '2001',
        director: 'Peter Jackson',
        genre: 'Fantasy',
        rating: 8.8,
        poster: 'https://i.ebayimg.com/images/g/DV4AAOSwmRli4zPU/s-l1200.jpg'
      },
      {
        title: 'Inception',
        year: '2010',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi',
        rating: 8.8,
        poster: 'https://m.media-amazon.com/images/I/714b1KQmskL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'Fight Club',
        year: '1999',
        director: 'David Fincher',
        genre: 'Drama',
        rating: 8.8,
        poster: 'https://m.media-amazon.com/images/I/61IgtYrLF5L._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'The Empire Strikes Back',
        year: '1980',
        director: 'Irvin Kershner',
        genre: 'Sci-Fi',
        rating: 8.7,
        poster: 'https://m.media-amazon.com/images/I/71fjaR6+MhL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'Gladiator',
        year: '2000',
        director: 'Ridley Scott',
        genre: 'Action',
        rating: 8.5,
        poster: 'https://www.galeriaplakatu.com/img/imagecache/28001-29000/334x500_product_media_28001-29000_GLADIATOR_POSTER-j.webp'
      },
      {
        title: 'Avatar',
        year: '2009',
        director: 'James Cameron',
        genre: 'Sci-Fi',
        rating: 7.8,
        poster: 'https://static.posters.cz/image/1300/plakaty/avatar-limited-ed-one-sheet-sun-i7182.jpg'
      }
    ];
    return movies;
  }
}
