import type { FC } from 'react';
import { memo, useCallback, useContext, useMemo } from 'react';
import Text from '../../Text';
import { TableComponentsCommonPropsContext, TableStateContext } from '../context';
import { FootPagination, FootRow, TFoot } from './Foot.styled';
import { TableFootProps } from './types';

export const Foot: FC<TableFootProps> = memo(props => {
    const { tableSize } = props;
    const [{ activePage = 1 }, setTableState] = useContext(TableStateContext),
        { onPageChange, totalItems = 0, itemsPerPage = 20, showRowWithCardStyle, size } = useContext(TableComponentsCommonPropsContext),
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
                        data-testid="foot-pagination"
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
