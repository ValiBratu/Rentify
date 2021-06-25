import React, { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';
import AddRentPostComponent from '../../Add and Edit/AddRentPostComponent';

import { useGlobalUser } from '../../utils/AuthContext';
import RentPostCards from './RentPostCards';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import postNotFound from '../../../images/PostsNotFound.png';

function RentPostsPage() {

    const PostsAPI = "https://localhost:44364/api/RentPost/Photos";
    const citiesAPI = "https://localhost:44364/api/Cities";

    const [posts, setPosts] = useState([]);

    const [allPosts, setAllPosts] = useState([]); 

    const [locationPosts, setLocationPosts] = useState([]);

    const { user } = useGlobalUser();

    const [CitiesList, setCitiesList] = useState({
        selectOptions: []
    });

    const [cities, setCities] =useState([]);

    const [postsByPrice, setPostsByPrice] = useState([]);

    useEffect(() => {

        fetch(PostsAPI)
            .then(response => response.json())
            .then(data => {
               
                setPosts(data);
                setAllPosts(data);
                setLocationPosts(data);
                setPostsByPrice(data);
            })
            .catch(err => console.log(err))

        fetch(citiesAPI)
            .then(response => response.json())
            .then(data => {
                const allCitiesConst = [{ "value": 0, "label": "All Cities" }];
                const options = data.map(d => ({
                    "value": d.id,
                    "label": d.name
                }))
                setCities(options);
                setCitiesList({ selectOptions: allCitiesConst.concat(options) });
            })
            .catch(err => console.log(err))
    },[]);



    


    const fetchPostsByCity = (id) => {

        const postsByCityAPI = "https://localhost:44364/api/RentPost/city/";

        const searchValue = document.getElementById("searchLocation");

        const roomSearch = document.getElementById("roomSearch");
        searchValue.value = "";
        roomSearch.value = "";

        fetch(postsByCityAPI + id)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setAllPosts(data);
                setLocationPosts(data);
                setPostsByPrice(data);
                setValue([0, 1000]);
            })
            .catch(err=>console.log(err))


    };


    const handleCityChange = (event) => {

        fetchPostsByCity(event.value);

    };

    

    const searchByLocation=() => {

        const searchValue = document.getElementById("searchLocation").value;

        const roomSearch = document.getElementById("roomSearch");
        roomSearch.value = "";

        if (searchValue === "") {
            setPosts(allPosts);
            setLocationPosts(allPosts);
            setValue([0, 1000]);
            return;
        }

        const filteredPosts = allPosts.filter(post => post.location.toLowerCase().includes(searchValue.toLowerCase()));

        setLocationPosts(filteredPosts);
        setPosts(filteredPosts);
        setPostsByPrice(filteredPosts);
        setValue([0, 1000]);
    };



    const filterByRooms = () => {
        const numberOfRooms = document.getElementById("roomSearch").value;

        if (numberOfRooms === 0 || numberOfRooms === "") {
            setPosts(locationPosts);
            
            setValue([0, 1000]);
            return;
        }
        
        const postsByRoomsNumber = locationPosts.filter(post => post.rooms == numberOfRooms);
        setPosts(postsByRoomsNumber);
        setPostsByPrice(postsByRoomsNumber);
    }




    const [value, setValue] = React.useState([0, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        const filteredPosts = postsByPrice.filter(post => post.price >= newValue[0] && post.price <= newValue[1]);
       
        setPosts(filteredPosts);

    };

  

    function valuetext(value) {
 
        return value;

    }




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                             

                                <section className="booking-block block-intro">

                                    <div className="row" style={{ marginBottom: "15px", marginLeft:"50px" }}>
                                     
                                        {user.Auth ? (
                                            <AddRentPostComponent cities={cities}></AddRentPostComponent>
                                        ) : (<></>)
                                        }
                                    </div>
                                    <hr />
                                    <div className="row" style={{ marginLeft: "50px" }}>
                                        <div style={{ width: "250px" }} >
                                            <Select id="selectCityBar" options={CitiesList.selectOptions} onChange={handleCityChange} />
                                        </div>
                                        <br></br>

                                        <div className="input-group mb-3" style={{ width: "300px", marginLeft: "15px" }}>
                                            <input type="text" className="form-control" id="searchLocation" placeholder="Search by Location" aria-label="SearchBar" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={searchByLocation}>Search</button>
                                            </div>
                                        </div>

                                        <div className="input-group mb-3" style={{ width: "300px", marginLeft: "15px" }}>
                                            <input type="number" min="0"  className="form-control" id="roomSearch" placeholder="Number of Rooms" aria-label="SearchRooms" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={filterByRooms} >Search</button>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <div style={{ width: "250px", marginLeft:"50px" }}>
                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <Typography id="range-slider" gutterBottom>
                                                    Price Range
                                     </Typography>
                                                <Slider
                                                    value={value}
                                                    onChange={handleChange}

                                                    valueLabelDisplay="auto"
                                                    aria-labelledby="range-slider"
                                                    getAriaValueText={valuetext}
                                                    min={0}
                                                    max={1000}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    

                                    <br></br>
                                    {posts.length != 0 ? (
                                        <div className="container">

                                            <RentPostCards posts={posts}></RentPostCards>

                                        </div>
                                    ): (
                                    
                                    <div className="container">

                                         <img src={postNotFound} alt="notFoundPosts"></img>

                                    </div>
                                    )}

                                </section>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default RentPostsPage;
