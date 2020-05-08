import { WithThemeProp } from '@medly-components/utils';
import { ColumnConfig, SortOrder } from '../../types';

export interface Props extends WithThemeProp {
    defaultSortOrder?: SortOrder | 'none';
    column: ColumnConfig;
    sortField?: string;
    withWhiteBackground: boolean;
    onSortChange?: (field: string, order: SortOrder) => void;
}

export interface StyledProps {
    isActive: boolean;
    isSortEnabled: boolean;
    withWhiteBackground: boolean;
    align: 'left' | 'center' | 'right';
}
