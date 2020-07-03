import { SearchBoxSizes } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type Option = {
    label: string;
    value: string | number;
    selected?: boolean;
};

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'boxSize'>, WithThemeProp {
    /** Size for search box, can be 'S' | 'M' */
    searchBoxSize?: SearchBoxSizes;
    /*** maximum height for search results container */
    maxHeight?: string;
    /** Option for search results, in form of label and value */
    options?: Option[];
    /*** callback to be trigger on selecting the option */
    onOptionSelected?: (value: Option) => void;
    /*** callback for providing the input values */
    onSearchInputChange?: (value: string) => void;
}
