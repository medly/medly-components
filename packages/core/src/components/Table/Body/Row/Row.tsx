import React, { useCallback, useContext, useState } from 'react';
import { GroupCell } from '../../GroupCell';
import { getGridTemplateColumns } from '../../helpers';
import { TablePropsContext } from '../../TableProps.context';
import { TableColumnConfig } from '../../types';
import Cell from '../Cell';
import { ExpandedCell } from '../Cell/Cell.styled';
import * as Styled from './Row.styled';
import { Props } from './types';

export const Row: React.FC<Props> = React.memo(props => {
    const [isExpanded, setExpansionState] = useState(false),
        { data, showShadowAfterFrozenElement, selectedRowIds, onRowSelection, addColumnMaxSize, ...restProps } = props,
        { columns, isLoading, onRowClick, rowIdentifier, rowClickDisableKey, rowSelectionDisableKey } = useContext(TablePropsContext);

    const handleExpansionIconClick = useCallback(() => setExpansionState(val => !val), []),
        stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        getCells = (rowData: any = {}, configs: TableColumnConfig[] = columns, field = '') =>
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
                        isExpanded={isExpanded}
                        onExpansionIconClick={handleExpansionIconClick}
                        showShadowAtRight={showShadowAfterFrozenElement}
                        isRowSelected={selectedRowIds.includes(rowData[rowIdentifier])}
                        {...{ config, onRowSelection, addColumnMaxSize }}
                    />
                );
            }),
        handleRowClick = (rowData: any) =>
            !isLoading && onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;

    return (
        <>
            <Styled.Row
                {...restProps}
                disabled={data[rowClickDisableKey]}
                onClick={handleRowClick(data)}
                isSelected={!isLoading && selectedRowIds.includes(data[rowIdentifier])}
                gridTemplateColumns={getGridTemplateColumns(columns)}
            >
                {getCells(data)}
                {isExpanded && <ExpandedCell onClick={stopPropagation}>Something</ExpandedCell>}
            </Styled.Row>
        </>
    );
});
Row.displayName = 'Row';
