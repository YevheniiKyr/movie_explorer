import {configureStore} from "@reduxjs/toolkit";
import searchReducer from './search'
import genresReducer from './genres'
import popularMoviesReducer from './movies'
import movieReducer from './movie'

import createSagaMiddleware from '@redux-saga/core'
import watcherSaga from "../saga";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        search: searchReducer,
        genres: genresReducer,
        popularMovies: popularMoviesReducer,
        movie: movieReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({thunk: false}).prepend(sagaMiddleware)
    }

})
sagaMiddleware.run(watcherSaga)
export default store