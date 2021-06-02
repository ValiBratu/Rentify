import React, { useEffect, useState } from 'react';
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
                <Button variant="contained" color="primary" onClick={changeOrder} style={{marginLeft:"450px"}}>
                    {"See "+order}
                </Button>

                
                
            </div>
            <br></br>
            <div className="row" style={{ textAlign:"center" }}>


                {posts.sort((a, b) => b.id > a.id ? sortOrder : -1).map((post, i) => (
                    <div className="col col-lg-3" id={post.id} key={i} style={{ marginRight: "20px", marginBottom: "20px", marginLeft:"40px" }}>

                        <div className="card" style={{ width: '18rem', height: "400px" }}>
                            {post.rentPostPhotos.length > 0 ?  (
                                <img className="card-img-top" src={"data:image/jpeg;base64," + post.rentPostPhotos[0].photo} style={{ height: "200px" }} alt="postImg" />
                            ) : (
                                    <img className="card-img-top" src={image} style={{ height: "200px" }} alt="notfound" />
                                )}

                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">Location: {post.location}</p>
                                <p className="card-text">Price: {post.price}$</p>
                                <Link to={"/post/"+post.id} className="btn btn-primary">Show Details.</Link>
                            </div>
                        </div>

                    </div>

                ))}

            </div>


        </>
    );

}

export default RentPostCards;
