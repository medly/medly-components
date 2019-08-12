import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    columns: ColumnConfig[];
    selectedRows?: number[];
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
}
