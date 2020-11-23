import { ScrollState } from '../types';

export type DialogBoxActionUserProps = {
    /** Use this to align actions horizontally */
    alignItems?: 'left' | 'center' | 'right';
};

export interface StyledProps extends DialogBoxActionUserProps {
    isSmallScreen: boolean;
    scrollState: ScrollState;
}
