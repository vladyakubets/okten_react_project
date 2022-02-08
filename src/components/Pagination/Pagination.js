import React from 'react';
import {PaginationButton} from '../PaginationButton/PaginationButton';
import {useSearchParams} from 'react-router-dom';

const Pagination = ({total_pages}) => {
    const [searchParams] = useSearchParams();
    return (
        <div className={'paginationBtns'}>
            <PaginationButton to={`?page=${+searchParams.get('page') - 1}`}
                              disabled={searchParams.get('page') <= 1}>prev</PaginationButton>
            <PaginationButton to={`?page=${+searchParams.get('page') + 1}`}
                              disabled={searchParams.get('page') >= total_pages}>next</PaginationButton>
        </div>
    );
};

export {Pagination};