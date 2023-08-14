import React, {useEffect} from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import Loader from "./Loader";
import {Link} from "react-router-dom";
import {IMAGES_PATH} from "../config";
import {mapGenres} from "../helpers/mainHelper";
import {useSelector} from "react-redux";

const Movies = ({movies}) => {

    const {genres} = useSelector((store) => store.genres)


    useEffect(() => {
        console.log("render movies")
        console.log("movies", movies)
    }, [movies])

    if (!movies) return <Loader/>
    return (
        <ImageList cols={5} rowHeight={365} gap={12}>
            {
                movies.results.map(movie => (
                    // console.log(movies.results.length)
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
                                            title={movie.title}
                                            subtitle={mapGenres(movie.genre_ids, genres)}
                                            style={{width: '200px'}}>
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