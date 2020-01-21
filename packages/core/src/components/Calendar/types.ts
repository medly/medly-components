import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    date: Date;
    onChange: (date: Date) => void;
    maxYear?: number;
    minYear?: number;
}

export interface DateProps extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    isSelected: boolean;
    isInActiveMonth: boolean;
}
