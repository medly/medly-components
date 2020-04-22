import { SortOrder } from '../../types';
import { WithThemeProp } from '@medly-components/utils/src';

export interface Props extends WithThemeProp{
    sortField?: string;
    field?: string;
    onSortChange?: (field: string, order: SortOrder) => void;
    enableSorting?: boolean;
    title: string;
}    