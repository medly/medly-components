import { defaultTheme, IconSizes } from '@medly-components/theme';
import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import AddIcon from './icons/AddIcon';
import BugIcon from './icons/BugIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';
import CheckIcon from './icons/CheckIcon';
import ClearIcon from './icons/ClearIcon';
import ClipboardIcon from './icons/ClipboardIcon';
import DeleteIcon from './icons/DeleteIcon';
import DownArrowIcon from './icons/DownArrowIcon';
import DownloadIcon from './icons/DownloadIcon';
import DropDownIcon from './icons/DropDownIcon';
import EditIcon from './icons/EditIcon';
import ExclamationCircleIcon from './icons/ExclamationCircleIcon';
import ExclamationTriangleIcon from './icons/ExclamationTriangleIcon';
import ExpandLessIcon from './icons/ExpandLessIcon';
import ExpandMoreIcon from './icons/ExpandMoreIcon';
import FileIcon from './icons/FileIcon';
import FileUploadIcon from './icons/FileUploadIcon';
import GearIcon from './icons/GearIcon';
import HomeIcon from './icons/HomeIcon';
import InfoCircleIcon from './icons/InfoCircleIcon';
import SearchIcon from './icons/SearchIcon';
import SliderIcon from './icons/SliderIcon';
import SyncIcon from './icons/SyncIcon';
import UpArrowIcon from './icons/UpArrowIcon';

const size: IconSizes[] = ['XS', 'S', 'M', 'L', 'XL'];
const defaultColor = defaultTheme.icon.defaultColor;

storiesOf('Icons', module)
    .add('Add', () => <AddIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Bug', () => <BugIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Clear', () => <ClearIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Clipboard', () => <ClipboardIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Check', () => <CheckIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('CheckCircle', () => <CheckCircleIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Download', () => <DownloadIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Delete', () => <DeleteIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Gear', () => <GearIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('InfoCircle', () => <InfoCircleIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('DownArrow', () => <DownArrowIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('DropDown', () => <DropDownIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Edit', () => <EditIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ExclamationTriangle', () => <ExclamationTriangleIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ExclamationCircle', () => <ExclamationCircleIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Home', () => <HomeIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ExpandLess', () => <ExpandLessIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('ExpandMore', () => <ExpandMoreIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('File', () => <FileIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('UpArrowIcon', () => <UpArrowIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('FileUploadIcon', () => <FileUploadIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Search', () => <SearchIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Slider', () => <SliderIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />)
    .add('Sync', () => <SyncIcon size={select('Size', size, 'S')} color={color('Color', defaultColor)} />);
