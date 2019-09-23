import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    columns: ColumnConfig[];
    selectedRows?: number[];
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
}
