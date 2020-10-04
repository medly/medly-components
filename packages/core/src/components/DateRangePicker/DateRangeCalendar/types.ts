import { Omit } from '@medly-components/utils/src';
import { CalendarProps } from '../../Calendar/types';

export type Props = Omit<CalendarProps, 'size' | 'date'> & {
    id?: string;
    startDate: Date;
    endDate: Date;
    onChange: (date: Date) => void;
    month: number;
    year: number;
    minSelectableDate?: Date;
    maxSelectableDate?: Date;
};
