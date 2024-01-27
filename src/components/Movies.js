import React, { useState, useEffect } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('1');

    useEffect(() => {
        const fetchData = async () => {
            const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${inputValue}`;

            try {
                const response = await fetch(api_url);
                const data = await response.json();
                const moviesData = data.results;
                setMovies(moviesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
        
        <div className='container mt-4'>
            <div className='d-flex justify-content-end'>
                <input
                    className='mb-5 form-control w-25'
                    type="number"
                    id="myInput"
                    min="1"
                    max="5"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            

            <div className='row'>
                {movies.map((movie) => (
                    <div key={movie.id} className="card mb-2" style={{ width: '20rem', margin: '0 auto' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="card-img-top"
                            alt="Movies"
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
        </>
    );
}

export default Movies;