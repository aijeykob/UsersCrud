import React from 'react';
import {Dropdown,Form,Col} from "react-bootstrap";
import {connect} from 'react-redux'
import {
    selectDropDown
} from '../../actions'

const DropDownComponent = (props) => {

    const selectItem = (el) => {
        props.selectDropDown(el, props.nameDrop, props.stateProperty)
    };

    return (

        <Form.Control as="select" value={props.selected}>
            {
                props.items.map(el => {
                    return (
                        <option className="dropdown-item"
                                onClick={() => selectItem(el)}
                                key={el}
                        > {el} </option>
                    )
                })
            }
        </Form.Control>




    );
};


const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropDownComponent)