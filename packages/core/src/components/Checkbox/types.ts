import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export type CheckboxColors = {
    borderColor: string;
    iconColor: string;
    bgColor: string;
};

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface CheckboxWrapperProps extends DivProps, WithThemeProp {
    isActive?: boolean;
    error?: boolean;
    size?: CheckboxSizes;
}

export interface Props extends InputProps, WithThemeProp {
    /** Checkbox label */
    label?: string;
    /** Checkbox size */
    size?: CheckboxSizes;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label color */
    labelColor?: string;
    /** Label weight */
    labelWeight?: FontWeights;
    /** To be used if required in any form for example user needs to check 'I Agree' */
    required?: boolean;
    /** Error state for checkbox */
    error?: boolean;
}
