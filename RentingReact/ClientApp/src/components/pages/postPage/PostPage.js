import React, { useState, useEffect } from 'react';
import CarouselPostPage from './CarouselPostPage';
import MapComponent from './MapComponent';
import PostPageDetails from './PostPageDetails';



function PostPage(props) {

    const [showComponent, setShowComponent] = useState();



    useEffect(() => {

        setShowComponent(<PostPageDetails id={props.match.params.id}></PostPageDetails>);

    }, []);

    const makeButtonsSameClass = () => {

        const showDataBtn = document.getElementById("info-tab");

        const showPostsBtn = document.getElementById("map-tab");

        showDataBtn.setAttribute("class", "nav-link");
        showPostsBtn.setAttribute("class", "nav-link");
    };

    const showDetails = () => {

        makeButtonsSameClass();
        document.getElementById("info-tab").setAttribute("class", "nav-link active");

        const detailsComp = (
            <PostPageDetails id={props.match.params.id}></PostPageDetails>
            );

        setShowComponent(detailsComp);

    };


    const showMap = () => {

        makeButtonsSameClass();
        document.getElementById("map-tab").setAttribute("class", "nav-link active");

        const mapComp = (
            <MapComponent></MapComponent>
        );

        setShowComponent(mapComp);

    };




    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <CarouselPostPage id={props.match.params.id}></CarouselPostPage>
                                <br></br>
                                <br></br>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <button type="button" className="nav-link active" id="info-tab" data-toggle="tab" role="tab" aria-controls="basicInfo" aria-selected="true" onClick={showDetails} >Post Details</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link" id="map-tab" data-toggle="tab" role="tab" aria-controls="connectedServices" aria-selected="false" onClick={showMap} >Show on Map</button>
                                            </li>
                                        </ul>
                                        {showComponent}
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
