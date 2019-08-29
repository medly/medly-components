import { FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type LabelPositions = 'top' | 'right' | 'left' | 'bottom';

export interface Common extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    showPointer?: boolean;
    labelPosition?: LabelPositions;
    required?: boolean;
    labelColor?: string;
}

export interface Props extends Common {
    labelSize?: FontSizes;
    labelWeight?: FontWeights;
}

export interface StyledProps extends Common {
    labelSize?: string;
    labelWeight?: string;
}
