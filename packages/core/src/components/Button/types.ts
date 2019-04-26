import { HTMLProps, WithThemeProp } from '@core-utils/types';

export interface Props extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    type?: 'button' | 'reset' | 'submit';
    solid?: boolean;
    flat?: boolean;
    outlined?: boolean;
}
