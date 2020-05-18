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
            <div className="home">
                <div className="content">
                    <div className="table" id="flex-table">
                        <div className="row header">
                            <div className="col">Name</div>
                            <div className="col">Surname</div>
                            <div className="col">Patronymic</div>
                            <div className="col">Contact</div>
                            <div className="col">Position</div>
                            <div className="col lg">Birthday</div>
                            <div className="col">Gender</div>
                            <div className="col">Salary</div>
                            <div className="col lastHeaderCol">Edit</div>
                        </div>

                        {
                            props.workers.map(el => {
                                return (
                                    (workerEditToggle === el._id) ?
                                        <EditWorker key={el._id} editWorker={(e) => editWorker(e)}/>
                                        :
                                        <div className='row' key={el._id}>
                                            <div className='col'>{el.name}</div>
                                            <div className='col'>{el.surname}</div>
                                            <div className='col'>{el.patronymic}</div>
                                            <div className='col'>{el.contact}</div>
                                            <div className='col'>{el.position}</div>
                                            <div className='col lg'>{formatDate(el.birthday)}</div>
                                            <div className='col'>{el.gender}</div>
                                            <div className='col'>{el.salary}</div>
                                            <div className='col lastRowCol'>
                                                <i title='edit' className="fas fa-user-edit" id={el._id}
                                                   onClick={(e) => editWorker(e)}/>
                                                <i title='delete' id={el._id} className="fas fa-trash-alt"
                                                   onClick={(e) => deleteWorker(e)}/>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
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
