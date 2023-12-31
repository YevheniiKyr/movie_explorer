export default class TheMovieDbApi {
    apiBaseUrl = 'https://api.themoviedb.org/3'
    apiKey

    constructor(apiKey) {
        this.apiKey = apiKey
    }

    searchMovies = async (query) => {
        const resp = await fetch(
            `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
        )
        return resp.json()
    }

    getGenres = async () => {
        const resp = await fetch(
            `${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`
        )
        return resp.json()
    }

    getPopularMovies = async (page =1) => {
        console.log("page in req", page)
        const resp = await fetch(
            `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
        )
        return resp.json()
    }

    getMovie = async (id) => {
        const resp = await fetch(
            `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`
        )
        return resp.json()
    }
}