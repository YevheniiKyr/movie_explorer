import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { COVER_PLACEHOLDER_92_138, IMAGES_PATH } from '../config';
import { mapGenres } from '../helpers/mainHelper';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/movie-suggestion.module.css';

const MovieSuggest = ({ movie, setSuggestionVisible }) => {
    const genres = useSelector((store) => store.genres);

    return (
        <Link
            to={`/movie/${movie.id}`}
            onClick={() => {
                setSuggestionVisible(false);
            }}
            className={styles.link}
        >
            <div className={styles.main_wrapper}>
                <div className={styles.image_wrapper}>
                    {movie.poster_path ? (
                        <img
                            src={`${IMAGES_PATH}/w92${movie.poster_path}`}
                            alt={movie.title}
                        />
                    ) : (
                        <img src={COVER_PLACEHOLDER_92_138} alt={movie.title} />
                    )}
                </div>
                <div className={styles.film_info_wrapper}>
                    <Typography color="blue" variant="h6">
                        {movie.title}
                    </Typography>
                    <Typography className={styles.genres}>
                        {mapGenres(movie.genre_ids, genres.genres)}
                    </Typography>
                    <Typography className={styles.rating}>
                        {movie.vote_average.toFixed(1)}
                    </Typography>
                </div>
            </div>
        </Link>
    );
};

export default MovieSuggest;
