import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import {Route, Redirect} from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkToken} from "./actions";
import {connect} from "react-redux";

const App = (props) => {
    useEffect(() => {
        props.checkToken();
    }, []);
    return (
        <>
            <Header/>
            {
                (props.currentUser) ? <Redirect to='/home'/> : <Redirect to='/registration'/>
            }
            <Route path="/login" render={() => <Login/>}/>
            <Route path="/registration" render={() => <Registration/>}/>
            <Route path="/home" render={() => <Home/>}/>
            <ToastContainer/>
        </>
    );
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});


const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(checkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)