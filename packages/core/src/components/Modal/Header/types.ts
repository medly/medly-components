import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { ModalProps, ScrollState } from '../types';

export interface Props extends ModalProps {
    setHeaderHeight?: (height: number) => void;
    isSmallScreen?: boolean;
}
export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    id: string;
    scrollState: ScrollState;
}
