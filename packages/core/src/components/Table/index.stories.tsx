import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Table from './Table';
import { NestedColumnConfig } from './types';

const data = [
    {
        name: 'Oli Bob',
        age: '12',
        color: 'red',
        rating: 5,
        marks: {
            history: 20,
            maths: 20
        }
    },
    {
        name: 'Mary May',
        age: '1',
        color: 'green',
        rating: 4,
        marks: {
            history: 20,
            maths: 20
        }
    },
    {
        name: 'Christine Lobowski',
        age: '42',
        color: 'green',
        rating: 4,
        marks: {
            history: 20,
            maths: 20
        }
    },
    {
        name: 'Brendon Philips',
        age: '125',
        color: 'red',
        rating: 4.5,
        marks: {
            history: 20,
            maths: 20
        }
    },
    {
        name: 'Margret Marmajuke',
        age: '16',
        color: 'yellow',
        rating: 4,
        marks: {
            history: 20,
            maths: 20
        }
    },
    {
        name: 'Van Ng',
        age: '37',
        color: 'green',
        rating: 4,
        marks: {
            history: 20,
            maths: 20
        }
    },
    {
        name: 'Duc Ng',
        age: '37',
        color: 'yellow',
        rating: 4,
        marks: {
            history: 20,
            maths: 20
        }
    }
];

const columns: NestedColumnConfig[] = [
    { title: 'Name', field: 'name', formatter: 'text-short' },
    {
        title: 'Marks',
        field: 'marks',
        formatter: 'group',
        children: [{ title: 'History', field: 'history', formatter: 'numeric' }, { title: 'Math', field: 'maths', formatter: 'numeric' }]
    },
    { title: 'Age', field: 'age', formatter: 'text-short' },
    { title: 'Favourite Color', field: 'color', formatter: 'text-short' },
    { title: 'Rating', field: 'rating', formatter: 'numeric' }
];

storiesOf('Core', module).add('Table', () => <Table data={data} columns={columns} />);
