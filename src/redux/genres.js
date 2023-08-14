import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genres: [],
    isFetching: false
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenres: (state) => {
            return {
                ...state,
                isFetching: true
            }
        },
        fetchedGenres: (state, action) => {
            return {
                ...state,
                isFetching: false,
                genres: action.payload.genres,

            }
        },
        resetState: () => {return initialState}

    }
})

export const {getGenres, fetchedGenres, resetState} = genresSlice.actions

export default genresSlice.reducer
