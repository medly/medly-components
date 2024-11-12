import { HTMLProps, Omit } from '@medly-components/utils';
import type { FC } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { FreezePosition } from './Body/Cell/types';
import ColumnConfiguration from './ColumnConfiguration';

export type SortOrder = 'asc' | 'desc';
export type ObjectType = Record<string, any>;
export type Data = ObjectType[];
// TODO: need to remove in next major version
export type RowHoverActionsType = FC<{ rowData?: ObjectType; rowId?: any }>;
export type MaxColumnSizes = { [k: string]: number };

export type TableState = { activePage?: number; sortField?: string; sortOrder?: SortOrder };

export type CustomTableCellComponent = FC<{ data?: any; rowId?: any; disabled?: boolean; rowData?: ObjectType }>;
export type RowHoverActionsComponent = FC<{ rowData?: ObjectType; rowId?: any }>;
export type KeyBindings = {
    up?: string;
    down?: string;
    expandRow?: string;
    collapseRow?: string;
    clickRow?: string;
    selectRow?: string;
};

export interface TableColumnConfig {
    /** Title of the column */
    title: string;
    /** Field name in the data */
    field: string;
    /** Provide the fraction of the of the total width of the row */
    fraction?: number;
    /** Column content alignment */
    align?: 'left' | 'right' | 'center';
    /** Set it true to freeze the column based on freezePosition */
    frozen?: boolean;
    /** Set freeze position. Requires frozen prop to be true. */
    freezePosition?: FreezePosition;
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
    maxHeight?: string;
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
    /** Key name to identify the row expansion */
    defaultRowExpandKey?: string;
    /** Set it true to show checkboxes to select rows */
    isRowSelectable?: boolean;
    /** Set it true to expand rows to show extra info */
    isRowExpandable?: boolean;
    /** Selected Row ids */
    selectedRowIds?: Array<string | number>;
    /** Function to be called on row selection */
    onRowSelection?: Dispatch<SetStateAction<(string | number)[]>>;
    /** Function to be called on row click */
    onRowClick?: (rowData: ObjectType) => void;
    /** Default sort field*/
    defaultSortField?: string;
    /** Default sort order*/
    defaultSortOrder?: SortOrder;
    /** Function to be called on click of sort icon */
    onSort?: ({ activePage, sortField, sortOrder }: TableState) => void;
    /** Component to show when row is expanded */
    expandedRowComponent?: FC<{ rowData?: ObjectType; rowId?: any; disabled?: boolean }>;
    /** Name of the key in data on which grouping is applied */
    groupBy?: string;
    /** Name of the key in data on which grouping is applied */
    getGroupedData?: (title: string) => Promise<Record<string, unknown>[]>;
    /** Actions bar items */
    actions?: Array<JSX.Element>;
    /** Enable pagination */
    withPagination?: boolean;
    /** Total items to be paginated */
    totalItems?: number;
    /** Function to be called on page click */
    onPageChange?: ({ activePage, sortField, sortOrder }: TableState) => void;
    /** Items count per page */
    itemsPerPage?: number;
    /** Default active page */
    defaultActivePage?: number;
    /** Component to be displayed when there is no data */
    noResultRow?: React.ReactElement<any>;
    /** Text to be displayed when there is no data */
    noResultRowText?: string;
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
    /** Enable infinite scroll */
    withInfiniteScroll?: boolean;
    /** CSS max-height property */
    maxHeight?: string;
    /** Set keyBindings for keyboard navigation */
    keyBindings?: KeyBindings;
    /** Keyboard navigated row's cursor location */
    rowCursor?: number | string;
    /** Function to be called when row is navigated using keyboard */
    onRowNavigated?: (rowData: ObjectType) => void;
    /** Set it true to hide the row actions cell */
    hideRowActionsCell?: boolean;
}

export interface StaticProps {
    ColumnConfiguration?: typeof ColumnConfiguration;
}
