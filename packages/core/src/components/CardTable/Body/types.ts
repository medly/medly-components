import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    columns: ColumnConfig[];
    onRowClick?: (rowData: Record<string, unknown>) => void;
    rowClickDisableKey?: string;
    uniqueKeyName?: string;
    withWhiteBackground?: boolean;
}
