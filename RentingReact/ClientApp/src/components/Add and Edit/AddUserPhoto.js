import React from 'react';

import { useHistory } from 'react-router-dom';



function AddUserPhoto(props) {

    const history = useHistory();

    const userPhotoPostApi = "https://localhost:44364/api/UserPhoto";
    const userPhotoPutAPI = "https://localhost:44364/api/UserPhoto/";

    
    

    let newPhoto = "";


    const getImageOnChange = (e) => {

        var fileList = document.getElementById("imageInput").files;
        console.log(fileList);
        var fileReader = new FileReader();
        if (fileReader && fileList && fileList.length) {
            fileReader.readAsArrayBuffer(fileList[0]);
            fileReader.onload = function () {
                var imageData = fileReader.result;
                console.log(imageData);

                let base64String = btoa(String.fromCharCode(...new Uint8Array(imageData)));
                newPhoto = base64String;

            };
        }

    }


    const PostImageToDb = (image) => {

        const sentData = {
            UserId: props.data.id,
            Photo: image
        }

        fetch(userPhotoPostApi, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sentData)
            //body: sentData
        })
            .then(response => {
                history.push('/');
                history.push('/profile/' + props.data.id);
            })
         
            .catch(error => {
                console.log(error)
            })

    }

    const PutImageToDB = (image) => {

        const sentData = {
            UserId: props.data.id,
            Photo: image
        }

        fetch(userPhotoPutAPI+props.data.id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sentData)
            //body: sentData
        })
            .then(response => {
                
                history.push('/');
                history.push('/profile/' + props.data.id);
            })
       
            .catch(error => {
                console.log(error)
            })


    }


    const savePhoto = () => {

        if (newPhoto === "") {
            document.getElementById("warning").textContent = "You must choose an image.";
            return;
        }
       
        if (props.data.photo === "") {

            PostImageToDb(newPhoto);
        }
        else {
            PutImageToDB(newPhoto);
        }
    };

    return (
        <>
            <div className="container" style={{ marginTop: "10px", marginLeft: "-15px" }}>

                {/* Button to Open the Modal */}
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#myModal">
                    Add Image
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Add Image</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="custom-file" >
                                    <input type="file" className="custom-file-input" id="imageInput" accept=" image/jpeg" onChange={getImageOnChange} />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                            <p id="warning" style={{ textAlign: "center", color: "red" }}></p>

                            {/* Modal footer */}
                            <div className="modal-footer">

                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" style={{ marginTop: "-1px" }} onClick={savePhoto}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddUserPhoto;