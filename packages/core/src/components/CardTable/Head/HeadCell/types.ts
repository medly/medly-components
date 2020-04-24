import { WithThemeProp } from '@medly-components/utils/src';
import { ColumnConfig, SortOrder } from '../../types';

export interface Props extends WithThemeProp {
    column: ColumnConfig;
    sortField?: string;
    withWhiteBackground: boolean;
    onSortChange?: (field: string, order: SortOrder) => void;
}

export interface StyledProps {
    isActive: boolean;
    withWhiteBackground: boolean;
    flex: number;
    align: 'left' | 'center' | 'right';
}
