import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { ScrollState } from '../types';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    id: string;
    scrollState: ScrollState;
}
