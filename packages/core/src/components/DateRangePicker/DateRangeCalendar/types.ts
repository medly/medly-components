import { Omit } from '@medly-components/utils/src';
import { CalendarProps } from '../../Calendar/types';
import { Placement } from '../../Popover/types';

export type Props = Omit<CalendarProps, 'size' | 'date'> & {
    size?: 'S' | 'M';
    placement: Placement;
    startMonth?: string;
    endMonth?: string;
    id?: any;
    startDate?: Date;
    endDate?: Date;
};
