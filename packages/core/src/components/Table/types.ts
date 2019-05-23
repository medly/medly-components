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
    frozen?: boolean;
    size?: string;
    title: string;
    field: string;
    children?: ColumnConfig[];
    formatter: keyof ColumnTypeToRatioMap;
}
export interface CellStyledProps {
    frozen?: boolean;
    isHeadCell?: boolean;
}

export interface CellProps extends CellStyledProps {
    handleWidthChange?: (width: number, key: string) => void;
    title?: string;
}

export interface Props {
    data: Array<{}>;
    columns: ColumnConfig[];
}
