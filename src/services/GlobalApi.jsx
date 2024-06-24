import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const ApiKey = "3451b771ad584bade8032ef80f23f52e";
// https://api.themoviedb.org/3/movie/11?api_key=3451b771ad584bade8032ef80f23f52e


const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + ApiKey);

export default {
    getTrendingVideos
}