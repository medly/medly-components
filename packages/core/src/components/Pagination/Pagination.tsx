import { ChevronLeftIcon, ChevronRightIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useMemo } from 'react';
import Popover from '../Popover';
import Text from '../Text';
import { paginator } from './helper';
import { ListWrapper, PageNavButton, PageNumberButton } from './Pagination.styled';
import PaginationPopup from './PaginationPopup';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const links = [],
            { hidePrevNextLinks, activePage, itemsPerPage, totalItems, onPageClick, ...restProps } = props,
            { currentPage, linkItems, totalPages } = useMemo(() => paginator(totalItems, activePage, itemsPerPage), [
                totalItems,
                activePage,
                itemsPerPage
            ]);

        const onClickHandler = (page: number | '...') => () => page !== '...' && onPageClick(page);

        for (let i = 0; i < linkItems.length; i++) {
            if (linkItems[i] === '...')
                links.push(
                    <Popover interactionType="click">
                        <PaginationPopup
                            prevPageNumber={linkItems[i - 1] as number}
                            nextPageNumber={linkItems[i + 1] as number}
                            onClickHandler={onPageClick}
                        ></PaginationPopup>
                    </Popover>
                );
            else
                links.push(
                    <PageNumberButton key={i} onClick={onClickHandler(linkItems[i])} isActive={linkItems[i] === currentPage}>
                        <Text textVariant="h5" textAlign="center" textWeight={linkItems[i] === currentPage ? 'Strong' : 'Medium'}>
                            {linkItems[i]}
                        </Text>
                    </PageNumberButton>
                );
        }

        if (!hidePrevNextLinks) {
            links.unshift(
                <PageNavButton key="first" disabled={currentPage < 2} onClick={onClickHandler(currentPage - 1)}>
                    <ChevronLeftIcon size="M" />
                </PageNavButton>
            );
            links.push(
                <PageNavButton key="last" disabled={currentPage === totalPages} onClick={onClickHandler(currentPage + 1)}>
                    <ChevronRightIcon size="M" />
                </PageNavButton>
            );
        }

        return (
            <ListWrapper ref={ref} variant="horizontal" {...restProps}>
                {links}
            </ListWrapper>
        );
    })
);

Pagination.displayName = 'Pagination';
Pagination.Style = ListWrapper.Style;
Pagination.defaultProps = {
    activePage: 1,
    itemsPerPage: 20,
    hidePrevNextLinks: false
};
