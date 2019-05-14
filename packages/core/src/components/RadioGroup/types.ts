import { RadioSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

export interface Props extends LabelProps, WithThemeProp {
    label?: string;
    name?: string;
    size?: keyof RadioSizes;
}
