import React, { useEffect, useState } from 'react';
import UserPosts from './UserPosts';
import UserProfileData from './UserProfileData';

function ProfileBodyHeader(props) {


    const [choosenComponent, setChoosenComponent] = useState();



    useEffect(() => {

        setChoosenComponent(<UserProfileData userData={props.userData}></UserProfileData>);
       
    },[props]);


    const makeButtonsSameClass = () => {

        const showDataBtn = document.getElementById("basicInfo-tab");

        const showPostsBtn = document.getElementById("posts-tab");

        showDataBtn.setAttribute("class", "nav-link");
        showPostsBtn.setAttribute("class", "nav-link");
    };


    const showUserData = () => {
        makeButtonsSameClass();
        const showDataBtn = document.getElementById("basicInfo-tab");

        showDataBtn.setAttribute("class", "nav-link active");

        const userDataComponent = (
            <UserProfileData userData={props.userData}></UserProfileData>
        );

        setChoosenComponent(userDataComponent);

    };

    const showUserPosts = () => {
        makeButtonsSameClass();
        const showPostsBtn = document.getElementById("posts-tab");

        showPostsBtn.setAttribute("class", "nav-link active");

        const userPostsComponent = (
            <UserPosts id={props.userData.id} ></UserPosts>
        );
        setChoosenComponent(userPostsComponent);

    };

    return (
        <>


            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                        <li className="nav-item">
                            <button type="button" className="nav-link active" id="basicInfo-tab" data-toggle="tab" role="tab" aria-controls="basicInfo" aria-selected="true" onClick={showUserData} >Basic Info</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="posts-tab" data-toggle="tab" role="tab" aria-controls="connectedServices" aria-selected="false" onClick={showUserPosts}>User Posts</button>
                        </li>
                    </ul>
                    {choosenComponent}


                </div>
            </div>
         

        </>
    );

}

export default ProfileBodyHeader;





