import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Props as DialogBoxProps, ScrollState } from '../types';

export interface Props extends DialogBoxProps {
    setHeaderHeight?: (height: number) => void;
    isSmallScreen?: boolean;
}
export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    id: string;
    scrollState: ScrollState;
}
