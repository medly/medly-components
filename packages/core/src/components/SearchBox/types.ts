import { SearchBoxSizes } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'boxSize'>, WithThemeProp {
    /** Search box placeholder text (optional) */
    placeholder?: string;
    /** Search box sizes (optional) */
    boxSize?: SearchBoxSizes;
    /** Function to be called to populate search option */
    getOptions?: (value: string) => Array<object>;
}
