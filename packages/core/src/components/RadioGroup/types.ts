import { FontVariants, FontWeights, RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange' | 'type' | 'ref'>, WithThemeProp {
    /** Selected radio value */
    value?: string;
    /** Name to be given to all radio option as html attribute */
    name?: string;
    /** Function to be called on selecting any radio */
    onChange?: (value: any) => void;
    /** Options */
    options: { value: any; label: string; disabled?: boolean }[];
    /** Function will called with the input value on Blur event */
    validator?: (val: any) => string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Radio group label */
    label?: string;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Radio size */
    size?: RadioSizes;
    /** To be used to disable radio selection */
    disabled?: boolean;
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Error text for radioGroup */
    errorText?: string;
    /** Helper text for radioGroup */
    helperText?: string;
    /** Use this prop to render option in multiple columns */
    columns?: number;
}
