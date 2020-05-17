import React from 'react';
import {connect} from 'react-redux';
import {writingRegistrationText, submitRegistration, errorToast} from "../../actions";
import {toast} from 'react-toastify';
import './Registration.scss';
import {Button} from "react-bootstrap";

const Registration = (props) => {
    const onChangeInput = (e) => {
        props.writingRegistrationText(e.target.value, e.target.name)
    };
    const errorToast = () => {
        toast(props.error.text);
        props.errorToast({status: true, text: ''})
    };
    const onSubmitRegistration = (e) => {
        e.preventDefault();
        const validatedUsername = props.registration.username.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
        const validatedPassword = props.registration.password.match(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i);
        if (!validatedUsername) {
            toast("Please enter correct username with a restriction of 2-20 characters, which can be Latin letters and numbers, the first character is necessarily a letter");
            return
        } else if (!validatedPassword) {
            toast("Please enter correct password with a Latin lowercase and capital letters, numbers, special characters. 8 characters minimum");
            return
        }
        const d = props.registration;
        props.submitRegistration(d);

    };

    return (
        <div className='registration'>
            <div className="container">
                <div className="registration__row">
                    <p>Username:</p>
                    <input type="text"
                           name='username'
                           value={props.registration.username}
                           placeholder='Enter username'
                           onChange={(e) => onChangeInput(e)}
                           className="registration__input"/>
                    <p>Password:</p>
                    <input type="password"
                           name='password'
                           value={props.registration.password}
                           placeholder='Enter password'
                           onChange={(e) => onChangeInput(e)}
                           className="registration__input"/>
                    <Button onClick={(e) => onSubmitRegistration(e)}>Registration</Button>
                </div>
            </div>
            {
                !props.error.status && errorToast()
            }

        </div>
    );
};

const mapStateToProps = state => ({
    registration: state.registration,
    error: state.error
});


const mapDispatchToProps = dispatch => ({
    writingRegistrationText: (text, field) => dispatch(writingRegistrationText(text, field)),
    submitRegistration: (data) => dispatch(submitRegistration(data)),
    errorToast: (data) => dispatch(errorToast(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
