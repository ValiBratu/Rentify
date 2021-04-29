import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


function Home() {

    let imagetest = "https://homeownershipmatters.realtor/wp-content/uploads/2020/07/Suburb-1200.png";

    let containerStyle = {
        backgroundImage: `url(${imagetest})`,
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
        <Container style={containerStyle}>

            <Button style={buttonStyle} variant="contained" color="primary" disableElevation>
                See the newest Offers
                </Button>

           

        </Container>

    );

}

export default Home;
