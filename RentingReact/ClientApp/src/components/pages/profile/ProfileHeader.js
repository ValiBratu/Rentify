import React from 'react';


function ProfileHeader(props) {


        


    return (
        <>


        <div className="card-title mb-4">
            <div className="d-flex justify-content-start">
                <div className="image-container">
                    <img src="" id="imgProfile" style={{ width: '150px', height: '150px' }} className="img-thumbnail" />
                    <div className="middle">
                        <label htmlFor="btnChangePicture" style={{ marginTop: "15px" }}>
                            <input type="button" className="btn btn-secondary" id="btnChangePicture" defaultValue="Edit Profile" />
                        </label>
                    </div>
                </div>
                <div className="userData ml-3">
                        <h2 className="d-block" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{props.userData.userName}</h2>
                    <h6 className="d-block">1,500 Posts</h6>

                </div>
            </div>
        </div>
   
                           

        </>
    );

}

export default ProfileHeader;
