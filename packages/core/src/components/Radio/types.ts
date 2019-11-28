import { FontSizes, FontWeights, RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface RadioWrapperProps extends DivProps, WithThemeProp {
    size?: RadioSizes;
}

export interface Props extends InputProps, WithThemeProp {
    /** Value of the radio */
    value: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label size */
    labelSize?: FontSizes;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Label color */
    labelColor?: string;
    /** To be used when it is required in the form */
    required?: boolean;
    /** Radio label */
    label?: string;
    /** Radio size */
    size?: RadioSizes;
}
