import { styled } from '@medly-components/utils';
import React from 'react';
import Chip from '../../Chip';
import { ColumnConfig } from '../types';

const FavouriteColor = styled('div')`
    display: flex;
    flex-direction: column;
`;

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
    { title: 'Age', field: 'age', formatter: 'numeric', sort: true },
    { title: 'Passed', field: 'isPassed', formatter: 'boolean', sort: true },
    {
        title: 'Favourite Color',
        field: 'color',
        formatter: 'react-component',
        component: ({ data: colors, disabled }) => {
            const chips = colors.split(',').map((color: string) => <Chip key={color} label={color} disabled={disabled} />);
            return <FavouriteColor>{chips}</FavouriteColor>;
        },
        sort: true
    },
    { title: 'Rating', field: 'rating', formatter: 'numeric', sort: true }
];

export default columns;
