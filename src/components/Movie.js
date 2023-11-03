import React, {useEffect} from 'react';
import {Card, Grid, Typography} from "@mui/material";
import {COVER_PLACEHOLDER, IMAGES_PATH} from "../config";
import "../styles/movie.css"


const Movie = ({movie}) => {
    useEffect(() => {
        console.log(movie)
    })

    return (
        <>
            <div className={'film_name'}>
                {movie.title}
            </div>
            <div className={'main_container'}>
                <div className={'image'}>
                    {
                        movie.poster_path ?

                            <img
                                src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                                alt={movie.original_title}/>
                            :
                            <img
                                src={COVER_PLACEHOLDER}
                                alt={movie.original_title}/>

                    }
                </div>
                <div className={'info'}>
                    <div className={'top_header'}>
                        Duration
                    </div>
                    <div className={'normal'}>
                        {movie.runtime} minutes
                    </div>
                    <div className={'header'}>
                        Plot
                    </div>
                    <div className={'normal'}>
                        {movie.overview}
                    </div>
                    <div className={'header'}>
                        Genres
                    </div>

                    <div className={'normal'}>
                        {
                            movie.genres.map(genre => genre.name).join(", ")
                        }
                    </div>

                    <div className={'header'}>
                        Tagline
                    </div>
                    <div className={'normal'}>
                        {movie.tagline}
                    </div>
                    <div className={'header'}>
                        Rating
                    </div>
                    <div className={'normal'}>
                        {movie.vote_average.toFixed(1)}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Movie;