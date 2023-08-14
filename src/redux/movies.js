import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    results: [],
    hasMore: true,
    totalResults: 0,
    page: 0,
    totalPages: 0,
    isFetching: true
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
            console.log("hasMore in reducer", action.payload.page < 100000)
            return {
                ...state,
                isFetching: false,
                results: [...state.results, ...action.payload.results],
                hasMore: action.payload.page < 100000,
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
