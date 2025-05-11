import { FontVariants, FontWeights, RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type' | 'sizes'>;

export interface RadioProps extends Omit<InputProps, 'label'> {
    /** Value of the radio group */
    value: any;
    /** Radio size */
    size?: RadioSizes;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Error state for checkbox */
    hasError?: boolean;
    /** Radio label */
    label?: string | React.ReactNode;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label variant */
    labelVariant?: FontVariants;
    /** Label weight */
    labelWeight?: FontWeights;
}

export type WrapperProps = Omit<HTMLProps<HTMLDivElement>, 'size'> &
    Omit<RadioProps, 'value'> & {
        isActive?: boolean;
    };
