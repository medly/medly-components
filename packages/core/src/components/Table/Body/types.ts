import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    columns: ColumnConfig[];
    selectedRows?: number[];
    uniqueKeyName: string;
    rowSelectionDisableKey?: string;
    rowClickDisableKey?: string;
    isLoading?: boolean;
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
}
