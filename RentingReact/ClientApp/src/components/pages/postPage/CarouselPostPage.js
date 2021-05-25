
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import AddImage from '../../Add and Edit/AddRentPhotos';
import { useGlobalUser } from '../../utils/AuthContext';



function CarouselPostPage(props) {

    const rentPhotosAPI = "https://localhost:44364/api/RentPostPhotos";

    const photosByRentIdAPI = "https://localhost:44364/api/RentPostPhotos/post/"; 

    const [photos, setPhotos] = useState([]);

    const { user } = useGlobalUser();

    useEffect(() => {

        fetch(photosByRentIdAPI+props.id)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                
            })
            .catch(err => console.log(err));

        
    }, []);

    const carouselItem = {
        width: "1065px",
        height: "450px"

    };


    




    return (
        <>

            <div className="row" style={{ width:"250px" }}>
                {user.Id === props.userId ? (

                    <AddImage ApiUrl={rentPhotosAPI} id={props.id} ></AddImage>
                ): (
                    <>
                     </>

                )}
               

            </div>
            <br></br>
            <div className="row" style={{ width: "1065px", height:"450px" }}>

                <Carousel>

                    {photos.map((photo, i) => (

                    <Carousel.Item style={carouselItem} key={ i}>
                        <img style={carouselItem}
                            className="d-block w-100"
                            src={"data:image/jpeg;base64," + photo.photo}
                           alt="Second slide"
                        />

                    </Carousel.Item>

                    ))}

                </Carousel>

            </div>
        </>
    );

}

export default CarouselPostPage;