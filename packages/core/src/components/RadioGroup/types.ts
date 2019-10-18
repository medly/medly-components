import { FontSizes, FontWeights, RadioSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    /** Function to be called on selecting any radio */
    onChange?: (value: string) => void;
    /** To be used to disable radio selection */
    disabled?: boolean;
    /** Default selected radio option */
    defaultChecked?: string;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label size */
    labelSize?: FontSizes;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Label color */
    labelColor?: string;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Radio group label */
    label?: string;
    /** Name to be given to all radio option as html attribute */
    name?: string;
    /** Radio size */
    size?: RadioSizes;
}
