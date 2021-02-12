import { Size } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type Option = {
    label: string;
    value: string | number | JSX.Element;
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
    /** Function to be called on clear icon click */
    onClear?: () => void;
    /*** Function to be called on search icon click */
    onSearch?: (value: string) => void;
    /*** Function to be called on  selecting the option */
    onOptionSelected?: (value: Option) => void;
    /*** Function to be called on input value changes */
    onInputChange?: (value: string) => void;
}
