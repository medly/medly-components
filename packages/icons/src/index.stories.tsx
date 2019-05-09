import { defaultTheme, IconSizesType } from '@medly-components/theme';
import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import AddIcon from './icons/AddIcon';
import CheckIcon from './icons/CheckIcon';
import ClearIcon from './icons/ClearIcon';
import DeleteIcon from './icons/DeleteIcon';
import DownArrowIcon from './icons/DownArrowIcon';
import DropDownIcon from './icons/DropDownIcon';
import EditIcon from './icons/EditIcon';
import ExpandLessIcon from './icons/ExpandLessIcon';
import ExpandMoreIcon from './icons/ExpandMoreIcon';
import SearchIcon from './icons/SearchIcon';

const size: IconSizesType[] = ['XS', 'S', 'M', 'L', 'XL'];
const defaultColor = defaultTheme.icon.defaultColor;

storiesOf('Icons', module)
    .add('Add', () => <AddIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Clear', () => <ClearIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Check', () => <CheckIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Delete', () => <DeleteIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('DownArrow', () => <DownArrowIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('DropDown', () => <DropDownIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Edit', () => <EditIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ExpandLess', () => <ExpandLessIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ExpandMore', () => <ExpandMoreIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Search', () => <SearchIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />);
