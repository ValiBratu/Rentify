import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useGlobalUser } from '../utils/AuthContext';
import logo from '../../images/logo.png';

function NavMenu() {

    const { user, logout } = useGlobalUser();

    const logoStyle = {
        height:"37px",
        marginLeft: "-100px"
    };

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Container>
                    <Link to="/">
                        <img src={logo} style={logoStyle}></img>
                        <h4 style={{ color: "black", marginLeft: "-50px",marginTop: "-35px" }}>Rentify</h4>
                    </Link>
            <NavbarToggler  className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
                {user.Auth ? (
                <ul className="navbar-nav flex-grow">

                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
                    </NavItem>

                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/" onClick={logout} >Logout</NavLink>
                 </NavItem>

                </ul>

                 ) : (

                <ul className="navbar-nav flex-grow">

                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
                    </NavItem>

                </ul>           
             
                 )}


            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  
}
export default NavMenu;
