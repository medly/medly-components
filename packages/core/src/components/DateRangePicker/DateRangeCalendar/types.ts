import { Omit } from '@medly-components/utils/src';
import { CalendarProps } from '../../Calendar/types';

export type Props = Omit<CalendarProps, 'size' | 'date'> & {
    size?: 'S' | 'M';
    startMonth?: string;
    endMonth?: string;
    id?: any;
    startDate?: Date;
    endDate?: Date;
};
