import { HTMLProps } from '@medly-components/utils';
import ColumnConfiguration from '../Table/ColumnConfiguration';

export type ItemsPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export type Variants = 'outlined' | 'solid' | 'flat';
export type FlowDirection = 'vertical' | 'horizontal';
export type SortOrder = 'asc' | 'desc';

export interface Data {
    [key: string]: any;
}

export interface ColumnsWidth {
    numeric: string;
    group: string;
    checkbox: string;
    boolean: string;
    'text-short': string;
    'text-long': string;
    'react-component': string;
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
export interface Props extends Omit<HTMLProps<HTMLOListElement>, 'data' | 'type'> {
    /** Table data */
    data: Data[];
    /** Key name in data to be used as unique id */
    uniqueKeyName?: string;
    /** Column configuration */
    columns: ColumnConfig[];
    /** Shows placeholder shimmer */
    isLoading?: boolean;
    /** Function to be called on click of sort icon */
    onSort?: (field: string, order: SortOrder) => void;
    /** Function to be called on row click */
    onRowClick?: (rowData: object) => void;
    /** Key name to disable row click */
    rowClickDisableKey?: string;
    /** Key name to select background color */
    withLightTheme?: boolean;

}
export interface StaticProps {
    ColumnConfiguration?: typeof ColumnConfiguration;
}
