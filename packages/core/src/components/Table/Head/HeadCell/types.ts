export type SortOrder = 'asc' | 'desc';

export interface HeadCellProps {
    hide?: boolean;
    frozen?: boolean;
    field?: string;
    maxColumnSizes: { [k: string]: number };
    enableSorting?: boolean;
    fitContent?: boolean;
    sortField?: string;
    onWidthChange?: (width: number, key: string) => void;
    onSortChange?: (field: string, order: SortOrder) => void;
}
