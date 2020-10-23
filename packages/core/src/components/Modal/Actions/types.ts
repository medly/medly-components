import { ScrollState } from '../types';

export type ModalActionUserProps = {
    /** Use this to align actions horizontally */
    alignItems?: 'left' | 'center' | 'right';
};

export type Props = ModalActionUserProps & {
    id: string;
    scrollState: ScrollState;
};

export interface StyledProps extends ModalActionUserProps {
    isSmallScreen: boolean;
}
