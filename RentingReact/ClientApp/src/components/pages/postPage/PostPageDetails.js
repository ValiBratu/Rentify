
import React, { useState, useEffect } from 'react';




function PostPageDetails(props) {

    
    const [details, setDetails] = useState([]);


    useEffect(() => {

        setDetails(props.data);



    }, [props]);


    

    return (
        <>

            <div className="tab-content ml-1" id="myTabContent">
                <div id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                            <label style={{ fontWeight: 'bold' }}>Title</label>
                        </div>
                        <div className="col-md-8 col-6">
                            {details.title}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                            <label style={{ fontWeight: 'bold' }}>Description</label>
                        </div>
                        <div className="col-md-8 col-6">
                            {details.description}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                            <label style={{ fontWeight: 'bold' }}>Location</label>
                        </div>
                        <div className="col-md-8 col-6">
                            {details.city+", "+details.location}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                            <label style={{ fontWeight: 'bold' }}>Price</label>
                        </div>
                        <div className="col-md-8 col-6">
                            {details.price+"$"}
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

        </>
    );

}

export default PostPageDetails;