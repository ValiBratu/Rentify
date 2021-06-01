import React, { useState } from 'react';
import swal2 from "sweetalert2";
import { useGlobalUser } from '../../utils/AuthContext';


function UserProfileData(props) {


    const { user } = useGlobalUser();

    const inactiveInputStyle = {
        border: "0",
        background:"transparent",
        width:"330px"
    };


    const makeInputsInactive = () => {
        const nameInput = document.getElementById("nameInput");
        const emailInput = document.getElementById("emailInput");
        const phoneInput = document.getElementById("phoneInput");

        nameInput.setAttribute("disabled",true);
        emailInput.setAttribute("disabled", true);
        phoneInput.setAttribute("disabled", true);


        nameInput.style.border = "0";
        emailInput.style.border = "0";
        phoneInput.style.border = "0";

    }


    const makeInputsActive = () => {
        const nameInput = document.getElementById("nameInput");
        const emailInput = document.getElementById("emailInput");
        const phoneInput = document.getElementById("phoneInput");

        nameInput.removeAttribute("disabled");
        emailInput.removeAttribute("disabled");
        phoneInput.removeAttribute("disabled");

        nameInput.style.border = "";
        emailInput.style.border = "";
        phoneInput.style.border = "";
        changeButtons();
    }


    

    const handleClose = () => {
        document.getElementById("nameInput").value = props.userData.name;
        document.getElementById("emailInput").value = props.userData.email;
        document.getElementById("phoneInput").value = props.userData.phoneNumber;

        const buttonsDiv = document.getElementById("buttonsDiv");
        buttonsDiv.removeChild(document.getElementById("saveBtn"));
        buttonsDiv.removeChild(document.getElementById("closeBtn"));


        const editBtn = document.createElement("button");
        editBtn.setAttribute("type", "button");
        editBtn.setAttribute("class", "btn btn-secondary");
        editBtn.innerHTML = "Edit Details";
        editBtn.setAttribute("id", "editBtn");
        editBtn.addEventListener("click", makeInputsActive);

        buttonsDiv.appendChild(editBtn);

        makeInputsInactive();


    }
   
    const changeButtons = () => {

        const buttonsDiv = document.getElementById("buttonsDiv");

        const closeBtn = document.createElement("button");
        closeBtn.setAttribute("type", "button");
        closeBtn.setAttribute("class", "btn btn-secondary");
        closeBtn.innerHTML = "Close";
        closeBtn.setAttribute("id", "closeBtn");

        closeBtn.addEventListener("click", handleClose);


        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "button");
        saveBtn.setAttribute("class", "btn btn-primary");
        saveBtn.style.marginLeft = "17px";
        saveBtn.innerHTML = "Save";
        saveBtn.setAttribute("id", "saveBtn");
        saveBtn.addEventListener("click", handleSave);


        
        buttonsDiv.removeChild(document.getElementById("editBtn"));
        buttonsDiv.appendChild(closeBtn);
        buttonsDiv.appendChild(saveBtn);
    }



    const handleSave = () => {

    

        const userPutAPI = "https://localhost:44364/api/User/";

        const name=document.getElementById("nameInput").value;
        const email=document.getElementById("emailInput").value;
        const phone=document.getElementById("phoneInput").value;


        let sentData = {
            Id:props.userData.id,
            UserName:name,
            Email:email,
            PhoneNumber:phone
        };
      
        fetch(userPutAPI + props.userData.id, {
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
        if (status >= 200 && status <= 205) {

            const buttonsDiv = document.getElementById("buttonsDiv");
            buttonsDiv.removeChild(document.getElementById("saveBtn"));
            buttonsDiv.removeChild(document.getElementById("closeBtn"));


            const editBtn = document.createElement("button");
            editBtn.setAttribute("type", "button");
            editBtn.setAttribute("class", "btn btn-secondary");
            editBtn.innerHTML = "Edit Details";
            editBtn.setAttribute("id", "editBtn");
            editBtn.addEventListener("click", makeInputsActive);

            buttonsDiv.appendChild(editBtn);

            makeInputsInactive();


            return;
        }
        else {
            swal2.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'The Email is already in use!',
             
            })
        }
    }

    return (
        <>
            
                    <div className="tab-content ml-1" id="myTabContent">
                        <div id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5">
                                    <label style={{ fontWeight: 'bold' }}>Name</label>
                                </div>
                        <div className="col-md-8 col-6">

                            <input type="text" id="nameInput" defaultValue={props.userData.name} style={inactiveInputStyle} disabled />
                                    
                                    </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5">
                                    <label style={{ fontWeight: 'bold' }}>Email Adress</label>
                                </div>
                        <div className="col-md-8 col-6">

                            <input type="email" id="emailInput" defaultValue={props.userData.email} style={inactiveInputStyle}  disabled/>

                                    </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5">
                                    <label style={{ fontWeight: 'bold' }}>Phone Number</label>
                                </div>
                        <div className="col-md-8 col-6">

                            <input type="tel" id="phoneInput" defaultValue={props.userData.phoneNumber} style={inactiveInputStyle} disabled />

                                </div>
                    </div>

                    {user.Id === props.userData.id ? (
                        <>
                        <hr /> 
                            <div className="row">
                                <div className="col-sm-3 col-md-2 col-5" id="buttonsDiv">
                            <button id="editBtn" type="button" className="btn btn-secondary" onClick={makeInputsActive}>Edit Details </button>
                                </div>
                            </div>
                        </>
                    ): (<></>)}


                   
                        </div>
                    </div>

                         

        </>
    );

}

export default UserProfileData;
