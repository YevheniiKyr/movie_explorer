import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchMovies} from "../redux/search";
import {TextField, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {COVER_PLACEHOLDER, IMAGES_PATH} from "../config";
import "../styles/suggestion.css"
import {mapGenres} from "../helpers/mainHelper";
import {isVisible} from "@testing-library/user-event/dist/utils";

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
                    onBlur={(e) => {
                        setSuggestionVisible(false)
                    }}
                    onFocus = {(e) => {
                        setSuggestionVisible(true)
                    }}
                    id="search"
                    placeholder="Search"
                    fullWidth={true}
                    sx={{mb: 5}}
                    variant="standard"

                />
            </div>


            <div style={{marginTop: '0rem', display: suggestionVisible ? null : 'none'}}>
                {
                    movies
                        .results
                        .filter(item => {
                            return item.title.toLowerCase().includes(searchInput.toLowerCase())
                        })
                        .slice(0, 5)
                        .map((item) => (
                            <div
                                className={"suggestion"}
                                key={item.id}
                                style={{padding: 0}}
                            >
                                <Link to={`/movie/${item.id}`}>
                                    <Grid container={true} spacing={0}>
                                        <Grid item={true}>
                                            {item.poster_path ?
                                                <img src={`${IMAGES_PATH}/w92${item.poster_path}`}
                                                     alt={item.title}/>
                                                :
                                                <img src={COVER_PLACEHOLDER} alt={item.title}/>
                                            }
                                        </Grid>
                                        <Grid item={true}>
                                            <Typography>
                                                {item.title}
                                            </Typography>
                                            <div>
                                                {mapGenres(item.genre_ids, genres.genres)}
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