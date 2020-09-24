import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    date: Date;
    onChange: (date: Date) => void;
    minSelectableDate?: Date;
    maxSelectableDate?: Date;
    isErrorPresent?: boolean;
    disableHeader?: boolean;
}

export interface DateProps extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    isSelected: boolean;
    isInActiveMonth: boolean;
    isCurrentDate: boolean;
}
