import React, { useEffect } from 'react';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { COVER_PLACEHOLDER_200_300, IMAGES_PATH } from '../config';
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
                        <Link to={`/movie/${movie.id}`} className={styles.link}>
                                <div>
                                    <img
                                        className={styles.image}
                                        src={movie.poster_path ? `${IMAGES_PATH}/w300${movie.poster_path}` : COVER_PLACEHOLDER_200_300}
                                        alt={movie.title}
                                    />
                                    <ImageListItemBar
                                        sx={{
                                            background: '#0d4491',
                                            textAlign: 'center',
                                            color: 'white',
                                        }}
                                        className={styles.image_list_item_bar}
                                        title={movie.title}
                                        subtitle={mapGenres(movie.genre_ids, genres)}
                                        position="below"
                                    />
                                </div>
                        </Link>
                    </ImageListItem>
                ))}
            </div>
        </div>
    );
};

export default Movies;
