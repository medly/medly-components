import { ColumnConfig, SortOrder } from '../../types';

export interface Props {
    defaultSortOrder?: SortOrder | 'none';
    column: ColumnConfig;
    sortField?: string;
    withWhiteBackground?: boolean;
    onSortChange?: (field: string, order: SortOrder) => void;
}

export interface StyledProps {
    isActive?: boolean;
    sortable?: boolean;
    withWhiteBackground?: boolean;
    align?: 'left' | 'center' | 'right';
}
