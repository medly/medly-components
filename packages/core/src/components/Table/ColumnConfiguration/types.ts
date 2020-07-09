import { TableColumnConfig } from '../types';

export interface Props {
    columns: TableColumnConfig[];
    onChange: (columns: TableColumnConfig[]) => void;
}
