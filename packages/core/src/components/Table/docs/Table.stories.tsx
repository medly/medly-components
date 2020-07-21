import { defaultTheme, TableTheme } from '@medly-components/theme';
import React, { FC } from 'react';
import Text from '../../Text';
import { TableColumnConfig, TableProps } from '../types';

export const ThemeInterface: FC<TableTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.table
};

export const ExpandedRowComponent: TableProps['expandedRowComponent'] = ({ data }) => <Text> Hello {`${data.name}`}</Text>;

export const ColumnConfigInterface: FC<TableColumnConfig> = () => null;
