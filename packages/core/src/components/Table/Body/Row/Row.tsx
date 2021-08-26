import React, { useCallback, useContext, useMemo, useState } from 'react';
import { TableComponentsCommonPropsContext } from '../../context';
import { GroupCell } from '../../GroupCell';
import { getGridTemplateColumns } from '../../helpers';
import { TableColumnConfig } from '../../types';
import Cell from '../Cell';
import ExtendedRowCell from '../Cell/ExtendedRowCell';
import RowActionsCell from '../Cell/RowActionsCell';
import RowHoverActionsCell from '../Cell/RowHoverActionsCell';
import * as Styled from './Row.styled';
import { RowProps } from './types';

export const Row: React.FC<RowProps> = React.memo(props => {
    const [isExpanded, setExpansionState] = useState(false),
        [isRowHovered, setIsRowHovered] = useState(false),
        { id, data, showShadowAfterFrozenElement, selectedRowIds, onRowSelection, ...restProps } = props,
        {
            columns,
            isLoading,
            onRowClick,
            hiddenDivRef,
            addColumnMaxSize,
            rowClickDisableKey,
            rowSelectionDisableKey,
            isRowSelectable,
            isRowExpandable,
            isGroupedTable,
            showRowWithCardStyle,
            size: tableSize,
            expandedRowComponent,
            withRowSeparators,
            rowHoverActions: RowHoverActions
        } = useContext(TableComponentsCommonPropsContext);

    const isRowSelected = useMemo(() => !isLoading && selectedRowIds.includes(id), [id, isLoading, selectedRowIds]),
        isRowClickDisabled = useMemo(() => data[rowClickDisableKey], [data, rowClickDisableKey]),
        isRowSelectionDisabled = useMemo(() => data[rowSelectionDisableKey], [data, rowSelectionDisableKey]),
        handleRowSelection = useCallback(() => onRowSelection(id), [id, onRowSelection]),
        handleExpansionIconClick = useCallback(() => setExpansionState(val => !val), []),
        handleRowClick = useMemo(
            () =>
                !isLoading
                    ? onRowClick && !isRowClickDisabled
                        ? () => onRowClick(data)
                        : isRowExpandable
                        ? handleExpansionIconClick
                        : undefined
                    : undefined,
            [isLoading, data, onRowClick, isRowClickDisabled, isRowExpandable, handleExpansionIconClick]
        ),
        handleMouseEnter = useCallback(() => setIsRowHovered(true), []),
        handleMouseLeave = useCallback(() => setIsRowHovered(false), []);

    const getCells = useCallback(
        (rowData: any = {}, configs: TableColumnConfig[] = columns, field = '') =>
            configs.reduce((cells, config) => {
                const fieldName = `${field && `${field}.`}${config.field}`;

                return config.field === 'row-actions'
                    ? cells
                    : [
                          ...cells,
                          config.children ? (
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
                                  rowId={id}
                                  key={fieldName}
                                  config={config}
                                  as={field ? 'div' : 'td'}
                                  isLoading={isLoading}
                                  rowData={rowData}
                                  data={rowData[config.field]}
                                  addColumnMaxSize={addColumnMaxSize}
                                  isRowClickDisabled={isRowClickDisabled}
                                  dottedFieldName={fieldName}
                                  tableSize={tableSize}
                                  hiddenDivRef={hiddenDivRef}
                              />
                          )
                      ];
            }, []),
        [id, data, isLoading, columns, addColumnMaxSize, isRowClickDisabled, hiddenDivRef, tableSize]
    );

    return (
        <>
            <Styled.Row
                {...restProps}
                disabled={isRowClickDisabled}
                onClick={handleRowClick}
                isSelected={isRowSelected}
                isExpanded={isExpanded}
                isExpandable={isRowExpandable}
                showRowWithCardStyle={showRowWithCardStyle}
                gridTemplateColumns={getGridTemplateColumns(columns)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                withRowSeparators={withRowSeparators}
            >
                {(isRowSelectable || isRowExpandable) && (
                    <RowActionsCell
                        tableSize={tableSize}
                        isLoading={isLoading}
                        isRowExpanded={isExpanded}
                        isGroupedTable={isGroupedTable}
                        isRowExpandable={isRowExpandable}
                        isRowSelected={isRowSelected}
                        isRowSelectable={isRowSelectable}
                        isRowSelectionDisabled={isRowSelectionDisabled}
                        onRowSelection={handleRowSelection}
                        onRowExpansionIconClick={handleExpansionIconClick}
                        showShadowAtRight={showShadowAfterFrozenElement}
                    />
                )}
                {getCells(data)}
                {isRowExpandable && expandedRowComponent && (
                    <ExtendedRowCell
                        rowId={id}
                        rowData={data}
                        tableSize={tableSize}
                        isRowExpanded={isExpanded}
                        isRowSelected={isRowSelected}
                        isGroupedTable={isGroupedTable}
                        expandedRowComponent={expandedRowComponent}
                        isRowClickDisabled={isRowClickDisabled}
                        showShadowAtRight={showShadowAfterFrozenElement}
                    />
                )}
                {RowHoverActions !== undefined && !isRowClickDisabled && !isLoading && (
                    <RowHoverActionsCell show={isRowHovered}>
                        <RowHoverActions rowData={data} rowId={id} />
                    </RowHoverActionsCell>
                )}
            </Styled.Row>
        </>
    );
});
Row.displayName = 'Row';
