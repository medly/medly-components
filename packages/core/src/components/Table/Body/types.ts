import { ColumnConfig } from '../types';

export interface Props {
    columns: ColumnConfig[];
    onRowClick?: (rowData: object) => void;
    data: Array<{}>;
}
