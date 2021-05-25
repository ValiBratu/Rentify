import React, { useState, useEffect } from 'react';
import CarouselPostPage from './CarouselPostPage';
import MapComponent from './MapComponent';
import PostPageDetails from './PostPageDetails';



function PostPage(props) {

    const [showComponent, setShowComponent] = useState();

    const [details, setDetails] = useState([]);


    const postDetailsAPI = "https://localhost:44364/api/RentPost/";

    const [carouselComp, setCarouselComp] = useState();

    useEffect(() => {

        

        fetch(postDetailsAPI + props.match.params.id+"/Details")
            .then(response => response.json())
            .then(data => {
                
                setDetails(data);
                
                setShowComponent(<PostPageDetails data={data}></PostPageDetails>);
                setCarouselComp(<CarouselPostPage id={props.match.params.id} userId={data.userId} ></CarouselPostPage>);
              
                
            })
            .catch(err => console.log(err))

           
        

    }, [props]);





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
            <PostPageDetails data={details} ></PostPageDetails>
            
            );

        setShowComponent(detailsComp);

    };


    const fetchLatAndLong = () => {



        const geocodingApiKey = "AIzaSyDJofOQIFypBaj7MvcmCJkqtz5PhyuMU0c";
        const loc = details.city + " " + details.location;
        const apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + loc + "&key=" + geocodingApiKey;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
           
                showMap(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
            })
            .catch(err => console.log(err))

    }

    const showMap = (lat, long) => {

        makeButtonsSameClass();
        document.getElementById("map-tab").setAttribute("class", "nav-link active");

        const mapComp = (
            <MapComponent latitude={lat} longitude = {long}></MapComponent>
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

                                {carouselComp}
                                <br></br>
                                <br></br>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <button type="button" className="nav-link active" id="info-tab" data-toggle="tab" role="tab" aria-controls="basicInfo" aria-selected="true" onClick={showDetails} >Post Details</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link" id="map-tab" data-toggle="tab" role="tab" aria-controls="connectedServices" aria-selected="false" onClick={fetchLatAndLong} >Show on Map</button>
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
