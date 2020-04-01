import { styled } from '@medly-components/utils';
import React from 'react';
import Chip from '../../Chip';
import { ColumnConfig } from '../types';

const StyledDiv = styled('div')`
        display: flex;
        flex-direction: column;
    `,
    FavoriteColor: ColumnConfig['component'] = ({ data: colors, disabled }) => {
        const chips = colors.split(',').map((color: string) => <Chip key={color} label={color} disabled={disabled} />);
        return <StyledDiv>{chips}</StyledDiv>;
    };

const columns: ColumnConfig[] = [
    { title: 'Name', field: 'name', formatter: 'text-short', frozen: true, fitContent: true },
    {
        title: 'Marks',
        field: 'marks',
        formatter: 'group',
        children: [
            {
                title: 'Maths',
                field: 'maths',
                formatter: 'numeric',
                sort: true,
                children: [
                    { title: 'Algebra', field: 'algebra', formatter: 'numeric', sort: true },
                    { title: 'Trigonometry', field: 'trigonometry', formatter: 'numeric', sort: true }
                ]
            },
            { title: 'Science', field: 'science', formatter: 'numeric', sort: true }
        ]
    },
    { title: 'Age', field: 'age', formatter: 'numeric', sort: true },
    { title: 'Passed', field: 'isPassed', formatter: 'boolean', sort: true },
    {
        title: 'Favorite Color',
        field: 'color',
        formatter: 'react-component',
        component: FavoriteColor,
        sort: true
    },
    { title: 'Rating', field: 'rating', formatter: 'numeric', sort: true }
];

export default columns;
