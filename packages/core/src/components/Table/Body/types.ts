import { Data, TableColumnConfig } from '../types';

export interface Props {
    data: Data;
    columns: TableColumnConfig[];
    selectedRowIds?: number[];
    rowIdentifier: string;
    rowSelectionDisableKey?: string;
    rowClickDisableKey?: string;
    isLoading?: boolean;
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
    showShadowAfterFrozenElement?: boolean;
}
