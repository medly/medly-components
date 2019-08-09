export type SortOrder = 'asc' | 'desc';

export interface ColumnTypeToRatioMap {
    numeric: number;
    group: number;
    'text-short': number;
    'text-long': number;
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

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface TableStyledProps {
    isRowClickable?: boolean;
}

export interface Props {
    onRowClick?: (rowData: object) => void;
    data: Array<{}>;
    columns: ColumnConfig[];
    onSort?: (field: string, order: SortOrder) => void;
}
