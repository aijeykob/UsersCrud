import React from 'react';
import {connect} from 'react-redux';
import {writingAddWorkerText,submitWorker} from "../../actions";
import {Accordion, Form} from "react-bootstrap";
import {DataPicker} from '../DataPicker/DataPicker'
import './AddWorker.scss';
import DropDown from "../DropDown/DropDown";
import Button from "react-bootstrap/Button";

const AddWorker = (props) => {
    const onChangeInput = (e) => {
        props.writingAddWorkerText(e.target.value, e.target.name)
    };
    const onSubmitWorker =(e) => {
        e.preventDefault();
        props.submitWorker(props.workerToAdd);

    }
    return (
        <Accordion>
            <Accordion.Toggle eventKey="0">Add Worker</Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Form onSubmit={onSubmitWorker}>
                    <input type="text"
                           name='name'
                           value={props.workerToAdd.name}
                           placeholder='Enter Worker name'
                           onChange={(e) => onChangeInput(e)}/>
                    <input type="text"
                           name='surname'
                           value={props.workerToAdd.surname}
                           placeholder='Enter Worker surname'
                           onChange={(e) => onChangeInput(e)}/>
                    <input type="text"
                           name='patronymic'
                           value={props.workerToAdd.patronymic}
                           placeholder='Enter Worker patronymic'
                           onChange={(e) => onChangeInput(e)}/>
                    <input type="text"
                           name='position'
                           value={props.workerToAdd.position}
                           placeholder='Enter Worker position'
                           onChange={(e) => onChangeInput(e)}/>
                    <input type="number"
                           name='salary'
                           value={props.workerToAdd.salary}
                           placeholder='Enter Worker salary'
                           onChange={(e) => onChangeInput(e)}/>
                    <DataPicker/>
                    <DropDown nameDrop={'gender'} stateProperty={'workerToAdd'} items={['male', 'female']}
                              selected={props.workerToAdd.gender}/>
                    <input type="text"
                           name='contact'
                           value={props.workerToAdd.contact}
                           placeholder='Enter Worker contact'
                           onChange={(e) => onChangeInput(e)}/>
                    <Button className='submitAddButton' type="submit">Finalize</Button>
                </Form>
            </Accordion.Collapse>
        </Accordion>
    );
};

const mapStateToProps = state => ({
    workerToAdd: state.workerToAdd
});


const mapDispatchToProps = dispatch => ({
    writingAddWorkerText: (text, field) => dispatch(writingAddWorkerText(text, field)),
    submitWorker: (data) => dispatch(submitWorker(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddWorker)
