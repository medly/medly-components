import { defaultTheme, TableTheme } from '@medly-components/theme';
import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import Text from '../../Text';
import { TableColumnConfig, TableProps } from '../types';

export const ThemeInterface: FC<TableTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.table
};

export const ExpandedRowComponent: TableProps['expandedRowComponent'] = ({ rowData }) => <Text> Hello {`${rowData.name}`}</Text>;

export const ColumnConfigInterface: FC<TableColumnConfig> = () => null;

export const DarkBackground = createGlobalStyle<{ showRowWithCardStyle?: boolean }>`
#root, #story--core-tabs--basic, #story--tabs--with-grey-background {
    background: ${({ showRowWithCardStyle }) => showRowWithCardStyle && 'rgba(229, 229, 229, 0.3)'} }
`;
