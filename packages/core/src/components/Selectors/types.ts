import { GetComponentProps, HTMLProps } from '@medly-components/utils/src';
import Text from '../Text';

export type SelectorGroupWrapperProps = HTMLProps<HTMLDivElement> & {
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    hasHelperOrErrorText?: boolean;
    type: 'radio' | 'checkbox';
};

export type SelectorGroupOptionsProps = HTMLProps<HTMLDivElement> & { columns?: number; isIndented?: boolean };

export type SelectorHelperTextProps = GetComponentProps<typeof Text> & {
    hasError?: boolean;
    isIndented?: boolean;
    disabled?: boolean;
    type: 'radio' | 'checkbox';
};

export type SelectorLabelPositions = 'left' | 'right' | 'top' | 'bottom';

export type SelectorLabelProps = GetComponentProps<typeof Text> & {
    type: 'radio' | 'checkbox';
    labelPosition?: SelectorLabelPositions;
};

export type SelectorLabelPositionStyleProps = {
    fullWidth?: boolean;
    labelPosition?: SelectorLabelPositions;
};
