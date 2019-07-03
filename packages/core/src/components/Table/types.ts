export type SortOrder = 'asc' | 'desc';

export interface ColumnTypeToRatioMap {
    numeric: number;
    group: number;
    'text-short': number;
    'text-long': number;
}

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface ColumnConfig {
    frozen?: boolean;
    sort?: boolean;
    hide?: boolean;
    size?: string;
    title: string;
    field: string;
    children?: ColumnConfig[];
    formatter: keyof ColumnTypeToRatioMap;
}
export interface CellStyledProps {
    hide?: boolean;
    frozen?: boolean;
}

export interface HeadCellProps extends CellStyledProps {
    field?: string;
    sort?: boolean;
    sortedColumnField?: string;
    handleWidthChange?: (width: number, key: string) => void;
    handleSortIconClick?: (field: string, order: SortOrder) => void;
}

export interface Props {
    data: Array<{}>;
    columns: ColumnConfig[];
    onSortIconClick?: (field: string, order: SortOrder) => void;
}
