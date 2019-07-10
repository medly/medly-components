import { FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type LabelPositions = 'top' | 'right' | 'left' | 'bottom';

export interface Common extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    showPointer?: boolean;
    labelPosition?: LabelPositions;
    required?: boolean;
    textColor?: string;
}

export interface Props extends Common {
    textSize?: FontSizes;
    textWeight?: FontWeights;
}

export interface StyledProps extends Common {
    textSize?: string;
    textWeight?: string;
}
