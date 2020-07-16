const APIKEY = "d688cf0f1ca796560390c722de06830f"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en_US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en_US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;