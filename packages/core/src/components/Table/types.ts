import { HTMLProps, Omit } from '@medly-components/utils';
import { Dispatch, SetStateAction } from 'react';
import ColumnConfiguration from './ColumnConfiguration';

export type SortOrder = 'asc' | 'desc';
export type ObjectType = {
    [key: string]: any;
};
export type Data = ObjectType[];
// TODO: need to remove in next major version
export type RowHoverActionsType = React.FC<{ rowData?: ObjectType; rowId?: any }>;
export type MaxColumnSizes = { [k: string]: number };

export type TableState = { activePage?: number; sortField?: string; sortOrder?: SortOrder };

export type CustomTableCellComponent = React.FC<{ data?: any; rowId?: any; disabled?: boolean; rowData?: ObjectType }>;
export type RowHoverActionsComponent = React.FC<{ rowData?: ObjectType; rowId?: any }>;

export interface TableColumnConfig {
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Provide the fraction of the of the total width of the row */
    fraction?: number;
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
    /** Set it true to wrap column text */
    wrapText?: boolean;
    /** Pass any function to format the column data */
    formatter?: (data: any, rowData?: ObjectType) => any;
    /** Custom component */
    component?: CustomTableCellComponent;
    /** This will be handled internally */
    size?: string;
}

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface TableStyledProps {
    isRowClickable?: boolean;
    showRowWithCardStyle?: boolean;
}

export interface TableProps extends Omit<HTMLProps<HTMLTableElement>, 'data' | 'type' | 'size'> {
    /** Set it true to shows placeholder shimmer */
    isLoading?: boolean;
    /** Size of the table */
    size?: 'XS' | 'S' | 'M' | 'L';
    /** Array of your table data */
    data: {
        [key: string]: any;
    }[];
    /** Column configuration */
    columns: TableColumnConfig[];
    /** Key name in data to be used as unique id for rows */
    rowIdentifier?: string;
    /** Set it true to show row with card style */
    showRowWithCardStyle?: boolean;
    /** Key name to disable row selection */
    rowSelectionDisableKey?: string;
    /** Key name to disable row click */
    rowClickDisableKey?: string;
    /** Set it true to shows checkboxes to select rows */
    isRowSelectable?: boolean;
    /** Set it true to expand rows to show extra info */
    isRowExpandable?: boolean;
    /** Selected Row ids */
    selectedRowIds?: Array<string | number>;
    /** Function to be called on row selection */
    onRowSelection?: Dispatch<SetStateAction<(string | number)[]>>;
    /** Function to be called on row click */
    onRowClick?: (rowData: ObjectType) => void;
    /** Default Sort Field*/
    defaultSortField?: string;
    /** Default Sort Order*/
    defaultSortOrder?: SortOrder;
    /** Function to be called on click of sort icon */
    onSort?: ({ activePage, sortField, sortOrder }: TableState) => void;
    /** Component to show when row is expanded */
    expandedRowComponent?: React.FC<{ rowData?: ObjectType; rowId?: any; disabled?: boolean }>;
    /** Name of the key in data on which grouping is applied */
    groupBy?: string;
    /** Name of the key in data on which grouping is applied */
    getGroupedData?: (title: string) => Promise<object[]>;
    /** Actions bar items */
    actions?: Array<JSX.Element>;
    /** Enable Pagination */
    withPagination?: boolean;
    /** Total items to be paginated */
    totalItems?: number;
    /** Function to be called on page click */
    onPageChange?: ({ activePage, sortField, sortOrder }: TableState) => void;
    /** Items count per page */
    itemsPerPage?: number;
    /** Default active page */
    defaultActivePage?: number;
    /** No Result Row*/
    noResultRow?: React.ReactElement<any>;
    /** Value of the default expanded Row's identifier */
    defaultExpandedRowIdentifier?: unknown;
    /** Row hover actions component */
    rowHoverActions?: RowHoverActionsComponent;
    /** Function to be called when table is scrolled all the way to the bottom */
    onScrolledToBottom?: () => any;
    /** Enables a mini map to scroll horizontally across the table*/
    withMinimap?: boolean;
    /** Enable separators between rows */
    withRowSeparators?: boolean;
}

export interface StaticProps {
    ColumnConfiguration?: typeof ColumnConfiguration;
}
