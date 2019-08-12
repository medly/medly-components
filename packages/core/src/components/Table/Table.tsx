import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useState } from 'react';
import Body from './Body';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props } from './types';
import useRowSelector from './useRowSelector';

const Table: React.SFC<Props> & WithStyle = props => {
    const { data, onRowClick, onSort, isSelectable, selectedRows, onRowSelection } = props,
        checkboxColumnConfig: ColumnConfig = { title: 'ch', field: 'medly-table-checkbox', formatter: 'checkbox', hide: !isSelectable };

    const [ids, selectedIds, toggleId] = useRowSelector(data.map(({ id }) => id), selectedRows),
        [columns, setColumns] = useState(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));

    useEffect(() => {
        setColumns(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));
    }, [props.columns]);

    useEffect(() => {
        ids.setValue(data.map(({ id }) => id));
    }, [data]);

    useEffect(() => {
        selectedIds.setValue(selectedRows);
    }, [selectedRows]);

    useEffect(() => {
        onRowSelection(selectedIds.value);
    }, [selectedIds.value]);

    return (
        <TableStyled isRowClickable={onRowClick ? true : false}>
            <Head
                {...{
                    columns,
                    setColumns,
                    onSort,
                    onSelectAllClick: toggleId,
                    isAllRowSelected: ids.isAllSelected
                }}
            />
            <Body {...{ columns, data, onRowClick, selectedRows: selectedIds.value, onRowSelection: toggleId }} />
        </TableStyled>
    );
};

Table.displayName = 'Table';
Table.Style = TableStyled;

export default Table;
