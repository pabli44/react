import React, { Component } from 'react';
import { getMovies } from '../services/movieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
     }


     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=>m.id !==movie.id);
        this.setState({
            movies: movies
        });
     };

     handleClick = (movie) =>{
         console.log('like clicked');
         console.log(movie.liked);

         const movies = [ ...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = { ...movies[index] };
         movies[index].liked = !movies[index].liked;
         this.setState({
             movies
         });
     }

     handlePageChange = page => {
         this.setState({ currentPage: page});
     }

    render() { 
        const {length: count} = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if(count===0)
            return <p>There are no Movies in the database!!</p>


        const movies = paginate(allMovies, currentPage, pageSize);   
    

        return (
                <React.Fragment>
                    <p>Showing {count===1 ? count +' Movie': count+' Movies'} from database!!</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.rate}</td>
                                    <td><Like liked={movie.liked} onClick={() =>this.handleClick(movie)}/></td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>  

                    <Pagination 
                        itemsCount={count} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                    
                </React.Fragment>
            
            
            );
    }
}
 
export default Movies;