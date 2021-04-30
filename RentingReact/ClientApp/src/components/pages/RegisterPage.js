﻿import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import Loading from '../utils/Loading';
import swal2 from "sweetalert2";


function Register() {


    const registerAPI = "https://localhost:44364/api/Authenticate/register";

    const [loading, setLoading] = useState();

    const history = useHistory();


    const callAPI = (username,email,phone,password) => {

        let sentData = {
            UserName: username,
            Email: email,
            PhoneNumber: phone,
            Password: password
        }
        fetch(registerAPI, {
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

            .catch(error => {
                console.log(error)
            })

    }

    const validateStatus = (status) => {

        if (status === 200) {
           
            swal2
                .fire({
                    title: "Good job!",
                    text: "Your user was registered!",
                    icon: "success",
                }).then(function () {
                    setLoading(null);
                    history.push("/login");
                });
            return;
        }
        setLoading(null);
        const warning = document.getElementById("warning");
        warning.textContent="Email is already in use or Password is invalid!"

    }


    const getInputs = () => {

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPass").value;
        const warning = document.getElementById("warning");

        console.log(username + " " + email + " " + phone + " " + password + " " + confirmPassword);
        if (!verifyPass(password, confirmPassword)) {
            warning.textContent = "Password and Confrim Password must be the same!"
            return;
        }
        warning.textContent = null;

        const load = (
            <>
                <br></br>
                <Loading></Loading>
                <br></br>
            </>
        );
        setLoading(load);


        callAPI(username, email, phone, password);

    }

  

    const verifyPass = (firstPass,secondPass) => {

        if (firstPass === secondPass) {
            return true;
        }
        return false;

    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                           
                            <h4 className="card-title mt-2">Sign up</h4>
                        </header>
                        <article className="card-body">
                            <form>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Username" name="username" id="username" />
                                    
                                </div> 


                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                                </div> 


                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <br></br>
                                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" style={{
                                        width: "500px",
                                        height: "38px"
                                    }} pattern="[0-9]+" />
                                </div> 

                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" name="password" id="password" placeholder="Password" />
                                    <small className="text-muted">Must contain at least: one small letter, one capital letter,one number,one symbol!</small>
                                </div> 

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input className="form-control" type="password" name="confirmPass" id="confirmPass" placeholder="Confirm Password" />
                                </div> 
                                <p id="warning" style={{ color: 'red' }}></p>

                                <div style={{ marginLeft: "220px" }}>
                                    {loading}
                                    
                                </div>

                                <div className="form-group">
                                    <button type="button" className="btn btn-success btn-block" onClick={getInputs}> Register</button>
                                </div> 
                                <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                            </form>
                        </article> 
                        <div className="border-top card-body text-center">Have an account? <Link to="/login" className="btn btn-outline-primary">Log In</Link></div>
                    </div> 
                </div> 
            </div> 
            
            <br></br>
  
     </>

    );

}

export default Register;