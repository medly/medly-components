import { HTMLProps, Omit } from '@medly-components/utils';
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

export type Data = {
    [key: string]: any;
}[];

export interface TableColumnConfig {
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Column content alignment */
    align?: 'left' | 'right' | 'center';
    /** WIP | Set it true to freeze the component on the left side*/
    frozen?: boolean;
    /** Set it true to show sort icons */
    sortable?: boolean;
    /** Set it true to hide the column */
    hidden?: boolean;
    /** Set it true to set column width according to size of the biggest content */
    fitContent?: boolean;
    /** Use this to include nested column */
    children?: TableColumnConfig[];
    /** Column formatter */
    formatter: keyof ColumnsWidth;
    /** Set it true to wrap column text */
    wrapText?: boolean;
    /** Custom component */
    component?: React.FC<{ data: any; rowId?: any; disabled?: boolean }>;
    /** This will be handled internally */
    size?: string;
}

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface TableStyledProps {
    isRowClickable?: boolean;
}

export interface Props extends Omit<HTMLProps<HTMLTableElement>, 'data' | 'type'> {
    /** Table data */
    data: Data;
    /** Column configuration */
    columns: TableColumnConfig[];
    /** Key name in data to be used as unique id */
    rowIdentifier?: string;
    /** Key name to disable row selection */
    rowSelectionDisableKey?: string;
    /** Key name to disable row click */
    rowClickDisableKey?: string;
    /** Set it true to shows checkboxes to select rows */
    isSelectable?: boolean;
    /** Set it true to shows placeholder shimmer */
    isLoading?: boolean;
    /** Default Sort Field*/
    defaultSortField?: string;
    /** Default Sort Order*/
    defaultSortOrder?: SortOrder;
    /** Ids of default selected rows */
    selectedRowIds?: number[];
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
