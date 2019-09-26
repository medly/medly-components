import { ColumnConfig } from '../types';

export interface StyledProps {
    hide?: boolean;
    frozen?: boolean;
}

export interface Props extends StyledProps {
    data: any;
    rowId: any;
    config: ColumnConfig;
    dottedFieldName: string;
    selectedRows?: number[];
    onRowSelection?: (id: number) => void;
    addColumnMaxSize: (field: string, value: number) => void;
}
