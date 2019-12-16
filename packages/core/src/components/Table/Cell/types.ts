import { HTMLProps } from '@medly-components/utils';
import { ColumnConfig } from '../types';

export interface StyledProps {
    hide?: boolean;
    frozen?: boolean;
    align?: 'left' | 'right' | 'center';
}

export interface Props extends StyledProps, HTMLProps<HTMLDivElement> {
    data: any;
    rowId: any;
    config: ColumnConfig;
    dottedFieldName: string;
    isLoading?: boolean;
    selectedRows?: number[];
    onRowSelection?: (id: number) => void;
    addColumnMaxSize: (field: string, value: number) => void;
}
