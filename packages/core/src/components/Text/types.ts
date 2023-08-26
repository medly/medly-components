import { FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

interface CommonProps extends HTMLProps<HTMLElement> {
    /** Text color */
    textColor?: string;
    /** To use uppercase text */
    uppercase?: boolean;
    /** To use line through text */
    lineThrough?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** You can use it to render Text as any component*/
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Use for rendering like Link */
    to?: string | number;
}

export interface TextProps extends CommonProps {
    /** Text variant */
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
