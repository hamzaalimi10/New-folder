import React from 'react'

function MapMovies(movies) {
  return (
    <div className='row'>
    {movies.map((movie) => (
        <div key={movie.id} className="card mb-2 p-2" style={{ width: '20rem', margin: '0 auto' }}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt="Filmat"
            />
            <div className="card-body">
                <h5 className="card-title" style={{ height: '40px' }}>{movie.title}</h5>
                <p className="card-text">{movie.overview.slice(0, 120)}</p>
                <button href="#" type='button' className="btn btn-danger mt-3 p-2.5">
                    Watch
                    <span className='m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    ))}
    </div>
  )
}

export default MapMovies