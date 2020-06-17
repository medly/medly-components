import { select } from '@storybook/addon-knobs';
import React from 'react';
import { SearchBox } from './SearchBox';
import { Props } from './types';

const optionsArray = [
    { value: 'Dummy1 option', label: 'Dummy1 option' },
    { value: 'Some 1', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' }
];

const boxSize: Props['boxSize'][] = ['S', 'M'];

export const Basic = () => {
    const onGetOptions = () => optionsArray;

    return (
        <SearchBox placeholder="Search" boxSize={select('Size', boxSize, 'S')} getOptions={onGetOptions} />
    )
};