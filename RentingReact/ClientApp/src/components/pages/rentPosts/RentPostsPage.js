import React, { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';
import AddRentPostComponent from '../../Add and Edit/AddRentPostComponent';

import { useGlobalUser } from '../../utils/AuthContext';
import RentPostCards from './RentPostCards';



function RentPostsPage() {

    const PostsAPI = "https://localhost:44364/api/RentPost";
    const citiesAPI = "https://localhost:44364/api/Cities";

    const [posts, setPosts] = useState([]);


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
                                        <div style={{ float: "right", marginLeft: "650px" }} >
                                        {user.Auth ? (
                                            <AddRentPostComponent cities={cities}></AddRentPostComponent>
                                        ) : (<></>)}
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
