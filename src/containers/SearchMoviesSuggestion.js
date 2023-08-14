import React, {useEffect} from 'react';
import Suggestion from "../components/Suggestion";

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