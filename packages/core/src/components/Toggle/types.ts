import { FontVariants, FontWeights, ToggleSizes } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface ToggleWrapperProps extends DivProps {
    size?: ToggleSizes;
}

export interface ToggleProps extends InputProps {
    /** Toggle label */
    label?: string;
    /** Toggle size */
    size?: ToggleSizes;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label variant */
    labelVariant?: FontVariants;
    /** Label color */
    labelColor?: string;
    /** Label weight */
    labelWeight?: FontWeights;
    /** To be used if required in any form for example user needs to check 'I Agree' */
    required?: boolean;
}
