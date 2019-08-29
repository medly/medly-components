import { CheckboxSizes, FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface CheckboxWrapperProps extends DivProps, WithThemeProp {
    size?: CheckboxSizes;
}

export interface Props extends InputProps, WithThemeProp {
    labelPosition?: LabelPositions;
    labelSize?: FontSizes;
    labelColor?: string;
    labelWeight?: FontWeights;
    required?: boolean;
    size?: CheckboxSizes;
    label?: string;
}
