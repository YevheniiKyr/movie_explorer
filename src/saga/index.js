import {delay, put, call, all, takeLatest, takeEvery} from "redux-saga/effects";
import {fetchedSearchMovies, searchMovies} from "../redux/search";
import {API_KEY} from "../config";
import TheMovieDbApi from "../lib/api";
import {fetchedGenres, getGenres} from "../redux/genres";
import {fetchedPopularMovies, getPopularMovies} from "../redux/movies";
import {fetchedMovie, getMovie} from "../redux/movie";

const api = new TheMovieDbApi(API_KEY)

function* fetchSearchMovies(action) {
    yield delay(500)
    console.log("fetch movies log " + action.payload)
    yield put(
        fetchedSearchMovies(yield call(api.searchMovies, action.payload))
    )
}

function* fetchGenres() {
    yield put(
        fetchedGenres(yield call(api.getGenres))
    )
}

function* fetchPopularMovies(action) {
    yield put(
        fetchedPopularMovies(yield call(api.getPopularMovies, action.payload))
    )
}

function* fetchMovie(action) {
    yield put(
        fetchedMovie(yield call(api.getMovie, action.payload))
    )
}


export default function* watcherSaga() {
    yield all([
        yield takeLatest(searchMovies.type, fetchSearchMovies),
        yield takeEvery(getGenres.type, fetchGenres),
        yield takeEvery(getPopularMovies.type, fetchPopularMovies),
        yield takeEvery(getMovie.type, fetchMovie)
    ])
}
