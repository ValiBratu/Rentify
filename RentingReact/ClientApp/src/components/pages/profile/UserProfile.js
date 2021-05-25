import React, { useState, useEffect  } from 'react';

import ProfileBodyHeader from './ProfileBodyHeader';
import ProfileHeader from './ProfileHeader';



function UserProfile(props) {

    
    const userPageAPI = "https://localhost:44364/api/User/";

    const [userInfo, setUserInfo] = useState([]); 

    

    useEffect(() => {

        

        fetch(userPageAPI + props.match.params.id)
            .then(response => response.json())
            .then(data => {

                setUserInfo(data);
                

            })
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <ProfileHeader userData={userInfo} userId={props.match.params.id}></ProfileHeader>

                                <ProfileBodyHeader userData={userInfo}></ProfileBodyHeader>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default UserProfile;
