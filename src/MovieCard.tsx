import img404 from './assets/404.gif'

const MovieCard = ( {movie}: any ) : any => {
    return (
        <div className='movie'>
            <div>
            <p>{movie.Year}</p>
            </div>

            <div>
            <img src={movie.Poster !== "N/A" ? movie.Poster : img404} alt={movie.Title} onClick={
                () => window.open(`https://www.imdb.com/title/${movie.imdbID}/`) }>
            </img>
            </div>

            <div id='info'>
                <span>{movie.Type}</span>
                <h5>{movie.Title}</h5>
            </div>
        </div>
    )
}

export default MovieCard;