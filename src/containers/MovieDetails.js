import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovie, resetState } from '../redux/movie';
import Loader from '../components/Loader';
import Movie from '../components/Movie';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const parsedId = parseInt(id);
    const { movie } = useSelector((store) => store);

    // useEffect(() => {
    //     dispatch(getMovie(parsedId));
    //     return () => {
    //         dispatch(resetState())
    //     }
    // }, [dispatch, parsedId]);

    useEffect(() => {
        if (id !== movie.id?.toString()) {
            dispatch(getMovie(id));
        }
        return () => {
            dispatch(resetState())
        }
    }, [dispatch, id, movie.id]);

    if (movie.isFetching || !movie.movie) return <Loader />;

    return (
        <div>
            <Movie movie={movie.movie} />
        </div>
    );
};

export default MovieDetails;
