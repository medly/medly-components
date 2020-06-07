import { select } from '@storybook/addon-knobs';
import React from 'react';
import { SearchBox } from './SearchBox';
import { Props } from './types';

const boxSize: Props['boxSize'][] = ['S', 'M'];

export const Basic = () => <SearchBox placeholder="Search" boxSize={select('Size', boxSize, 'S')} />;
