import { useCombinedRefs, useUpdateEffect, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import ActionBar from './ActionBar';
import Body from './Body';
import ColumnConfiguration from './ColumnConfiguration';
import { loadingBodyData } from './constants';
import { TableComponentsCommonPropsContext, TableStateContext } from './context';
import Foot from './Foot';
import Head from './Head';
import { getUpdatedColumns } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import { HiddenDiv, TableStyled } from './Table.styled';
import { StaticProps, TableProps, TableState } from './types';
import useGroupedRowSelector from './useGroupedRowSelector';
import useRowSelector from './useRowSelector';
import { useScrollState } from './useScrollState';

export const Component: FC<TableProps> = React.memo(
    React.forwardRef((props, ref) => {
        const {
                data,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onSort,
                onRowClick,
                rowIdentifier,
                rowSelectionDisableKey,
                isRowSelectable,
                isRowExpandable,
                onRowSelection,
                isLoading,
                selectedRowIds = [],
                showRowWithCardStyle,
                withPagination,
                onScrolledToBottom,
                withInfiniteScroll,
                onPageChange,
                maxHeight,
                ...restProps
            } = props,
            isGroupedTable = !!restProps.groupBy,
            size = showRowWithCardStyle ? 'L' : restProps.size;

        const hiddenDivRef = useRef(null),
            [tableState, setTableState] = useState<TableState>({
                sortField: props.defaultSortField,
                sortOrder: props.defaultSortOrder,
                activePage: props.defaultActivePage
            }),
            [scrollState, handleScroll] = useScrollState(),
            [selectedGroupIds, setSelectedGroupIds] = useState<(string | number)[]>([]),
            [isSelectAllDisable, setSelectAllDisableState] = useState(true),
            tableRef = useCombinedRefs<HTMLTableElement>(ref, React.useRef(null)),
            [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
            [columns, setColumns] = useState(
                getUpdatedColumns({ columnConfigs: props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable, maxColumnSizes })
            ),
            addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]);

        const isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]),
            rowSelector = useRowSelector({
                data,
                rowSelectionDisableKey: rowSelectionDisableKey!,
                setSelectedIds: isGroupedTable ? setSelectedGroupIds : onRowSelection,
                selectedIds: isGroupedTable ? selectedGroupIds : selectedRowIds,
                rowIdentifier: restProps.groupBy || rowIdentifier!
            }),
            { isAnyRowSelected, areAllRowsSelected, toggleId, setUniqueIds } = rowSelector,
            groupedRowSelector = useGroupedRowSelector({ setSelectedIds: onRowSelection, selectedIds: selectedRowIds });

        useEffect(() => {
            isGroupedTable && setUniqueIds([]);
        }, [data]);

        useEffect(() => {
            setColumns(
                getUpdatedColumns({ columnConfigs: props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable, maxColumnSizes })
            );
        }, [props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable]);

        useEffect(() => {
            setSelectAllDisableState(isGroupedTable ? true : data.every(dt => dt[rowSelectionDisableKey!]));
        }, [data, isGroupedTable, rowSelectionDisableKey]);

        useUpdateEffect(() => {
            isGroupedTable && onRowSelection && onRowSelection(groupedRowSelector.selectedIds);
        }, [groupedRowSelector.selectedIds]);

        useEffect(() => {
            if (scrollState.isScrolledToBottom) {
                onScrolledToBottom && onScrolledToBottom();
            }
        }, [scrollState.isScrolledToBottom]);

        useEffect(() => {
            if (withInfiniteScroll && scrollState.scrolledPercentage > 70) {
                setTableState(state => {
                    const newState = { ...state, activePage: (state.activePage ?? 0) + 1 };
                    onPageChange && onPageChange(newState);
                    return newState;
                });
            }
        }, [withInfiniteScroll, scrollState.scrolledPercentage]);

        return (
            <TableStateContext.Provider value={[tableState, setTableState]}>
                <TableComponentsCommonPropsContext.Provider
                    value={{
                        ...props,
                        columns,
                        size: size!,
                        rowIdentifier: props.rowIdentifier!,
                        data: isLoading ? loadingBodyData : data,
                        isGroupedTable,
                        tableRef,
                        hiddenDivRef,
                        addColumnMaxSize
                    }}
                >
                    <HiddenDiv ref={hiddenDivRef} />
                    {restProps.actions && restProps.actions.length > 0 && selectedRowIds.length > 0 && <ActionBar />}
                    <TableStyled
                        {...restProps}
                        ref={tableRef}
                        onScroll={handleScroll}
                        isRowClickable={isRowClickable}
                        showRowWithCardStyle={showRowWithCardStyle}
                        maxHeight={maxHeight}
                    >
                        <Head
                            {...{
                                setColumns,
                                maxColumnSizes,
                                areAllRowsSelected,
                                onSelectAllClick: toggleId,
                                isSelectAllDisable: isSelectAllDisable,
                                showShadowAtBottom: !scrollState.isScrolledToTop,
                                showShadowAfterFrozenElement: !scrollState.isScrolledToLeft,
                                isAnyRowSelected:
                                    !areAllRowsSelected && (isGroupedTable ? groupedRowSelector.selectedIds.length > 0 : isAnyRowSelected)
                            }}
                        />
                        <Body
                            {...{
                                setUniqueIds,
                                setSelectAllDisableState,
                                selectedRowIds: isGroupedTable ? selectedGroupIds : selectedRowIds,
                                onRowSelection: toggleId,
                                onGroupedRowSelection: groupedRowSelector.toggleIds,
                                showShadowAfterFrozenElement: !scrollState.isScrolledToLeft
                            }}
                        />
                        {withPagination && !withInfiniteScroll && <Foot tableSize={size!} />}
                    </TableStyled>
                </TableComponentsCommonPropsContext.Provider>
            </TableStateContext.Provider>
        );
    })
);

Component.defaultProps = {
    size: 'M',
    selectedRowIds: [],
    rowIdentifier: 'id',
    defaultSortOrder: 'desc',
    defaultActivePage: 1,
    rowClickDisableKey: '',
    rowSelectionDisableKey: '',
    actions: [],
    withPagination: false,
    totalItems: 0,
    itemsPerPage: 20,
    withMinimap: false,
    isRowSelectable: false,
    isRowExpandable: false,
    withRowSeparators: true
};

Component.displayName = 'Table';
export const Table: FC<TableProps> & WithStyle & StaticProps = Object.assign(Component, {
    Style: TableStyled,
    ColumnConfiguration
});
