import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo_movies.webp'
import {styled} from "@mui/system";

const Img = styled('img')({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: 100,
    height:100,
    maxWidth: '100%'

})
const Logo = () => {
    return (
            <Link to ='/'>
                <Img alt = "logo" src = {logo}></Img>
            </Link>

    );
};

export default Logo;