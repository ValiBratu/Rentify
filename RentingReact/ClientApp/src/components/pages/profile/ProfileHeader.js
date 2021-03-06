import React, { useEffect } from 'react';
import { useState } from 'react';
import image from '../../../images/NoUserImage.jpg';
import AddUserPhoto from '../../Add and Edit/AddUserPhoto';
import { useGlobalUser } from '../../utils/AuthContext';


function ProfileHeader(props) {

    const { user } = useGlobalUser();

    const [userId, setUserId] = useState();

   
    useEffect(() => {

        setUserId(props.userId);
        
    }, [props]);





    return (
        <>


        <div className="card-title mb-4">
            <div className="d-flex justify-content-start">
                    <div className="image-container">

                        {props.userData.photo !== "" && props.userData.photo !== undefined ? (

                            <img src={"data:image/jpeg;base64," + props.userData.photo} id="imgProfile" style={{ width: '150px', height: '150px' }} className="img-thumbnail" alt="profileImg" />

                        ) : (

                                <div>
                                    
                                    
                                    <img src={image} id="imgProfile" style={{ width: '150px', height: '150px' }} className="img-thumbnail" alt="profileImg" />
                                    
                           
                                 </div>
                            )}

                        {user.Id === userId ? (
                            <div className="middle">
                                <AddUserPhoto data={ props.userData}></AddUserPhoto>
                            </div>

                        ) : (
                                <></>
                                )}

                </div>
                <div className="userData ml-3">
                        <h2 className="d-block" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{props.userData.name}</h2>
                        <h6 className="d-block">{props.userData.numberOfPosts} Posts</h6>
                        
                </div>
            </div>
        </div>
   
                           

        </>
    );

}

export default ProfileHeader;
