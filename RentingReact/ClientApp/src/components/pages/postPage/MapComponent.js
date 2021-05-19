import React, { useState, useEffect } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

function MapComponent(props) {

    
    const mapStyle = {
        height: "500px",
        width: "1035px",

    };

   


    const pushPins = [
        {
            "location": [props.latitude,props.longitude], "option": { color: 'red' }
        }
    ];

    return (
        <>

            <div className="border border-dark">
                <div style={mapStyle}>
                <ReactBingmaps
                        bingmapKey="AgOE4RYwhEH-5pwizHGRxlfspQf1A0adxJcISTDPBOU3gin7UzD6mevQrPKabJAQ"
                        pushPins={pushPins}
                        center={[props.latitude, props.longitude]}
                        zoom={15}
                />
            </div>
            </div>
            

        </>
    );

}

export default MapComponent;