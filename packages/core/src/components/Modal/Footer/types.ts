import { ScrollState } from '../types';

export type ModalFooterProps = {
    /** Use this to align actions horizontally */
    alignItems?: 'left' | 'center' | 'right';
};

export interface StyledProps extends ModalFooterProps {
    isSmallScreen: boolean;
    scrollState: ScrollState;
}
