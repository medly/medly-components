import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Table from './Table';
import { ColumnProps } from './types';

const data = [
    {
        name: 'Oli Bob',
        age: '12',
        color: 'red',
        rating: 5
    },
    {
        name: 'Mary May',
        age: '1',
        color: 'green',
        rating: 4
    },
    {
        name: 'Christine Lobowski',
        age: '42',
        color: 'green',
        rating: 4
    },
    {
        name: 'Brendon Philips',
        age: '125',
        color: 'red',
        rating: 4.5
    },
    {
        name: 'Margret Marmajuke',
        age: '16',
        color: 'yellow',
        rating: 4
    },
    {
        name: 'Van Ng',
        age: '37',
        color: 'green',
        rating: 4
    },
    {
        name: 'Duc Ng',
        age: '37',
        color: 'yellow',
        rating: 4
    }
];

const columns: ColumnProps[] = [
    { title: 'Name', field: 'name', formatter: 'text-short' },
    { title: 'Age', field: 'age', formatter: 'text-short' },
    { title: 'Favourite Color', field: 'color', formatter: 'text-short' },
    { title: 'Rating', field: 'rating', formatter: 'numeric' }
];

storiesOf('Core', module).add('Table', () => <Table data={data} columns={columns} />);
