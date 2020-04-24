import { ColumnConfig, SortOrder } from '../types';

export interface Props {
    withWhiteBackground: boolean;
    columns: ColumnConfig[];
    onSort?: (field: string, order: SortOrder) => void;
}
