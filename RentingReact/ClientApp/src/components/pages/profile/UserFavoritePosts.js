import React, { useEffect } from 'react';
import { useState } from 'react';
import RentPostCards from '../rentPosts/RentPostCards';

function UserFavoritePosts(props) {


    const [posts, setPosts] = useState([]);

    const userPostsAPI = "https://localhost:44364/api/UserFavorites/";

    useEffect(() => {

        fetch(userPostsAPI + props.id)
            .then(response => response.json())
            .then(data => {

                setPosts(data);
            })
            .catch(err => console.log(err))
    }, [props]);


    return (
        <>

            <div className="tab-content ml-1" id="myTabContent">
                <div id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                    <RentPostCards posts={posts}></RentPostCards>
                    <hr />

                </div>
            </div>



        </>
    );

}

export default UserFavoritePosts;