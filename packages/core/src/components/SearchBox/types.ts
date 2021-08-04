import { Size } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { ReactElement } from 'react';

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

export interface SearchBoxProps extends Omit<HTMLProps<HTMLInputElement>, 'size'>, WithThemeProp {
    /** Size for search box, can be 'S' | 'M' */
    size?: Size;
    /** Option for search results, in form of label and value */
    options?: Option[];
    /** React component for additional filtering */
    customSearchFilter?: ReactElement<any>;
    /** Does the component take up all available width */
    fullWidth?: boolean;
    /** Min width in rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Function to be called on clear icon click */
    onClear?: () => void;
    /** Function to be called on search icon click */
    onSearch?: (value: string) => void;
    /** Function to be called on  selecting the option */
    onOptionSelected?: (value: Option) => void;
    /** Function to be called on input value changes */
    onInputChange?: (value: string) => void;
}
