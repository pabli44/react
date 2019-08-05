export const movies= [
        {
            id: 1, 
            title: 'Iron Man', 
            numberInStock: '200', 
            genre: {
                _id: 1,
                name: 'Fiction'
            },
            dailyRentalRate: 8.8,
            liked: true
        }, 
        {
            id: 2, 
            title: 'La Vida Es Bella', 
            numberInStock: '95', 
            genre: {
                _id: 2,
                name: 'Drama'
            }, 
            dailyRentalRate: 9.5
        },
        {
            id: 3, 
            title: 'La Dama de Negro', 
            numberInStock: '12', 
            genre: {
                _id: 3,
                name: 'Terror'
            },
            dailyRentalRate: 7.5
        },
        {
            id: 4, 
            title: 'Joe Black', 
            numberInStock: '8', 
            genre: {
                _id: 2,
                name: 'Drama'
            },
            dailyRentalRate: 8
        },
        {
            id: 5, 
            title: 'Belleza Americana', 
            numberInStock: '78', 
            genre: {
                _id: 2,
                name: 'Drama'
            },
            dailyRentalRate: 7.5
        },
        {
            id: 6, 
            title: 'Capitan américa- Civil War', 
            numberInStock: '15', 
            genre: {
                _id: 1,
                name: 'Fiction'
            },
            dailyRentalRate: 9.8
        },
        {
            id: 7, 
            title: 'Avengers 1', 
            numberInStock: '25', 
            genre: {
                _id: 1,
                name: 'Fiction'
            },
            dailyRentalRate: 9.3
        },
        {
            id: 8, 
            title: 'Hulk', 
            numberInStock: '55', 
            genre: {
                _id: 1,
                name: 'Fiction'
            },
            dailyRentalRate: 9.5
        },
        {
            id: 9, 
            title: 'Iron Man 4', 
            numberInStock: '69', 
            genre: {
                _id: 1,
                name: 'Fiction'
            },
            dailyRentalRate: 7.5
        },
        {
            id: 10, 
            title: 'Captain Marvel', 
            numberInStock: '955', 
            genre: {
                _id: 1,
                name: 'Fiction'
            },
            dailyRentalRate: 7.5
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
