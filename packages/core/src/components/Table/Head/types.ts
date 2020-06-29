import { ColumnConfig, SortOrder } from '../types';

export interface Props {
    columns: ColumnConfig[];
    setColumns: React.Dispatch<React.SetStateAction<ColumnConfig[]>>;
    isEachRowSelected?: boolean;
    isAnyRowSelected?: boolean;
    isSelectAllDisable?: boolean;
    onSelectAllClick?: (id: number) => void;
    maxColumnSizes: { [k: string]: number };
    defaultSortField?: string;
    defaultSortOrder?: SortOrder;
    onSort?: (field: string, order: SortOrder) => void;
}
