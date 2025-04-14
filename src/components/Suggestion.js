import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/search';
import { TextField } from '@mui/material';
import styles from '../styles/suggestion.module.css';
import MovieSuggest from './MovieSuggest';
import Loader from './Loader';

const Suggestion = () => {
    const dispatch = useDispatch();
    const [suggestionVisible, setSuggestionVisible] = useState(false);
    const movies = useSelector((store) => store.search);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);

    const inputOnChange = async (e) => {
        setLoading(true);
        setSearchInput(e.target.value);
        if (!e.target.value) {
            setSuggestionVisible(false);
            return;
        }
        setSuggestionVisible(true);
        await dispatch(searchMovies(e.target.value))
        setLoading(false);
    };

    useEffect(() => {
    }, [movies, suggestionVisible]);

    return (
        <div className={styles.main_wrapper}>
            <div>
                <TextField
                    value={searchInput}
                    onChange={(e) => {
                        inputOnChange(e);
                    }}
                    id="search"
                    placeholder="Search"
                    fullWidth={true}
                    sx={{ mb: 5 }}
                    variant="standard"
                />
            </div>
            {
                suggestionVisible && (
                    loading ? <Loader /> :
                        <div className={styles.movie_list}>
                            {movies.results
                                .filter((movie) => {
                                    return movie.title
                                        .toLowerCase()
                                        .includes(searchInput.toLowerCase());
                                })
                                .slice(0, 5)
                                .map((movie) => (
                                    <div
                                        className={styles.suggestion}
                                        key={movie.id}
                                        style={{ padding: 0 }}
                                    >
                                        <MovieSuggest
                                            movie={movie}
                                            setSuggestionVisible={setSuggestionVisible}
                                        />
                                    </div>
                                ))}
                        </div>
                )
            }
        </div>
    );
};

export default Suggestion;
