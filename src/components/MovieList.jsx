import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HrMovieCard from './HrMovieCard';
const screenWidth = window.innerWidth;

const MovieList = ({ genreId, index_ }) => {
    const elemRef = useRef(null);

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovieByGenereId();
    }, [])

    const getMovieByGenereId = () => {
        GlobalApi.getMovieByGenereId(genreId).then((response) => {
            console.log(response.data.results);
            setMovieList(response.data.results);
        })

    }
    const slideRight = () => {
        elemRef.current.scrollLeft += screenWidth - 110;
    };

    const slideLeft = () => {
        elemRef.current.scrollLeft -= screenWidth - 110;
    };
    return (
        <div className='relative'>

            <MdKeyboardArrowLeft
                className={`hidden md:block text-white text-[40px] absolute left-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer `}
                onClick={slideLeft}
            />
            <MdKeyboardArrowRight
                className='hidden md:block text-white text-[40px] absolute right-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={slideRight}
            />

            <div ref={elemRef} className='flex overflow-x-auto gap-8 scroll-smooth scrollbar-none
        pt-5 px-3 pb-5'>
                {movieList.map((item, index) => (
                    <>
                        {
                            index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />
                        }
                    </>
                ))}
            </div>



        </div>
    )
}

export default MovieList
