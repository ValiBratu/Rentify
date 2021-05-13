import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselPostPage from './CarouselPostPage';



function PostPage(props) {


    

    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <CarouselPostPage></CarouselPostPage>
                                <br></br>
                                <br></br>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="connectedServices-tab" data-toggle="tab" href="#connectedServices" role="tab" aria-controls="connectedServices" aria-selected="false">Connected Services</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content ml-1" id="myTabContent">
                                            <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                                <div className="row">
                                                    <div className="col-sm-3 col-md-2 col-5">
                                                        <label style={{ fontWeight: 'bold' }}>Full Name</label>
                                                    </div>
                                                    <div className="col-md-8 col-6">
                                                        Jamshaid Kamran
                          </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3 col-md-2 col-5">
                                                        <label style={{ fontWeight: 'bold' }}>Birth Date</label>
                                                    </div>
                                                    <div className="col-md-8 col-6">
                                                        March 22, 1994.
                          </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3 col-md-2 col-5">
                                                        <label style={{ fontWeight: 'bold' }}>Something</label>
                                                    </div>
                                                    <div className="col-md-8 col-6">
                                                        Something
                          </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3 col-md-2 col-5">
                                                        <label style={{ fontWeight: 'bold' }}>Something</label>
                                                    </div>
                                                    <div className="col-md-8 col-6">
                                                        Something
                          </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3 col-md-2 col-5">
                                                        <label style={{ fontWeight: 'bold' }}>Something</label>
                                                    </div>
                                                    <div className="col-md-8 col-6">
                                                        Something
                          </div>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="tab-pane fade" id="connectedServices" role="tabpanel" aria-labelledby="ConnectedServices-tab">
                                                Facebook, Google, Twitter Account that are connected to this account
                      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default PostPage;
