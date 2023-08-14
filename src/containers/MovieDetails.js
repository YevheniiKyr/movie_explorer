import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMovie} from "../redux/movie";
import Loader from "../components/Loader";
import Movie from "../components/Movie";

const MovieDetails = () => {

    const dispatch = useDispatch()
    let {id} = useParams()
    const {movie} = useSelector((store) => store)

    useEffect(() => {
        console.log("RENDER MOVIE DETAILS")
        id = parseInt(id)
        dispatch(getMovie(id))
        //
        // return () => {
        //     dispatch(resetState())
        // }
    }, [dispatch])

    useEffect(() => {
        console.log("RENDER MOVIE DETAILS id changed")

        if (id !== movie.id?.toString()) {
            console.log("new id")
            dispatch(getMovie(id))
        }
        // return () => {
        //     dispatch(resetState())
        // }
    }, [id, movie.id])


    if (movie.isFetching || !movie.movie)
        return <Loader/>

    return (
        <div>
            <Movie movie={movie.movie}/>
        </div>
    );
};

export default MovieDetails;