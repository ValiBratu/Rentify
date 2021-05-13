﻿import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/noPostPhoto.png';
import Button from '@material-ui/core/Button';
function RentPostCards(props) {

    const [posts, setPosts] = useState([]);

    const [sortOrder, setSortOrder] = useState(1);

    const [order, setOrder] = useState("");

    useEffect(() => {

        setPosts(props.posts);

        setOrder("Oldest");
        setSortOrder(1);

    },[props]);




    const changeOrder = () => {
        if (sortOrder === -1) {
            setSortOrder(1);
            setOrder("Oldest");
            return;
        }
        setSortOrder(-1);
        setOrder("Newest");

    }

    return (
        <> 

            <div className="row">
                <Button variant="contained" color="primary"  onClick={changeOrder}>
                    {"See "+order}
                </Button>

                
                
            </div>
            <br></br>
            <div className="row">


                {posts.sort((a, b) => b.id > a.id ? sortOrder : -1).map((post, i) => (
                    <div className="col col-lg-3" id={post.id} key={i} style={{ marginRight: "40px", marginBottom:"20px" }}>

                        <div className="card" style={{ width: '18rem', height: "400px" }}>
                            {post.Photo ? (
                                <img className="card-img-top" src={post.Photo} style={{ height: "200px" }} alt="Card image" />
                            ) : (
                                    <img className="card-img-top" src={image} style={{ height: "200px" }} alt="Card image cap" />
                                )}

                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">Location: {post.location}</p>
                                <p className="card-text">Price: {post.price}$</p>
                                <Link to="/post" className="btn btn-primary">Show Details.</Link>
                            </div>
                        </div>

                    </div>

                ))}

            </div>


        </>
    );

}

export default RentPostCards;
