import { ColumnConfig, SortOrder } from '../types';

export interface Props {
    defaultSortField?: string;
    defaultSortOrder?: SortOrder;
    withWhiteBackground?: boolean;
    columns: ColumnConfig[];
    onSort?: (field: string, order: SortOrder) => void;
}
