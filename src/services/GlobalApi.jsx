import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const ApiKey = "3451b771ad584bade8032ef80f23f52e";
// https://api.themoviedb.org/3/movie/11?api_key=3451b771ad584bade8032ef80f23f52e

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + ApiKey);

const getMovieByGenereId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default {
    getTrendingVideos,
    getMovieByGenereId
};