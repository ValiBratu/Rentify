import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import image from '../../images/city-profile.jpg';
import { useGlobalUser } from '../utils/AuthContext';

function Home() {

    const { user } = useGlobalUser();

    //style = {{ height: "40px", marginBottom: "15px" }


    return (
        <>  <div className="container">

            <div className="jumbotron" style={{  }}>
               
                <h1 className="display-3">Welcome to Rentify!</h1>
                <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                {user.Auth ? (
                    <>
                        <br></br>
                        <Link to="/asd">
                            <button type="button" style={{ width: "200px" }} className="btn btn-success">See the newest Offers </button>
                        </Link>
               
                        </>

                ): (
                        <>
                <Link to="/login">
                     <button type="button" style={{ width: "150px", marginBottom: "15px" }} className="btn btn-success">Login </button>
                  </Link>

                <br></br>
                <Link to="/register">
                    <button type="button" style={{ width: "200px" }} className="btn btn-primary">Sign up </button>
                </Link>
                    </>
                    ) }



            </div>
            <div className="row marketing">
                <div className="col-lg-6">
                    <h4>Features:</h4>
                    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                </div>
                <div className="col-lg-6">
                    <h4>Subheading</h4>
                    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                </div>
            </div>
        </div> {/* /container */}
        <br></br>
</>
    );

}

export default Home;
