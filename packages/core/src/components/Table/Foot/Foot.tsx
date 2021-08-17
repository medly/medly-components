import React, { useCallback, useContext, useMemo } from 'react';
import Text from '../../Text';
import { TableComponentsCommonPropsContext, TableStateContext } from '../context';
import { FootPagination, FootRow, TFoot } from './Foot.styled';
import { TableFootProps } from './types';

export const Foot: React.FC<TableFootProps> = React.memo(props => {
    const { tableSize } = props;
    const [{ activePage }, setTableState] = useContext(TableStateContext),
        { onPageChange, totalItems, itemsPerPage, showRowWithCardStyle, size } = useContext(TableComponentsCommonPropsContext),
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
        <TFoot showWithCardStyle={showRowWithCardStyle} tableSize={size}>
            <FootRow>
                <td>
                    <FootPagination
                        tableSize={tableSize}
                        activePage={activePage}
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        onPageClick={handlePageClick}
                    />
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
