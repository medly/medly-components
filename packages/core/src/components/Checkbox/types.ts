import { CheckboxSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

type DivProps = Omit<HTMLProps<HTMLInputElement>, 'size'>;
type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface CheckboxWrapperProps extends DivProps, WithThemeProp {
    size?: CheckboxSizes;
}

export interface Props extends InputProps, LabelProps, WithThemeProp {
    size?: CheckboxSizes;
    label?: string;
}
