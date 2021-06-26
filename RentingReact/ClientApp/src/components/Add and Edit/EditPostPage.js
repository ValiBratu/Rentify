import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { Modal, Button } from 'react-bootstrap';
import { useGlobalUser } from '../utils/AuthContext';
import swal2 from "sweetalert2";
import Loading from '../utils/Loading';
import { useHistory } from 'react-router-dom';


function EditPostPage(props) {

    const [show, setShow] = useState(false);
    const { user } = useGlobalUser();
    const history = useHistory();


    const [city, setCity] = useState(); 

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true);  console.log(city) };

    const citiesAPI = "https://localhost:44364/api/Cities";

    const [loading, setLoading] = useState();

    

    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCity(props.data.cityId);
        fetch(citiesAPI)
            .then(response => response.json())
            .then(data => {
                const options = data.map(d => ({
                    "value": d.id,
                    "label": d.name
                }))
                setCities(options);
               
            })
            .catch(err => console.log(err))
        
    }, [props]);




    const getInputs = () => {

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const price = document.getElementById("price").value;
        const rooms = document.getElementById("rooms").value;

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

    const callAPI = (title, desc, loc, price,rooms) => {

        const rentPostAPI = "https://localhost:44364/api/RentPost/" + props.data.id;
   
        let sentData = {
            Title: title,
            Description: desc,
            Location: loc,
            Price: price,
            CityId: city,
            UserId: props.data.userId,
            Rooms:rooms

        };

        fetch(rentPostAPI, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => {
             
                validateStatus(response.status);
            })
            

            .catch(err => console.log(err))

    }

  

    const validateStatus = (status) => {

        if (status >= 200 && status<=205) {

            swal2
                .fire({
                    title: "Great!",
                    icon: "success",
                }).then(function () {
                    setLoading(null);
                    handleClose();
                    history.push("/");
                    history.push("/post/"+props.data.id);
                });
            return;
        }

        setLoading(null);
    }

    

    const changeCity = (event) => {
      
        setCity(event.value);


    };

    return (
        <>
            <button type="button" className="btn btn-secondary" onClick={handleShow}>Edit Details </button>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rent Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <article className="card-body">
                        <form>

                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Title" name="title" id="title" defaultValue={ props.data.title} />

                            </div>


                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" placeholder="Description" name="description" id="description" defaultValue={props.data.description} />
                            </div>

                            <div className="form-group">
                                <label>Number of Rooms</label>
                                <input className="form-control" type="number" min="1" name="rooms" id="rooms" placeholder="Rooms" defaultValue={props.data.rooms} />

                            </div>


                            <div className="form-group">
                                <label>City</label>
                                <Select id="selectCityBar" options={cities} onChange={changeCity}  />
                            </div>


                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" id="location" name="location" placeholder="Location" defaultValue={props.data.location} />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input className="form-control" type="number" name="price" id="price" placeholder="Price $" defaultValue={props.data.price}/>

                            </div>



                            <p id="warning" style={{ color: 'red' }}></p>

                            <div style={{ marginLeft: "180px"}}>
                                {loading}

                            </div>


                        </form>
                    </article>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={getInputs} >
                        Save
                 </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default EditPostPage;