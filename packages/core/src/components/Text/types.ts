import { FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

interface CommonProps extends HTMLProps<HTMLElement>, WithThemeProp {
    /** Text color */
    textColor?: string;
    /** To use uppercase text */
    uppercase?: boolean;
    /** To use line through text */
    lineThrough?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
}

export interface TextProps extends CommonProps {
    /** Text Variant */
    textVariant?: FontVariants;
    /** Text weight */
    textWeight?: FontWeights;
    /** Text alignment */
    textAlign?:
        | 'left'
        | 'right'
        | 'center'
        | 'justify'
        | 'justify-all'
        | 'start'
        | 'end'
        | 'match-parent'
        | 'inherit'
        | 'initial'
        | 'unset';
}
