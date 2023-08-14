import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import {COVER_PLACEHOLDER, IMAGES_PATH} from "../config";
import {styled} from "@mui/system";



const GridStyled = styled('Grid')(({theme}) => ({
    marginBottom: theme.spacing(3)
}))


const Movie = ({movie}) => {

    useEffect(() => {
        console.log("RENDER MOVIE", movie)
    }, [])

    return (
        <Grid container={true} spacing={2}>
            <Grid item={true} md={3}>
                {
                    movie.poster_path ?

                        <img
                            src={`${IMAGES_PATH}/w200${movie.poster_path}`}
                            alt={movie.original_title}/>
                        :
                        <img
                            src={COVER_PLACEHOLDER}
                            alt={movie.original_title}/>

                }
            </Grid>
            <Grid item={true} md={9}>

                <Typography style={{fontWeight: 600, fontSize: '2rem'}}>
                    {movie.title}
                </Typography>
                <Typography style={{fontWeight: 400, fontSize: '1.5rem', marginTop: '0.4rem'}}>
                    Plot
                </Typography>
                <Typography style={{fontWeight: 400, fontSize: '1rem'}}>
                    {
                        movie.overview
                    }
                </Typography>
                <Typography style={{fontWeight: 400, fontSize: '1.5rem', marginTop: '0.4rem'}}>
                    Genres
                </Typography>
                <Typography style={{fontSize: '1rem', marginTop: '0.4rem'}}>

                    {
                        movie.genres.map(genre => genre.name).join(", ")
                    }

                </Typography>

            </Grid>


        </Grid>
    );
};

export default Movie;