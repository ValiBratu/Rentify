import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { useGlobalUser } from '../utils/AuthContext';
import Loading from '../utils/Loading';
import swal2 from "sweetalert2";

function Login() {


    const LoginAPI = "https://localhost:44364/api/Authenticate/login";

    const {  login } = useGlobalUser();

    const [ loading, setLoading ] = useState();

    const history = useHistory();

    const callAPI = ( email, password) => {
        
        let sentData = {
            Email: email,
            Password: password
        }
        fetch(LoginAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => response.json())
            .then(data => {
                

                if (data.token) {
                    parseJwt(data.token);
                   
                }
                else {
                    const warning = document.getElementById("warning");
                    warning.textContent = "Email or Password are not valid!";
                   
                }
                setLoading(null);
            })
            

            .catch(error => {
                console.log(error)
            })
       
    }




    const getInputs = () => {

       
        const email = document.getElementById("email").value;
        
        const password = document.getElementById("password").value;

        const load = (
            <>
                <br></br>
                <Loading></Loading>
                <br></br>
            </>
        );
        setLoading(load);

        
        

        callAPI(email, password);
        
       

        
    }

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        
        document.cookie = "name=test";

        const loginData = {
            Id: JSON.parse(jsonPayload).id,
            Name: JSON.parse(jsonPayload)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            Email: JSON.parse(jsonPayload)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            Role: JSON.parse(jsonPayload)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        };
        login(loginData);
        swal2
            .fire({
                title: "Good job!",
                text: "Your user was logged in",
                icon: "success",
            }).then(function () {
                
                history.push("/");
            });
       
    };

                                        



    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">

                            <h4 className="card-title mt-2">Login</h4>
                        </header>
                        <article className="card-body">
                            <form>


                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                                </div>


                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" name="password" id="password" placeholder="Password" />
                                </div> 

                                <p id="warning" style={{ color: 'red' }}></p>

                                <div id="loading" style={{ marginLeft: "220px" }}>
                                    {loading}
                                 </div>

                                <div className="form-group">
                                    <button type="button" className="btn btn-success btn-block" onClick={getInputs}> Login</button>
                                </div>
                             
                            </form>
                        </article> 
                     
                    </div> 
                </div> 
            </div>
           
            <br></br>
            <br></br>
        </>

    );

}

export default Login;