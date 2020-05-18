import React from 'react';
import {connect} from 'react-redux';
import {changeOffset, changePagePagination, getWorkers} from "../../actions";
import './PaginationWorkers.scss';
import Pagination from "react-js-pagination";

const PaginationWorkers = (props) => {

    const handlePageChange = (pageNumber) => {
        const improveOffset = 1;
        props.changeOffset(pageNumber - improveOffset);
        props.changePagePagination(pageNumber);
        const d = props.paginationWorkers;
        d.offset = pageNumber - improveOffset;
        props.getWorkers(d)
    };
    return (
        <div className='d-flex justify-content-center'>
            <Pagination
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                activePage={props.paginationWorkers.activePage}
                itemsCountPerPage={5}
                totalItemsCount={props.paginationWorkers.total}
                pageRangeDisplayed={5}
                onChange={(e) => handlePageChange(e)}
            />
        </div>
    )
};

const mapStateToProps = state => ({
    paginationWorkers: state.paginationWorkers,
});


const mapDispatchToProps = dispatch => ({
    changeOffset: (offset) => dispatch(changeOffset(offset)),
    changePagePagination: (page) => dispatch(changePagePagination(page)),
    getWorkers: (d) => dispatch(getWorkers(d)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationWorkers)
