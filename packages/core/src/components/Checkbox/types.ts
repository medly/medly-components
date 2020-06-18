import { CheckboxSizes } from '@medly-components/theme';
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
    hasError?: boolean;
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
    /** Error state for checkbox */
    hasError?: boolean;
    /** Indeterminate state for checkbox */
    indeterminate?: boolean;
}
