import { Omit } from '@medly-components/utils/src';
import { CalendarProps } from '../../../Calendar/types';

export type Props = Omit<CalendarProps, 'size' | 'date'> & {
    id: string;
    startDate: Date;
    endDate: Date;
    month: number;
    year: number;
    minSelectableDate?: Date;
    maxSelectableDate?: Date;
    hoveredDate?: Date;
    onChange: (date: Date) => void;
    setHoveredDate?: (date: Date) => void;
};
