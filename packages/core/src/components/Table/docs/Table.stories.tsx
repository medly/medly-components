import { defaultTheme, TableTheme } from '@medly-components/theme';
import { FC } from 'react';
import { TableColumnConfig } from '../types';

export const Theme: FC<TableTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.table
};

export const ColumnConfigInterface: FC<TableColumnConfig> = () => null;
