import { HTMLProps } from '@medly-components/utils';

export type SortOrder = 'asc' | 'desc';

export interface Data {
    [key: string]: any;
}

export interface ColumnConfig {
    /** Set it true to show sort icons */
    sort?: boolean;
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Column content alignment */
    align?: 'left' | 'right' | 'center';
    /** Column flex */
    flex?: number;
    /** Custom component */
    component?: React.SFC<{ data: any; rowId?: any; disabled?: boolean }>;
}
export interface Props extends Omit<HTMLProps<HTMLOListElement>, 'data' | 'type'> {
    /** Table data */
    data: Data[];
    /** Key name in data to be used as unique id */
    uniqueKeyName?: string;
    /** Column configuration */
    columns: ColumnConfig[];
    /** Function to be called on click of sort icon */
    onSort?: (field: string, order: SortOrder) => void;
    /** Function to be called on row click */
    onRowClick?: (rowData: object) => void;
    /** Key name to disable row click */
    rowClickDisableKey?: string;
    /** Key name to select background color */
    withLightTheme?: boolean;
}
