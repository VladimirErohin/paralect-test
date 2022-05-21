import React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';


const PaginationPage = ({totalRepositories, changePage, pageNum}) => {
    const {page, perPage} = pageNum;

    const countPage = Math.ceil(totalRepositories / perPage);

    function handlerPage(num) {
        //setPage(num)
        changePage(num)
    }

    console.log('totalRepositories --', totalRepositories);
    //console.log('num page --', page);

    return (
        <div className="pagination">
            <Pagination
                count={countPage}
                page={page}
                onChange={(_, num) => handlerPage(num)}
                size="middle"/>
        </div>
    );
};

export default PaginationPage;