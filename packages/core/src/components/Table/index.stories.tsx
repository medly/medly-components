import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import Table from './Table';
import { ColumnConfig, SortOrder } from './types';

const data = [
    {
        id: 1,
        name: 'Oli Bob',
        age: '12',
        color: 'red',
        rating: 5,
        marks: {
            history: 2,
            maths: 4
        }
    },
    {
        id: 2,
        name: 'Mary May',
        age: '1',
        color: 'green',
        rating: 4,
        marks: {
            history: 9,
            maths: 7
        }
    },
    {
        id: 3,
        name: 'Christine Lobowski',
        age: '42',
        color: 'green',
        rating: 4,
        marks: {
            history: 12,
            maths: 78
        }
    },
    {
        id: 4,
        name: 'Brendon Philips',
        age: '125',
        color: 'red',
        rating: 4.5,
        marks: {
            history: 87,
            maths: 2
        }
    },
    {
        id: 5,
        name: 'Margret Marmajuke',
        age: '16',
        color: 'yellow',
        rating: 4,
        marks: {
            history: 66,
            maths: 5
        }
    },
    {
        id: 6,
        name: 'Van Ng',
        age: '37',
        color: 'green',
        rating: 4,
        marks: {
            history: 34,
            maths: 22
        }
    },
    {
        id: 7,
        name: 'Duc Ng',
        age: '37',
        color: 'yellow',
        rating: 4,
        marks: {
            history: 98,
            maths: 32
        }
    }
];

const columns: ColumnConfig[] = [
    { title: 'Name', field: 'name', formatter: 'text-short', frozen: true },
    {
        title: 'Marks',
        field: 'marks',
        formatter: 'group',
        children: [
            { title: 'History', field: 'history', formatter: 'numeric', sort: true },
            { title: 'Math', field: 'maths', formatter: 'numeric', sort: true }
        ]
    },
    { title: 'Age', field: 'age', formatter: 'text-short', sort: true },
    { title: 'Favourite Color', field: 'color', formatter: 'text-short', sort: true },
    { title: 'Rating', field: 'rating', formatter: 'numeric', sort: true }
];
// @ts-ignore
const getNestedValue = (obj: {}, dottedKey: string) => dottedKey.split('.').reduce((acc, curr) => acc[curr], obj);

const DemoComponent: React.SFC = () => {
    const [modalState, setModalState] = useState(false);
    const [tableData, setTableData] = useState(data);
    const [columnConfig, setColumnConfig] = useState(columns);
    const [selectedRows, setSelectedRows] = useState([2, 3]);

    const filterData = (dottedField: string, order: SortOrder) => {
        const newArray = [...tableData];
        newArray.sort((first, second) => {
            const firstField = getNestedValue(first, dottedField);
            const secondField = getNestedValue(second, dottedField);
            const comparison = firstField > secondField ? 1 : firstField < secondField ? -1 : 0;
            return order === 'asc' ? comparison : comparison * -1;
        });
        setTableData(newArray);
    };

    const handleModalState = () => {
        setModalState(!modalState);
    };

    return (
        <div>
            <Modal open={modalState} onCloseModal={handleModalState}>
                <Modal.Header>Hide Columns</Modal.Header>
                <Modal.Content>
                    <Table.SelectableColumns columns={columnConfig} fieldToChange="hide" onChange={setColumnConfig} />
                </Modal.Content>
            </Modal>
            <Button onClick={handleModalState}>Hide Columns</Button>
            <Table
                isSelectable
                selectedRows={selectedRows}
                onRowSelection={setSelectedRows}
                onRowClick={action('Row Clicked')}
                data={tableData}
                onSort={filterData}
                columns={columnConfig}
            />
        </div>
    );
};

storiesOf('Core', module).add('Table', () => <DemoComponent />, {
    props: {
        propTablesExclude: [DemoComponent],
        propTables: [Table]
    }
});
