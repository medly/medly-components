import { HTMLProps } from '@medly-components/utils';

export type SortOrder = 'asc' | 'desc';

export interface Data {
    [key: string]: any;
}

export interface ColumnConfig {
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Set it true to show sort icons */
    sort?: boolean;
    /** Column content alignment */
    align?: 'left' | 'right' | 'center';
    /** Provide the fraction of the of the total width of the row */
    fraction?: number;
    /** Custom component */
    component?: React.SFC<{ data: any; rowId?: any; disabled?: boolean }>;
}
export interface Props extends Omit<HTMLProps<HTMLOListElement>, 'data' | 'type'> {
    /** Table data */
    data: Array<{
        [key: string]: any;
    }>;
    /** Column configuration */
    columns: ColumnConfig[];
    /** Key name in data to be used as unique id */
    uniqueKeyName?: string;
    /** Default Sort Field*/
    defaultSortField?: string;
    /** Default Sort Order*/
    defaultSortOrder?: SortOrder;
    /** Function to be called on click of sort icon */
    onSort?: (field: string, order: SortOrder) => void;
    /** Function to be called on row click */
    onRowClick?: (rowData: object) => void;
    /** Key name to disable row click */
    rowClickDisableKey?: string;
    /** Key name to select background color */
    withWhiteBackground?: boolean;
}
