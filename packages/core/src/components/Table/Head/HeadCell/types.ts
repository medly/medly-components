export type SortOrder = 'asc' | 'desc';

export interface HeadCellProps {
    hide?: boolean;
    frozen?: boolean;
    field?: string;
    enableSorting?: boolean;
    sortField?: string;
    onWidthChange?: (width: number, key: string) => void;
    onSortChange?: (field: string, order: SortOrder) => void;
}
