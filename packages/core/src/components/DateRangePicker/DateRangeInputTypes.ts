import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height' | 'value' | 'onChange'>, WithThemeProp {
    inputRef?: any;
    id?: string;
    dateText?: string;
    name?: string;
    isPrefixPresent?: boolean;
    commonTextProps?: any;
    size?: any;
    isLabelPresent?: boolean;
    variant?: 'outlined' | 'filled';
    dateMaskLabel?: string;
    required?: boolean;
    fromLabel?: string;
    aria?: any;
    value?: any;
    label?: string;
}
