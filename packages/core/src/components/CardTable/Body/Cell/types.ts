import { ColumnConfig } from '../../types';

export interface Props {
    data: any;
    column: ColumnConfig;
    rowId: any;
    isRowClickDisabled?: boolean;
}

export interface StyledProps {
    flex: number;
    align: 'left' | 'center' | 'right';
}
