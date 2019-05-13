import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    labelPosition?: 'top' | 'start' | 'end' | 'bottom';
    required?: boolean;
}
