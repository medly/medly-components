import { ColumnConfig, Data } from '../../types';

export interface Props {
    data: any;
    column: ColumnConfig;
    rowId: any;
    isRowClickDisabled?: boolean;
    rowData: Data;
}

export interface StyledProps {
    align: 'left' | 'center' | 'right';
    wrapText: false | true;
}
