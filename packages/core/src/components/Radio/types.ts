import { FontVariants, FontWeights, RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type' | 'sizes'>;

export interface Props extends InputProps, WithThemeProp {
    /** Radio size */
    size?: RadioSizes;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Error state for checkbox */
    hasError?: boolean;
    /** Radio label */
    label?: string;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label weight */
    labelWeight?: FontWeights;
}
