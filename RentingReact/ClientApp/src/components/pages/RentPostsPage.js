import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useEffect } from 'react';
import AddRentPostComponent from '../Add l Edit/AddRentPostComponent';
import image from '../../images/noPostPhoto.png';
import { useGlobalUser } from '../utils/AuthContext';

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


    



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">


                                <section className="booking-block block-intro">
                                    <div style={{ width: "250px" }} >
                                        <Select id="selectCityBar"  options={CitiesList.selectOptions} />
                                    </div>
                                    <br></br>
                                    {user.Auth ? (
                                        <AddRentPostComponent cities={cities} ></AddRentPostComponent>
                                        ):(<></>)}
                                
                                <br></br>
                                <br></br>
                                <div className="container">
                    

                                    <div className="row">

                                        {posts.map((post, i) => (
                                            <div className="col col-lg-3" id={post.id} key={i} style={{ marginRight: "40px" }}>

                                                <div className="card" style={{ width: '18rem', height: "400px" }}>
                                                    {post.Photo ? (
                                                        <img className="card-img-top" src={ post.Photo} style={{ height: "200px" }} alt="Card image cap" />
                                                    ) : (
                                                            <img className="card-img-top" src={image} style={{ height: "200px" }} alt="Card image cap" />
                                                     )}
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title">{post.title}</h5>
                                                        <p className="card-text">Location: { post.location}</p>
                                                        <p className="card-text">Price: {post.price }$</p>
                                                        <Link to="/" className="btn btn-primary">Show Details.</Link>
                                                    </div>
                                                </div>

                                            </div>

                                      ))}

                                        </div>
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
