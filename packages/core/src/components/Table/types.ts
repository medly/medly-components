import ColumnConfiguration from './ColumnConfiguration';

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
    [key: string]: any;
}

export interface ColumnConfig {
    /** To freeze the component on the left */
    frozen?: boolean;
    /** To show sort icons */
    sort?: boolean;
    /** To hide the column */
    hide?: boolean;
    /** This will be handled by the component */
    size?: string;
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Column will take max width to fit content */
    fitContent?: boolean;
    /** Column content alignment */
    align?: 'left' | 'right' | 'center';
    /** Nested Column */
    children?: ColumnConfig[];
    /** Column formatter */
    formatter: keyof ColumnsWidth;
    /** Custom component */
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
    /** Shows placeholder shimmer */
    isLoading?: boolean;
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
    ColumnConfiguration?: typeof ColumnConfiguration;
}
