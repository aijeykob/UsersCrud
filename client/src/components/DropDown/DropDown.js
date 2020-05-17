import React from 'react';
import {FormControl} from "react-bootstrap";
import {connect} from 'react-redux'
import {
    selectDropDown
} from '../../actions'

const DropDownComponent = (props) => {

    const selectItem = (el) => {
        props.selectDropDown(el.target.value, props.nameDrop, props.stateProperty)
    };

    return (

        <FormControl as="select" value={props.selected} onChange={(e) => selectItem(e)}>
            {
                props.items.map(el => {
                    return (
                        <option className="dropdown-item"
                                key={el}
                        > {el} </option>
                    )
                })
            }
        </FormControl>
    );
};


const mapStateToProps = state => ({});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropDownComponent)