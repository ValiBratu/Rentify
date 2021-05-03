import React, { useEffect, useState } from 'react';
import UserProfileData from './UserProfileData';

function ProfileBodyHeader(props) {


    const [choosenComponent, setChoosenComponent] = useState();

    const showUserData = () => {

        const showDataBtn = document.getElementById("basicInfo-tab");

        showDataBtn.setAttribute("class", "nav-link active");

        const userDataComponent = (
            <UserProfileData userData={props.userData}></UserProfileData>
            );

        setChoosenComponent(userDataComponent);

    };

    useEffect(() => {

        setChoosenComponent(<UserProfileData userData={props.userData}></UserProfileData>);

    },[props]);


    return (
        <>


            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                        <li className="nav-item">
                            <button type="button" className="nav-link" id="basicInfo-tab" data-toggle="tab" role="tab" aria-controls="basicInfo" aria-selected="true" onClick={showUserData} >Basic Info</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="connectedServices-tab" data-toggle="tab"  role="tab" aria-controls="connectedServices" aria-selected="false">User Posts</button>
                        </li>
                    </ul>
                    {choosenComponent}


                </div>
            </div>
         

        </>
    );

}

export default ProfileBodyHeader;





