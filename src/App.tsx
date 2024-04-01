import { useState, useEffect } from 'react';
import './App.css';

import searchIcon from './assets/search.svg';

import MovieCard from './MovieCard';

const API_KEY = 'b77841bc'
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`

const App = () => {

  const [movies, setMovies] = useState([]);

  const [Searched, setSearched] = useState('Joker');

  const [page, setPage] = useState(1);

  const searchMovies = async (title: string, page: number) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {searchMovies(Searched, page)}, []);

  return (
    <>
    <div className='app'>
      <h1>MovieIsland</h1>

      <div className='search'>
        <input type='text' placeholder='Search for movies' value={Searched} onChange={ (e) => setSearched(e.target.value)}
          onKeyUp={ (e) => { if (e.key === 'Enter') { setPage(1) ; searchMovies(Searched, page) }} }/>
        <img src={searchIcon} alt="search" onClick={ () => { setPage(1) ; searchMovies(Searched, page) }}></img>
      </div>

      <div className='container'>
        {
          movies ? <> {movies.map((movie: any) =>  (<MovieCard movie={movie} key={movie.imdbID}/>))} </>
                        : <> <div className='noFilms'>NO FILMS HERE</div> </>
        }
      </div>

      <div className='page'>
        <div className='arrow' id='left' onClick={ () => { if (page - 1 > 0) 
          {setPage(page - 1) ; searchMovies(Searched, page - 1)} 
         } }><div></div></div>

        <div className='pageNum'>{page}</div>

        <div className='arrow' id='right' onClick={ () => { if (movies) 
          {setPage(page + 1) ; searchMovies(Searched, page + 1)}
         } }><div></div></div>
      </div>
    </div>
    </>
  );
}

export default App;