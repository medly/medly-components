import React, { useCallback } from 'react';
import Text from '../../Text';
import Cell from '../Cell';
import { GroupCell } from '../GroupCell';
import { getGridTemplateColumns } from '../helpers';
import Row from '../Row';
import { NoResult } from '../Row/Row.styled';
import { ColumnConfig } from '../types';
import { TBody } from './Body.styled';
import { Props } from './types';

const Body: React.FC<Props> = React.memo(props => {
    const {
        data,
        columns,
        onRowClick,
        selectedRowIds,
        rowIdentifier,
        rowClickDisableKey,
        rowSelectionDisableKey,
        onRowSelection,
        addColumnMaxSize,
        isLoading
    } = props;

    const handleRowClick = (rowData: any) => {
        return onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;
    };

    const getRow = useCallback(
        (rowData: any = {}, configs: ColumnConfig[] = columns, field = '') =>
            configs.map((config, index) => {
                const fieldName = `${field && `${field}.`}${config.field}`;

                return config.children ? (
                    <GroupCell
                        as={field ? 'div' : 'td'}
                        key={index}
                        hidden={config.hidden}
                        gridTemplateColumns={getGridTemplateColumns(config.children)}
                    >
                        {getRow(rowData[config.field], config.children, config.field)}
                    </GroupCell>
                ) : (
                    <Cell
                        as={field ? 'div' : 'td'}
                        isLoading={isLoading}
                        isRowClickDisabled={rowData[rowClickDisableKey]}
                        isRowSelectionDisabled={rowData[rowSelectionDisableKey]}
                        key={index}
                        data={rowData[config.field]}
                        rowId={rowData[rowIdentifier]}
                        dottedFieldName={fieldName}
                        isRowSelected={selectedRowIds.includes(rowData[rowIdentifier])}
                        {...{ config, onRowSelection, addColumnMaxSize }}
                    />
                );
            }),
        [columns, isLoading, rowClickDisableKey, rowSelectionDisableKey, rowIdentifier, selectedRowIds, onRowSelection, addColumnMaxSize]
    );

    if (data.length === 0) {
        return (
            <NoResult>
                <Text>No result</Text>
            </NoResult>
        );
    }

    return (
        <TBody>
            {data.map((row, index) => {
                return (
                    <Row
                        disabled={row[rowClickDisableKey]}
                        key={row.id || index}
                        onClick={handleRowClick(row)}
                        gridTemplateColumns={getGridTemplateColumns(columns)}
                    >
                        {getRow(row)}
                    </Row>
                );
            })}
        </TBody>
    );
});
Body.displayName = 'Body';
export default Body;
