import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    columns: ColumnConfig[];
    onRowClick?: (rowData: object) => void;
    rowClickDisableKey?: string;
    uniqueKeyName?: string;
    withWhiteBackground?: boolean;
}
