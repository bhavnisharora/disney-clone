import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'

const MovieList = ({ genreId }) => {

    useEffect(() => {
        getMovieByGenereId();
    }, [])

    const getMovieByGenereId = () => {
        GlobalApi.getMovieByGenereId(genreId).then((response) => {
            console.log(response.data.results);
        })

    }

    return (
        <div>
            movielist
        </div>
    )
}

export default MovieList
