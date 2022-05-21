import React from 'react';
import Pagination from '@mui/material/Pagination';


const PaginationPage = ({totalRepositories, changePage, pageNum}) => {

    const {page, perPage} = pageNum;
    const countPage = Math.ceil(totalRepositories / perPage);

    function handlerPage(num) {
        changePage(num)
    }

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