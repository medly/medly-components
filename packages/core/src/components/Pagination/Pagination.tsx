import React from 'react';
import Button from '../Button';
import List from '../List';
import { paginator } from './helper';
import { PaginationProps } from './types';

const Pagination: React.SFC<PaginationProps> = React.memo(props => {
    const links = [];
    const { hideFirstLastLinks, hidePrevNextLinks, activePage, itemsPerPage, totalItems, pageRangeDisplayed, onPageClick } = props;
    const pagesConfig = paginator(totalItems, activePage, itemsPerPage, pageRangeDisplayed);

    const onClickHandler = (page: number) => () => {
        onPageClick(page);
    };

    for (let i = pagesConfig.startPage; i <= pagesConfig.endPage; i++) {
        links.push(
            <Button onClick={onClickHandler(i)} variant={i === pagesConfig.currentPage ? 'solid' : 'outlined'}>
                {i}
            </Button>
        );
    }

    if (!hidePrevNextLinks) {
        links.unshift(
            <Button disabled={pagesConfig.currentPage === 1} onClick={onClickHandler(pagesConfig.currentPage - 1)} variant="outlined">
                Prev
            </Button>
        );
        links.push(
            <Button
                disabled={pagesConfig.currentPage === pagesConfig.totalPages}
                onClick={onClickHandler(pagesConfig.currentPage + 1)}
                variant="outlined"
            >
                Next
            </Button>
        );
    }

    if (!hideFirstLastLinks) {
        links.unshift(
            <Button disabled={pagesConfig.currentPage === 1} onClick={onClickHandler(1)} variant="outlined">
                First
            </Button>
        );
        links.push(
            <Button
                disabled={pagesConfig.currentPage === pagesConfig.totalPages}
                onClick={onClickHandler(pagesConfig.totalPages)}
                variant="outlined"
            >
                Last
            </Button>
        );
    }

    return <List variant="horizontal">{links}</List>;
});

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
    activePage: 1,
    itemsPerPage: 20,
    pageRangeDisplayed: 5,
    hideFirstLastLinks: false,
    hidePrevNextLinks: false
};

export default Pagination;
