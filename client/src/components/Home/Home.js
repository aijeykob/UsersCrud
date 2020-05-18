import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getWorkers, setWorkerToEdit, setWorkerToDelete} from "../../actions";
import 'react-toastify/dist/ReactToastify.css';
import './Home.scss';
import AddWorker from "../AddWorker/AddWorker";
import moment from "moment";
import EditWorker from "../EditWorker/EditWorker";
import PaginationWorkers from "../PaginationWorkers/PaginationWorkers";

const Home = (props) => {
    useEffect(() => {
        const d = props.paginationWorkers;
        props.getWorkers(d);
    }, []);
    const [workerEditToggle, setWorkerEditToggle] = useState('');

    const formatDate = (birthday) => {
        const formattedDate = moment(birthday);
        return (
            <div>{formattedDate.format(' MMMM DD YYYY')}</div>
        )
    };
    const editWorker = (e) => {
        const workerToEdit = props.workers.filter(item => item._id === e.target.id);
        props.setWorkerToEdit(...workerToEdit);
        setWorkerEditToggle(e.target.id)
    };
    const deleteWorker = (e) => {
        props.setWorkerToDelete(e.target.id)
    };
    return (
        <div className='HomeContainer'>
            <AddWorker/>


            <div className="Table">
                <div className="Table-row Table-header">
                    <div className="Table-row-item">Name</div>
                    <div className="Table-row-item">Surname</div>
                    <div className="Table-row-item">Patronymic</div>
                    <div className="Table-row-item">Contact</div>
                    <div className="Table-row-item">Position</div>
                    <div className="Table-row-item">Birthday</div>
                    <div className="Table-row-item">Gender</div>
                    <div className="Table-row-item">Salary</div>
                    <div className="Table-row-item ">Edit</div>
                </div>
                <div className="row-collection">
                        {
                            props.workers.map(el => {
                                return (
                                    (workerEditToggle === el._id) ?
                                        <EditWorker key={el._id} editWorker={(e) => editWorker(e)}/>
                                        :
                                        <div className="Table-row">
                                            <div className="Table-row-item" data-header="Name">{el.name}</div>
                                            <div className="Table-row-item" data-header="Surname">{el.surname}</div>
                                            <div className="Table-row-item" data-header="Patronymic">{el.patronymic}</div>
                                            <div className="Table-row-item" data-header="Contact">{el.contact}</div>
                                            <div className="Table-row-item" data-header="Position">{el.position}</div>
                                            <div className="Table-row-item" data-header="Birthday">{formatDate(el.birthday)}</div>
                                            <div className="Table-row-item" data-header="Gender">{el.gender}</div>
                                            <div className="Table-row-item" data-header="Salary">{el.salary}</div>
                                            <div className="Table-row-item" data-header="Edit">
                                                <i title='edit' className="fas fa-user-edit" id={el._id}
                                                   onClick={(e) => editWorker(e)}/>
                                                <i title='delete' id={el._id} className="fas fa-trash-alt"
                                                   onClick={(e) => deleteWorker(e)}/>
                                        </div>
                                        </div>
                                )
                            })
                        }
                <PaginationWorkers/>
            </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    workerToAdd: state.workerToAdd,
    workers: state.workers,
    paginationWorkers: state.paginationWorkers,
});


const mapDispatchToProps = dispatch => ({
    getWorkers: (d) => dispatch(getWorkers(d)),
    setWorkerToEdit: (id) => dispatch(setWorkerToEdit(id)),
    setWorkerToDelete: (id) => dispatch(setWorkerToDelete(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
