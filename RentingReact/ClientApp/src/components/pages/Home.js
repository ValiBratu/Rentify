import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import image from '../../images/homeImage.png';

function Home() {

    

    let containerStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "1110px 500px",
        border: "2px solid black",
        padding: "25px",
         height: "400px",
        width: "1062px"
    };

    let buttonStyle = {
        margin: "300px 400px",
        backgroundColor: "#26ce37"
    };

    return (
        <>
        <Container style={containerStyle}>

            <Button style={buttonStyle} variant="contained" color="primary" disableElevation>
                See the newest Offers
                </Button>

           

            </Container>
<br></br>
</>
    );

}

export default Home;
