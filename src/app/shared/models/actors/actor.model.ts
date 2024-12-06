export interface Actor {
    id: string,
    firstName: string,
    lastName: string,
    img: string,
    age: number,
    movies: {title: string, id: string}[],
    biography: string,
    country: string
}