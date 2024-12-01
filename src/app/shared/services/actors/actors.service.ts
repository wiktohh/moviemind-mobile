import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor() { }

  getActors() {
    const actors = [
      {
        firstName: 'Leonardo',
        lastName: 'DiCaprio',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yhDDv3b5ixR0-eeKOz9sfth6qlJxUFRuMk3fRJktRUVlO4fJ',
        age: 49,
        movies: ['Titanic', 'Inception', 'The Revenant', 'The Wolf of Wall Street'],
        biography: 'Leonardo DiCaprio is an American actor and producer known for his work in films like "Titanic," "Inception," and "The Revenant," for which he won an Academy Award. He is also an environmental activist.'
      },
      {
        firstName: 'Natalie',
        lastName: 'Portman',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Natalie_Portman_2019_San_Diego_Comic-Con.jpg/1200px-Natalie_Portman_2019_San_Diego_Comic-Con.jpg',
        age: 43,
        movies: ['Black Swan', 'V for Vendetta', 'Thor', 'Jackie'],
        biography: 'Natalie Portman is an Israeli-American actress and filmmaker. She has starred in critically acclaimed movies such as "Black Swan," for which she won an Academy Award, and "V for Vendetta."'
      },
      {
        firstName: 'Morgan',
        lastName: 'Freeman',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/640px-Morgan_Freeman_Deauville_2018.jpg',
        age: 87,
        movies: ['The Shawshank Redemption', 'Seven', 'Bruce Almighty', 'Invictus'],
        biography: 'Morgan Freeman is an American actor, director, and narrator. Known for his deep, authoritative voice, he has appeared in films like "The Shawshank Redemption" and "Seven."'
      },
      {
        firstName: 'Scarlett',
        lastName: 'Johansson',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg',
        age: 39,
        movies: ['Lost in Translation', 'The Avengers', 'Lucy', 'Marriage Story'],
        biography: 'Scarlett Johansson is an American actress known for her roles in films like "Lost in Translation" and the Marvel Cinematic Universe, where she played Black Widow.'
      },
      {
        firstName: 'Tom',
        lastName: 'Hanks',
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg',
        age: 68,
        movies: ['Forrest Gump', 'Cast Away', 'Saving Private Ryan', 'The Terminal'],
        biography: 'Tom Hanks is an American actor and filmmaker known for his versatile roles in films such as "Forrest Gump" and "Saving Private Ryan." He has won multiple Academy Awards.'
      },
      {
        firstName: 'Emma',
        lastName: 'Stone',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Emma_Stone_at_the_2024_New_York_Film_Festival_1_%28cropped%29.jpg',
        age: 35,
        movies: ['La La Land', 'The Amazing Spider-Man', 'Cruella', 'Birdman'],
        biography: 'Emma Stone is an American actress who won an Academy Award for her performance in "La La Land." She is also known for roles in "Birdman" and "The Amazing Spider-Man."'
      },
      {
        firstName: 'Denzel',
        lastName: 'Washington',
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Denzel_Washington_cropped_02.jpg',
        age: 69,
        movies: ['Training Day', 'Fences', 'The Equalizer', 'Malcolm X'],
        biography: 'Denzel Washington is an American actor and filmmaker. He has received multiple Academy Awards for his work in films like "Training Day" and "Glory."'
      },
      {
        firstName: 'Anne',
        lastName: 'Hathaway',
        img: 'https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_.jpg',
        age: 41,
        movies: ['The Devil Wears Prada', 'Les Misérables', 'Interstellar', 'The Princess Diaries'],
        biography: 'Anne Hathaway is an American actress known for her versatility and roles in films like "The Devil Wears Prada" and "Les Misérables," for which she won an Academy Award.'
      },
      {
        firstName: 'Christian',
        lastName: 'Bale',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/1200px-Christian_Bale-7837.jpg',
        age: 50,
        movies: ['The Dark Knight', 'American Psycho', 'The Fighter', 'Ford v Ferrari'],
        biography: 'Christian Bale is a Welsh actor known for his intense performances and transformations, particularly in "The Dark Knight" trilogy and "The Fighter," for which he won an Academy Award.'
      },
      {
        firstName: 'Meryl',
        lastName: 'Streep',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Meryl_Streep_December_2018_%28cropped%29.jpg/640px-Meryl_Streep_December_2018_%28cropped%29.jpg',
        age: 75,
        movies: ['The Iron Lady', 'Mamma Mia!', 'The Devil Wears Prada', 'Kramer vs. Kramer'],
        biography: 'Meryl Streep is an American actress widely regarded as one of the greatest performers of all time. She has won multiple Academy Awards for films like "The Iron Lady" and "Kramer vs. Kramer."'
      }
    ];
    return actors;    
  }
}
