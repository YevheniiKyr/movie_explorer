import React, {useEffect} from 'react';
import {TextField} from "@mui/material";
import Suggestion from "../components/Suggestion";
import {useSelector} from "react-redux";

const SearchMoviesSuggestion = () => {

    // const {search} = useSelector((store) => store)

    useEffect(() => {
        console.log("search movie suggestion rerender")
        // console.log(search)
    },[])

    return (
     <Suggestion></Suggestion>
    );
};

export default SearchMoviesSuggestion;