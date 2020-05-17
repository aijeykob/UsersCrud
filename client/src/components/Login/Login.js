import React from 'react';
import {connect} from 'react-redux';
import {writingLoginText, submitLogin, errorToast} from "../../actions";
import {toast} from 'react-toastify';
import {Button} from "react-bootstrap";
import './Login.scss';

const Login = (props) => {
    const errorToast = () => {
        toast(props.error.text);
        props.errorToast({status: true, text: ''})
    };
    const onChangeInput = (e) => {
        props.writingLoginText(e.target.value, e.target.name)
    };
    const onSubmitLogin = (e) => {
        e.preventDefault();
        const validatedUsername = props.login.username.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
        const validatedPassword = props.login.password.match(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i);
        if (!validatedUsername) {
            toast("Please enter correct username with a restriction of 2-20 characters, which can be Latin letters and numbers, the first character is necessarily a letter");
            return
        }
        if (!validatedPassword) {
            toast("Please enter correct password with a Latin lowercase and capital letters, numbers, special characters. 8 characters minimum");
            return
        }
        const d = props.login;
        props.submitLogin(d)
    };

    return (
        <div className='login'>
            <div className="container">
                <div className="login__row">
                    <p>Username:</p>
                    <input type="text"
                           name='username'
                           value={props.login.username}
                           placeholder='Enter username'
                           onChange={(e) => onChangeInput(e)}
                           className="login__input"/>
                    <p>Password:</p>
                    <input type="password"
                           name='password'
                           value={props.login.password}
                           placeholder='Enter password'
                           onChange={(e) => onChangeInput(e)}
                           className="login__input"/>
                    <Button onClick={(e) => onSubmitLogin(e)}>Login</Button>
                </div>
            </div>
            {
                !props.error.status && errorToast()
            }
        </div>
    );
};

const mapStateToProps = state => ({
    login: state.login,
    error: state.error,
});


const mapDispatchToProps = dispatch => ({
    writingLoginText: (text, field) => dispatch(writingLoginText(text, field)),
    submitLogin: (data) => dispatch(submitLogin(data)),
    errorToast: (data) => dispatch(errorToast(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
