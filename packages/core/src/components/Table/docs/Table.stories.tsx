import { defaultTheme, TableTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import React, { SFC, useState } from 'react';
import Button from '../../Button';
import Modal from '../../Modal';
import { Table } from '../Table';
import { ColumnConfig, Data, SortOrder } from '../types';
import columns from './columns';
import data from './data';
import { filterData } from './filterData';

export const Theme: SFC<TableTheme> = props => null;
Theme.defaultProps = {
    ...defaultTheme.table
};

export const ColumnConfigInterface: SFC<ColumnConfig> = props => null;

export const Basic = () => {
    const [tableData, setTableData] = useState(data);

    const handleFilterData = (dottedField: string, order: SortOrder) => {
        filterData(dottedField, order, tableData, setTableData);
    };

    return <Table onRowClick={action('Row Clicked')} data={tableData} onSort={handleFilterData} columns={columns} />;
};

export const WithColumnHide = () => {
    const [modalState, setModalState] = useState(false);
    const [tableData, setTableData] = useState(data);
    const [columnConfig, setColumnConfig] = useState(columns);
    const [selectedRows, setSelectedRows] = useState([2, 3]);

    const handleFilterData = (dottedField: string, order: SortOrder) => {
        filterData(dottedField, order, tableData, setTableData);
    };

    const handleModalState = () => {
        setModalState(!modalState);
    };

    return (
        <>
            <Modal open={modalState} onCloseModal={handleModalState}>
                <Modal.Header>Hide Columns</Modal.Header>
                <Modal.Content>
                    <Table.SelectableColumns columns={columnConfig} fieldToChange="hide" onChange={setColumnConfig} />
                </Modal.Content>
            </Modal>
            <Button onClick={handleModalState}>Hide Columns</Button>
            <Table
                isSelectable
                rowDisableKey="disabled"
                selectedRows={selectedRows}
                onRowSelection={setSelectedRows}
                onRowClick={action('Row Clicked')}
                data={tableData}
                onSort={handleFilterData}
                columns={columnConfig}
            />
        </>
    );
};
