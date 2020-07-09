export type SortOrder = 'asc' | 'desc';

export type HeadCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    align?: 'left' | 'right' | 'center';
    showShadowAtRight?: boolean;
    isRowSelectionCell?: boolean;
};

export type HeadCellProps = {
    hidden?: boolean;
    frozen?: boolean;
    field?: string;
    columnMaxSize: number;
    sortable?: boolean;
    fitContent?: boolean;
    sortField?: string;
    isLoading?: boolean;
    defaultSortOrder?: SortOrder;
    showShadowAtRight?: boolean;
    isRowSelectionCell?: boolean;
    onWidthChange?: (width: number, key: string) => void;
    onSortChange?: (field: string, order: SortOrder) => void;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
