import React from 'react';
import { COVER_PLACEHOLDER, IMAGES_PATH } from '../config';
import styles from '../styles/movie.module.css';

const Movie = ({ movie }) => {

    return (
        <div className={styles.main_container}>
            <div className={styles.film_name}>{movie.title}</div>
            <div className={styles.main_content}>
                <div className={styles.image_wrapper}>
                    {movie.poster_path ? (
                        <img
                            className={styles.image}
                            src={`${IMAGES_PATH}/w200${movie.poster_path}`}
                            alt={movie.original_title}
                        />
                    ) : (
                        <img
                            src={COVER_PLACEHOLDER}
                            alt={movie.original_title}
                        />
                    )}
                </div>
                <div className={styles.info}>
                    <div className={styles.header}>Duration</div>
                    <div className={styles.normal_text}>
                        {movie.runtime} minutes
                    </div>
                    <div className={styles.header}>Plot</div>
                    <div className={styles.normal_text}>{movie.overview}</div>
                    <div className={styles.header}>Genres</div>

                    <div className={styles.normal_text}>
                        {movie.genres.map((genre) => genre.name).join(', ')}
                    </div>

                    <div className={styles.header}>Tagline</div>
                    <div className={styles.normal_text}>{movie.tagline}</div>
                    <div className={styles.header}>Rating</div>
                    <div className={styles.normal_text}>
                        {movie.vote_average.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
