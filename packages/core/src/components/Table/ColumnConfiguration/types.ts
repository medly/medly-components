import { TableColumnConfig } from '../types';

export interface ColumnConfigurationProps {
    columns: TableColumnConfig[];
    onChange: (columns: TableColumnConfig[]) => void;
}
