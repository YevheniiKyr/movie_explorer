import React from 'react';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import logo from '../images/logo_movies.webp'
import SearchMoviesSuggestion from "../containers/SearchMoviesSuggestion";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Img = styled('img')({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: 100,
    height:100,
    maxWidth: '100%'

})

const LayoutWrapper = styled('div')(({theme}) => ({
    margin:20,
    width: "auto",
    [theme.breakpoints.up('lg')] : {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: theme.breakpoints.values.lg
    }

}))
const Layout = ({children}) => {
    return (
        <ThemeProvider theme = {darkTheme}>
            <LayoutWrapper>
                <Link to ='/'>
                    <Img alt = "logo" src = {logo}></Img>
                </Link>
                <SearchMoviesSuggestion/>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </LayoutWrapper>
        </ThemeProvider>
    );
};

export default Layout;