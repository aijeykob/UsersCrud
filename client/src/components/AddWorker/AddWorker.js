import React from 'react';
import {connect} from 'react-redux';
import {writingAddWorkerText, submitWorker, errorToast} from "../../actions";
import {Accordion, Form} from "react-bootstrap";
import {DataPicker} from '../DataPicker/DataPicker'
import './AddWorker.scss';
import {toast} from 'react-toastify';
import DropDown from "../DropDown/DropDown";
import Button from "react-bootstrap/Button";
import moment from "moment";


const AddWorker = (props) => {
    const errorToast = () => {
        toast(props.error.text);
        props.errorToast({status: true, text: ''})
    };
    const onChangeInput = (e) => {
        props.writingAddWorkerText(e.target.value, e.target.name)
    };
    const onSubmitWorker = (e) => {
        e.preventDefault();
        const validatedName = props.workerToAdd.name && props.workerToAdd.name.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedSurname = props.workerToAdd.surname && props.workerToAdd.surname.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedPatronymic = props.workerToAdd.patronymic && props.workerToAdd.patronymic.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedPosition = props.workerToAdd.position && props.workerToAdd.position.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedSalary = props.workerToAdd.salary && props.workerToAdd.salary.toString().match(/^[0-9]*[.,]?[0-9]+$/i);
        const validatedContact = props.workerToAdd.contact && props.workerToAdd.contact.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);


        if (!validatedName) {
            toast('Enter correct name');
        } else if (!validatedSurname) {
            toast('Enter correct surname');
        } else if (!validatedPatronymic) {
            toast('Enter correct patronymic');
        } else if (!validatedPosition) {
            toast('Enter correct position');
        } else if (!validatedSalary) {
            toast('Enter correct salary');
        } else if (!validatedContact) {
            toast('Enter correct contact');
        }
        props.submitWorker(props.workerToAdd);

    };
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
                    <DataPicker stateProperty='workerToAdd'/>
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
            {
                !props.error.status && errorToast()
            }
        </Accordion>
    );
};

const mapStateToProps = state => ({
    workerToAdd: state.workerToAdd,
    error: state.error,
});


const mapDispatchToProps = dispatch => ({
    writingAddWorkerText: (text, field) => dispatch(writingAddWorkerText(text, field)),
    submitWorker: (data) => dispatch(submitWorker(data)),
    errorToast: (data) => dispatch(errorToast(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddWorker)