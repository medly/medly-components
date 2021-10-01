import { FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

export type LabelPositions = 'top' | 'right' | 'left' | 'bottom';

export interface LabelCommonProps extends HTMLProps<HTMLLabelElement> {
    /** Shows pointer while hovering on it
     * @default false
     */
    showPointer?: boolean;
    /** Label position
     * @default left
     */
    labelPosition?: LabelPositions;
    /** Shows red color asterisk
     * @default false
     */
    required?: boolean;
    /** Label Color */
    labelColor?: string;
}

export interface LabelProps extends LabelCommonProps {
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label Weight */
    labelWeight?: FontWeights;
}

export type StyledLabelProps = LabelProps & {
    labelPosition: LabelPositions;
};
