import { RadioSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

type RadioProps = Omit<HTMLProps<HTMLInputElement>, 'type'>;

export interface RadioWrapperProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    radioSize?: keyof RadioSizes;
}

export interface Props extends RadioProps, LabelProps, WithThemeProp {
    label?: string;
    radioSize?: keyof RadioSizes;
}
