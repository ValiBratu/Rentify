import React, { useState, useEffect } from 'react';
import { useGlobalUser } from '../../utils/AuthContext';
import CarouselPostPage from './CarouselPostPage';
import MapComponent from './MapComponent';
import PostPageDetails from './PostPageDetails';



function PostPage(props) {

    const [showComponent, setShowComponent] = useState();

    const [details, setDetails] = useState([]);


    const { user } = useGlobalUser();

    const postDetailsAPI = "https://localhost:44364/api/RentPost/";

    const [carouselComp, setCarouselComp] = useState();

    const PostFavoritesAPI = "https://localhost:44364/api/UserFavorites/rentPostFavorites/";

    const [postFavorites, setPostFavorites] = useState([]);

    useEffect(() => {

        

        fetch(postDetailsAPI + props.match.params.id+"/Details")
            .then(response => response.json())
            .then(data => {
                
                setDetails(data);
             
                setShowComponent(<PostPageDetails data={data}></PostPageDetails>);
                setCarouselComp(<CarouselPostPage id={props.match.params.id} userId={data.userId} ></CarouselPostPage>);
              
                
            })
            .catch(err => console.log(err))

        fetch(PostFavoritesAPI + props.match.params.id)
            .then(response => response.json())
            .then(data => {

                setPostFavorites(data);
               
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


    //<button className="nav-link" id="addFavBtn" data-toggle="tab" role="tab" aria-controls="favorites" aria-selected="false" style={{ marginLeft: "630px" }} onClick={AddPostToFavorite} >Add To Favorites</button>

    const createButton = (type) => {
        const LiItem = document.getElementById("favoriteButtons");

        const Btn = document.createElement("button");
        Btn.setAttribute("class", "nav-link");
        Btn.setAttribute("data-toggle", "tab");
        Btn.setAttribute("role", "tab");
        Btn.setAttribute("aria-controls", "favorites");
        Btn.setAttribute("aria-selected", "true");

        if (type === "remove") {
            Btn.setAttribute("id", "removeFavBtn");
            Btn.innerHTML = "Remove From Favorites";
            Btn.style.marginLeft = "590px";
            Btn.addEventListener("click", RemoveFromFavorites)

            LiItem.removeChild(document.getElementById("addFavBtn"));
            LiItem.appendChild(Btn);

        }
        else if(type==="add") {
            Btn.setAttribute("id", "addFavBtn");
            Btn.innerHTML = "Add To Favorites";
            Btn.style.marginLeft = "630px";
            Btn.addEventListener("click", AddPostToFavorite);
            LiItem.removeChild(document.getElementById("removeFavBtn"));
            LiItem.appendChild(Btn);
        }



    }


    const AddPostToFavorite = () => {

        const UserFavoritesAPI = "https://localhost:44364/api/UserFavorites";

        let sentData = {
            UserId: user.Id,
            RentPostId: details.id
        }
        fetch(UserFavoritesAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sentData)
            //body: sentData
        })
            .then(response => {
             
                createButton("remove");
            })

            .catch(error => {
                console.log(error)
            })


      
    }

    const RemoveFromFavorites = () => {

        const DeleteFavoriteAPI = "https://localhost:44364/api/UserFavorites/";
            
        fetch(DeleteFavoriteAPI + user.Id + "/post/" + details.id, {
            method:"DELETE"
        })
            .then(response => response.json())
            .then(data => {

               
                createButton("add")
            })
            .catch(err => console.log(err))

    }

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

                                            {user.Auth? (
                                                <li className="nav-item" id ="favoriteButtons">
                                                    { postFavorites.some(elem => elem.userId === user.Id) ? (
                                                        <button className="nav-link" id="removeFavBtn" data-toggle="tab" role="tab" aria-controls="favorites" aria-selected="false" style={{ marginLeft: "590px" }} onClick={RemoveFromFavorites}>Remove From Favorites</button>
                                                    ) : (
                                                            <button className="nav-link" id="addFavBtn" data-toggle="tab" role="tab" aria-controls="favorites" aria-selected="false" style={{ marginLeft: "630px" }} onClick={AddPostToFavorite} >Add To Favorites</button>
                                                        )}
                                                   
                                                </li>
                                            ) : (<>

                                                </>)}

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
