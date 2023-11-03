import React, {useEffect} from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import Loader from "./Loader";
import {Link} from "react-router-dom";
import {IMAGES_PATH} from "../config";
import {mapGenres} from "../helpers/mainHelper";
import {useSelector} from "react-redux";
import "../styles/movies.css"

const Movies = ({movies}) => {

    const {genres} = useSelector((store) => store.genres)


    useEffect(() => {

    }, [movies])

    if (!movies) return <Loader/>
    return (
        <ImageList cols={5} rowHeight={360} gap={20}>
            {
                movies.results.map(movie => (

                    <ImageListItem key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            {
                                movie.poster_path && (
                                    <div>
                                        <img
                                            src={`${IMAGES_PATH}/w200${movie.poster_path}`}
                                            alt={movie.title}>
                                        </img>

                                        <ImageListItemBar
                                            style={{
                                                width: '200px',
                                                background: '#4e84cc'
                                            }}

                                            title={movie.title}
                                            subtitle={mapGenres(movie.genre_ids, genres)}
                                        >
                                        </ImageListItemBar>
                                    </div>
                                )
                            }

                        </Link>
                    </ImageListItem>
                ))
            }
        </ImageList>
    );
};

export default Movies;