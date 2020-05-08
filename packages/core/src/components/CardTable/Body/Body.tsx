import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo } from 'react';
import Cell from './Cell';
import Row from './Row';
import { Props } from './types';

export const Body: SFC<Props> & WithStyle = React.memo(props => {
    const { data, columns, onRowClick, rowClickDisableKey, uniqueKeyName, withWhiteBackground } = props;

    const gridTemplateColumns = useMemo(() => columns.reduce((acc, curr) => acc.concat(`${curr.fraction || 1}fr `), ''), [columns]),
        handleRowClick = useCallback(
            (rowData: any) => {
                return onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;
            },
            [onRowClick, rowClickDisableKey]
        );

    return (
        <tbody>
            {data.map((row, index) => (
                <Row
                    key={row[uniqueKeyName] || index}
                    onClick={handleRowClick(row)}
                    withWhiteBackground={withWhiteBackground}
                    isRowClickDisabled={row[rowClickDisableKey]}
                    gridTemplateColumns={gridTemplateColumns}
                >
                    {columns.map(column => (
                        <Cell
                            key={column.field}
                            isRowClickDisabled={row[rowClickDisableKey]}
                            data={row[column.field]}
                            column={column}
                            rowId={row[uniqueKeyName]}
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
