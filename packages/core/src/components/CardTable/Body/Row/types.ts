import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    onClick?: () => void;
    withWhiteBackground: boolean;
}
