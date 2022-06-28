import { Size } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';
import { ReactElement, ReactNode } from 'react';

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

export interface SearchBoxProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
    /** Size for search box can be 'S' | 'M' */
    size?: Size;
    /** Option for search results in form of label and value */
    options?: Option[];
    /** React component for additional filtering */
    customSearchFilter?: ReactElement<any>;
    /** Show loader while the flag is true */
    isLoading?: boolean;
    /** Pass any React component as a loader */
    loader?: ReactNode;
    /** Does the component take up all available width */
    fullWidth?: boolean;
    /** Min width in rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Max width in px/rem/% (1rem = 10px)*/
    maxWidth?: string;
    /** Function to be called on clear icon click */
    onClear?: () => void;
    /** Function to be called on search icon click */
    onSearch?: (value: string) => void;
    /** Function to be called on  selecting the option */
    onOptionSelected?: (value: Option) => void;
    /** Function to be called on input value changes */
    onInputChange?: (value: string) => void;
}

export type StyledSearchBoxProps = SearchBoxProps & {
    size: Size;
};
