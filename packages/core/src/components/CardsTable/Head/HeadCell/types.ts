import { WithThemeProp } from '@medly-components/utils/src';
import { ColumnConfig, SortOrder } from '../../types';

export interface Props extends WithThemeProp {
    column: ColumnConfig;
    sortField?: string;
    onSortChange?: (field: string, order: SortOrder) => void;
}

export interface StyledProps {
    flex: number;
    align: 'left' | 'center' | 'right';
}
