import type { FC, KeyboardEvent } from 'react';
import { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TableComponentsCommonPropsContext } from '../../context';
import { GroupCell } from '../../GroupCell';
import { getGridTemplateColumns, getNestedValue } from '../../helpers';
import { TableColumnConfig } from '../../types';
import Cell from '../Cell';
import ExtendedRowCell from '../Cell/ExtendedRowCell';
import RowActionsCell from '../Cell/RowActionsCell';
import RowHoverActionsCell from '../Cell/RowHoverActionsCell';
import * as Styled from './Row.styled';
import { RowProps } from './types';

export const Row: FC<RowProps> = memo(props => {
    const [isRowHovered, setIsRowHovered] = useState(false),
        {
            id,
            data,
            isNavigated = false,
            isRowExpandedFromKeyboard,
            isRowCollapsedFromKeyboard,
            showShadowAfterFrozenElement,
            selectedRowIds,
            onRowSelection,
            ...restProps
        } = props,
        {
            keyBindings,
            columns,
            isLoading,
            onRowClick,
            hiddenDivRef,
            addColumnMaxSize,
            rowClickDisableKey,
            rowSelectionDisableKey,
            defaultRowExpandKey,
            isRowSelectable,
            isRowExpandable,
            isGroupedTable,
            showRowWithCardStyle,
            size: tableSize,
            expandedRowComponent,
            withRowSeparators,
            rowHoverActions: RowHoverActions
        } = useContext(TableComponentsCommonPropsContext);

    const [isExpanded, setExpansionState] = useState<boolean>(defaultRowExpandKey && data[defaultRowExpandKey]),
        isRowSelected = useMemo(() => !isLoading && selectedRowIds.includes(id), [id, isLoading, selectedRowIds]),
        isRowClickDisabled = useMemo(() => rowClickDisableKey && data[rowClickDisableKey], [data, rowClickDisableKey]),
        isRowSelectionDisabled = useMemo(() => rowSelectionDisableKey && data[rowSelectionDisableKey], [data, rowSelectionDisableKey]),
        handleRowSelection = useCallback(() => onRowSelection(id), [id, onRowSelection]),
        handleExpansionIconClick = useCallback(() => setExpansionState(val => !val), []),
        handleRowClick = useMemo(
            () => (!isLoading && onRowClick && !isRowClickDisabled ? () => onRowClick(data) : undefined),
            [isLoading, data, onRowClick, isRowClickDisabled, isRowExpandable, handleExpansionIconClick]
        ),
        handleMouseEnter = useCallback(() => setIsRowHovered(true), []),
        handleMouseLeave = useCallback(() => setIsRowHovered(false), []),
        ref = useRef<HTMLTableRowElement>(null);

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
                                  data={getNestedValue(rowData, config.field)}
                                  addColumnMaxSize={addColumnMaxSize}
                                  isRowClickDisabled={isRowClickDisabled}
                                  dottedFieldName={fieldName}
                                  tableSize={tableSize}
                                  hiddenDivRef={hiddenDivRef}
                              />
                          )
                      ];
            }, [] as React.ReactElement[]),
        [id, data, isLoading, columns, addColumnMaxSize, isRowClickDisabled, hiddenDivRef, tableSize]
    );

    useEffect(() => {
        if (isNavigated) {
            if (isRowSelectable && !isRowSelectionDisabled) ref.current?.querySelector('input')?.focus();
            else ref.current?.focus();
        }
    }, [isNavigated]);

    useEffect(() => {
        isRowExpandedFromKeyboard && setExpansionState(true);
    }, [isRowExpandedFromKeyboard]);

    useEffect(() => {
        isRowCollapsedFromKeyboard && setExpansionState(false);
    }, [isRowCollapsedFromKeyboard]);

    // TODO: Check why useKeypress is not working in this case
    const handleRowClickFromKeyboard = useCallback(
        (e: KeyboardEvent<HTMLTableRowElement>) => {
            e.key === keyBindings.rowClick! && isNavigated && handleRowClick && handleRowClick();
        },
        [isNavigated, handleRowClick]
    );

    return (
        <>
            <Styled.Row
                {...restProps}
                ref={ref}
                tabIndex={Number(id)}
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
                isNavigated={isNavigated}
                onKeyDown={handleRowClickFromKeyboard}
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
                        isNavigated={isNavigated}
                    />
                )}
                {getCells(data)}
                {isRowExpandable && expandedRowComponent && (
                    <ExtendedRowCell
                        rowId={id!}
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
