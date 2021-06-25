import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { Modal, Button } from 'react-bootstrap';
import { useGlobalUser } from '../utils/AuthContext';
import swal2 from "sweetalert2";
import Loading from '../utils/Loading';
import { useHistory } from 'react-router-dom';


function AddRentPostComponent(props) {

    const [show, setShow] = useState(false);
    const { user } = useGlobalUser();
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading, setLoading] = useState();

    const [cities, setCities] = useState([]);

    useEffect(() => {

        setCities(props.cities);

    },[props]);


    

    const getInputs = () => {

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const price = document.getElementById("price").value;
        const rooms = document.getElementById("rooms").value;


        if (!verifyValues(title, description, location, price,rooms)) {
            return;
        }

        const load = (
            <>
                <br></br>
                <Loading></Loading>
                <br></br>
            </>
        );
        setLoading(load);

        callAPI(title, description, location, price,rooms);

    };

    const callAPI = (title,desc,loc,price,rooms) => {

        const rentPostAPI = "https://localhost:44364/api/RentPost";

        let sentData = {
            Title: title,
            Description: desc,
            Location: loc,
            Price: price,
            UserId: user.Id,
            CityId: cityId,
            Rooms:rooms

        };

        console.log(sentData);

        fetch(rentPostAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => {
                console.log(response);
                validateStatus(response.status);
       
            })
            

            .catch(err => console.log(err))

    }

    const verifyValues = (title,desc,loc,price,rooms) => {
        const warning = document.getElementById("warning");
        if (title === "" || desc === "" || loc === "" || price === "" || cityId === 0 || rooms==="") {
            warning.textContent = "All fields must be completed!";
            return false;
        }
        warning.textContent = "";
        return true;
    }

    const sendNotificationToUsers=() => {

        const notificationAPI = "https://localhost:44364/api/Emails/";

        fetch(notificationAPI)
            .then(response => console.log(response))

            .catch(err=>console.log(err))

    }

    const validateStatus = (status) => {

        if (status === 201) {

            //sendNotificationToUsers()

            swal2
                .fire({
                    title: "Great!",
                    icon: "success",
                }).then(function () {
                    setLoading(null);
                    handleClose();
                    history.push("/");
                    history.push("/posts");
                });
            
            return;
        }
       
        setLoading(null);
    }

    let cityId = 0;

    const changeCity = (event) => {

        cityId = event.value;
       

    };

    return (
        <>
            <Button variant="btn btn-success" onClick={handleShow}>
                Add a new post
            </Button>
           
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rent Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <article className="card-body">
                        <form>

                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Title" name="title" id="title" />

                            </div>


                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" placeholder="Description" name="description" id="description" />
                            </div>

                            <div className="form-group">
                                <label>Number of Rooms</label>
                                <input className="form-control" type="number" name="rooms" id="rooms" placeholder="Rooms" />

                            </div>


                            <div className="form-group">
                                <label>City</label>
                                <Select id="selectCityBar" options={cities} onChange={changeCity}/>
                            </div>


                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" id="location" name="location" placeholder="Location"  />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input className="form-control" type="number" name="price" id="price" placeholder="Price $" />
                                
                            </div>



                            <p id="warning" style={{ color: 'red' }}></p>

                            <div >
                                {loading}

                            </div>

                        
                        </form>
                    </article> 
                     
                    
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={getInputs}>
                        Save 
                 </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddRentPostComponent;