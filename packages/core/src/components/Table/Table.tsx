import { useCombinedRefs, useUpdateEffect, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import ColumnConfiguration from './ColumnConfiguration';
import { loadingBodyData } from './constants';
import Head from './Head';
import { getUpdatedColumns } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import { TableStyled } from './Table.styled';
import { TablePropsContext } from './TableProps.context';
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
                showRowWithCardStyle,
                ...restProps
            } = props,
            isGroupedTable = !!restProps.groupBy,
            size = showRowWithCardStyle ? 'L' : restProps.size;

        const [scrollState, handleScroll] = useScrollState(),
            [isSelectAllDisable, setSelectAllDisableState] = useState(true),
            tableRef = useCombinedRefs<HTMLTableElement>(ref, React.useRef(null)),
            [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
            [columns, setColumns] = useState(getUpdatedColumns(props.columns, isRowSelectable, isRowExpandable, size, isGroupedTable)),
            addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]);

        const isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]),
            rowSelector = useRowSelector({
                data,
                rowSelectionDisableKey,
                rowIdentifier: restProps.groupBy || rowIdentifier
            }),
            { isAnyRowSelected, areAllRowsSelected, selectedIds, toggleId, setUniqueIds } = rowSelector,
            groupedRowSelector = useGroupedRowSelector();

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
            !isGroupedTable && onRowSelection(selectedIds);
        }, [selectedIds]);

        useUpdateEffect(() => {
            isGroupedTable && onRowSelection(groupedRowSelector.selectedIds);
        }, [groupedRowSelector.selectedIds]);

        return (
            <TablePropsContext.Provider
                value={{ ...props, columns, size, data: isLoading ? loadingBodyData : data, isGroupedTable, tableRef }}
            >
                <TableStyled
                    ref={tableRef}
                    {...restProps}
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
                            addColumnMaxSize,
                            setUniqueIds,
                            setSelectAllDisableState,
                            selectedRowIds: selectedIds,
                            onRowSelection: toggleId,
                            onGroupedRowSelection: groupedRowSelector.toggleIds,
                            showShadowAfterFrozenElement: !scrollState.isScrolledToLeft
                        }}
                    />
                </TableStyled>
            </TablePropsContext.Provider>
        );
    })
);

Table.defaultProps = {
    size: 'M',
    rowIdentifier: 'id',
    defaultSortOrder: 'asc',
    rowClickDisableKey: '',
    rowSelectionDisableKey: ''
};

Table.displayName = 'Table';
Table.ColumnConfiguration = ColumnConfiguration;
Table.Style = TableStyled;
