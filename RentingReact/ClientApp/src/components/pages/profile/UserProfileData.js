import React from 'react';

function UserProfileData(props) {


    


    return (
        <>

                    <div className="tab-content ml-1" id="myTabContent">
                        <div id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5">
                                    <label style={{ fontWeight: 'bold' }}>Name</label>
                                </div>
                                <div className="col-md-8 col-6">
                                    {props.userData.userName }
                                    </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5">
                                    <label style={{ fontWeight: 'bold' }}>Email Adress</label>
                                </div>
                                <div className="col-md-8 col-6">
                                    {props.userData.email }
                                    </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5">
                                    <label style={{ fontWeight: 'bold' }}>Phone Number</label>
                                </div>
                                <div className="col-md-8 col-6">
                                    {props.userData.phoneNumber}
                                </div>
                            </div>
                            <hr /> 
                        </div>
                    </div>

                         

        </>
    );

}

export default UserProfileData;
