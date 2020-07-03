import { defaultTheme, TableTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { FC, useCallback, useState } from 'react';
import Button from '../../Button';
import Modal from '../../Modal';
import { Table } from '../Table';
import { ColumnConfig, SortOrder } from '../types';
import columns from './columns';
import data from './data';
import { filterData } from './filterData';

export const Theme: FC<TableTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.table
};

export const ColumnConfigInterface: FC<ColumnConfig> = () => null;

export const Basic = () => {
    const [tableData, setTableData] = useState(filterData('name', 'asc', data));

    const handleFilterData = useCallback((dottedField: string, order: SortOrder) => {
        setTableData(filterData(dottedField, order, tableData));
    }, []);

    return (
        <Table
            isLoading={boolean('Loading', false)}
            onRowClick={action('Row Clicked')}
            data={tableData}
            onSort={handleFilterData}
            columns={columns}
            defaultSortField="name"
            defaultSortOrder="asc"
        />
    );
};

export const WithColumnHide = () => {
    const [modalState, setModalState] = useState(false);
    const [tableData, setTableData] = useState(filterData('name', 'asc', data));
    const [columnConfig, setColumnConfig] = useState(columns);
    const [selectedRowIds, setSelectedRowIds] = useState([2, 3]);

    const handleFilterData = useCallback((dottedField: string, order: SortOrder) => {
        setTableData(filterData(dottedField, order, tableData));
    }, []);

    const handleModalState = useCallback(() => {
        setModalState(!modalState);
    }, []);

    return (
        <>
            <Modal open={modalState} onCloseModal={handleModalState}>
                <Modal.Header>Hide Columns</Modal.Header>
                <Modal.Content>
                    <Table.ColumnConfiguration columns={columnConfig} onChange={setColumnConfig} />
                </Modal.Content>
            </Modal>
            <Button onClick={handleModalState}>Hide Columns</Button>
            <Table
                isSelectable
                isLoading={boolean('Loading', false)}
                rowSelectionDisableKey="disabled"
                selectedRowIds={selectedRowIds}
                onRowSelection={setSelectedRowIds}
                onRowClick={action('Row Clicked')}
                defaultSortField="name"
                defaultSortOrder="asc"
                data={tableData}
                onSort={handleFilterData}
                columns={columnConfig}
            />
        </>
    );
};
