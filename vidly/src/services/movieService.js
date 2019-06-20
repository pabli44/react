import axios from 'axios';



export const movies= [
        {
            id: 1, 
            title: 'Iron Man', 
            numberInStock: '200', 
            genre: 'Fiction', 
            rate: 8.6,
            liked: true
        }, 
        {
            id: 2, 
            title: 'La Vida Es Bella', 
            numberInStock: '95', 
            genre: 'Drama', 
            rate: 9.5
        },
        {
            id: 3, 
            title: 'La Dama de Negro', 
            numberInStock: '12', 
            genre: 'Terror', 
            rate: 7.5
        },
        {
            id: 4, 
            title: 'Joe Black', 
            numberInStock: '8', 
            genre: 'Drama', 
            rate: 8
        },
        {
            id: 5, 
            title: 'Belleza Americana', 
            numberInStock: '78', 
            genre: 'Drama', 
            rate: 7.5
        },
        {
            id: 6, 
            title: 'Capitan américa- Civil War', 
            numberInStock: '15', 
            genre: 'Fiction', 
            rate: 9.8
        },
        {
            id: 7, 
            title: 'Avengers 1', 
            numberInStock: '25', 
            genre: 'Fiction', 
            rate: 9.3
        },
        {
            id: 8, 
            title: 'Hulk', 
            numberInStock: '55', 
            genre: 'Fiction', 
            rate: 9.5
        },
        {
            id: 9, 
            title: 'Iron Man 4', 
            numberInStock: '69', 
            genre: 'Fiction', 
            rate: 7.5
        },
        {
            id: 10, 
            title: 'Captain Marvel', 
            numberInStock: '955', 
            genre: 'Fiction', 
            rate: 7.5
        }
];


export const genres = [
    {
        _id: 1,
        name: 'Fiction'
    },
    {
        _id: 2,
        name: 'Drama'
    },
    {
        _id: 3,
        name: 'Terror'
    }
];


export const getMovies = () => {
    return movies;
} 

export const getMovie = id => {
    return movies.find(m=>m.id===id);
}

export const getGenres = () => {
    return genres;
} 
