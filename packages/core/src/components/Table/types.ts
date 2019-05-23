export interface ColumnTypeToRatioMap {
    numeric: number;
    group: number;
    'text-short': number;
    'text-long': number;
}

export interface GridTemplateProps {
    gridTemplateColumns?: string;
}

export interface ColumnConfig {
    size?: string;
    title: string;
    field: string;
    children?: ColumnConfig[];
    formatter: keyof ColumnTypeToRatioMap;
}

export interface CellProps {
    isHeadCell?: boolean;
    handleWidthChange?: (width: number, key: string) => void;
    title?: string;
}

export interface Props {
    data: Array<{}>;
    columns: ColumnConfig[];
}
