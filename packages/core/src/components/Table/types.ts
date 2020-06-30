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

export interface Data {
    [key: string]: any;
}

export interface ColumnConfig {
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Column content alignment */
    align?: 'left' | 'right' | 'center';
    /** To freeze the component on the left */
    frozen?: boolean;
    /** To show sort icons */
    sortable?: boolean;
    /** To hide the column */
    hidden?: boolean;
    /** Column will take max width to fit content */
    fitContent?: boolean;
    /** Nested Column */
    children?: ColumnConfig[];
    /** Column formatter */
    formatter: keyof ColumnsWidth;
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

export interface Props extends Omit<HTMLProps<HTMLOListElement>, 'data' | 'type'> {
    /** Table data */
    data: Data[];
    /** Column configuration */
    columns: ColumnConfig[];
    /** Key name in data to be used as unique id */
    rowIdentifier?: string;
    /** Key name to disable row selection */
    rowSelectionDisableKey?: string;
    /** Key name to disable row click */
    rowClickDisableKey?: string;
    /** Shows checkboxes to select rows */
    isSelectable?: boolean;
    /** Shows placeholder shimmer */
    isLoading?: boolean;
    /** Ids of default selected rows */
    selectedRowIds?: number[];
    /** Function to be called on row selection */
    onRowSelection?: (v: number[]) => void;
    /** Function to be called on row click */
    onRowClick?: (rowData: object) => void;
    /** Default Sort Field*/
    defaultSortField?: string;
    /** Default Sort Order*/
    defaultSortOrder?: SortOrder;
    /** Function to be called on click of sort icon */
    onSort?: (field: string, order: SortOrder) => void;
}

export interface StaticProps {
    ColumnConfiguration?: typeof ColumnConfiguration;
}
