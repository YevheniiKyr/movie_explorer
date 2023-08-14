import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    results: [],
    hasMore: false,
    totalResults: 0,
    page: 0,
    totalPages: 0,
    isFetching: false
}

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        getPopularMovies: (state) => {
            return {
                ...state,
                isFetching: true
            }
        },
        fetchedPopularMovies: (state, action) => {
            return {
                ...state,
                isFetching: false,
                results: [...state.results, ...action.payload.results],
                hasMore: action.payload.page < action.payload.total_pages,
                totalResults: action.payload.total_results,
                page: action.payload.page,
                totalPages: action.payload.total_pages
            }
        },
        resetState: (state) => {
            return initialState
        }

    }
})

export const {fetchedPopularMovies, getPopularMovies, resetState} = moviesSlice.actions

export default moviesSlice.reducer
