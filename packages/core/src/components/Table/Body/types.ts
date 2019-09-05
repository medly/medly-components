import { ColumnConfig, Data } from '../types';

export interface Props {
    data: Data[];
    hiddenDivRef: React.MutableRefObject<any>;
    columns: ColumnConfig[];
    selectedRows?: number[];
    changeMaxColumnSizes?: (val: {}) => void;
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
}
