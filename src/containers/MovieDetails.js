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
        id = parseInt(id)
        dispatch(getMovie(id))
        //
        // return () => {
        //     dispatch(resetState())
        // }
    }, [dispatch])

    useEffect(() => {

        if (id !== movie.id?.toString()) {
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