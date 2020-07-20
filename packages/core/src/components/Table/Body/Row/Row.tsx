import React, { useContext } from 'react';
import { GroupCell } from '../../GroupCell';
import { getGridTemplateColumns } from '../../helpers';
import { TablePropsContext } from '../../TableProps.context';
import { TableColumnConfig } from '../../types';
import Cell from '../Cell';
import * as Styled from './Row.styled';
import { Props } from './types';

export const Row: React.FC<Props> = React.memo(props => {
    const { columns, isLoading, onRowClick, rowIdentifier, rowClickDisableKey, rowSelectionDisableKey } = useContext(TablePropsContext),
        { data, showShadowAfterFrozenElement, selectedRowIds, onRowSelection, addColumnMaxSize, ...restProps } = props;

    const getCells = (rowData: any = {}, configs: TableColumnConfig[] = columns, field = '') =>
            configs.map(config => {
                const fieldName = `${field && `${field}.`}${config.field}`;

                return config.children ? (
                    <GroupCell
                        as={field ? 'div' : 'td'}
                        key={config.field}
                        hidden={config.hidden}
                        gridTemplateColumns={getGridTemplateColumns(config.children)}
                    >
                        {getCells(rowData[config.field], config.children, config.field)}
                    </GroupCell>
                ) : (
                    <Cell
                        key={fieldName}
                        as={field ? 'div' : 'td'}
                        isLoading={isLoading}
                        isRowClickDisabled={rowData[rowClickDisableKey]}
                        isRowSelectionDisabled={rowData[rowSelectionDisableKey]}
                        data={rowData[config.field]}
                        rowId={rowData[rowIdentifier]}
                        dottedFieldName={fieldName}
                        showShadowAtRight={showShadowAfterFrozenElement}
                        isRowSelected={selectedRowIds.includes(rowData[rowIdentifier])}
                        {...{ config, onRowSelection, addColumnMaxSize }}
                    />
                );
            }),
        handleRowClick = (rowData: any) =>
            !isLoading && onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;

    return (
        <Styled.Row
            {...restProps}
            disabled={data[rowClickDisableKey]}
            onClick={handleRowClick(data)}
            isSelected={!isLoading && selectedRowIds.includes(data[rowIdentifier])}
            gridTemplateColumns={getGridTemplateColumns(columns)}
        >
            {getCells(data)}
        </Styled.Row>
    );
});
Row.displayName = 'Row';
