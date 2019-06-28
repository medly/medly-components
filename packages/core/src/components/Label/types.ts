import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type LabelPositions = 'top' | 'right' | 'left' | 'bottom';

export interface Props extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    showPointer?: boolean;
    labelPosition?: LabelPositions;
    required?: boolean;
}
