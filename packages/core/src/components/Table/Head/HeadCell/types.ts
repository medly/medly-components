import { FontVariants } from '@medly-components/theme';
import { TableProps } from '../../types';

export type SortOrder = 'asc' | 'desc';

export type HeadCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    isGroupedTable: boolean;
    align?: 'left' | 'right' | 'center';
    showShadowAtRight?: boolean;
    isRowActionCell?: boolean;
    isRowExpandable?: boolean;
    tableSize?: TableProps['size'];
};

export type HeadCellProps = HeadCellStyledProps & {
    field?: string;
    columnMaxSize: number;
    sortable?: boolean;
    fitContent?: boolean;
    sortField?: string;
    isLoading?: boolean;
    isGroupedTable: boolean;
    defaultSortOrder?: SortOrder;
    tableSize?: TableProps['size'];
    onWidthChange?: (width: number, key: string) => void;
    onSortChange?: (field: string, order: SortOrder) => void;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    hiddenDivRef?: React.MutableRefObject<any>;
    addColumnMaxSize?: (field: string, value: number) => void;
    fontVariant?: FontVariants;
};
