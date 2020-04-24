import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Cell from './Cell';
import Row from './Row';
import { Props } from './types';

export const Body: SFC<Props> & WithStyle = React.memo(props => {
    const { data, columns, onRowClick, rowClickDisableKey, uniqueKeyName, withLightTheme } = props;

    const handleRowClick = (rowData: any) => {
        return onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;
    };

    return (
        <>
            {data.map((row, index) => {
                return (
                    //TODO: Change it to Tr
                    <Row
                        key={row[uniqueKeyName] || index}
                        flowDirection="horizontal"
                        fullWidth
                        withPadding={false}
                        onClick={handleRowClick(row)}
                        disabled={row[rowClickDisableKey]}
                        withLightTheme={withLightTheme}
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
                );
            })}
        </>
    );
});
Body.defaultProps = {
    uniqueKeyName: 'id',
    rowClickDisableKey: ''
};
Body.displayName = 'Body';
