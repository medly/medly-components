import { string } from 'prop-types';

export interface ColumnTypeToRatioMap {
    numeric: number;
    group: number;
    'text-short': number;
    'text-long': number;
}

export interface GridTemplateProps {
    gridTemplateColumns: string;
}

export interface ColumnProps {
    title: string;
    field: string;
    children?: Array<{ title: string; field: string; formatter: keyof ColumnTypeToRatioMap }>;
    formatter: keyof ColumnTypeToRatioMap;
}

export interface Props {
    data: Array<{}>;
    columns: ColumnProps[];
}
