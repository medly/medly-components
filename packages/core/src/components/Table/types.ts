import { string } from 'prop-types';

export interface ColumnTypeToRatioMap {
    numeric: number;
    'text-short': number;
    'text-long': number;
}

export interface TableStyledProps {
    gridTemplateColumns: string;
}

export interface ColumnProps {
    title: string;
    field: string;
    formatter: keyof ColumnTypeToRatioMap;
}

export interface Props {
    data: Array<{}>;
    columns: ColumnProps[];
}
