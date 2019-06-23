import React, { Component } from 'react';
import { getMovies } from '../services/movieService';
import { getGenres } from '../services/movieService';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' }
     }

     componentDidMount(){
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({ movies: getMovies(), genres: genres })
     }

     handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1})
     };

     handleSort = sortColumn => {
        this.setState({ sortColumn });
     };


     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=>m.id !==movie.id);
        this.setState({
            movies: movies
        });
     };

     handleLike = (movie) =>{
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
        const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

        if(count===0)
            return <p>There are no Movies in the database!!</p>

        const filtered = selectedGenre &&  selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
                : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);   
    

        return (
                <div>
                    <p>Showing {filtered.length===1 ? filtered.length +' Movie': filtered.length+' Movies'} from database!!</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                               <ListGroup 
                                    items={this.state.genres} 
                                    selectedItem={this.state.selectedGenre}
                                    onItemSelect={this.handleGenreSelect}
                                />
                            </div>
                        
                    
                            <div className="col">
                               <MoviesTable 
                                    movies={movies}   
                                    sortColumn={sortColumn}  
                                    onLike={this.handleLike}
                                    onDelete={this.handleDelete}
                                    onSort={this.handleSort}
                                />
                                    <Pagination 
                                        itemsCount={filtered.length} 
                                        pageSize={pageSize} 
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            
            
            );
    }
}
 
export default Movies;