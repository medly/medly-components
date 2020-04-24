import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Cell from './Cell';
import Row from './Row';
import { Props } from './types';

export const Body: SFC<Props> & WithStyle = React.memo(props => {
    const { data, columns, onRowClick, rowClickDisableKey, uniqueKeyName, withWhiteBackground } = props;

    const handleRowClick = (rowData: any) => {
        return onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;
    };

    return (
        <tbody>
            {data.map((row, index) => (
                <Row
                    key={row[uniqueKeyName] || index}
                    onClick={handleRowClick(row)}
                    withWhiteBackground={withWhiteBackground}
                    isRowClickDisabled={row[rowClickDisableKey]}
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
