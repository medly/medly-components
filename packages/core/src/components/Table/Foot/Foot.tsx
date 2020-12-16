import React, { useCallback, useContext, useMemo } from 'react';
import Pagination from '../../Pagination';
import Text from '../../Text';
import { TablePropsContext, TableStateContext } from '../context';
import { FootRow, TFoot } from './Foot.styled';

export const Foot: React.FC = React.memo(() => {
    const [{ activePage }, setTableState] = useContext(TableStateContext),
        { onPageChange, totalItems, itemsPerPage, showRowWithCardStyle } = useContext(TablePropsContext),
        dataRange = useMemo(() => `${itemsPerPage * (activePage - 1) + 1} - ${itemsPerPage * (activePage - 1) + (totalItems < itemsPerPage ? totalItems : itemsPerPage)}`, [
            itemsPerPage,
            activePage
        ]);

    const handlePageClick = useCallback(
        (page: number) => {
            setTableState(val => {
                const newState = { ...val, activePage: page };
                onPageChange && onPageChange(newState);
                return newState;
            });
        },
        [onPageChange]
    );

    return (
        <TFoot showWithCardStyle={showRowWithCardStyle}>
            <FootRow>
                <td>
                    <Pagination activePage={activePage} totalItems={totalItems} itemsPerPage={itemsPerPage} onPageClick={handlePageClick} />
                </td>
                <td>
                    <Text>Viewing</Text>
                    <Text textWeight="Strong">{` ${dataRange} `}</Text>
                    <Text>of</Text>
                    <Text textWeight="Strong">{` ${totalItems} `}</Text>
                    <Text>Results</Text>
                </td>
            </FootRow>
        </TFoot>
    );
});
Foot.displayName = 'Foot';
