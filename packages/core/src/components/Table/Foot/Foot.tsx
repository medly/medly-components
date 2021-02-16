import React, { useCallback, useContext, useMemo } from 'react';
import Pagination from '../../Pagination';
import Text from '../../Text';
import { TableComponentsCommonPropsContext, TableStateContext } from '../context';
import { FootRow, TFoot } from './Foot.styled';

export const Foot: React.FC = React.memo(() => {
    const [{ activePage }, setTableState] = useContext(TableStateContext),
        { onPageChange, totalItems, itemsPerPage, showRowWithCardStyle } = useContext(TableComponentsCommonPropsContext),
        dataRange = useMemo(() => {
            const countTillPreviousPage = itemsPerPage * (activePage - 1);
            return `${totalItems ? countTillPreviousPage + 1 : totalItems} - ${
                countTillPreviousPage +
                (totalItems < itemsPerPage
                    ? totalItems
                    : totalItems < activePage * itemsPerPage
                    ? totalItems - countTillPreviousPage
                    : itemsPerPage)
            }`;
        }, [totalItems, itemsPerPage, activePage]);

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
