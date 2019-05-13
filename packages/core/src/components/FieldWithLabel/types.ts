import { WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

export interface Props extends WithThemeProp, LabelProps {
    fullWidth?: boolean;
}
