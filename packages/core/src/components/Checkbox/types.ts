import { CheckboxSizes, FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface CheckboxWrapperProps extends DivProps, WithThemeProp {
    size?: CheckboxSizes;
}

export interface Props extends InputProps, WithThemeProp {
    /** Checkbox label */
    label?: string;
    /** Checkbox size */
    size?: CheckboxSizes;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label size */
    labelSize?: FontSizes;
    /** Label color */
    labelColor?: string;
    /** Label weight */
    labelWeight?: FontWeights;
    /** To be used if required in any form for example user needs to check 'I Agree' */
    required?: boolean;
}
