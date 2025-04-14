import React, { useEffect } from 'react';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { IMAGES_PATH } from '../config';
import { mapGenres } from '../helpers/mainHelper';
import { useSelector } from 'react-redux';
import styles from '../styles/movies.module.css';

const Movies = ({ movies }) => {
    const { genres } = useSelector((store) => store.genres);

    useEffect(() => {}, [movies]);

    if (!movies) return <Loader />;
    return (
        <div className={styles.main_container}>
            <div className={styles.film_grid}>
                {movies.results.map((movie) => (
                    <ImageListItem key={movie.id} className={styles.image_list_item}>
                        <Link to={`/movie/${movie.id}`}>
                            {movie.poster_path && (
                                <div>
                                    <img
                                        src={`${IMAGES_PATH}/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    <ImageListItemBar
                                        className={styles.image_list_item_bar}
                                        title={movie.title}
                                        subtitle={mapGenres(movie.genre_ids, genres)}
                                    />
                                </div>
                            )}
                        </Link>
                    </ImageListItem>
                ))}
            </div>
        </div>
    );
};

export default Movies;
