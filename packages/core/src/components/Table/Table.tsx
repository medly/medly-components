import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import ColumnConfiguration from './ColumnConfiguration';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';

const loadingBodyData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const checkboxColumnConfig: ColumnConfig = {
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
            addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]);

        const isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]),
            isSelectAllDisable = useMemo(() => data.every(dt => dt[rowSelectionDisableKey]), [data, rowSelectionDisableKey]),
            rowSelector = useRowSelector(data, selectedRowIds, rowSelectionDisableKey, rowIdentifier),
            { isAnyRowSelected, isEachRowSelected, selectedIds, toggleId } = rowSelector;

        useEffect(() => {
            setColumns(addSizeToColumnConfig([...(isSelectable ? [checkboxColumnConfig] : []), ...props.columns]));
        }, [props.columns, isSelectable]);

        useEffect(() => {
            onRowSelection && onRowSelection(selectedIds);
        }, [selectedIds]);

        return (
            <TableStyled ref={ref} isRowClickable={isRowClickable} {...restProps}>
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
                        isSelectAllDisable: isLoading || isSelectAllDisable
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
                        onRowClick: !isLoading && onRowClick
                    }}
                />
            </TableStyled>
        );
    })
);

Table.defaultProps = {
    rowIdentifier: 'id',
    rowClickDisableKey: '',
    rowSelectionDisableKey: '',
    data: [],
    selectedRowIds: []
};

Table.displayName = 'Table';
Table.ColumnConfiguration = ColumnConfiguration;
Table.Style = TableStyled;
