import { defaultTheme, IconSizesType } from '@medly-components/theme';
import { wInfo } from '@medly-components/utils';
import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import AddIcon from './icons/AddIcon';
import CheckIcon from './icons/CheckIcon';
import ClearIcon from './icons/ClearIcon';
import DeleteIcon from './icons/DeleteIcon';
import DownArrowIcon from './icons/DownArrowIcon';
import EditIcon from './icons/EditIcon';
import ExpandLessIcon from './icons/ExpandLessIcon';
import ExpandMoreIcon from './icons/ExpandMoreIcon';
import SearchIcon from './icons/SearchIcon';

const size: IconSizesType[] = ['XS', 'S', 'M', 'L', 'XL'];
const defaultColor = defaultTheme.icon.defaultColor;

storiesOf('Icons', module)
    .add('Add', () => <AddIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />, wInfo(`Add Icon`))
    .add('Clear', () => <ClearIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />, wInfo(`Clear Icon`))
    .add('Check', () => <CheckIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />, wInfo(`Check Icon`))
    .add('Delete', () => <DeleteIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />, wInfo(`Delete Icon`))
    .add(
        'DownArrow',
        () => <DownArrowIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />,
        wInfo(`DownArrow Icon`)
    )
    .add('Edit', () => <EditIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />, wInfo(`Edit Icon`))
    .add(
        'ExpandLess',
        () => <ExpandLessIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />,
        wInfo(`ExpandLess Icon`)
    )
    .add(
        'ExpandMore',
        () => <ExpandMoreIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />,
        wInfo(`ExpandMore Icon`)
    )
    .add('Search', () => <SearchIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />, wInfo(`Search Icon`));
