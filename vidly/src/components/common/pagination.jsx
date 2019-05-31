import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    console.log("page: "+currentPage);


    const pagesCount = Math.ceil(itemsCount/pageSize); //0.9 to 1
    if(pagesCount===1){
        return null;
    }
    const pages = _.range(1, pagesCount +1);

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={()=> onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
/*
Pagination.PropTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.number.isRequired
};
*/

export default Pagination;