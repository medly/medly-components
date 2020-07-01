import { ColumnConfig } from '../../types';

export interface Props {
    data: any;
    column: ColumnConfig;
    rowId: any;
    isRowClickDisabled?: boolean;
}

export interface StyledProps {
    align: 'left' | 'center' | 'right';
    wrapText: false | true;
}
