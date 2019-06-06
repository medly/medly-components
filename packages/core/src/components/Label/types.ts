import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type LabelPositions = 'top' | 'start' | 'end' | 'bottom';

export interface Props extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    showPointer?: boolean;
    labelPosition?: LabelPositions;
    required?: boolean;
}
