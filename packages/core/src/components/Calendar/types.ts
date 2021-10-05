import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface CalendarProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    date: Date | null;
    onChange: (date: Date) => void;
    minSelectableDate: Date;
    maxSelectableDate: Date;
    isErrorPresent?: boolean;
}

export interface DateProps extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    isSelected?: boolean;
    isInActiveMonth?: boolean;
    isCurrentDate?: boolean;
}
