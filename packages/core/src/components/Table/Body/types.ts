import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    columns: ColumnConfig[];
    selectedRows?: number[];
    uniqueKeyName: string;
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
}
