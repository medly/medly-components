import { FontSizes, FontWeights, RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'>, WithThemeProp {
    /** Selected radio value */
    value?: string;
    /** Function to be called on selecting any radio */
    onChange?: (value: string) => void;
    /** Options */
    options: Array<{ value: any; label: string; disabled?: boolean }>;
    /** Name to be given to all radio option as html attribute */
    name?: string;
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
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label size */
    labelSize?: FontSizes;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Label color */
    labelColor?: string;
}
