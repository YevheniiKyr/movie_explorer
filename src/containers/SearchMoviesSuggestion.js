import React from 'react';
import Suggestion from '../components/Suggestion';
import styles from "../styles/suggestion.module.css"

const SearchMoviesSuggestion = () => {
    return (
        <div className={styles.search_movies_container}>
            <Suggestion />
        </div>
    );
};

export default SearchMoviesSuggestion;
