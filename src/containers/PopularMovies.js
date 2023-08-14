import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies, resetState} from "../redux/movies";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import InfiniteScroll from "react-infinite-scroll-component";

const PopularMovies = () => {

    const dispatch = useDispatch()
    const {popularMovies} = useSelector((store) => store)

    useEffect(() => {
        console.log("PM", popularMovies.results.length)
        dispatch(getPopularMovies())
        return () => {
            dispatch(resetState())
        }
    }, [dispatch])

    const loadMore = () => {
        console.log("page", popularMovies.page + 1)

        if (popularMovies.hasMore) {
            dispatch(getPopularMovies(popularMovies.page + 1))
            return
        }
        console.log("hasMore", (popularMovies.hasMore), "no more")
    }

    return popularMovies.page === 0 && popularMovies.isFetching ?
        <Loader/>
        : <InfiniteScroll
            dataLength={popularMovies.results.length}
            hasMore={true}
            loader={<Loader/>}
            next={loadMore}
            endMessage={<div> What are you doing there man ...</div>}
            style={{overflow: 'hidden'}}>
            <Movies movies={popularMovies}/>
        </InfiniteScroll>
};

export default PopularMovies;