import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import {COVER_PLACEHOLDER, IMAGES_PATH} from "../config";
import {mapGenres} from "../helpers/mainHelper";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";

const MovieSuggest = ({movie, setSuggestionVisible}) => {
    useEffect(() => {
        console.log(movie)
    })

    const genres = useSelector((store) => store.genres)


    return (
        <Link
            to={`/movie/${movie.id}`}
            onClick={() => {
                setSuggestionVisible(false)
            }}
            style={{textDecoration: 'none'}}>

            <div style={{display: "flex"}}>
                <div>
                    {movie.poster_path ?
                        <img src={`${IMAGES_PATH}/w92${movie.poster_path}`}
                             alt={movie.title}/>
                        :
                        <img src={COVER_PLACEHOLDER} alt={movie.title}/>
                    }
                </div>
                <div style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                    <Typography color='blue' variant={"h6"}>
                        {movie.title}
                    </Typography>
                    <Typography color={"#0375e0"} style={{marginTop: '0.5rem'}}>
                        {mapGenres(movie.genre_ids, genres.genres)}
                    </Typography>
                    <Typography color={"#0375e0"} style={{marginTop: '0.5rem'}}>

                    </Typography>
                    <Typography color={"#139d0e"} style={{marginTop: '0.5rem'}}>
                        {movie.vote_average.toFixed(1)}
                    </Typography>

                </div>
            </div>
        </Link>
    );
};
export default MovieSuggest;

