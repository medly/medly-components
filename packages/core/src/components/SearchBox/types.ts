import { SearchBoxSizes } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type Option = {
    label: string;
    value: any;
};

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'boxSize'>, WithThemeProp {
    /** Size for search box, can be 'S' | 'M' */
    searchBoxSize?: SearchBoxSizes;
    /** Option for search results, in form of label and value */
    options?: Option[];
    /*** maximum height for search results container */
    maxHeight?: string;
    /*** callback to be trigger on selecting the option */
    onOptionSelected?: (value: any) => void;

    getOptions?: () => void;
}
