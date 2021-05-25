import React, { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';
import AddRentPostComponent from '../../Add and Edit/AddRentPostComponent';

import { useGlobalUser } from '../../utils/AuthContext';
import RentPostCards from './RentPostCards';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function RentPostsPage() {

    const PostsAPI = "https://localhost:44364/api/RentPost/Photos";
    const citiesAPI = "https://localhost:44364/api/Cities";

    const [posts, setPosts] = useState([]);

    const [allPosts, setAllPosts] = useState([]); 

    const { user } = useGlobalUser();

    const [CitiesList, setCitiesList] = useState({
        selectOptions: []
    });

    const [cities, setCities] =useState([]);

    useEffect(() => {

        fetch(PostsAPI)
            .then(response => response.json())
            .then(data => {
               
                setPosts(data);
                setAllPosts(data);
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

        fetch(postsByCityAPI + id)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(err=>console.log(err))


    };


    const handleCityChange = (event) => {

        fetchPostsByCity(event.value);

    };


    const searchByLocation=() => {

        const searchValue = document.getElementById("searchLocation").value;

        if (searchValue === "") {
            setPosts(allPosts);
            return;
        }

        const filteredPosts = allPosts.filter(post => post.location.includes(searchValue));


        setPosts(filteredPosts);

    };

    const [value, setValue] = React.useState([0, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(allPosts);
        //const filteredPosts = allPosts.filter(post => { post.price >= newValue[0] && post.price <= newValue[1] });
        //setPosts(filteredPosts);

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
                                    <div className="row">
                                        <div style={{ width: "250px" }} >
                                            <Select id="selectCityBar" options={CitiesList.selectOptions} onChange={handleCityChange} />
                                        </div>
                                        <br></br>

                                        <div className="input-group mb-3" style={{ width: "300px", marginLeft:"15px" }}>
                                            <input type="text" className="form-control" id="searchLocation" placeholder="Search by Location" aria-label="SearchBar" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={searchByLocation}>Search</button>
                                            </div>
                                        </div>


                                        <div style={{ float: "right", marginLeft: "350px" }} >
                                        {user.Auth ? (
                                            <AddRentPostComponent cities={cities}></AddRentPostComponent>
                                        ) : (<></>)}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div style={{ width:"250px" }}>
                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <Typography id="range-slider" gutterBottom>
                                                    Price Range
                                                    </Typography>
                                                <Slider
                                                        value={value}
                                                        onChangeCommitted={handleChange}
                                                        
                                                        valueLabelDisplay="auto"
                                                        aria-labelledby="range-slider"
                                                        getAriaValueText={valuetext}
                                                        min={0}
                                                        max={ 1000}
                                                />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    

                                <br></br>
                                <div className="container">

                                        <RentPostCards posts={posts}></RentPostCards>
                                    
                                    </div>
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
