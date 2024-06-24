import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elemRef = useRef(null);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        try {
            const res = await GlobalApi.getTrendingVideos();
            setMovieList(res.data.results);
        } catch(error) {
            console.error("Error fetching trending movies:", error);
        }
    };

    const slideRight = () => {
        elemRef.current.scrollLeft += 800;
    };

    const slideLeft = () => {
        elemRef.current.scrollLeft -= 800;
    };

    return (
        <div className='relative'>
            <MdKeyboardArrowLeft
                className='hidden md:block text-white text-[40px] absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={slideLeft}
            />
            <MdKeyboardArrowRight
                className='hidden md:block text-white text-[40px] absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={slideRight}
            />
            <div
                className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none
                scroll-smooth'
                ref={elemRef}
            >
                {movieList.map((item, index) => (
                    <img
                        key={index}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        alt={item.title}
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md'
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
