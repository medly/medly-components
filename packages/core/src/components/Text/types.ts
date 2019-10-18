import { FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

interface Common extends HTMLProps<HTMLElement>, WithThemeProp {
    /** Text color */
    textColor?: string;
    /** To use uppercase text */
    uppercase?: boolean;
    /** To use line through text */
    lineThrough?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
}

export interface Props extends Common {
    /** Text size */
    textSize?: FontSizes;
    /** Text weight */
    textWeight?: FontWeights;
}

export interface StyledProps extends Common {
    textSize?: string;
    textWeight?: string;
}
