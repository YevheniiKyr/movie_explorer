import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PopularMovies from "./containers/PopularMovies";
import MovieDetails from "./containers/MovieDetails";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getGenres} from "./redux/genres";
import SearchMoviesSuggestion from "./containers/SearchMoviesSuggestion";
import Logo from "./components/Logo";

function App() {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getGenres())
    }, [dispatch])

    return (
        <BrowserRouter>
            <Logo/>
            <SearchMoviesSuggestion/>
            <Routes>
                    <Route path='/' element={<PopularMovies/>}></Route>
                    <Route path='/movie/:id' element={<MovieDetails/>}></Route>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
