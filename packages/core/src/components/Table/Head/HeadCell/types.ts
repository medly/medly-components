export type SortOrder = 'asc' | 'desc';

export type HeadCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    align?: 'left' | 'right' | 'center';
    showShadowAtRight?: boolean;
    isRowActionCell?: boolean;
    isRowExpandable?: boolean;
};

export type HeadCellProps = HeadCellStyledProps & {
    field?: string;
    columnMaxSize: number;
    sortable?: boolean;
    fitContent?: boolean;
    sortField?: string;
    isLoading?: boolean;
    defaultSortOrder?: SortOrder;
    onWidthChange?: (width: number, key: string) => void;
    onSortChange?: (field: string, order: SortOrder) => void;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
