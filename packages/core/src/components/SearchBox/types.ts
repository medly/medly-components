import { Size } from '@medly-components/theme/src/core/searchBox/types';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type Option = {
    label: string;
    value: string | number;
    selected?: boolean;
};

export type WrapperProps = {
    size?: Size;
    isActive?: boolean;
    areOptionsVisible?: boolean;
};

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'size'>, WithThemeProp {
    /** Size for search box, can be 'S' | 'M' */
    size?: Size;
    /** Option for search results, in form of label and value */
    options?: Option[];
    /*** callback to be trigger on selecting the option */
    onOptionSelected?: (value: Option) => void;
    /*** callback for providing the input values */
    onInputChange?: (value: string) => void;
}
