import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchMovies} from "../redux/search";
import {TextField, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {COVER_PLACEHOLDER, IMAGES_PATH} from "../config";
import "../styles/suggestion.css"
import {mapGenres} from "../helpers/mainHelper";
const Suggestion = () => {

    const dispatch = useDispatch()
    const [suggestionVisible, setSuggestionVisible] = useState(false)
    const movies = useSelector((store) => store.search)
    const genres = useSelector((store) => store.genres)
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
                                <Link to={`/movie/${movie.id}`} onClick={()=>{
                                    setSuggestionVisible(false)
                                } } >
                                    <Grid container={true} spacing={0}>
                                        <Grid item={true}>
                                            {movie.poster_path ?
                                                <img src={`${IMAGES_PATH}/w92${movie.poster_path}`}
                                                     alt={movie.title}/>
                                                :
                                                <img src={COVER_PLACEHOLDER} alt={movie.title}/>
                                            }
                                        </Grid>
                                        <Grid item={true}>
                                            <Typography>
                                                {movie.title}
                                            </Typography>
                                            <div>
                                                {mapGenres(movie.genre_ids, genres.genres)}
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Link>
                            </div>
                        ))
                }
            </div>
        </div>

    )
};

export default Suggestion;