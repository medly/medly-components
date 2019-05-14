import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    height?: string;
    width?: string;
    center?: boolean;
}
