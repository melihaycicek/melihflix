import React, { useEffect, useState } from 'react';

import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
           setMovies(requests.data.results);
            
            return requests;
            //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213",
        }
        fetchData();

    }, [fetchUrl]);
    console.table(movies);
 
    return (

        <div className='row'>
            <h2>{title}</h2>
        <div className='row__posters'>
            {}
            {movies.map(movie => (
                <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
            </div>
        </div>
    )



}

export default Row