import React from 'react';
import {connect} from 'react-redux';
import {writingEditWorkerText, updateWorker} from "../../actions";
import {DataPicker} from '../DataPicker/DataPicker'
import './EditWorker.scss';
import DropDown from "../DropDown/DropDown";
import {toast} from "react-toastify";

const EditWorker = (props) => {
    const onChangeInput = (e) => {
        props.writingEditWorkerText(e.target.value, e.target.name)
    };
    const onCancelEdit = (e) => {
        props.editWorker(e)
    };
    const onSubmitEdit = (e) => {
        const validatedName = props.workerToEdit.name && props.workerToEdit.name.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedSurname = props.workerToEdit.surname && props.workerToEdit.surname.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedPatronymic = props.workerToEdit.patronymic && props.workerToEdit.patronymic.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedPosition = props.workerToEdit.position && props.workerToEdit.position.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
        const validatedSalary = props.workerToEdit.salary && props.workerToEdit.salary.toString().match(/^[0-9]*[.,]?[0-9]+$/i);
        const validatedContact = props.workerToEdit.contact && props.workerToEdit.contact.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);

        if (!validatedName) {
            toast('Enter correct name');
        } else if (!validatedSurname) {
            toast('Enter correct surname');
            return
        } else if (!validatedPatronymic) {
            toast('Enter correct patronymic');
            return
        } else if (!validatedPosition) {
            toast('Enter correct position');
            return
        } else if (!validatedSalary) {
            toast('Enter correct salary');
            return
        } else if (!validatedContact) {
            toast('Enter correct contact');
            return
        }
        props.updateWorker(props.workerToEdit);
        props.editWorker(e)
    };
    return (
        <div className='row'>
            <div className='col'>
                <input type="text"
                       name='name'
                       value={props.workerToEdit.name}
                       placeholder='Enter Worker name'
                       onChange={(e) => onChangeInput(e)}/>
            </div>
            <div className='col'>
                <input type="text"
                       name='surname'
                       value={props.workerToEdit.surname}
                       placeholder='Enter Worker surname'
                       onChange={(e) => onChangeInput(e)}/>
            </div>
            <div className='col'>
                <input type="text"
                       name='patronymic'
                       value={props.workerToEdit.patronymic}
                       placeholder='Enter Worker patronymic'
                       onChange={(e) => onChangeInput(e)}/>
            </div>
            <div className='col'>

                <input type="text"
                       name='contact'
                       value={props.workerToEdit.contact}
                       placeholder='Enter Worker contact'
                       onChange={(e) => onChangeInput(e)}/>
            </div>
            <div className='col'>
                <input type="text"
                       name='position'
                       value={props.workerToEdit.position}
                       placeholder='Enter Worker position'
                       onChange={(e) => onChangeInput(e)}/>

            </div>
            <div className='col'>
                <DataPicker stateProperty={'workerToEdit'}/>
            </div>
            <div className='col'>
                <DropDown nameDrop={'gender'} stateProperty={'workerToEdit'} items={['male', 'female']}
                          selected={props.workerToEdit.gender}/>
            </div>
            <div className='col'>
                <input type="number"
                       name='salary'
                       className='editInput'
                       value={props.workerToEdit.salary}
                       placeholder='Enter Worker salary'
                       onChange={(e) => onChangeInput(e)}/>
            </div>
            <div className='col lastRowCol'>
                <i title='save' className="fas fa-check" id='' onClick={(e) => onSubmitEdit(e)}/>
                <i title='cancel' className="fas fa-reply" id='' onClick={(e) => onCancelEdit(e)}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    workerToEdit: state.workerToEdit
});


const mapDispatchToProps = dispatch => ({
    writingEditWorkerText: (text, field) => dispatch(writingEditWorkerText(text, field)),
    updateWorker: (data) => dispatch(updateWorker(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorker)
