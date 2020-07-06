import { SortOrder, TableColumnConfig } from '../types';

export interface Props {
    isLoading: boolean;
    columns: TableColumnConfig[];
    setColumns: React.Dispatch<React.SetStateAction<TableColumnConfig[]>>;
    isEachRowSelected?: boolean;
    isAnyRowSelected?: boolean;
    isSelectAllDisable?: boolean;
    onSelectAllClick?: (id: number) => void;
    maxColumnSizes: { [k: string]: number };
    defaultSortField?: string;
    defaultSortOrder?: SortOrder;
    showShadowAtBottom: boolean;
    showShadowAfterFrozenElement?: boolean;
    onSort?: (field: string, order: SortOrder) => void;
}
