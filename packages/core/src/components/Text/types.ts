import { FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

interface Common extends HTMLProps<HTMLElement>, WithThemeProp {
    textColor?: string;
    uppercase?: boolean;
    lineThrough?: boolean;
}

export interface Props extends Common {
    textSize?: FontSizes;
    textWeight?: FontWeights;
}

export interface StyledProps extends Common {
    textSize?: string;
    textWeight?: string;
}
