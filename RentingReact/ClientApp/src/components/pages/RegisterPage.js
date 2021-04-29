import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


function Register() {


    const registerAPI = "https://localhost:44364/api/Authenticate/register";


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
                console.log(response)
            })

            .catch(error => {
                console.log(error)
            })

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
                                    
                                </div> {/* form-group end.// */}


                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                                </div> {/* form-group end.// */}


                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <br></br>
                                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" style={{
                                        width: "500px",
                                        height: "38px"
                                    }} pattern="[0-9]+" />
                                </div> {/* form-group end.// */}

                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" name="password" id="password" />
                                </div> {/* form-group end.// */}

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input className="form-control" type="password" name="confirmPass" id="confirmPass" />
                                </div> {/* form-group end.// */}
                                <p id="warning" style={{ color: 'red' }}></p>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success btn-block" onClick={getInputs}> Register</button>
                                </div> {/* form-group// */}
                                <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                            </form>
                        </article> {/* card-body end .// */}
                        <div className="border-top card-body text-center">Have an account? <Link to="/" className="btn btn-outline-primary">Log In</Link></div>
                    </div> {/* card.// */}
                </div> {/* col.//*/}
            </div> {/* row.//*/}
            {/*container end.//*/}
            <br></br>
            <br></br>
     </>

    );

}

export default Register;