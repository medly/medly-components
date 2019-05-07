import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    labelPosition?: 'horizontal' | 'vertical';
    required?: boolean;
}
