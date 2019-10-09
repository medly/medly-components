import SelectableColumns from './SelectableColumns';

export type SortOrder = 'asc' | 'desc';

export interface ColumnsWidth {
    numeric: string;
    group: string;
    checkbox: string;
    boolean: string;
    'text-short': string;
    'text-long': string;
    'react-component': string;
}

export interface Data {
    id: any;
    [key: string]: any;
}

export interface ColumnConfig {
    frozen?: boolean;
    sort?: boolean;
    hide?: boolean;
    size?: string;
    title: string;
    field: string;
    children?: ColumnConfig[];
    formatter: keyof ColumnsWidth;
    component?: React.SFC<{ data: any; rowId: any }>;
}

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface TableStyledProps {
    isRowClickable?: boolean;
}

export interface Props {
    data: Data[];
    uniqueKeyName?: string;
    columns: ColumnConfig[];
    isSelectable?: boolean;
    selectedRows?: number[];
    onRowSelection?: (v: number[]) => void;
    onRowClick?: (rowData: object) => void;
    onSort?: (field: string, order: SortOrder) => void;
}

export interface StaticProps {
    SelectableColumns: typeof SelectableColumns;
}
