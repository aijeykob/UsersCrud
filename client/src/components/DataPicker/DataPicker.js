import React from 'react';
import {connect} from 'react-redux';
import {
    selectDropDown
} from '../../actions';
import {Form} from "react-bootstrap";

class DataPicker extends React.Component {
    constructor(props) {
        super(props);
        (this.props.stateProperty === 'workerToEdit') ?
            this.state = {
                month: this.props.workerToEdit.month,
                year: this.props.workerToEdit.year,
                day: this.props.workerToEdit.day
            }
            :
            this.state = {month: '', year: '', day: ''};
    }

    monthChange = (event) => {
        this.setState({month: event.target.value});
        this.props.selectDropDown(event.target.value, 'month', this.props.stateProperty)
    };
    yearChange = (event) => {
        this.setState({year: event.target.value});
        this.props.selectDropDown(event.target.value, 'year', this.props.stateProperty)
    };
    dayChange = (event) => {
        this.setState({day: event.target.value});
        this.props.selectDropDown(event.target.value, 'day', this.props.stateProperty)
    };

    getNumberForData() {
        if (this.state.month === '4' || this.state.month === '6' ||
            this.state.month === '9' || this.state.month === '11') {
            return 30;
        } else if (this.state.month === '1' || this.state.month === '3' ||
            this.state.month === '5' || this.state.month === '7' ||
            this.state.month === '8' || this.state.month === '10' || this.state.month === '12') {
            return 31;
        } else if (this.state.month === 'February') {
            if (Number.isInteger(this.state.year / 4)) {
                if (Number.isInteger(this.state.year / 100)) {
                    if (Number.isInteger(this.state.year / 400)) {
                        return 29

                    } else return 28

                } else return 29

            } else return 28

        }
        return 31;
    }

    render() {

        return (
            <>

                <Form.Control
                    as="select"
                    value={this.state.month}
                    onChange={this.monthChange}
                    required>
                    <option value=''></option>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </Form.Control>
                <Form.Control
                    as="select"
                    value={this.state.year}
                    onChange={this.yearChange}
                    required
                >
                    {
                        [...Array(83)].map((el, i) => {
                            if (i === 0) {
                                return (<option key={i} value={''}></option>)
                            } else {
                                return (<option key={i} value={i + 1920}>{i + 1920}</option>)
                            }
                        })
                    }
                </Form.Control>

                <Form.Control value={this.state.day}
                              onChange={this.dayChange}
                              as="select"
                              required
                >
                    {
                        [...Array(this.getNumberForData())].map((el, i) => {

                            if (i === 0) {
                                return (<option key={el} value={''}></option>)
                            } else {
                                return (<option key={el} value={i + 1}>{i + 1}</option>)
                            }
                        })
                    }
                </Form.Control>
            </>
        );
    }
}

const mapStateToProps = state => ({
    workerToAdd: state.workerToAdd,
    workerToEdit: state.workerToEdit,
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
});

const DataPickerWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataPicker);

export {DataPickerWithRedux as DataPicker}