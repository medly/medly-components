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
import { StaticProps, TableProps } from './types';
import useGroupedRowSelector from './useGroupedRowSelector';
import useRowSelector from './useRowSelector';
import { useScrollState } from './useScrollState';

export const Table: FC<TableProps> & WithStyle & StaticProps = React.memo(
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
                selectedRowIds,
                showRowWithCardStyle,
                withActionBar,
                withPagination,
                ...restProps
            } = props,
            isGroupedTable = !!restProps.groupBy,
            size = showRowWithCardStyle ? 'L' : restProps.size;

        const hiddenDivRef = useRef(null),
            tableState = useState({
                sortField: props.defaultSortField,
                sortOrder: props.defaultSortOrder,
                activePage: props.defaultActivePage
            }),
            [scrollState, handleScroll] = useScrollState(),
            [selectedGroupIds, setSelectedGroupIds] = useState([]),
            [isSelectAllDisable, setSelectAllDisableState] = useState(true),
            tableRef = useCombinedRefs<HTMLTableElement>(ref, React.useRef(null)),
            [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
            [columns, setColumns] = useState(getUpdatedColumns(props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable)),
            addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]);

        const isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]),
            rowSelector = useRowSelector({
                data,
                rowSelectionDisableKey,
                setSelectedIds: isGroupedTable ? setSelectedGroupIds : onRowSelection,
                selectedIds: isGroupedTable ? selectedGroupIds : selectedRowIds,
                rowIdentifier: restProps.groupBy || rowIdentifier
            }),
            { isAnyRowSelected, areAllRowsSelected, toggleId, setUniqueIds } = rowSelector,
            groupedRowSelector = useGroupedRowSelector({ setSelectedIds: onRowSelection, selectedIds: selectedRowIds });

        useEffect(() => {
            isGroupedTable && setUniqueIds([]);
        }, [data]);

        useEffect(() => {
            setColumns(getUpdatedColumns(props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable));
        }, [props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable]);

        useEffect(() => {
            setSelectAllDisableState(isGroupedTable ? true : data.every(dt => dt[rowSelectionDisableKey]));
        }, [data, isGroupedTable, rowSelectionDisableKey]);

        useUpdateEffect(() => {
            isGroupedTable && onRowSelection && onRowSelection(groupedRowSelector.selectedIds);
        }, [groupedRowSelector.selectedIds]);

        return (
            <TableStateContext.Provider value={tableState}>
                <TableComponentsCommonPropsContext.Provider
                    value={{
                        ...props,
                        columns,
                        size,
                        data: isLoading ? loadingBodyData : data,
                        isGroupedTable,
                        tableRef,
                        hiddenDivRef,
                        addColumnMaxSize
                    }}
                >
                    <HiddenDiv ref={hiddenDivRef} />
                    {withActionBar && selectedRowIds.length > 0 && <ActionBar />}
                    <TableStyled
                        {...restProps}
                        ref={tableRef}
                        onScroll={handleScroll}
                        isRowClickable={isRowClickable}
                        showRowWithCardStyle={showRowWithCardStyle}
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
                        {withPagination && <Foot />}
                    </TableStyled>
                </TableComponentsCommonPropsContext.Provider>
            </TableStateContext.Provider>
        );
    })
);

Table.defaultProps = {
    size: 'M',
    selectedRowIds: [],
    rowIdentifier: 'id',
    defaultSortOrder: 'desc',
    defaultActivePage: 1,
    rowClickDisableKey: '',
    rowSelectionDisableKey: '',
    withActionBar: false,
    withPagination: false,
    totalItems: 0,
    itemsPerPage: 20
};

Table.displayName = 'Table';
Table.ColumnConfiguration = ColumnConfiguration;
Table.Style = TableStyled;
