import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import ColumnConfiguration from './ColumnConfiguration';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import { TableStyled } from './Table.styled';
import { Props, StaticProps, TableColumnConfig } from './types';
import useRowSelector from './useRowSelector';
import { useScrollState } from './useScrollState';

const loadingBodyData = [{ id: 'loading1' }, { id: 'loading2' }, { id: 'loading3' }, { id: 'loading4' }, { id: 'loading5' }];
const checkboxColumnConfig: TableColumnConfig = {
    title: 'ch',
    field: 'medly-table-checkbox',
    formatter: 'checkbox',
    hidden: false,
    frozen: true
};

export const Table: FC<Props> & WithStyle & StaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const {
            data,
            onRowClick,
            onSort,
            rowIdentifier,
            rowSelectionDisableKey,
            rowClickDisableKey,
            isSelectable,
            selectedRowIds,
            onRowSelection,
            isLoading,
            defaultSortField,
            defaultSortOrder,
            ...restProps
        } = props;

        const [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
            [columns, setColumns] = useState(addSizeToColumnConfig([...(isSelectable ? [checkboxColumnConfig] : []), ...props.columns])),
            addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]),
            [scrollState, handleScroll] = useScrollState();

        const isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]),
            isSelectAllDisable = useMemo(() => data.every(dt => dt[rowSelectionDisableKey]), [data, rowSelectionDisableKey]),
            rowSelector = useRowSelector(data, selectedRowIds, rowSelectionDisableKey, rowIdentifier, isSelectable),
            { isAnyRowSelected, isEachRowSelected, selectedIds, toggleId } = rowSelector;

        useEffect(() => {
            setColumns(addSizeToColumnConfig([...(isSelectable ? [checkboxColumnConfig] : []), ...props.columns]));
        }, [props.columns, isSelectable]);

        useEffect(() => {
            onRowSelection && onRowSelection(selectedIds);
        }, [selectedIds]);

        return (
            <TableStyled ref={ref} {...restProps} onScroll={handleScroll} isRowClickable={isRowClickable}>
                <Head
                    {...{
                        onSort,
                        columns,
                        setColumns,
                        maxColumnSizes,
                        isEachRowSelected,
                        isAnyRowSelected,
                        isLoading,
                        defaultSortField,
                        defaultSortOrder,
                        onSelectAllClick: toggleId,
                        isSelectAllDisable: isSelectAllDisable,
                        showShadowAtBottom: !scrollState.isScrolledToTop,
                        showShadowAfterFrozenElement: !scrollState.isScrolledToLeft
                    }}
                />
                <Body
                    {...{
                        isLoading,
                        columns,
                        rowIdentifier,
                        rowClickDisableKey,
                        rowSelectionDisableKey,
                        addColumnMaxSize,
                        selectedRowIds: selectedIds,
                        onRowSelection: toggleId,
                        data: isLoading ? loadingBodyData : data,
                        onRowClick: !isLoading && onRowClick,
                        showShadowAfterFrozenElement: !scrollState.isScrolledToLeft
                    }}
                />
            </TableStyled>
        );
    })
);

Table.defaultProps = {
    selectedRowIds: [],
    rowIdentifier: 'id',
    defaultSortOrder: 'asc',
    rowClickDisableKey: '',
    rowSelectionDisableKey: ''
};

Table.displayName = 'Table';
Table.ColumnConfiguration = ColumnConfiguration;
Table.Style = TableStyled;
