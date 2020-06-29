export type SortOrder = 'asc' | 'desc';

export interface HeadCellProps {
    hide?: boolean;
    frozen?: boolean;
    field?: string;
    columnMaxSize: number;
    sortable?: boolean;
    fitContent?: boolean;
    sortField?: string;
    defaultSortOrder?: SortOrder;
    onWidthChange?: (width: number, key: string) => void;
    onSortChange?: (field: string, order: SortOrder) => void;
}
