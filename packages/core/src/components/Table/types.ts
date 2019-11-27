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
    component?: React.SFC<{ data: any; rowId?: any; disabled?: boolean }>;
}

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface TableStyledProps {
    isRowClickable?: boolean;
}

export interface Props {
    /** Tabel data */
    data: Data[];
    /** Key name in data to be used as unique id */
    uniqueKeyName?: string;
    /** Key name to disable row actions */
    rowDisableKey?: string;
    /** Column configuration */
    columns: ColumnConfig[];
    /** Shows checkboxes to select rows */
    isSelectable?: boolean;
    /** Ids of default selected rows */
    selectedRows?: number[];
    /** Function to be called on row selection */
    onRowSelection?: (v: number[]) => void;
    /** Function to be called on row click */
    onRowClick?: (rowData: object) => void;
    /** Function to be called on click of sort icon */
    onSort?: (field: string, order: SortOrder) => void;
}

export interface StaticProps {
    SelectableColumns: typeof SelectableColumns;
}
