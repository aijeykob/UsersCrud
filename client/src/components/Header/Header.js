import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import './Header.scss';
import {logOut} from "../../actions";
import {connect} from "react-redux";
const Header = (props) => {
    const onLogOut =(e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        props.logOut();
    };

  return (
    <header className="Header">
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        (props.currentUser)?
                            <>
                            <NavLink className='Header__navLink' to={"/home"}>Home</NavLink>
                                <button className='header__logoutBtn' onClick={(e)=>onLogOut(e)}>LogOut</button>
                            </>
                            :
                            <>
                            <NavLink className='Header__navLink' to={"/login"}>Login</NavLink>
                            <NavLink className='Header__navLink' to={"/registration"}>Registration</NavLink>
                    </>
                            }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
  );
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)