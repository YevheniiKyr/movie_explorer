import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies, resetState} from "../redux/movies";
import Loader from "../components/Loader";
import Movies from "../components/Movies";

const PopularMovies = () => {

    const dispatch = useDispatch()
    const {popularMovies} = useSelector((store) => store)

    useEffect(() => {
        console.log("PM", popularMovies.results.length)
        dispatch(getPopularMovies())
        return () => {
            dispatch(resetState())
        }
    }, [dispatch])

    return popularMovies.page === 0 && popularMovies.isFetching ?
        <Loader/>
        :
        <Movies movies={popularMovies}/>
};

export default PopularMovies;