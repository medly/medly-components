import { RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface RadioWrapperProps extends DivProps, WithThemeProp {
    size?: RadioSizes;
}

export interface Props extends InputProps, WithThemeProp {
    value: string;
    labelPosition?: LabelPositions;
    required?: boolean;
    label?: string;
    size?: RadioSizes;
}
