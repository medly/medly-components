import React, { FC, useCallback, useMemo } from 'react';
import Text from '../../Text';
import Cell from './Cell';
import Row from './Row';
import { NoResult } from './Row/Row.styled';
import { Props } from './types';

export const Body: FC<Props> = React.memo(props => {
    const { data, columns, onRowClick, rowClickDisableKey, uniqueKeyName, withWhiteBackground } = props;

    const gridTemplateColumns = useMemo(() => columns.reduce((acc, curr) => acc.concat(`${curr.fraction || 1}fr `), ''), [columns]),
        handleRowClick = useCallback(
            (rowData: any) => {
                return onRowClick && !rowData[rowClickDisableKey!] ? () => onRowClick(rowData) : undefined;
            },
            [onRowClick, rowClickDisableKey]
        );

    if (data.length === 0) {
        return (
            <NoResult withWhiteBackground={withWhiteBackground} gridTemplateColumns={gridTemplateColumns}>
                <Text textVariant="body2" textWeight="Strong">
                    {' '}
                    No Result{' '}
                </Text>
            </NoResult>
        );
    }

    return (
        <tbody>
            {data.map((row, index) => (
                <Row
                    key={row[uniqueKeyName!] || index}
                    onClick={handleRowClick(row)}
                    withWhiteBackground={withWhiteBackground}
                    isRowClickDisabled={row[rowClickDisableKey!]}
                    gridTemplateColumns={gridTemplateColumns}
                >
                    {columns.map(column => (
                        <Cell
                            key={column.field}
                            isRowClickDisabled={row[rowClickDisableKey!]}
                            data={row[column.field]}
                            column={column}
                            rowId={row[uniqueKeyName!]}
                            rowData={row}
                        />
                    ))}
                </Row>
            ))}
        </tbody>
    );
});
Body.defaultProps = {
    uniqueKeyName: 'id',
    rowClickDisableKey: ''
};
Body.displayName = 'Body';
