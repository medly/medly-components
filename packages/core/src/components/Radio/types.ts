import { RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface RadioWrapperProps extends DivProps, WithThemeProp {
    size?: RadioSizes;
}

export interface Props extends InputProps, LabelProps, WithThemeProp {
    label?: string;
    size?: RadioSizes;
}
