import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/HomePageImage.jpg';
import { useGlobalUser } from '../utils/AuthContext';

function Home() {

    const { user } = useGlobalUser();

    //style = {{ height: "40px", marginBottom: "15px" }



    return (
        <div>
            <div className="jumbotron" style={{ backgroundImage: `url(${image})`, height: "550px", borderStyle:"solid" }} >
                <div>
                <h1 className="display-3">Welcome to Rentify!</h1>
                <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                {user.Auth ? (
                    <div style={{ marginTop: "150px" }}>
                        <br></br>
                        <Link to="/posts">
                            <button type="button" style={{ width: "200px",    marginLeft: "400px" }} className="btn btn-success">See the newest Offers </button>
                        </Link>

                    </div>

                    ) : (
                        <div style={{ marginTop:"150px" }}>
                            <Link to="/login">
                                <button type="button" style={{ width: "150px", marginBottom: "15px" }} className="btn btn-success">Login </button>
                            </Link>

                            <br></br>
                            <Link to="/register">
                                <button type="button" style={{ width: "200px" }} className="btn btn-primary">Sign up </button>
                            </Link>

                            <br></br>
                            <Link to="/posts">
                                <button type="button" style={{ width: "200px", float: 'right', marginTop: "-32px" }} className="btn btn-success">See the newest Offers </button>
                            </Link>
                        </div>
                    )}

            </div>

            </div>
           

            <div className="container mt-5 ">
                <p className="py-4 h3 text-center">Our features</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="media">
                                    <div className="mr-4" style={{ height: '64px', width: '64px' }}>
                                        <i className="bi bi-file-earmark-pdf-fill card-img-top fa-4x text-primary" style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="mt-0 tex-dark">Export your favorite posts as PDF</h4>
                                        <p className=" text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="media">
                                    <div className="mr-4" style={{ height: '64px', width: '64px' }}>
                                        <i className="bi bi-envelope-fill card-img-top fa-4x text-primary" style={{ fontSize: '3rem'}} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="mt-0 tex-dark">Email notification when a new post is added. </h4>
                                        <p className=" text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="media">
                                    <div className="mr-4" style={{ height: '64px', width: '64px' }}>
                                        <i className="bi bi-telephone-fill card-img-top fa-4x text-primary" style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="mt-0 tex-dark">Easy to get in touch with renters.</h4>
                                        <p className=" text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="media">
                                    <div className="mr-4" style={{ height: '64px', width: '64px' }}>
                                        <i className="bi bi-house-fill card-img-top fa-4x text-primary" style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="mt-0 tex-dark">Easy to find what you are looking for.</h4>
                                        <p className=" text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mt-5  text-center">
                <p className="pt-5 pb-2 h4 text-monospace">About Us.</p>
                <div className="row">
                    <div className="mx-auto" style={{ width: '800px' }}>
                        <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            
         
            
           
        </div>
    );

}

export default Home;
