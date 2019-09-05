import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef, useState } from 'react';
import Body from './Body';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import SelectableColumns from './SelectableColumns';
import { HiddenDiv, TableStyled } from './Table.styled';
import { ColumnConfig, Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';

const Table: React.SFC<Props> & WithStyle & StaticProps = props => {
    const { data, onRowClick, onSort, isSelectable, selectedRows, onRowSelection } = props,
        [maxColumnSizes, setMaxColumnSizes] = useState({}),
        hiddenDivRef = useRef(null),
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
        onRowSelection && onRowSelection(selectedIds.value);
    }, [selectedIds.value]);

    const changeMaxColumnSizes = (val: object) => {
        Object.keys(maxColumnSizes).length === 0 && setMaxColumnSizes(val);
    };

    return (
        <TableStyled isRowClickable={onRowClick ? true : false}>
            <HiddenDiv ref={hiddenDivRef} />
            <Head
                {...{
                    onSort,
                    columns,
                    setColumns,
                    maxColumnSizes,
                    onSelectAllClick: toggleId,
                    isAllRowSelected: ids.isAllSelected
                }}
            />
            <Body
                {...{
                    columns,
                    data,
                    hiddenDivRef,
                    onRowClick,
                    changeMaxColumnSizes,
                    selectedRows: selectedIds.value,
                    onRowSelection: toggleId
                }}
            />
        </TableStyled>
    );
};

Table.defaultProps = {
    data: [],
    selectedRows: [],
    isSelectable: false
};

Table.displayName = 'Table';
Table.SelectableColumns = SelectableColumns;
Table.Style = TableStyled;

export default Table;
