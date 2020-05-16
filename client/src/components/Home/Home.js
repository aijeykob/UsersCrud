import React from 'react';
import {connect} from 'react-redux';
import {writingAddWorkerText} from "../../actions";
import {Accordion, Form} from "react-bootstrap";
import {DataPicker} from '../DataPicker/DataPicker'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.scss';
import AddWorker from "../AddWorker/AddWorker";
import DropDown from "../DropDown/DropDown";

const Home = (props) => {
    const onChangeInput = (e) => {
        props.writingAddWorkerText(e.target.value, e.target.name)
    };
    return (
        <div className='home'>
            <div className="container">
                <div className="home__addWorker">
                    <AddWorker/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    workerToAdd: state.workerToAdd
});


const mapDispatchToProps = dispatch => ({
    writingAddWorkerText: (text, field) => dispatch(writingAddWorkerText(text, field)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
