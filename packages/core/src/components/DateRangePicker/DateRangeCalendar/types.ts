import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height' | 'value' | 'onChange'>, WithThemeProp {
    size?: any;
    startMonth?: any;
    endMonth?: any;
    inputId?: any;
    startDate?: any;
    endDate?: any;
    commonCalendarProps?: any;
}
