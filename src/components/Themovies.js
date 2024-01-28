import React, { useEffect, useState } from 'react'

function Themovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const api_url =
            'https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0';

        fetch(api_url)
            .then((response) => response.json())
            .then((data) => {
                const moviesData = data.results.slice(0,4);
                setMovies(moviesData);
            });
    }, []);
    return (
        <div className='container mt-4'>
            <h5 className='text-center mb-4 sub-title'>Recommended</h5>
            <div className='row'>
                {movies.map((movie) => (
                    <div key={movie.id} className="card mb-2" style={{ width: '20rem', margin: '0 auto' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="card-img-top"
                            alt="Filmat"
                        />
                        <div className="card-body">
                            <h5 className="card-title" style={{ height: '40px' }}>{movie.title}</h5>
                            <p className="card-text">{movie.overview.slice(0, 120)}</p>
                            <a href="#" className="btn btn-info">
                                Kliko me shume
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Themovies