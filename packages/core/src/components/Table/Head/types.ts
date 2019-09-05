import { ColumnConfig, SortOrder } from '../types';

export interface Props {
    columns: ColumnConfig[];
    setColumns: React.Dispatch<React.SetStateAction<ColumnConfig[]>>;
    isAllRowSelected?: boolean;
    maxColumnSizes?: {};
    onSelectAllClick?: (id: number) => void;
    onSort?: (field: string, order: SortOrder) => void;
}
