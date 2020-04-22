import { ColumnConfig, SortOrder } from '../types';

export interface Props {
    columns: ColumnConfig[];
    onSort?: (field: string, order: SortOrder) => void;
}
