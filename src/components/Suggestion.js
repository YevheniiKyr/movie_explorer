import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchMovies} from "../redux/search";
import {TextField, Grid, Typography} from "@mui/material";
import "../styles/suggestion.css"
import MovieSuggest from "./MovieSuggest";
const Suggestion = () => {

    const dispatch = useDispatch()
    const [suggestionVisible, setSuggestionVisible] = useState(false)
    const movies = useSelector((store) => store.search)
    const [searchInput, setSearchInput] = useState('')
    const inputOnChange = (e) => {
        setSearchInput(e.target.value)
        if (!e.target.value) {
            setSuggestionVisible(false)
            return
        }
        setSuggestionVisible(true)
        dispatch(searchMovies(e.target.value))
    }

    useEffect(() => {
        console.log("Suggestion rerender " + movies)
    }, [movies])

    return (

        <div style={{display: "block"}}>
            <div>
                <TextField
                    value={searchInput}
                    onChange={(e) => {
                        inputOnChange(e)
                    }}
                    // onBlur={() => {
                    //     setSuggestionVisible(false)
                    // }}
                    onFocus={() => {
                        setSuggestionVisible(true)
                    }}
                    id="search"
                    placeholder="Search"
                    fullWidth={true}
                    sx={{mb: 5}}
                    variant="standard"

                />
            </div>


            <div style={{marginTop: '0rem', display: suggestionVisible ? null : 'none'}} >
                {
                    movies
                        .results
                        .filter(movie => {
                            return movie.title.toLowerCase().includes(searchInput.toLowerCase())
                        })
                        .slice(0, 5)
                        .map((movie) => (
                            <div
                                className={"suggestion"}
                                key={movie.id}
                                style={{padding: 0}}
                            >
                                <MovieSuggest movie={movie} setSuggestionVisible={setSuggestionVisible}/>
                            </div>
                        ))
                }
            </div>
        </div>

    )
};

export default Suggestion;