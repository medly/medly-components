import { WithStyle } from '@medly-components/utils';
import React, { SFC, useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import SelectableColumns from './SelectableColumns';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';

const loadingBodyData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const Table: SFC<Props> & WithStyle & StaticProps = props => {
    const { data, onRowClick, onSort, uniqueKeyName, rowDisableKey, isSelectable, selectedRows, onRowSelection, isLoading } = props,
        checkboxColumnConfig: ColumnConfig = {
            title: 'ch',
            field: 'medly-table-checkbox',
            formatter: 'checkbox',
            hide: !isSelectable,
            frozen: true
        };

    const [ids, selectedIds, toggleId] = useRowSelector(
            data.filter(dt => !dt[rowDisableKey]).map(dt => dt[uniqueKeyName]),
            selectedRows
        ),
        [isSelectAllDisable, setSelectAllDisableState] = useState(data.every(dt => dt[rowDisableKey])),
        [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
        [columns, setColumns] = useState(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));

    const addColumnMaxSize = (field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' });

    useEffect(() => {
        setColumns(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));
    }, [props.columns]);

    useEffect(() => {
        ids.setValue(data.filter(dt => !dt[rowDisableKey]).map(dt => dt[uniqueKeyName]));
        setSelectAllDisableState(data.every(dt => dt[rowDisableKey]));
    }, [data]);

    useEffect(() => {
        selectedIds.setValue(selectedRows);
    }, [selectedRows]);

    useEffect(() => {
        onRowSelection && onRowSelection(selectedIds.value);
    }, [selectedIds.value]);

    const head = useMemo(
            () => (
                <Head
                    {...{
                        onSort,
                        columns,
                        setColumns,
                        maxColumnSizes,
                        isSelectAllDisable,
                        onSelectAllClick: toggleId,
                        isAllRowSelected: ids.isAllSelected
                    }}
                />
            ),
            [columns, ids, isSelectAllDisable]
        ),
        body = useMemo(
            () => (
                <Body
                    {...{
                        isLoading,
                        columns,
                        uniqueKeyName,
                        rowDisableKey,
                        addColumnMaxSize,
                        selectedRows: selectedIds.value,
                        onRowSelection: toggleId,
                        data: isLoading ? loadingBodyData : data,
                        onRowClick: !isLoading && onRowClick
                    }}
                />
            ),
            [columns, data, selectedIds]
        );

    return (
        <TableStyled isRowClickable={onRowClick ? true : false}>
            {head}
            {body}
        </TableStyled>
    );
};

Table.defaultProps = {
    uniqueKeyName: 'id',
    rowDisableKey: '',
    data: [],
    selectedRows: [],
    isSelectable: false
};

Table.displayName = 'Table';
Table.SelectableColumns = SelectableColumns;
Table.Style = TableStyled;
