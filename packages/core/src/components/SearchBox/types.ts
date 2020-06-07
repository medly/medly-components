import { SearchBoxSizes } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'boxSize'>, WithThemeProp {
    /** Search box placeholder text */
    placeholder?: string;
    /** Search box sizes */
    boxSize?: SearchBoxSizes;
}
